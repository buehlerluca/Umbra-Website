/* =====================================================
   UMBRA – product data
   Add a new piece: put the image in /images and add one
   object to PRODUCTS. Empty slots refill automatically.
   ===================================================== */
const COLLECTIONS = [
  { id: 'syzygy',  label: 'SYZYGY 2026' },
  { id: 'perigee', label: 'PERIGEE 2027' },
  { id: 'nadir',   label: 'NADIR 2027' },
  { id: 'apsis',   label: 'APSIS 2028' }
];

const MIN_SLOTS = 8; // grid always shows at least this many cards (rest = empty slots)

const PRODUCTS = [
  { id: 'hecate', name: "JACKET", short: "JACKET", category: 'OUTERWEAR', collection: 'syzygy',
    price: 0, img: 'images/hecate-brown-1.webp', colors: [
      { name: 'BROWN GREY', gallery: ['images/hecate-brown-1.webp', 'images/hecate-brown-2.webp', 'images/hecate-brown-3.webp'] },
      { name: 'WASHED GREY', gallery: ['images/hecate-grey-1.webp', 'images/hecate-grey-2.webp', 'images/hecate-grey-3.webp'] },
      { name: 'RED', gallery: ['images/hecate-cut.webp', 'images/hecate-back.webp', 'images/hecate-side.webp'] }
    ], isNew: false,
    desc: "Kurze Jacke mit Stehkragen und Reissverschluss vorne. Die Schultern sind im Labyrinth-Muster gesteppt, die Ärmel haben erhabene Punkte, und die Brust hat senkrechte Falten. Weite Ärmel enden in spitzen Abschlüssen, an den Schultern sitzen Metallösen.",
    sketch: "images/sketch-hecate.jpg" },
  { id: 'mare',   name: "BAG", short: "BAG", category: 'BAGS', collection: 'syzygy',
    price: 0, oneSize: true, img: 'images/bag-grey-1.webp', colors: [
      { name: 'GREY', gallery: ['images/bag-grey-1.webp', 'images/bag-grey-4.webp', 'images/bag-grey-5.webp'] },
      { name: 'BEIGE', gallery: ['images/bag-beige-1.webp', 'images/bag-beige-2.webp', 'images/bag-beige-3.webp'] }
    ], isNew: true,
    desc: "Kleine Umhängetasche mit weichem, gepolstertem Körper. Die Vorderseite ist mit Knöpfen abgesteppt, oben schliesst ein Reissverschluss, und der Gurt ist verstellbar und mit Karabinern befestigt.",
    sketch: "images/sketch-mare.jpg" },
  { id: 'selene', name: "PANTS IN FADED BLACK", short: "PANTS BLACK", category: 'PANTS', collection: 'syzygy',
    price: 0, img: 'images/selene-cut.webp', gallery: ['images/selene-cut.webp', 'images/selene-back.webp'], isNew: false,
    desc: "Weite Jeans mit gerundetem Fassbein. Erhabene Wellen-Nähte laufen vorne und hinten über beide Beine. Koi sind über die Beine und auf eine Gesässtasche gestickt, am hinteren Bund sitzt ein kleines Lederpatch.",
    sketch: "images/sketch-selene.jpg" },
  { id: 'shirt', name: "T-SHIRT IN WASHED BROWN", short: "T-SHIRT BROWN", category: 'TOPS', collection: 'syzygy',
    price: 0, img: 'images/shirt-cut.webp', isNew: true,
    desc: "Kastiges, oversized T-Shirt mit kurzen Ärmeln und gerippter Rundhals. Der Körper ist aus mehreren Teilen mit rohen, ausgefransten Nähten geschnitten, der Stoff hat eine gesprenkelte Säurewäsche.",
    sketch: "images/sketch-shirt.jpg" },
  { id: 'cap', name: "CAP IN WASHED BROWN", short: "CAP BROWN", category: 'CAPS', collection: 'syzygy',
    price: 0, oneSize: true, img: 'images/cap-cut.webp', isNew: true,
    desc: "Kappe mit sechs Segmenten, gebogenem Schirm, Ösen an den Seiten und verstellbarem Band mit Metallschnalle hinten. Moosartige Stickerei sitzt in Flecken auf Kopfteil und Schirm.",
    sketch: "images/sketch-cap.jpg" },
  { id: 'tycho',  name: "PANTS", short: "PANTS", category: 'PANTS', collection: 'syzygy',
    price: 0, img: 'images/tycho-cut.webp', colors: [
      { name: 'RAW INDIGO', gallery: ['images/tycho-cut.webp'] },
      { name: 'BLACK', gallery: ['images/tycho-black.webp'] },
      { name: 'GREY', gallery: ['images/tycho-grey.webp'] },
      { name: 'DARK BROWN GREY', gallery: ['images/tycho-brown.webp'] }
    ], isNew: true,
    desc: "Weite Hose mit hohem Bund und V-förmiger Passe. Geschwungene Teilungsnähte mit Kontrastnähten laufen über die Beine, grosse Cargo-Taschen schliessen mit Schnallenriemen.",
    sketch: "images/sketch-tycho.jpg" }
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
const MOON = 'images/umbra-moon.png';

/* ---------------- helpers ---------------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => Number(n) > 0 ? '$' + Number(n).toFixed(2) + ' USD' : 'PREIS FOLGT';
const CAT_LABEL = { ALL: 'ALLE', PANTS: 'HOSEN', BAGS: 'TASCHEN', OUTERWEAR: 'JACKEN', TOPS: 'OBERTEILE', CAPS: 'KAPPEN' };
const pad2 = n => String(n).padStart(2, '0');
const isTouch = matchMedia('(hover: none)').matches;

let state = { coll: COLLECTIONS[0].id, cat: 'ALL', cart: [], current: null, size: null };

/* ---------------- stars ---------------- */
(() => {
  const box = $('#stars');
  for (let i = 0; i < 70; i++) {
    const s = document.createElement('i');
    s.className = 'star';
    const z = Math.random() * 2 + 1;
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${z}px;height:${z}px;animation-delay:${Math.random()*4}s`;
    box.appendChild(s);
  }
})();

/* ---------------- cursor ---------------- */
const cursor = $('#cursor'), cLabel = $('#cursorLabel');
let cx = 0, cy = 0, tx = 0, ty = 0;
if (!isTouch) {
  addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; cursor.classList.add('on'); });
  (function loop() {
    cx += (tx - cx) * .22; cy += (ty - cy) * .22;
    cursor.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('[data-cursor], .card:not(.slot), .hs-item:not(.slot)');
    const small = e.target.closest('button, a, input, textarea');
    if (t) { cursor.classList.add('big'); cursor.classList.remove('small'); cLabel.textContent = t.dataset.cursor || 'ANSEHEN'; }
    else { cursor.classList.remove('big'); cursor.classList.toggle('small', !!small); }
  });
}

/* ---------------- header ---------------- */
let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY, h = $('#header');
  h.classList.toggle('scrolled', y > 40);
  h.classList.toggle('hide', y > lastY && y > 400 && !document.body.classList.contains('locked'));
  lastY = y;
}, { passive: true });

$('#burger').onclick = () => { const o = $('#burger').classList.toggle('open'); $('#mobileMenu').classList.toggle('open', o); $('#burger').setAttribute('aria-expanded', o); };
$$('#mobileMenu a').forEach(a => a.onclick = () => { $('#burger').classList.remove('open'); $('#mobileMenu').classList.remove('open'); });

/* ---------------- hero: scroll + mouse ---------------- */
const heroL = $('#heroL'), heroR = $('#heroR'), heroMoon = $('#heroMoon'), letters = $$('#heroTitle span');
let mx = 0, my = 0;
addEventListener('mousemove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; });

/* ---------------- horizontal strip ---------------- */
const track = $('#hstripTrack');
function buildStrip() {
  const items = PRODUCTS.slice();
  const slots = Math.max(0, 7 - items.length);
  track.innerHTML = items.map((p, i) => `
    <a class="hs-item" href="#shop" data-id="${p.id}">
      <span class="tag">${pad2(i + 1)}</span>
      <img src="${p.img}" alt="${p.short}" loading="lazy">
      <span class="nm">${p.short}</span>
    </a>`).join('') +
    Array.from({ length: slots }, (_, i) => `
    <div class="hs-item slot"><span class="tag">${pad2(items.length + i + 1)}</span><img src="${MOON}" alt=""><span class="nm">BALD VERFÜGBAR</span></div>`).join('');
  $$('.hs-item[data-id]', track).forEach(a => a.addEventListener('click', e => { e.preventDefault(); openProduct(a.dataset.id); }));
}
buildStrip();

const hstrip = $('#hstrip'), hNum = $('#hstripNum');
function stripScroll() {
  const r = hstrip.getBoundingClientRect();
  const total = hstrip.offsetHeight - innerHeight;
  const p = Math.min(1, Math.max(0, -r.top / total));
  const dist = track.scrollWidth - innerWidth;
  track.style.transform = `translate3d(${-p * dist}px,0,0)`;
  const n = Math.min(PRODUCTS.length, Math.max(1, Math.round(p * (PRODUCTS.length - 1)) + 1));
  hNum.textContent = pad2(n);
}

/* ---------------- collections + filters + grid ---------------- */
function buildCollections() {
  $('#collSwitch').innerHTML = COLLECTIONS.map(c =>
    `<button role="tab" class="${c.id === state.coll ? 'active' : ''}" data-id="${c.id}">${c.label}</button>`).join('');
  $$('#collSwitch button').forEach(b => b.onclick = () => { state.coll = b.dataset.id; state.cat = 'ALL'; buildCollections(); buildFilters(); buildGrid(); $('#shop').scrollIntoView({ behavior: 'smooth' }); });
}
function buildFilters() {
  const cats = ['ALL', ...new Set(PRODUCTS.filter(p => p.collection === state.coll).map(p => p.category))];
  $('#filters').innerHTML = cats.map(c => `<button role="tab" class="${c === state.cat ? 'active' : ''}" data-c="${c}">${CAT_LABEL[c] || c}</button>`).join('');
  $$('#filters button').forEach(b => b.onclick = () => { state.cat = b.dataset.c; buildFilters(); buildGrid(); });
}
function buildGrid() {
  const list = PRODUCTS.filter(p => p.collection === state.coll && (state.cat === 'ALL' || p.category === state.cat));
  const slots = Math.max(0, MIN_SLOTS - list.length);
  const grid = $('#grid');
  grid.innerHTML = list.map((p, i) => `
    <a class="card" href="#" data-id="${p.id}" style="transition-delay:${(i % 4) * 90}ms">
      <div class="card-frame">
        <span class="card-no">${pad2(i + 1)}</span>${p.isNew ? '<span class="card-new">NEU</span>' : ''}
        <img src="${p.img}" alt="${p.short}" loading="lazy">
      </div>
      <div class="card-meta"><span class="card-name">${p.name}</span><span class="card-price">${money(p.price)}</span></div>
    </a>`).join('') +
    Array.from({ length: slots }, (_, i) => `
    <div class="card slot" style="transition-delay:${((list.length + i) % 4) * 90}ms">
      <div class="card-frame"><span class="card-no">${pad2(list.length + i + 1)}</span><img src="${MOON}" alt=""></div>
      <div class="card-meta"><span class="card-name">BALD VERFÜGBAR</span><span class="card-price">—</span></div>
    </div>`).join('');

  $$('.card', grid).forEach(card => {
    io.observe(card);
    if (card.classList.contains('slot')) return;
    card.addEventListener('click', e => { e.preventDefault(); openProduct(card.dataset.id); });
    const img = $('img', card), frame = $('.card-frame', card);
    card.addEventListener('mousemove', e => {
      const r = frame.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      img.style.setProperty('--tx', (x * 26) + 'px');
      img.style.setProperty('--ty', (y * 26 - 8) + 'px');
      frame.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      img.style.setProperty('--tx', '0px'); img.style.setProperty('--ty', '0px');
      frame.style.transform = '';
    });
  });
}

/* ---------------- reveal ---------------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
$$('.reveal').forEach(el => io.observe(el));

/* ---------------- panels ---------------- */
const overlay = $('#overlay');
let lastFocus = null;
function openPanel(el) {
  if (!document.body.classList.contains('locked')) lastFocus = document.activeElement;
  closePanels(true);
  el.classList.add('open'); el.setAttribute('aria-hidden', 'false');
  overlay.classList.add('on'); document.body.classList.add('locked');
  setTimeout(() => { const f = $('[data-close]', el); if (f) f.focus({ preventScroll: true }); }, 60);
}
function closePanels(silent) {
  $$('.product.open, .drawer.open').forEach(p => { p.classList.remove('open'); p.setAttribute('aria-hidden', 'true'); });
  if (!silent) { overlay.classList.remove('on'); document.body.classList.remove('locked'); if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true }); lastFocus = null; }
}
overlay.onclick = () => closePanels();
$$('[data-close]').forEach(b => b.onclick = () => closePanels());
addEventListener('keydown', e => { if (e.key === 'Escape') closePanels(); });
const openContact = () => { $('#mobileMenu').classList.remove('open'); $('#burger').classList.remove('open'); openPanel($('#contactDrawer')); };
['openContact', 'openContactM', 'openContactF'].forEach(id => $('#' + id).onclick = openContact);
$('#openCart').onclick = () => { renderCart(); openPanel($('#cartDrawer')); };

/* ---------------- product modal ---------------- */
function showGallery(gal0) {
  resetZoom();
  const cur = state.current;
  const gal = cur && cur.sketch ? gal0.concat(cur.sketch) : gal0;   // the hand-drawn sketch is the last view, if its file exists
  $('#pImg').classList.remove('is-sketch');
  $('#pImg').src = gal[0];
  $('#pThumbs').innerHTML = gal.length > 1 ? gal.map((g, i) => '<button class="' + (i ? '' : 'active') + (g.indexOf('sketch-') > -1 ? ' sk' : '') + '" data-i="' + i + '" aria-label="' + (g.indexOf('sketch-') > -1 ? 'Skizze' : 'Ansicht ' + (i + 1)) + '"><img src="' + g + '" alt=""></button>').join('') : '';
  $$('#pThumbs button.sk img').forEach(im => im.onerror = () => im.parentElement.remove());   // no sketch uploaded yet: hide that thumbnail
  $$('#pThumbs button').forEach(b => b.onclick = () => { resetZoom(); $('#pImg').src = gal[+b.dataset.i]; $('#pImg').classList.toggle('is-sketch', b.classList.contains('sk')); $$('#pThumbs button').forEach(x => x.classList.toggle('active', x === b)); });
}
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id); if (!p) return;
  state.current = p; state.size = null;
  const col = COLLECTIONS.find(c => c.id === p.collection);
  state.color = p.colors ? p.colors[0].name : null;
  $('#pImg').alt = p.short;
  showGallery(p.colors ? p.colors[0].gallery : (p.gallery || [p.img]));
  const cbox = $('#pColors');
  cbox.innerHTML = p.colors ? '<span class="lbl">FARBE</span>' + p.colors.map((c, i) => '<button class="' + (i ? '' : 'active') + '" data-c="' + c.name + '">' + c.name + '</button>').join('') : '';
  $$('#pColors button').forEach(b => b.onclick = () => {
    state.color = b.dataset.c;
    $$('#pColors button').forEach(x => x.classList.toggle('active', x === b));
    showGallery(p.colors.find(c => c.name === b.dataset.c).gallery);
  });
  $('#pColl').textContent = col ? col.label : '';
  $('#pName').textContent = p.name;
  $('#pRef').textContent = 'ART.-NR. UMB-' + pad2(PRODUCTS.indexOf(p) + 1) + ' · ' + (col ? col.label : '');
  $('#pPrice').textContent = money(p.price);
  $('#pDesc').textContent = p.desc;
  $('#pMore').href = 'design.html#' + p.id;
  $('#pNote').textContent = '';
  state.size = p.oneSize ? 'EINHEITSGRÖSSE' : null;
  $('#pSizes').innerHTML = p.oneSize ? '<button class="active" data-s="ONE SIZE" disabled>EINHEITSGRÖSSE</button>' : SIZES.map(s => `<button data-s="${s}">${s}</button>`).join('');
  $$('#pSizes button').forEach(b => b.onclick = () => { state.size = b.dataset.s; $$('#pSizes button').forEach(x => x.classList.toggle('active', x === b)); $('#pNote').textContent = ''; });
  $('#addBtn span').textContent = 'IN DEN WARENKORB';
  $('#addBtn').classList.remove('done');
  openPanel($('#product'));
}
/* product image: zoom is switched off (no hover zoom, no mouse-wheel zoom, no dragging) */
const pWrap = $('#pImgWrap'), pImg = $('#pImg');
function resetZoom() { pImg.style.transform = ''; }

$('#addBtn').onclick = () => {
  if (!state.size) { $('#pNote').textContent = 'GRÖSSE WÄHLEN'; return; }
  state.cart.push({ id: state.current.id, size: state.size, color: state.color });
  updateCount();
  $('#addBtn span').textContent = 'HINZUGEFÜGT ✓';
  $('#addBtn').classList.add('done');
  setTimeout(() => { closePanels(true); renderCart(); openPanel($('#cartDrawer')); }, 650);
};

/* ---------------- cart ---------------- */
function updateCount() { $('#cartCount').textContent = state.cart.length; }
function renderCart() {
  const body = $('#cartBody');
  if (!state.cart.length) {
    body.innerHTML = `<div class="empty"><img src="${MOON}" alt="">DEIN WARENKORB IST LEER.</div>`;
  } else {
    body.innerHTML = state.cart.map((l, i) => {
      const p = PRODUCTS.find(x => x.id === l.id);
      return `<div class="line"><img src="${(p.colors && l.color ? p.colors.find(c => c.name === l.color).gallery[0] : p.img)}" alt=""><div><div class="n">${p.name}</div><div class="s">${l.size === 'EINHEITSGRÖSSE' ? 'EINHEITSGRÖSSE' : 'GRÖSSE ' + l.size}${l.color ? ' · ' + l.color : ''} · ${money(p.price)}</div></div><button class="rm" data-i="${i}" aria-label="Artikel entfernen" title="Entfernen"><svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2 2 L14 14 M14 2 L2 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"/></svg></button></div>`;
    }).join('');
    $$('.rm', body).forEach(b => b.onclick = () => { state.cart.splice(+b.dataset.i, 1); updateCount(); renderCart(); });
  }
  const total = state.cart.reduce((s, l) => s + PRODUCTS.find(x => x.id === l.id).price, 0);
  $('#cartTotal').textContent = state.cart.length ? money(total) : '—';
}
$('#clearCart').onclick = () => { state.cart = []; updateCount(); renderCart(); };
$('#checkoutBtn').onclick = () => toast('KASSE NICHT AKTIV · PROTOTYP');

