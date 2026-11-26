const lessons = [
  {
    id: 'heading', type: 'html', label: '&lt;h1&gt;', title: 'Título principal', difficulty: 'essencial',
    description: 'Define o assunto mais importante da página. Use apenas um <code>&lt;h1&gt;</code> por contexto principal.',
    demo: '<p class="demo-heading">Uma ideia forte.</p>',
    html: '<section class="tazz-hero">\n  <p class="kicker">TAZZ LAB</p>\n  <h1>Ideias viram interfaces.</h1>\n  <p>Aprenda criando algo que você consegue ver.</p>\n</section>',
    css: '.tazz-hero { padding: 5rem 1.5rem; text-align: center; }\n.tazz-hero h1 { margin: .5rem auto 1rem; max-width: 12ch; font-size: clamp(2.6rem, 8vw, 6rem); line-height: .95; }\n.kicker { color: #5f9f00; font: 700 .75rem monospace; letter-spacing: .18em; }', js: ''
  },
  {
    id: 'paragraph', type: 'html', label: '&lt;p&gt;', title: 'Parágrafo', difficulty: 'essencial',
    description: 'Organiza textos corridos em blocos legíveis. É a base para descrições, explicações e histórias.',
    demo: '<p class="demo-paragraph">Código é linguagem — e toda linguagem fica simples quando praticada.</p>',
    html: '<section class="text-block">\n  <h2>Comece pelo porquê</h2>\n  <p>Cada linha tem uma intenção. Leia, altere e observe o que muda.</p>\n</section>',
    css: '.text-block { max-width: 680px; margin: 0 auto; padding: 4rem 1.5rem; }\n.text-block p { color: #596159; line-height: 1.8; }', js: ''
  },
  {
    id: 'button', type: 'html', label: '&lt;button&gt;', title: 'Botão de ação', difficulty: 'essencial',
    description: 'Cria uma ação clicável e acessível pelo teclado. O texto deve dizer claramente o que acontecerá.',
    demo: '<button class="demo-button" type="button">Explorar agora →</button>',
    html: '<div class="action-block">\n  <button class="primary-action" id="primary-action" type="button">Começar agora →</button>\n  <p id="action-feedback" aria-live="polite"></p>\n</div>',
    css: '.action-block { padding: 2rem 1.5rem; text-align: center; }\n.primary-action { padding: .9rem 1.2rem; color: #111; border: 0; border-radius: 4px; background: #b9ff46; font-weight: 800; cursor: pointer; }\n#action-feedback { min-height: 1.5em; color: #4d6e24; }',
    js: "document.querySelector('#primary-action')?.addEventListener('click', () => {\n  document.querySelector('#action-feedback').textContent = 'Ação recebida ✓';\n});"
  },
  {
    id: 'input', type: 'html', label: '&lt;input&gt;', title: 'Campo de entrada', difficulty: 'essencial',
    description: 'Recebe dados do visitante. Um <code>&lt;label&gt;</code> conectado explica o que deve ser digitado.',
    demo: '<input class="demo-input" aria-label="Seu nome" placeholder="Digite seu nome…" />',
    html: '<form class="name-form" id="name-form">\n  <label for="student-name">Como podemos chamar você?</label>\n  <div><input id="student-name" required placeholder="Seu nome" /><button>Confirmar</button></div>\n  <p id="hello-message" aria-live="polite"></p>\n</form>',
    css: '.name-form { max-width: 520px; margin: 2rem auto; padding: 2rem; background: #eef2ea; }\n.name-form label { display: block; margin-bottom: .6rem; font-weight: 700; }\n.name-form div { display: flex; gap: .5rem; }\n.name-form input { flex: 1; min-width: 0; padding: .8rem; border: 1px solid #aab3aa; }\n.name-form button { padding: .8rem 1rem; border: 0; background: #151a16; color: white; }',
    js: "document.querySelector('#name-form')?.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const name = document.querySelector('#student-name').value;\n  document.querySelector('#hello-message').textContent = `Olá, ${name}!`;\n});"
  },
  {
    id: 'link', type: 'html', label: '&lt;a&gt;', title: 'Link', difficulty: 'essencial',
    description: 'Leva a outra página ou a um ponto do mesmo site. O destino vive no atributo <code>href</code>.',
    demo: '<a class="demo-link" href="#construtor">Conheça o laboratório ↗</a>',
    html: '<nav class="mini-nav" aria-label="Atalhos da página">\n  <a href="#sobre">Sobre</a>\n  <a href="#projetos">Projetos</a>\n  <a href="#contato">Contato</a>\n</nav>',
    css: '.mini-nav { display: flex; justify-content: center; gap: 1.5rem; padding: 1.2rem; border-block: 1px solid #d8ddd5; }\n.mini-nav a { color: #273022; text-underline-offset: 4px; }', js: ''
  },
  {
    id: 'form', type: 'html', label: '&lt;form&gt;', title: 'Formulário', difficulty: 'intermediário',
    description: 'Agrupa campos relacionados e envia dados. Aqui ele demonstra validação nativa sem enviar nada.',
    demo: '<form class="demo-form js-demo-form"><label class="sr-only" for="demo-email">E-mail de exemplo</label><input class="demo-input" id="demo-email" type="email" required autocomplete="email" placeholder="email@exemplo.com" /><button class="demo-button" type="submit">Validar</button><p class="demo-form-status" aria-live="polite"></p></form>',
    html: '<form class="contact-form" id="contact-form">\n  <h2>Vamos conversar?</h2>\n  <label>E-mail <input type="email" required placeholder="voce@email.com" /></label>\n  <label>Mensagem <textarea required rows="4" placeholder="Conte sua ideia"></textarea></label>\n  <button>Enviar mensagem</button>\n  <p id="form-status" aria-live="polite"></p>\n</form>',
    css: '.contact-form { max-width: 560px; display: grid; gap: 1rem; margin: 3rem auto; padding: 2rem; border: 1px solid #d3d9d0; }\n.contact-form label { display: grid; gap: .4rem; font-weight: 700; }\n.contact-form input, .contact-form textarea { padding: .8rem; border: 1px solid #aeb7ad; font: inherit; }\n.contact-form button { padding: .9rem; border: 0; background: #b9ff46; font-weight: 800; }',
    js: "document.querySelector('#contact-form')?.addEventListener('submit', (event) => {\n  event.preventDefault();\n  document.querySelector('#form-status').textContent = 'Exemplo enviado com sucesso!';\n});"
  },
  {
    id: 'flex', type: 'css', label: 'display: flex', title: 'Flexbox', difficulty: 'essencial',
    description: 'Alinha itens em uma dimensão: linha ou coluna. Excelente para menus, grupos e centralização.',
    demo: '<div class="demo-flex"><i>01</i><i>02</i><i>03</i></div>',
    html: '<section class="feature-row">\n  <article><b>01</b><h3>Clareza</h3><p>Veja o papel de cada peça.</p></article>\n  <article><b>02</b><h3>Prática</h3><p>Aprenda mudando valores.</p></article>\n  <article><b>03</b><h3>Autonomia</h3><p>Construa sua própria versão.</p></article>\n</section>',
    css: '.feature-row { display: flex; gap: 1rem; max-width: 980px; margin: 3rem auto; padding: 1rem; }\n.feature-row article { flex: 1; padding: 1.5rem; background: #151b16; color: white; }\n.feature-row b { color: #b9ff46; }\n@media (max-width: 640px) { .feature-row { flex-direction: column; } }', js: ''
  },
  {
    id: 'grid', type: 'css', label: 'display: grid', title: 'CSS Grid', difficulty: 'intermediário',
    description: 'Cria linhas e colunas ao mesmo tempo. Ideal para galerias e composições mais estruturadas.',
    demo: '<div class="demo-grid"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i></div>',
    html: '<section class="project-grid">\n  <article><span>HTML</span><h3>Estrutura sem mistério</h3></article>\n  <article><span>CSS</span><h3>Layout com intenção</h3></article>\n  <article><span>JS</span><h3>Interação que responde</h3></article>\n  <article><span>LAB</span><h3>Um projeto por vez</h3></article>\n</section>',
    css: '.project-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; max-width: 900px; margin: 3rem auto; padding: 1rem; }\n.project-grid article { min-height: 180px; padding: 1.5rem; border: 1px solid #cdd4cb; }\n.project-grid span { color: #5f9f00; font: 700 .7rem monospace; }\n@media (max-width: 620px) { .project-grid { grid-template-columns: 1fr; } }', js: ''
  },
  {
    id: 'radius', type: 'css', label: 'border-radius', title: 'Bordas arredondadas', difficulty: 'essencial',
    description: 'Arredonda os cantos de caixas, imagens e botões. Valores maiores deixam a forma mais orgânica.',
    demo: '<div class="demo-radius" aria-label="Quadrado com bordas arredondadas"></div>',
    html: '<section class="soft-card">\n  <span>CSS</span>\n  <h2>Uma caixa mais gentil.</h2>\n  <p>O raio muda a personalidade da forma.</p>\n</section>',
    css: '.soft-card { max-width: 520px; margin: 3rem auto; padding: 2.5rem; border-radius: 28px; background: #dfffb2; }\n.soft-card span { font: 700 .7rem monospace; }\n.soft-card h2 { font-size: 2.2rem; line-height: 1; }', js: ''
  },
  {
    id: 'shadow', type: 'css', label: 'box-shadow', title: 'Sombra e profundidade', difficulty: 'intermediário',
    description: 'Projeta uma sombra ao redor do elemento. Use com moderação para separar camadas e indicar elevação.',
    demo: '<div class="demo-shadow">camada 02</div>',
    html: '<article class="floating-card">\n  <small>DESTAQUE</small>\n  <h2>Profundidade com propósito.</h2>\n  <p>A sombra separa este cartão do fundo.</p>\n</article>',
    css: '.floating-card { max-width: 500px; margin: 4rem auto; padding: 2.5rem; background: white; box-shadow: 0 24px 60px rgba(22, 38, 20, .18); }\n.floating-card small { color: #579900; font: 700 .7rem monospace; }', js: ''
  },
  {
    id: 'hover', type: 'css', label: ':hover', title: 'Estado ao passar o mouse', difficulty: 'intermediário',
    description: 'Aplica estilos enquanto o ponteiro está sobre um elemento. Deve complementar, nunca esconder, uma ação.',
    demo: '<button class="demo-hover" type="button">Passe por aqui</button>',
    html: '<div class="hover-zone">\n  <a class="explore-link" href="#">Explorar projeto <span>→</span></a>\n</div>',
    css: '.hover-zone { padding: 3rem; text-align: center; }\n.explore-link { display: inline-flex; gap: 1rem; padding: 1rem 1.2rem; color: #152012; border: 2px solid currentColor; font-weight: 800; text-decoration: none; transition: .2s; }\n.explore-link:hover, .explore-link:focus-visible { color: white; background: #152012; transform: translateY(-3px); }', js: ''
  },
  {
    id: 'gradient', type: 'css', label: 'linear-gradient()', title: 'Gradiente', difficulty: 'intermediário',
    description: 'Mistura cores em uma direção definida e pode substituir uma imagem em fundos e detalhes.',
    demo: '<div style="width:140px;height:90px;background:linear-gradient(135deg,#131b14,#b9ff46);border-radius:4px"></div>',
    html: '<section class="gradient-banner">\n  <p>CSS / COR</p>\n  <h2>Entre a sombra e a luz.</h2>\n</section>',
    css: '.gradient-banner { margin: 2rem; padding: 5rem 2rem; color: white; background: linear-gradient(125deg, #071008 15%, #1c4419 55%, #b9ff46 140%); }\n.gradient-banner p { font: 700 .75rem monospace; letter-spacing: .15em; }', js: ''
  },
  {
    id: 'click', type: 'js', label: 'click', title: 'Evento de clique', difficulty: 'essencial',
    description: 'Escuta uma ação do visitante e executa uma resposta. É a ponte básica entre interface e comportamento.',
    demo: '<button class="demo-button js-demo-click" type="button">Clique: <b>0</b></button>',
    html: '<section class="click-lab">\n  <p>Cliques registrados</p>\n  <strong id="click-total">0</strong>\n  <button id="click-button" type="button">Registrar clique</button>\n</section>',
    css: '.click-lab { padding: 3rem 1.5rem; text-align: center; }\n#click-total { display: block; margin: .5rem; font-size: 4rem; }\n#click-button { padding: .9rem 1.2rem; color: #111; border: 0; background: #ffd84a; font-weight: 800; }',
    js: "let clicks = 0;\ndocument.querySelector('#click-button')?.addEventListener('click', () => {\n  clicks += 1;\n  document.querySelector('#click-total').textContent = clicks;\n});"
  },
  {
    id: 'toggle', type: 'js', label: 'classList.toggle()', title: 'Alternar um estado', difficulty: 'intermediário',
    description: 'Adiciona ou remove uma classe. Assim, o JavaScript muda um estado e o CSS decide como ele aparece.',
    demo: '<button class="demo-toggle js-demo-toggle" type="button" aria-label="Alternar estado" aria-pressed="false"></button>',
    html: '<section class="theme-card" id="theme-card">\n  <p>ESTADO VISUAL</p>\n  <h2>Modo neon</h2>\n  <button id="theme-toggle" type="button" aria-pressed="false">Ativar</button>\n</section>',
    css: '.theme-card { max-width: 520px; margin: 3rem auto; padding: 3rem; color: #182018; border: 1px solid #bcc4ba; transition: .25s; }\n.theme-card.is-neon { color: white; border-color: #b9ff46; background: #101610; box-shadow: 0 0 60px rgba(185,255,70,.2); }\n.theme-card button { padding: .7rem 1rem; border: 0; background: #b9ff46; font-weight: 800; }',
    js: "document.querySelector('#theme-toggle')?.addEventListener('click', (event) => {\n  const card = document.querySelector('#theme-card');\n  const active = card.classList.toggle('is-neon');\n  event.currentTarget.textContent = active ? 'Desativar' : 'Ativar';\n  event.currentTarget.setAttribute('aria-pressed', active);\n});"
  },
  {
    id: 'counter', type: 'js', label: 'let + textContent', title: 'Contador', difficulty: 'essencial',
    description: 'Guarda um valor em uma variável e atualiza o texto da tela sempre que ele muda.',
    demo: '<div class="demo-counter"><button class="js-count-minus" type="button" aria-label="Diminuir contador">−</button><b>0</b><button class="js-count-plus" type="button" aria-label="Aumentar contador">+</button></div>',
    html: '<section class="counter-card">\n  <p>QUANTIDADE</p>\n  <div><button id="minus" aria-label="Diminuir">−</button><strong id="count">0</strong><button id="plus" aria-label="Aumentar">+</button></div>\n</section>',
    css: '.counter-card { padding: 3rem; text-align: center; }\n.counter-card > div { display: flex; justify-content: center; align-items: center; gap: 1rem; }\n.counter-card button { width: 44px; height: 44px; border: 0; border-radius: 50%; background: #ffd84a; font-size: 1.3rem; }\n#count { min-width: 60px; font-size: 3rem; }',
    js: "let count = 0;\nconst output = document.querySelector('#count');\ndocument.querySelector('#plus')?.addEventListener('click', () => output.textContent = ++count);\ndocument.querySelector('#minus')?.addEventListener('click', () => output.textContent = --count);"
  },
  {
    id: 'create', type: 'js', label: 'createElement()', title: 'Criar elementos', difficulty: 'intermediário',
    description: 'Cria um novo nó HTML via JavaScript. Depois, <code>append()</code> coloca esse nó na página.',
    demo: '<ul class="demo-list"><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>',
    html: '<section class="task-maker">\n  <form id="task-form"><label for="task-input">Nova ideia</label><div><input id="task-input" required placeholder="Ex.: praticar Grid" /><button>Adicionar</button></div></form>\n  <ul id="task-list"><li>Explorar um cartão</li></ul>\n</section>',
    css: '.task-maker { max-width: 540px; margin: 3rem auto; padding: 2rem; background: #f0f3ed; }\n.task-maker label { display: block; margin-bottom: .5rem; font-weight: 700; }\n.task-maker form div { display: flex; gap: .5rem; }\n.task-maker input { flex: 1; min-width: 0; padding: .8rem; }\n.task-maker button { border: 0; padding-inline: 1rem; background: #151a16; color: white; }\n.task-maker li { margin: .6rem 0; }',
    js: "document.querySelector('#task-form')?.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const input = document.querySelector('#task-input');\n  const item = document.createElement('li');\n  item.textContent = input.value;\n  document.querySelector('#task-list').append(item);\n  input.value = '';\n});"
  },
  {
    id: 'filter', type: 'js', label: 'filter()', title: 'Filtrar uma lista', difficulty: 'intermediário',
    description: 'Cria uma nova lista apenas com os itens que passam em uma condição. Ótimo para buscas e categorias.',
    demo: '<div style="display:flex;gap:6px;flex-wrap:wrap"><span style="background:#ffd84a;padding:6px 9px;font:10px monospace">HTML</span><span style="background:#ffd84a;padding:6px 9px;font:10px monospace">JS</span></div>',
    html: '<section class="filter-demo">\n  <label>Buscar tecnologia <input id="tech-search" placeholder="Digite HTML…" /></label>\n  <ul id="tech-list"></ul>\n</section>',
    css: '.filter-demo { max-width: 520px; margin: 3rem auto; padding: 2rem; }\n.filter-demo label { display: grid; gap: .5rem; font-weight: 700; }\n.filter-demo input { padding: .8rem; }\n.filter-demo li { margin: .5rem 0; padding: .7rem; background: #fff2a6; }',
    js: "const technologies = ['HTML semântico', 'CSS Flexbox', 'CSS Grid', 'JavaScript DOM'];\nconst list = document.querySelector('#tech-list');\nfunction renderTech(query = '') {\n  const visible = technologies.filter(item => item.toLowerCase().includes(query.toLowerCase()));\n  list.innerHTML = visible.map(item => `<li>${item}</li>`).join('');\n}\nrenderTech();\ndocument.querySelector('#tech-search')?.addEventListener('input', event => renderTech(event.target.value));"
  },
  {
    id: 'template', type: 'js', label: '`template string`', title: 'Texto dinâmico', difficulty: 'essencial',
    description: 'Combina texto e valores usando crases e <code>${ }</code>. Deixa mensagens dinâmicas claras e legíveis.',
    demo: '<div style="padding:16px;background:#172018;color:white;font:12px monospace">Olá, <span style="color:#ffd84a">estudante</span>!</div>',
    html: '<section class="welcome-lab">\n  <label>Seu nome <input id="welcome-name" value="Estudante" /></label>\n  <h2 id="welcome-output">Olá, Estudante!</h2>\n</section>',
    css: '.welcome-lab { padding: 4rem 1.5rem; text-align: center; }\n.welcome-lab input { margin-left: .5rem; padding: .7rem; }\n.welcome-lab h2 { font-size: clamp(2rem, 8vw, 5rem); }',
    js: "document.querySelector('#welcome-name')?.addEventListener('input', event => {\n  const name = event.target.value || 'estudante';\n  document.querySelector('#welcome-output').textContent = `Olá, ${name}!`;\n});"
  },
  {
    "id": "steps",
    "type": "html",
    "label": "&lt;ol&gt;",
    "title": "Lista ordenada",
    "difficulty": "essencial",
    "description": "Use uma lista ordenada quando trocar a ordem dos passos mudar o resultado. Cada passo fica em um elemento <code>&lt;li&gt;</code>.",
    "demo": "<ol class=\"lab-steps\">\n  <li>Crie o arquivo HTML.</li>\n  <li>Escreva o título.</li>\n  <li>Abra no navegador.</li>\n</ol>",
    "html": "<ol class=\"lab-steps\">\n  <li>Crie o arquivo HTML.</li>\n  <li>Escreva o título.</li>\n  <li>Abra no navegador.</li>\n</ol>",
    "css": ".lab-steps { padding-left: 2rem; line-height: 1.8; }\n.lab-steps li::marker { font-weight: bold; }",
    "js": ""
  },
  {
    "id": "disclosure",
    "type": "html",
    "label": "&lt;details&gt;",
    "title": "Dica expansível",
    "difficulty": "essencial",
    "description": "O texto de <code>&lt;summary&gt;</code> fica visível. Clique nele ou pressione Enter para abrir a dica.",
    "demo": "<details class=\"lab-tip\">\n  <summary>Como criar uma lista numerada?</summary>\n  <p>Use a tag ol e coloque cada passo dentro de um li.</p>\n</details>",
    "html": "<details class=\"lab-tip\">\n  <summary>Como criar uma lista numerada?</summary>\n  <p>Use a tag ol e coloque cada passo dentro de um li.</p>\n</details>",
    "css": ".lab-tip { max-width: 32rem; padding: 1rem; border: 1px solid currentColor; border-radius: .5rem; }\n.lab-tip summary { cursor: pointer; }",
    "js": ""
  },
  {
    "id": "select",
    "type": "html",
    "label": "&lt;select&gt;",
    "title": "Menu de opções",
    "difficulty": "essencial",
    "description": "Escolha uma trilha. Cada <code>&lt;option&gt;</code> oferece um valor e o navegador cuida da seleção por mouse ou teclado.",
    "demo": "<label class=\"lab-choice\">Trilha de estudo\n  <select name=\"trilha\">\n    <option>HTML</option>\n    <option>CSS</option>\n    <option>JavaScript</option>\n  </select>\n</label>",
    "html": "<label class=\"lab-choice\">Trilha de estudo\n  <select name=\"trilha\">\n    <option>HTML</option>\n    <option>CSS</option>\n    <option>JavaScript</option>\n  </select>\n</label>",
    "css": ".lab-choice { display: grid; gap: .4rem; }\n.lab-choice select { padding: .5rem; font: inherit; }",
    "js": ""
  },
  {
    "id": "progress",
    "type": "html",
    "label": "&lt;progress&gt;",
    "title": "Progresso da trilha",
    "difficulty": "essencial",
    "description": "A barra compara <code>value</code> com <code>max</code>. Com três de cinco aulas concluídas, ela fica 60% preenchida.",
    "demo": "<label class=\"lab-progress\">3 de 5 aulas concluídas\n  <progress value=\"3\" max=\"5\">60%</progress>\n</label>",
    "html": "<label class=\"lab-progress\">3 de 5 aulas concluídas\n  <progress value=\"3\" max=\"5\">60%</progress>\n</label>",
    "css": ".lab-progress { display: grid; gap: .5rem; }\n.lab-progress progress { width: 100%; accent-color: #529633; }",
    "js": ""
  },
  {
    "id": "spacing",
    "type": "css",
    "label": "gap",
    "title": "Espaço entre itens",
    "difficulty": "essencial",
    "description": "Compare as duas fileiras. As caixas têm o mesmo tamanho, mas o espaço entre elas passa de 4 para 16 pixels.",
    "demo": "<div class=\"lab-spacing\">\n  <div><span>4px</span><b>A</b><b>B</b></div>\n  <div><span>16px</span><b>A</b><b>B</b></div>\n</div>",
    "html": "<div class=\"lab-spacing\">\n  <div><span>4px</span><b>A</b><b>B</b></div>\n  <div><span>16px</span><b>A</b><b>B</b></div>\n</div>",
    "css": ".lab-spacing > div { display: flex; align-items: center; gap: 4px; margin: .4rem 0; }\n.lab-spacing > div + div { gap: 16px; }\n.lab-spacing b { padding: .25rem .5rem; background: #86d9ec; color: #12242a; }",
    "js": ""
  },
  {
    "id": "padding",
    "type": "css",
    "label": "padding",
    "title": "Espaço interno",
    "difficulty": "essencial",
    "description": "O preenchimento afasta o texto da borda. Compare a mesma palavra com 4 e 16 pixels de espaço interno.",
    "demo": "<div class=\"lab-padding\">\n  <span>Texto</span>\n  <span>Texto</span>\n</div>",
    "html": "<div class=\"lab-padding\">\n  <span>Texto</span>\n  <span>Texto</span>\n</div>",
    "css": ".lab-padding { display: flex; align-items: center; gap: 1rem; }\n.lab-padding span { border: 1px solid currentColor; padding: 4px; }\n.lab-padding span + span { padding: 16px; }",
    "js": ""
  },
  {
    "id": "ratio",
    "type": "css",
    "label": "aspect-ratio",
    "title": "Proporção de uma caixa",
    "difficulty": "essencial",
    "description": "As duas caixas têm a mesma largura. A primeira usa a proporção 1/1 e a segunda usa 16/9.",
    "demo": "<div class=\"lab-ratio\">\n  <span>1:1</span>\n  <span>16:9</span>\n</div>",
    "html": "<div class=\"lab-ratio\">\n  <span>1:1</span>\n  <span>16:9</span>\n</div>",
    "css": ".lab-ratio { display: flex; gap: .75rem; align-items: center; }\n.lab-ratio span { display: grid; place-items: center; width: 4rem; aspect-ratio: 1; color: #16272d; background: #86d9ec; }\n.lab-ratio span + span { aspect-ratio: 16 / 9; }",
    "js": ""
  },
  {
    "id": "tracking",
    "type": "css",
    "label": "letter-spacing",
    "title": "Distância entre letras",
    "difficulty": "essencial",
    "description": "Compare a palavra LAB com o espaçamento padrão e com 0.25em entre as letras.",
    "demo": "<div class=\"lab-tracking\">\n  <p>LAB</p>\n  <p>LAB</p>\n</div>",
    "html": "<div class=\"lab-tracking\">\n  <p>LAB</p>\n  <p>LAB</p>\n</div>",
    "css": ".lab-tracking p { font: bold 1.5rem monospace; margin: .4rem; }\n.lab-tracking p + p { letter-spacing: .25em; }",
    "js": ""
  },
  {
    "id": "length",
    "type": "js",
    "label": "length",
    "title": "Contar caracteres",
    "difficulty": "essencial",
    "description": "Edite a sigla e acompanhe o tamanho do texto. Para letras de A a Z, cada letra soma uma unidade.",
    "demo": "<div class=\"lab-string lab-length\">\n  <label>Sigla\n    <input value=\"HTML\" />\n  </label>\n  <output aria-live=\"polite\">4</output>\n</div>",
    "html": "<div class=\"lab-string lab-length\">\n  <label>Sigla\n    <input value=\"HTML\" />\n  </label>\n  <output aria-live=\"polite\">4</output>\n</div>",
    "css": ".lab-string { display: grid; gap: .5rem; max-width: 22rem; }\n.lab-string input { width: 100%; min-width: 0; padding: .5rem; font: inherit; }\n.lab-string output { overflow-wrap: anywhere; font-weight: bold; }",
    "js": "function setupLength(card) {\n  const input = card.querySelector('input');\n  const output = card.querySelector('output');\n  input.addEventListener('input', () => {\n    output.textContent = input.value.length;\n  });\n}\nsetupLength(document.querySelector('.lab-length'));"
  },
  {
    "id": "trim",
    "type": "js",
    "label": "trim()",
    "title": "Remover espaços nas pontas",
    "difficulty": "essencial",
    "description": "Acrescente espaços antes e depois do nome. As aspas mostram onde o resultado começa e termina.",
    "demo": "<div class=\"lab-string lab-trim\">\n  <label>Nome\n    <input value=\"  Apollo  \" />\n  </label>\n  <output aria-live=\"polite\">“Apollo”</output>\n</div>",
    "html": "<div class=\"lab-string lab-trim\">\n  <label>Nome\n    <input value=\"  Apollo  \" />\n  </label>\n  <output aria-live=\"polite\">“Apollo”</output>\n</div>",
    "css": ".lab-string { display: grid; gap: .5rem; max-width: 22rem; }\n.lab-string input { width: 100%; min-width: 0; padding: .5rem; font: inherit; }\n.lab-string output { overflow-wrap: anywhere; font-weight: bold; }",
    "js": "function setupTrim(card) {\n  const input = card.querySelector('input');\n  const output = card.querySelector('output');\n  input.addEventListener('input', () => {\n    output.textContent = '“' + input.value.trim() + '”';\n  });\n}\nsetupTrim(document.querySelector('.lab-trim'));"
  },
  {
    "id": "includes",
    "type": "js",
    "label": "includes()",
    "title": "Encontrar uma palavra",
    "difficulty": "essencial",
    "description": "A resposta indica se o texto contém a palavra <code>grid</code>. O exemplo converte o texto para minúsculas antes da busca.",
    "demo": "<div class=\"lab-string lab-includes\">\n  <label>Texto\n    <input value=\"CSS Grid\" />\n  </label>\n  <output aria-live=\"polite\">Contém grid</output>\n</div>",
    "html": "<div class=\"lab-string lab-includes\">\n  <label>Texto\n    <input value=\"CSS Grid\" />\n  </label>\n  <output aria-live=\"polite\">Contém grid</output>\n</div>",
    "css": ".lab-string { display: grid; gap: .5rem; max-width: 22rem; }\n.lab-string input { width: 100%; min-width: 0; padding: .5rem; font: inherit; }\n.lab-string output { overflow-wrap: anywhere; font-weight: bold; }",
    "js": "function setupIncludes(card) {\n  const input = card.querySelector('input');\n  const output = card.querySelector('output');\n  input.addEventListener('input', () => {\n    output.textContent = input.value.toLowerCase().includes('grid') ? 'Contém grid' : 'Sem grid';\n  });\n}\nsetupIncludes(document.querySelector('.lab-includes'));"
  },
  {
    "id": "split",
    "type": "js",
    "label": "split()",
    "title": "Separar itens",
    "difficulty": "intermediário",
    "description": "Separe as tecnologias com vírgulas. O exemplo divide o texto, remove espaços nas pontas e exibe os itens separados por pontos.",
    "demo": "<div class=\"lab-string lab-split\">\n  <label>Tecnologias\n    <input value=\"HTML, CSS\" />\n  </label>\n  <output aria-live=\"polite\">HTML · CSS</output>\n</div>",
    "html": "<div class=\"lab-string lab-split\">\n  <label>Tecnologias\n    <input value=\"HTML, CSS\" />\n  </label>\n  <output aria-live=\"polite\">HTML · CSS</output>\n</div>",
    "css": ".lab-string { display: grid; gap: .5rem; max-width: 22rem; }\n.lab-string input { width: 100%; min-width: 0; padding: .5rem; font: inherit; }\n.lab-string output { overflow-wrap: anywhere; font-weight: bold; }",
    "js": "function setupSplit(card) {\n  const input = card.querySelector('input');\n  const output = card.querySelector('output');\n  input.addEventListener('input', () => {\n    output.textContent = input.value.split(',').map(item => item.trim()).filter(Boolean).join(' · ');\n  });\n}\nsetupSplit(document.querySelector('.lab-split'));"
  }
];

