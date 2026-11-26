/* Revisão local. O conteúdo enviado é tratado exclusivamente como texto. */
(() => {
  const limit = 80;
  let parserReady;
  function loadParser() {
    if (globalThis.acorn) return Promise.resolve();
    if (!parserReady) {
      parserReady = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = './vendor/acorn.js';
        script.onload = resolve;
        script.onerror = () => {
          parserReady = null;
          script.remove();
          reject(new Error('Falha ao carregar o analisador JavaScript.'));
        };
        document.head.append(script);
      });
    }
    return parserReady;
  }

  function checkJS(source, report, mode) {
    const options = { ecmaVersion: 'latest', sourceType: mode || 'script' };
    let tree;
    try {
      tree = acorn.parse(source, options);
    } catch (first) {
      try {
        if (mode) throw first;
        tree = acorn.parse(source, { ...options, sourceType: 'module' });
      } catch (second) {
        const error = second.pos > first.pos ? second : first;
        const detail = error.message.replace(/ \(\d+:\d+\)$/, '');
        let hint = 'Confira o símbolo indicado e a instrução anterior. Verifique se faltou fechar parênteses, chaves ou uma expressão.';
        if (/unterminated string/i.test(detail)) hint = 'Feche o texto com a mesma aspa usada na abertura.';
        if (/already been declared/i.test(detail)) hint = 'Procure outra declaração com o mesmo nome neste escopo. Renomeie uma delas ou atualize a variável existente.';
        report(error.pos, 'Erro', 'Sintaxe JavaScript · ' + detail, hint);
        return;
      }
    }
    const pending = [tree];
    while (pending.length) {
      const node = pending.pop();
      if (node.type === 'VariableDeclaration' && node.kind === 'var')
        report(node.start, 'Sugestão', 'Declaração com var', 'Use const se a variável não for reatribuída ou let se ela mudar. Confira o escopo antes de trocar.');
      if (node.type === 'DebuggerStatement')
        report(node.start, 'Sugestão', 'Pausa de depuração', 'Remova debugger após o teste para evitar uma pausa quando as ferramentas de desenvolvimento estiverem abertas.');
      for (const child of Object.values(node)) {
        if (Array.isArray(child)) {
          for (const item of child) if (item?.type) pending.push(item);
        } else if (child?.type) pending.push(child);
      }
    }
  }

  function checkCSS(source, report) {
    const stack = [];
    const tokens = /\/\*[\s\S]*?(?:\*\/|$)|"(?:\\[\s\S]|[^"\\])*("|$)|'(?:\\[\s\S]|[^'\\])*('|$)|\\[\s\S]|[{}()[\];]/g;
    const pairs = { '}': '{', ')': '(', ']': '[' };
    let start = 0;
    function declaration(end) {
      if (stack.at(-1)?.char !== '{') return;
      const raw = source.slice(start, end);
      const clean = raw.replace(/\/\*[\s\S]*?\*\//g, m => ' '.repeat(m.length)).trim();
      if (!clean || clean.startsWith('@')) return;
      const pos = start + Math.max(0, raw.indexOf(clean.split(/\s/)[0]));
      const missing = /^([a-z-]+)\s+[^:]+$/i.exec(clean);
      if (missing && CSS.supports(missing[1], 'initial')) {
        report(pos, 'Erro', 'Faltou separar a propriedade do valor', 'Coloque dois-pontos depois de ' + missing[1] + '.');
        return;
      }
      const prop = /^([\w-]+)\s*:\s*([\s\S]*)$/.exec(clean);
      if (!prop || prop[1].startsWith('--')) return;
      const [, key, value] = prop;
      const spellings = { colro: 'color', backgroud: 'background', widht: 'width', heigth: 'height', disply: 'display', paddding: 'padding', 'font-szie': 'font-size' };
      if (Object.hasOwn(spellings, key.toLowerCase())) {
        report(pos, 'Revisar', 'Possível erro de escrita em ' + key, 'Confira se a propriedade desejada é ' + spellings[key.toLowerCase()] + '.');
        return;
      }
      if (CSS.supports(key, 'initial') && !CSS.supports(key, value.replace(/\s*!important\s*$/i, ''))) {
        report(pos, 'Revisar', 'Valor não reconhecido para ' + key, 'Confira o valor, a unidade e se faltou ponto e vírgula antes da próxima declaração. O suporte pode variar entre navegadores.');
      }
    }
    for (const token of source.matchAll(tokens)) {
      const ch = token[0], pos = token.index;
      if (ch.startsWith('/*')) {
        if (!ch.endsWith('*/')) report(pos, 'Erro', 'Comentário aberto', 'Feche o comentário CSS com */.');
      } else if (ch.startsWith('"') || ch.startsWith("'")) {
        if (!(token[1] || token[2])) report(pos, 'Erro', 'Texto sem aspa final', 'Feche o texto com a mesma aspa usada na abertura.');
      } else if (['{','(','['].includes(ch)) {
        stack.push({ char: ch, pos });
        if (ch === '{') start = pos + 1;
      } else if (ch === ';' && stack.at(-1)?.char === '{') {
        declaration(pos); start = pos + 1;
      } else if (pairs[ch]) {
        if (stack.at(-1)?.char !== pairs[ch]) {
          report(pos, 'Erro', 'Fechamento inesperado ' + ch, 'Confira se existe uma abertura correspondente antes deste símbolo.');
          return;
        }
        if (ch === '}') { declaration(pos); start = pos + 1; }
        stack.pop();
      }
    }
    for (const item of stack) report(item.pos, 'Erro', 'Abertura sem fechamento ' + item.char, 'Adicione o fechamento correspondente ao final deste bloco ou expressão.');
  }

  function checkHTML(source, report) {
    const ids = new Set();
    const tags = /<!--[\s\S]*?(?:-->|$)|<(\/?)([a-z][\w:-]*)(?=[\s/>]|$)/gi;
    const required = new Set(['div','section','article','main','nav','header','footer','button','a','strong','span','form','label']);
    const stack = [];
    let tag;
    while ((tag = tags.exec(source))) {
      if (tag[0].startsWith('<!--')) {
        if (!tag[0].endsWith('-->')) report(tag.index, 'Erro', 'Comentário HTML aberto', 'Feche este comentário com -->.');
        continue;
      }
      const attrsStart = tags.lastIndex;
      let cursor = attrsStart;
      let quote = '';
      for (; cursor < source.length; cursor++) {
        const ch = source[cursor];
        if (quote) {
          if (ch === quote) quote = '';
        } else if (ch === '"' || ch === "'") {
          quote = ch;
        } else if (ch === '>' || ch === '<') {
          break;
        }
      }
      if (source[cursor] !== '>') {
        const hint = quote ? 'Feche as aspas do atributo e termine a tag com >.' : 'Adicione > ao final da tag.';
        report(tag.index, 'Erro', 'Tag incompleta <' + tag[1] + tag[2], hint);
        tags.lastIndex = cursor;
        continue;
      }
      const attributes = source.slice(attrsStart, cursor);
      tags.lastIndex = cursor + 1;
      const name = tag[2].toLowerCase();
      if (tag[1]) {
        if (required.has(name)) {
          if (stack.at(-1)?.name === name) stack.pop();
          else {
            report(tag.index, 'Revisar', 'Fechamento fora de ordem </' + name + '>', 'Confira o aninhamento e feche primeiro o elemento aberto mais recentemente.');
            const idx = stack.findLastIndex(item => item.name === name);
            if (idx >= 0) stack.length = idx;
          }
        }
        continue;
      }
      const attrs = new Map();
      for (const a of attributes.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
        const key = a[1].toLowerCase();
        if (attrs.has(key)) report(tag.index, 'Erro', 'Atributo repetido ' + key, 'Mantenha uma única ocorrência do atributo nesta tag.');
        attrs.set(key, a[2] ?? a[3] ?? a[4] ?? '');
      }
      if (attrs.get('id')) {
        if (ids.has(attrs.get('id'))) report(tag.index, 'Erro', 'ID repetido', 'Escolha um id único e atualize os links ou labels que apontam para este elemento.');
        ids.add(attrs.get('id'));
      }
      if (name === 'img' && !attrs.has('alt')) report(tag.index, 'Sugestão', 'Imagem sem texto alternativo', 'Descreva a informação visual em alt. Para uma imagem decorativa, use alt="".');
      if (name === 'html' && !attrs.get('lang')) report(tag.index, 'Sugestão', 'Idioma do documento ausente', 'Informe o idioma na abertura, por exemplo <html lang="pt-BR">.');
      if (required.has(name)) stack.push({ name, pos: tag.index });
      if (['script','style','textarea','title'].includes(name)) {
        const end = new RegExp('</' + name + '\\s*>', 'ig');
        end.lastIndex = tags.lastIndex;
        const closing = end.exec(source);
        if (!closing) { report(tag.index, 'Erro', 'Elemento aberto <' + name + '>', 'Inclua a tag de fechamento </' + name + '>.'); break; }
        const offset = tags.lastIndex;
        const inner = source.slice(offset, closing.index);
        const nested = (pos, ...args) => report(offset + pos, ...args);
        const type = (attrs.get('type') || '').trim().toLowerCase();
        if (name === 'style' && (!type || type === 'text/css')) checkCSS(inner, nested);
        if (name === 'script' && !attrs.has('src') && ['', 'module','text/javascript','application/javascript'].includes(type)) checkJS(inner, nested, type === 'module' ? 'module' : 'script');
        tags.lastIndex = end.lastIndex;
      }
    }
    for (const item of stack) report(item.pos, 'Revisar', 'Possível falta de </' + item.name + '>', 'Confira onde este elemento termina e acrescente a tag de fechamento.');
  }

  function inspect(source, ext) {
    const findings = [];
    let total = 0;
    function report(pos, level, title, hint) {
      total++;
      if (findings.length < limit) findings.push({ pos, level, title, hint });
    }
    if (/^html?$/.test(ext)) checkHTML(source, report);
    else if (ext === 'css') checkCSS(source, report);
    else checkJS(source, report, ext === 'mjs' ? 'module' : undefined);
    return { findings: findings.sort((a,b) => a.pos - b.pos), total };
  }

  const form = document.getElementById('review-form');
  const picker = document.getElementById('review-files');
  const results = document.getElementById('review-results');
  const status = document.getElementById('review-status');
  let revision = 0;
  function append(parent, tag, value, className) {
    const node = document.createElement(tag);
    node.textContent = value;
    if (className) node.className = className;
    parent.append(node);
    return node;
  }
  picker.addEventListener('change', () => {
    revision++;
    results.replaceChildren(); status.textContent = '';
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const run = ++revision;
    const files = Array.from(picker.files);
    results.replaceChildren();
    status.textContent = 'Analisando…';
    let count = 0, analyzed = 0;
    for (const file of files) {
      const ext = file.name.split('.').pop().toLowerCase();
      const box = append(results, 'section', '', 'review-report');
      append(box, 'h3', file.name);
      if (!['htm','html','css','js','mjs'].includes(ext) || file.size > 2000000) {
        append(box, 'p', 'Arquivo ignorado. Use HTML, CSS ou JavaScript de até 2 MB.');
        continue;
      }
      try {
        const source = (await file.text()).replace(/\r\n?/g, '\n');
        if (run !== revision) return;
        if (ext !== 'css') await loadParser();
        if (run !== revision) return;
        const { findings, total } = inspect(source, ext);
        analyzed++; count += total;
        if (!source.trim()) { append(box, 'p', 'Arquivo vazio.'); continue; }
        if (!total) append(box, 'p', 'Nenhum problema encontrado pelas verificações disponíveis.');
        const lines = source.split('\n');
        let line = 0, lineStart = 0;
        for (const issue of findings) {
          while (line < lines.length - 1 && lineStart + lines[line].length < issue.pos) lineStart += lines[line++].length + 1;
          const column = issue.pos - lineStart;
          const item = append(box, 'article', '');
          append(item, 'p', issue.level + ' · Linha ' + (line+1) + ', coluna ' + (column+1), 'review-location');
          append(item, 'strong', issue.title);
          const from = Math.max(0, column - 80);
          append(item, 'pre', (from ? '…' : '') + (lines[line].slice(from, from + 260) || '(fim do arquivo)') + (lines[line].length > from + 260 ? '…' : ''));
          append(item, 'p', issue.hint);
        }
        if (total > limit) append(box, 'p', 'Exibindo os primeiros ' + limit + ' apontamentos.');
      } catch {
        if (run !== revision) return;
        append(box, 'p', 'Não foi possível concluir a leitura e a análise deste arquivo.');
      }
    }
    status.textContent = 'Arquivos analisados: ' + analyzed + ' de ' + files.length + ' · Apontamentos: ' + count + '.';
  });
})();