/* ---------------- contact + toast ---------------- */
$('#contactForm').addEventListener('submit', e => { e.preventDefault(); e.target.reset(); toast('PROTOTYP · NACHRICHT NICHT GESENDET'); });
const LEGAL = {
  terms: ['NUTZUNGSBEDINGUNGEN', ['UMBRA ist ein Konzeptprojekt. Die gezeigten Teile sind Designstudien und nicht käuflich.', 'Es werden keine Bestellungen angenommen oder bearbeitet. Produktnamen, Preise und Verfügbarkeit sind Platzhalter und können sich jederzeit ändern.', 'Alle Bilder sind Design-Visualisierungen. Es gibt keine Garantie, dass ein Teil produziert wird.']],
  privacy: ['DATENSCHUTZ', ['Diese Seite erhebt, speichert oder verkauft keine persönlichen Daten. Das Kontaktformular ist ein Prototyp und sendet oder speichert keine Nachrichten.', 'Es werden keine Tracking- oder Werbe-Cookies verwendet. Die Schrift wird von Google Fonts geladen, wobei Google beim Laden der Seite deine IP-Adresse erhalten kann.']],
  shipping: ['VERSAND', ['Zurzeit gibt es keinen Versand, weil keine Produkte verkauft werden.', 'Wenn die Kollektion in Produktion geht, werden Versandarten und Lieferzeiten hier veröffentlicht.']],
  returns: ['RÜCKGABE', ['Zurzeit gibt es keine Rückgaben, weil keine Produkte verkauft werden.', 'Wenn die Kollektion in Produktion geht, wird die Rückgaberegelung hier veröffentlicht.']]
};
$$('[data-legal]').forEach(b => b.addEventListener('click', () => {
  const [title, paras] = LEGAL[b.dataset.legal];
  $('#legalTitle').textContent = title;
  $('#legalBody').innerHTML = paras.map(t => '<p>' + t + '</p>').join('') + '<p class="legal-note">KONZEPTPROJEKT · STAND 2026</p>';
  openPanel($('#legalDrawer'));
}));
let tt;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2600); }