const builderBaseCSS = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; color: #172018; background: #fafcf7; font: 16px/1.6 system-ui, -apple-system, sans-serif; }
h1, h2, h3, p { margin-top: 0; }
button, input, textarea { font: inherit; }
button { cursor: pointer; }
:focus-visible { outline: 3px solid #6aa91e; outline-offset: 3px; }
`;

const examples = {
  profile: {
    html: `<main class="profile-card">
  <div class="avatar" aria-hidden="true">TM</div>
  <p class="eyebrow">ESTUDANTE TAZZ</p>
  <h1>Teo Martins</h1>
  <p>Aprendendo a transformar lógica em interfaces.</p>
  <button id="follow">Acompanhar</button>
  <p id="message" aria-live="polite"></p>
</main>`,
    css: `* { box-sizing: border-box; }
body { min-height: 100vh; display: grid; place-items: center; margin: 0; color: #eef4eb; background: #080b09; font-family: system-ui, sans-serif; }
.profile-card { width: min(380px, calc(100% - 32px)); padding: 38px; border: 1px solid #303930; background: #111612; }
.avatar { width: 74px; height: 74px; display: grid; place-items: center; border-radius: 50%; color: #10150f; background: #b9ff46; font-weight: 800; }
.eyebrow { margin-top: 28px; color: #849084; font: 11px monospace; letter-spacing: .12em; }
h1 { margin: 8px 0; font-size: 38px; }
p { color: #9ca69c; line-height: 1.6; }
button { padding: 12px 18px; border: 0; background: #b9ff46; font-weight: 800; cursor: pointer; }`,
    js: `const button = document.querySelector('#follow');
button.addEventListener('click', () => {
  const active = button.classList.toggle('active');
  button.textContent = active ? 'Acompanhando ✓' : 'Acompanhar';
  document.querySelector('#message').textContent = active ? 'Você ativou um novo estado!' : '';
});`
  },
  counter: {
    html: `<main class="counter">
  <p>CONTADOR INTERATIVO</p>
  <h1 id="value">0</h1>
  <div>
    <button id="minus" aria-label="Diminuir">−</button>
    <button id="reset">Zerar</button>
    <button id="plus" aria-label="Aumentar">+</button>
  </div>
</main>`,
    css: `* { box-sizing: border-box; }
body { min-height: 100vh; display: grid; place-items: center; margin: 0; color: #162014; background: #eff2eb; font-family: system-ui, sans-serif; }
.counter { text-align: center; }
.counter p { font: 11px monospace; letter-spacing: .15em; }
h1 { margin: 10px 0 25px; font-size: 120px; line-height: 1; }
.counter div { display: flex; gap: 8px; }
button { min-width: 52px; padding: 12px 16px; border: 0; background: #172018; color: white; font-weight: 800; cursor: pointer; }
#reset { color: #172018; background: #b9ff46; }`,
    js: `let value = 0;
const output = document.querySelector('#value');
const show = () => output.textContent = value;
document.querySelector('#plus').addEventListener('click', () => { value++; show(); });
document.querySelector('#minus').addEventListener('click', () => { value--; show(); });
document.querySelector('#reset').addEventListener('click', () => { value = 0; show(); });`
  },
  gallery: {
    html: `<main>
  <header><p>CSS GRID</p><h1>Galeria responsiva</h1></header>
  <section class="gallery">
    <button class="gallery-card" type="button" aria-pressed="false"><span>01</span><strong>Estrutura</strong></button>
    <button class="gallery-card" type="button" aria-pressed="false"><span>02</span><strong>Expressão</strong></button>
    <button class="gallery-card" type="button" aria-pressed="false"><span>03</span><strong>Movimento</strong></button>
    <button class="gallery-card" type="button" aria-pressed="false"><span>04</span><strong>Autonomia</strong></button>
  </section>
</main>`,
    css: `* { box-sizing: border-box; }
body { margin: 0; color: #edf2eb; background: #080b09; font-family: system-ui, sans-serif; }
main { width: min(1000px, calc(100% - 32px)); margin: 0 auto; padding: 60px 0; }
header p { color: #b9ff46; font: 11px monospace; letter-spacing: .15em; }
h1 { font-size: clamp(42px, 8vw, 82px); line-height: .95; }
.gallery { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.gallery-card { min-height: 230px; display: flex; flex-direction: column; justify-content: space-between; padding: 24px; color: inherit; border: 1px solid #313a32; background: #111612; text-align: left; cursor: pointer; }
.gallery-card:nth-child(2), .gallery-card:nth-child(3) { background: #b9ff46; color: #111; }
.gallery-card[aria-pressed="true"] { outline: 3px solid #67d6ff; outline-offset: 3px; }
.gallery span { font: 11px monospace; }
@media (max-width: 620px) { .gallery { grid-template-columns: 1fr; } }`,
    js: `document.querySelectorAll('.gallery-card').forEach(card => {
  card.addEventListener('click', () => {
    const selected = card.getAttribute('aria-pressed') === 'true';
    card.setAttribute('aria-pressed', String(!selected));
  });
});`
  }
};

const state = {
  filter: 'all',
  query: '',
  builder: loadJSON('tazz-lab-builder', ['heading', 'button', 'flex']),
  generatedTab: 'html',
  editorTab: 'html',
  editor: loadJSON('tazz-lab-editor', examples.profile),
  flex: { direction: 'row', justify: 'center', align: 'center', gap: 16 },
  grid: { columns: 3, items: 6, gap: 16 }
};

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    if (!value) return structuredClone(fallback);
    const stored = JSON.parse(value);
    if (Array.isArray(fallback)) {
      if (!Array.isArray(stored)) return [...fallback];
      return [...new Set(stored.filter(id => lessons.some(lesson => lesson.id === id)))];
    }
    return Object.fromEntries(Object.entries(fallback).map(([tab, initial]) =>
      [tab, typeof stored?.[tab] === 'string' ? stored[tab] : initial]));
  } catch {
    return structuredClone(fallback);
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function setupTabKeyboard(tablistSelector) {
  $$(tablistSelector).forEach(tablist => {
    tablist.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      const tabs = $$('[role="tab"]', tablist);
      if (!tabs.length) return;
      const current = Math.max(0, tabs.indexOf(document.activeElement));
      let next = current;
      if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
      if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      event.preventDefault();
      tabs[next].focus();
      tabs[next].click();
    });
  });
}

function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('is-visible');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove('is-visible'), 2300);
}

function renderLessons() {
  const query = state.query.trim().toLocaleLowerCase('pt-BR');
  const visible = lessons.filter((lesson) => {
    const matchesType = state.filter === 'all' || lesson.type === state.filter;
    const haystack = `${lesson.title} ${lesson.label.replaceAll('&lt;', '<').replaceAll('&gt;', '>')} ${lesson.description} ${lesson.type}`.toLocaleLowerCase('pt-BR');
    return matchesType && (!query || haystack.includes(query));
  });

  $('#lesson-grid').innerHTML = visible.map((lesson, index) => {
    const added = state.builder.includes(lesson.id);
    return `<article class="lesson-card" data-type="${lesson.type}">
      <span class="lesson-index">EXP-${String(index + 1).padStart(2, '0')}</span>
      <div class="lesson-demo">${lesson.demo}</div>
      <div class="lesson-content">
        <div class="lesson-meta"><span class="tech-tag">${lesson.type}</span><span class="difficulty">${lesson.difficulty}</span></div>
        <h3>${lesson.label} — ${lesson.title}</h3>
        <p>${lesson.description}</p>
      </div>
      <button class="card-action ${added ? 'is-added' : ''}" type="button" data-add-lesson="${lesson.id}" aria-pressed="${added}">
        <span>${added ? 'Adicionado ao construtor' : 'Usar no construtor'}</span><b>${added ? '✓' : '+'}</b>
      </button>
    </article>`;
  }).join('');

  $('#results-count').textContent = `${visible.length} ${visible.length === 1 ? 'item encontrado' : 'itens encontrados'}`;
  $('#empty-state').hidden = visible.length !== 0;
  bindCardDemos();
}

function setupLength(card) {
  const input = card.querySelector('input');
  const output = card.querySelector('output');
  input.addEventListener('input', () => {
    output.textContent = input.value.length;
  });
}

function setupTrim(card) {
  const input = card.querySelector('input');
  const output = card.querySelector('output');
  input.addEventListener('input', () => {
    output.textContent = '“' + input.value.trim() + '”';
  });
}

function setupIncludes(card) {
  const input = card.querySelector('input');
  const output = card.querySelector('output');
  input.addEventListener('input', () => {
    output.textContent = input.value.toLowerCase().includes('grid') ? 'Contém grid' : 'Sem grid';
  });
}

function setupSplit(card) {
  const input = card.querySelector('input');
  const output = card.querySelector('output');
  input.addEventListener('input', () => {
    output.textContent = input.value.split(',').map(item => item.trim()).filter(Boolean).join(' · ');
  });
}

function bindCardDemos() {
  $$('.lesson-demo .lab-length').forEach(setupLength);
  $$('.lesson-demo .lab-trim').forEach(setupTrim);
  $$('.lesson-demo .lab-includes').forEach(setupIncludes);
  $$('.lesson-demo .lab-split').forEach(setupSplit);
  $$('.js-demo-form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const status = $('.demo-form-status', form);
    if (status) status.textContent = 'Formato válido — nenhum dado foi enviado.';
  }));
  $$('.js-demo-toggle').forEach(button => button.addEventListener('click', () => {
    const active = button.classList.toggle('is-on');
    button.setAttribute('aria-pressed', active);
  }));
  $$('.js-demo-click').forEach(button => button.addEventListener('click', () => {
    const value = $('b', button);
    value.textContent = Number(value.textContent) + 1;
  }));
  $$('.demo-counter').forEach(counter => {
    const output = $('b', counter);
    $('.js-count-plus', counter)?.addEventListener('click', () => output.textContent = Number(output.textContent) + 1);
    $('.js-count-minus', counter)?.addEventListener('click', () => output.textContent = Number(output.textContent) - 1);
  });
  bindCardTilt();
}

