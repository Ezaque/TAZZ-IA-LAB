/* Sequência aprovada do Guardião: 12 quadros por folha, em quatro colunas. */
function setupGuardianScene() {
  const hero = document.querySelector('.hero');
  const layer = hero.querySelector('.guardian-background');
  const canvas = layer.querySelector('canvas.guardian-portrait');
  const ambience = layer.querySelector('canvas.guardian-ambience');
  const control = hero.querySelector('.guardian-control');
  const ctx = canvas.getContext('2d');
  const ambientCtx = ambience.getContext('2d');
  if (!ctx) return;

  const last = 242, framesPerSecond = 24, tiles = 12;
  const embedded = document.getElementById('guardian-sheets');
  const urls = embedded ? JSON.parse(embedded.textContent) : null;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const cache = new Map();
  const manualStart = reduced.matches || matchMedia('(max-width: 760px)').matches || navigator.connection?.saveData;
  let mode = manualStart ? 'paused' : 'play';
  let position = 0, displayed = -1, visible = false;
  let oldScroll = scrollY, previousTime = null, frame = 0, stopped = false;

  function updateControl() {
    const moving = mode !== 'paused' && mode !== 'ended';
    const title = moving ? 'Pausar animação do Guardião' :
      (mode === 'ended' ? 'Rever animação do Guardião' : 'Reproduzir animação do Guardião');
    control.title = title;
    control.setAttribute('aria-label', title);
    control.firstElementChild.textContent = moving ? 'Ⅱ' : '▶';
  }
  function active() { return visible && !document.hidden && !stopped; }
  function schedule() {
    if (active() && !frame) frame = requestAnimationFrame(paint);
  }
  function sheet(index) {
    if (cache.has(index)) return cache.get(index);
    const img = new Image();
    cache.set(index, img);
    img.onload = schedule;
    img.onerror = () => {
      if (!cache.has(index)) return;
      stopped = true;
      canvas.hidden = ambience.hidden = control.hidden = true;
    };
    img.src = urls ? urls[index] : './assets/guardiao/g' + String(index).padStart(2,'0') + '.webp';
    return img;
  }
  function paint(time) {
    frame = 0;
    if (!active()) return;
    if (mode === 'paused' && displayed === -1 && position === 0) return;
    const target = Math.round(position);
    const index = Math.floor(target / tiles);
    const img = sheet(index);
    if (!img.complete || !img.naturalWidth) {
      previousTime = null;
      return;
    }
    if (target !== displayed) {
      const tile = target % tiles;
      const { width, height } = canvas;
      ctx.drawImage(img, (tile % 4) * width, Math.floor(tile / 4) * height,
        width, height, 0, 0, width, height);
      if (ambientCtx) {
        ambientCtx.drawImage(canvas, 0, 0, ambience.width, ambience.height);
        ambience.hidden = false;
      }
      displayed = target;
      canvas.hidden = false;
    }
    if (mode !== 'play') return;
    if (target === last) { mode = 'ended'; updateControl(); return; }
    if (index < Math.floor(last / tiles)) sheet(index+1);
    for (const key of cache.keys()) if (Math.abs(key-index)>1) cache.delete(key);
    if (previousTime !== null) position = Math.min(last, position + Math.min(time-previousTime,90)*framesPerSecond/1000);
    previousTime = time;
    schedule();
  }
  function pause() { mode = 'paused'; previousTime = null; updateControl(); }
  control.addEventListener('click', () => {
    if (mode === 'play' || mode === 'scroll') { pause(); return; }
    if (position >= last - .5) position = 0;
    mode = 'play'; previousTime = null; updateControl(); schedule();
  });
  addEventListener('scroll', () => {
    const delta = scrollY - oldScroll;
    oldScroll = scrollY;
    if (!delta || !active() || mode === 'paused' || reduced.matches) return;
    mode = 'scroll'; previousTime = null;
    position = Math.max(0,Math.min(last,position + delta * last / Math.max(260,hero.offsetHeight * .72)));
    for (const key of cache.keys()) if (Math.abs(key - Math.floor(position / tiles))>1) cache.delete(key);
    updateControl(); schedule();
  }, { passive:true });
  reduced.addEventListener('change', () => {
    pause();
    if (reduced.matches) {
      position = 0;
      displayed = -1;
      canvas.hidden = ambience.hidden = true;
    }
  });
  document.addEventListener('visibilitychange', () => {previousTime=null; schedule();});
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting; oldScroll=scrollY; previousTime=null; schedule();
  }).observe(layer);
  control.hidden=false; updateControl();
}