/* ---------------- site-wide space background ---------------- */
(function () {
  const box = $('#spaceStars');
  const n = innerWidth < 700 ? 90 : 190;
  let html = '';
  for (let i = 0; i < n; i++) {
    const sz = Math.random() < .85 ? 1 : 2;
    html += `<i class="s" style="left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${sz}px;height:${sz}px;opacity:${(.25 + Math.random() * .6).toFixed(2)};animation-delay:${(Math.random() * 5).toFixed(1)}s;animation-duration:${(3 + Math.random() * 5).toFixed(1)}s"></i>`;
  }
  box.innerHTML = html;
})();
const spaceMoon = $('#spaceMoon'), progressBar = $('#progress');

/* ---------------- engraving video + flowing line mesh ---------------- */
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

(function () {
  const cv = $('#mesh'); if (!cv) return;
  const ctx = cv.getContext('2d');
  const COLS = innerWidth < 700 ? 44 : 78, ROWS = 70;
  let w = 0, h = 0, visible = false, last = 0;
  function size() {
    const r = cv.getBoundingClientRect(), s = Math.min(devicePixelRatio || 1, 1.5) * .75;
    w = cv.width = Math.max(2, Math.round(r.width * s)); h = cv.height = Math.max(2, Math.round(r.height * s));
  }
  // field: x offset of a mesh point (c = 0..1 across, r = 0..1 far to near)
  const field = (c, r, t) => {
    const far = 1 - r;
    const a = .012 + far * far * .05;
    return a * (Math.sin(c * 9 + r * 3.2 + t * .32) + .65 * Math.sin(c * 19 - r * 5.5 - t * .24) + .4 * Math.sin(r * 12 + c * 5 + t * .45));
  };
  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    const soft = new Path2D(), glow = new Path2D();
    for (let i = 0; i <= COLS; i++) {
      const c = i / COLS; let px = 0, py = 0;
      for (let j = 0; j <= ROWS; j++) {
        const r = j / ROWS;
        const x = (c + field(c, r, t)) * w, y = (r + Math.sin(c * 6 + t * .2 + r * 4) * .006 * (1 - r)) * h;
        if (j === 0) soft.moveTo(x, y); else {
          soft.lineTo(x, y);
          if (Math.abs(x - px) > w * .0042) { glow.moveTo(px, py); glow.lineTo(x, y); } // bright where the mesh folds
        }
        px = x; py = y;
      }
    }
    for (let j = 0; j <= ROWS; j += 2) {  // cross lines for the woven look
      const r = j / ROWS; let first = true;
      for (let i = 0; i <= COLS; i++) {
        const c = i / COLS, x = (c + field(c, r, t)) * w, y = (r + Math.sin(c * 6 + t * .2 + r * 4) * .006 * (1 - r)) * h;
        first ? (soft.moveTo(x, y), first = false) : soft.lineTo(x, y);
      }
    }
    ctx.lineWidth = Math.max(.5, w / 1500);
    ctx.strokeStyle = 'rgba(207,207,207,.32)'; ctx.stroke(soft);
    ctx.lineWidth *= 1.6; ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.stroke(glow);
  }
  function loop(now) {
    if (!visible) return;
    requestAnimationFrame(loop);
    if (now - last < 33) return; last = now;
    draw(now / 1000);
  }
  size(); draw(0);
  addEventListener('resize', () => { size(); draw(last / 1000); });
  new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible && !reduceMotion) requestAnimationFrame(loop); }, { threshold: 0 }).observe(cv);
})();