function bindCardTilt() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(pointer: coarse)').matches) return;
  $$('.lesson-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - .5) * 7;
      const rotateX = (.5 - (y / rect.height)) * 7;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
      card.style.setProperty('--card-rx', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--card-ry', `${rotateY.toFixed(2)}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--card-rx', '0deg');
      card.style.setProperty('--card-ry', '0deg');
    });
  });
}

function getBuilderLessons() {
  return state.builder.map(id => lessons.find(lesson => lesson.id === id)).filter(Boolean);
}

function getGeneratedCode() {
  const selected = getBuilderLessons();
  return {
    html: selected.map(item => item.html).join('\n\n'),
    css: [builderBaseCSS, ...selected.map(item => item.css).filter(Boolean)].join('\n\n'),
    js: selected.map(item => item.js).filter(Boolean).join('\n\n')
  };
}

function createDocument({ html, css, js }, title = 'Minha página TAZZ LAB') {
  const safeJS = js.replace(/<\/script/gi, '<\\/script');
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <style>${css}</style>
</head>
<body>
${html || '<main style="padding:3rem;text-align:center"><h1>Sua página começa aqui.</h1><p>Adicione um cartão no construtor.</p></main>'}
<script>${safeJS}<\/script>
</body>
</html>`;
}

function renderBuilder() {
  const selected = getBuilderLessons();
  $('#builder-list').innerHTML = selected.length ? selected.map((lesson, index) => `
    <div class="stack-item">
      <span class="stack-number">${String(index + 1).padStart(2, '0')}</span>
      <div><strong>${lesson.title}</strong><small>${lesson.type} · ${lesson.label.replace(/&lt;|&gt;/g, '')}</small></div>
      <div class="stack-actions">
        <button type="button" data-move="up" data-index="${index}" aria-label="Mover ${lesson.title} para cima">↑</button>
        <button type="button" data-move="down" data-index="${index}" aria-label="Mover ${lesson.title} para baixo">↓</button>
        <button type="button" data-remove="${lesson.id}" aria-label="Remover ${lesson.title}">×</button>
      </div>
    </div>`).join('') : '<div class="stack-empty">Escolha um cartão na seção acima para começar sua página.</div>';

  const code = getGeneratedCode();
  $('#builder-preview').srcdoc = createDocument(code);
  $('#generated-code code').textContent = code[state.generatedTab] || '';
  $('#builder-save-warning').hidden = saveJSON('tazz-lab-builder', state.builder);
  renderLessons();
}

function addToBuilder(id) {
  if (state.builder.includes(id)) {
    state.builder = state.builder.filter(item => item !== id);
    toast('Bloco removido do construtor.');
  } else {
    state.builder.push(id);
    toast('Bloco adicionado — veja o resultado no construtor.');
  }
  renderBuilder();
}

function moveBuilderItem(index, direction) {
  const target = direction === 'up' ? index - 1 : index + 1;
  if (target < 0 || target >= state.builder.length) return;
  [state.builder[index], state.builder[target]] = [state.builder[target], state.builder[index]];
  renderBuilder();
}

function setupFilters() {
  $('#search-input').addEventListener('input', (event) => { state.query = event.target.value; renderLessons(); });
  $$('.filter-chip').forEach(button => button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    $$('.filter-chip').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', active);
    });
    renderLessons();
  }));
  $('#clear-filters').addEventListener('click', () => {
    state.filter = 'all'; state.query = ''; $('#search-input').value = '';
    $$('.filter-chip').forEach(item => {
      const active = item.dataset.filter === 'all';
      item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', active);
    });
    renderLessons();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      event.preventDefault(); $('#search-input').focus();
    }
  });
  $('#lesson-grid').addEventListener('click', event => {
    const button = event.target.closest('[data-add-lesson]');
    if (button) addToBuilder(button.dataset.addLesson);
  });
}

function setupBuilder() {
  $('#builder-list').addEventListener('click', event => {
    const remove = event.target.closest('[data-remove]');
    const move = event.target.closest('[data-move]');
    if (remove) addToBuilder(remove.dataset.remove);
    if (move) moveBuilderItem(Number(move.dataset.index), move.dataset.move);
  });
  $('#clear-builder').addEventListener('click', () => {
    state.builder = []; renderBuilder(); toast('Construtor limpo.');
  });
  $$('[data-scroll-to]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.scrollTo)?.scrollIntoView()));
  $$('.viewport-switcher button').forEach(button => button.addEventListener('click', () => {
    $$('.viewport-switcher button').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', active);
    });
    const frame = $('.browser-frame');
    frame.style.width = button.dataset.viewport;
    frame.style.maxWidth = '100%';
    frame.style.alignSelf = 'center';
  }));
  $$('[data-code-tab]').forEach(button => button.addEventListener('click', () => {
    state.generatedTab = button.dataset.codeTab;
    $$('[data-code-tab]').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active);
      item.tabIndex = active ? 0 : -1;
    });
    $('#generated-code').setAttribute('aria-labelledby', button.id);
    $('#generated-code code').textContent = getGeneratedCode()[state.generatedTab];
  }));
  $('#copy-generated').addEventListener('click', async () => {
    const content = getGeneratedCode()[state.generatedTab];
    try { await navigator.clipboard.writeText(content); toast(`${state.generatedTab.toUpperCase()} copiado.`); }
    catch { toast('Não foi possível copiar automaticamente.'); }
  });
  $('#export-page').addEventListener('click', () => downloadText('minha-pagina-tazz.html', createDocument(getGeneratedCode())));
}

function setupPlaygrounds() {
  $$('[data-playground-tab]').forEach(button => button.addEventListener('click', () => {
    const tab = button.dataset.playgroundTab;
    $$('[data-playground-tab]').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active);
      item.tabIndex = active ? 0 : -1;
    });
    $('#flex-playground').hidden = tab !== 'flex';
    $('#grid-playground').hidden = tab !== 'grid';
  }));

  $$('[data-flex-key]').forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.flexKey;
    state.flex[key] = button.dataset.flexValue;
    $$(`[data-flex-key="${key}"]`).forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', active);
    });
    renderFlex();
  }));
  $('#flex-gap').addEventListener('input', event => { state.flex.gap = Number(event.target.value); renderFlex(); });

  $$('[data-grid-columns]').forEach(button => button.addEventListener('click', () => {
    state.grid.columns = Number(button.dataset.gridColumns);
    $$('[data-grid-columns]').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', active);
    });
    renderGrid();
  }));
  $$('[data-grid-items]').forEach(button => button.addEventListener('click', () => {
    state.grid.items = Number(button.dataset.gridItems);
    $$('[data-grid-items]').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', active);
    });
    renderGrid();
  }));
  $('#grid-gap').addEventListener('input', event => { state.grid.gap = Number(event.target.value); renderGrid(); });
  renderFlex(); renderGrid();
}

function renderFlex() {
  const { direction, justify, align, gap } = state.flex;
  const stage = $('#flex-stage');
  Object.assign(stage.style, { flexDirection: direction, justifyContent: justify, alignItems: align, gap: `${gap}px` });
  $('#flex-gap-value').textContent = `${gap}px`;
  $('#flex-code').textContent = `display: flex;\nflex-direction: ${direction};\njustify-content: ${justify};\nalign-items: ${align};\ngap: ${gap}px;`;
}

function renderGrid() {
  const { columns, items, gap } = state.grid;
  const stage = $('#grid-stage');
  stage.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  stage.style.gap = `${gap}px`;
  stage.innerHTML = Array.from({ length: items }, (_, index) => `<div><span>${String(index + 1).padStart(2, '0')}</span></div>`).join('');
  $('#grid-gap-value').textContent = `${gap}px`;
  $('#grid-code').textContent = `display: grid;\ngrid-template-columns: repeat(${columns}, 1fr);\ngap: ${gap}px;`;
}

function setupEditor() {
  const editor = $('#code-editor');
  let allowTabExit = false;
  $$('[data-editor-tab]').forEach(button => button.addEventListener('click', () => {
    state.editor[state.editorTab] = editor.value;
    state.editorTab = button.dataset.editorTab;
    $$('[data-editor-tab]').forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active);
      item.tabIndex = active ? 0 : -1;
    });
    $('#editor-code-panel').setAttribute('aria-labelledby', button.id);
    editor.value = state.editor[state.editorTab];
    updateLineNumbers();
  }));

  editor.addEventListener('input', () => {
    state.editor[state.editorTab] = editor.value;
    $('#save-status').textContent = 'Salvando…';
    updateLineNumbers();
    persistEditor();
    clearTimeout(setupEditor.timer);
    setupEditor.timer = setTimeout(runEditor, 450);
  });
  editor.addEventListener('scroll', () => { $('#line-numbers').scrollTop = editor.scrollTop; });
  editor.addEventListener('blur', () => {
    allowTabExit = false;
    persistEditor();
  });
  editor.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      allowTabExit = true;
      $('#save-status').textContent = 'Navegação liberada — pressione Tab para sair';
      return;
    }
    if (event.key === 'Tab') {
      if (event.shiftKey || allowTabExit) {
        allowTabExit = false;
        return;
      }
      event.preventDefault();
      const start = editor.selectionStart;
      editor.setRangeText('  ', start, editor.selectionEnd, 'end');
      editor.dispatchEvent(new Event('input'));
    }
  });
  $('#run-editor').addEventListener('click', () => { state.editor[state.editorTab] = editor.value; runEditor(); toast('Preview atualizado.'); });
  $('#reset-editor').addEventListener('click', () => loadExample('profile'));
  $$('[data-example]').forEach(button => button.addEventListener('click', () => loadExample(button.dataset.example)));
  editor.value = state.editor.html;
  updateLineNumbers(); runEditor();
}

function updateLineNumbers() {
  const lines = Math.max(1, $('#code-editor').value.split('\n').length);
  $('#line-numbers').textContent = Array.from({ length: lines }, (_, index) => index + 1).join('\n');
}

function runEditor() {
  state.editor[state.editorTab] = $('#code-editor').value;
  $('#editor-preview').srcdoc = createDocument(state.editor, 'Experimento TAZZ LAB');
  persistEditor();
}

function persistEditor() {
  const saved = saveJSON('tazz-lab-editor', state.editor);
  $('#save-status').textContent = saved ? 'Salvo localmente' : 'Armazenamento indisponível. Copie seu código antes de sair.';
}

function loadExample(name) {
  state.editor = structuredClone(examples[name] || examples.profile);
  $('#code-editor').value = state.editor[state.editorTab];
  updateLineNumbers(); runEditor();
  toast('Exemplo carregado no editor.');
}

function downloadText(filename, content) {
  const url = URL.createObjectURL(new Blob([content], { type: 'text/html;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url; link.download = filename; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('Arquivo HTML exportado.');
}

function setupNavigation() {
  const toggle = $('.menu-toggle');
  const menu = $('#menu-mobile');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.hidden = open;
    $('.sr-only', toggle).textContent = open ? 'Abrir menu' : 'Fechar menu';
  });
  $$('#menu-mobile a').forEach(link => link.addEventListener('click', () => {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    $('.sr-only', toggle).textContent = 'Abrir menu';
  }));
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || menu.hidden) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    $('.sr-only', toggle).textContent = 'Abrir menu';
    toggle.focus();
  });
}

function setupReveal() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.reveal').forEach(item => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  $$('.reveal').forEach(item => observer.observe(item));
}

function setupMotion() {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;
  const progress = $('.scroll-progress i');
  setupGuardianScene();
  if (!reducedMotion && finePointer) {
    document.addEventListener('pointermove', event => {
      document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
    }, { passive: true });
  }

  let ticking = false;
  const updateProgress = () => {
    const total = document.documentElement.scrollHeight - innerHeight;
    const value = total > 0 ? scrollY / total : 0;
    progress?.style.setProperty('transform', `scaleX(${Math.min(1, Math.max(0, value))})`);
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; }
  }, { passive: true });
  updateProgress();
}

function init() {
  $('#lesson-count').textContent = lessons.length;
  setupFilters();
  setupBuilder();
  setupPlaygrounds();
  setupEditor();
  setupNavigation();
  setupTabKeyboard('.code-tabs, .playground-tabs, .editor-tabs');
  setupReveal();
  renderBuilder();
  setupMotion();
}

init();