/* ---------------- main scroll loop ---------------- */
const stMoon = $('#stMoon'), footerBig = $('#footerBig');
let ticking = false;
function onScroll() {
  const y = scrollY, vh = innerHeight;
  if (y < vh * 1.2) {
    heroMoon.style.transform = `translate(calc(-50% + ${mx * 40}px), calc(-50% + ${y * .25 + my * 30}px)) rotate(${y * .06}deg) scale(${1 + y / vh * .25})`;
    heroL.style.translate = heroR.style.translate = '0 ' + (-y * .06) + 'px';
    letters.forEach((l, i) => l.style.transform = `translate(${mx * (i - 2) * 14}px, ${-y * (.08 + i * .03)}px)`);
  }
  progressBar.style.transform = 'scaleX(' + Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - vh)) + ')';
  spaceMoon.style.transform = `translate(-50%, calc(-50% - ${y * .04}px)) rotate(${y * .012}deg)`;
  stripScroll();
  const r = stMoon.getBoundingClientRect();
  if (r.top < vh && r.bottom > 0) stMoon.style.transform = `translate(-50%,-50%) rotate(${(r.top - vh) * .05}deg) scale(${1 + (vh - r.top) / vh * .08})`;
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener('mousemove', () => { if (scrollY < innerHeight) requestAnimationFrame(onScroll); });
addEventListener('resize', onScroll);

/* ---------------- init ---------------- */
buildCollections(); buildFilters(); buildGrid(); updateCount(); onScroll();

/* intro curtain */
(function () { const el = $('#intro'); if (!el) return; const hide = () => el.classList.add('done'); addEventListener('load', () => setTimeout(hide, 1100)); setTimeout(hide, 3500); })();
