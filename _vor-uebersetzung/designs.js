/* UMBRA: texts and images for the designs page (design.html).
   To change a text, edit it here. Sketch images are optional: put the file in images/ with the name given in "sketch". */
const DESIGNS = [
  {
    id: 'hecate', ref: 'UMB-01', name: 'JACKET', category: 'OUTERWEAR',
    images: ['images/hecate-brown-1.webp', 'images/hecate-brown-2.webp', 'images/hecate-brown-3.webp'],
    sketch: 'images/sketch-hecate.jpg',
    idea: 'A short jacket with a strong upper body. The shoulders carry most of the design, with a quilted maze pattern and raised dots, while the chest stays calm with vertical pleats. The cropped length and the wide sleeves keep it away from a classic racing jacket and make it work with wide trousers.',
    material: 'Heavy cotton twill, garment-washed so the surface looks worn and slightly dusty. The shoulder panels are padded and quilted. Metal front zip and metal eyelets at the shoulders.',
    colours: 'Three colourways: brown grey (the main colour), washed grey and red. The wash gives each colour uneven light and dark areas, strongest on the chest and the cuffs.',
    details: ['Stand collar and centre front zip', 'Quilted maze pattern on the shoulders and the back', 'Raised dot texture on the upper sleeves', 'Vertical pleats on the chest', 'Wide sleeves with pointed cuffs', 'Eyelets at the shoulders'],
    inspiration: 'The maze pattern comes from brain coral. The raised dots are based on craters on rock and on the surface of the moon, which links the jacket to the UMBRA moon logo.'
  },
  {
    id: 'mare', ref: 'UMB-02', name: 'BAG', category: 'BAGS',
    images: ['images/bag-grey-1.webp', 'images/bag-beige-1.webp', 'images/bag-grey-4.webp', 'images/bag-beige-2.webp'],
    sketch: 'images/sketch-mare.jpg',
    idea: 'A small bag that carries the softness of the padded details on the jacket. We wanted an accessory that looks like a cushion: round, puffy and tufted, but with metal hardware so that it does not look like a toy.',
    material: 'Washed cotton twill with soft padding inside. The strap is made from the same fabric. Metal zip, metal buttons for the tufting, metal snap hooks and a metal strap adjuster.',
    colours: 'Grey and beige. Both have a light, uneven wash that makes the fabric look soft and used. The hardware is dark metal on the grey bag and a lighter silver tone on the beige one.',
    details: ['Puffy, tufted body with buttons', 'Zip closure on the top', 'Adjustable strap with snap hooks, so it can be taken off', 'Worn across the body at the hip', 'One size'],
    inspiration: 'Tufted cushions and sofas, and the shape of clouds. Furniture upholstery turned into a small accessory.'
  },
  {
    id: 'selene', ref: 'UMB-03', name: 'PANTS IN FADED BLACK', category: 'PANTS',
    images: ['images/selene-cut.webp', 'images/selene-back.webp'],
    sketch: 'images/sketch-selene.jpg',
    idea: 'Wide trousers where the cut itself is the statement: a barrel leg that curves outward at the knee. The raised wave seams follow the curve of the leg from hip to hem, and the koi are placed so that they look like they swim along the seams. Front and back are different: the fish are spread over the legs, and the back has one fish on a pocket.',
    material: 'Heavy cotton denim, washed to a faded black with an uneven, slightly marbled surface. The wave seams are tucked and raised out of the fabric itself. The koi are embroidered in metallic gold thread and cobalt blue thread. A small leather patch sits at the back waistband. Metal button and rivets.',
    colours: 'Faded black denim. The fish are gold with cobalt blue fins and spots, and they are the only colour on the garment. The leather patch is black.',
    details: ['Barrel leg', 'V-shaped tabs at the front waistband', 'Five-pocket construction', 'Raised wave seams on the front and the back', 'Koi embroidery on the legs and on a back pocket', 'Leather patch at the back waist'],
    inspiration: 'Japanese koi and moving water. The seams are drawn like ripples, and the fish bring colour into an otherwise black piece.'
  },
  {
    id: 'shirt', ref: 'UMB-04', name: 'T-SHIRT IN WASHED BROWN', category: 'TOPS',
    images: ['images/shirt-cut.webp'],
    sketch: 'images/sketch-shirt.jpg',
    idea: 'A plain shirt that becomes interesting through its construction instead of a print. The body is cut from several panels and joined with open, frayed seams on the outside, so the cut becomes the pattern. There is no pocket and no logo. The shape is boxy and oversized.',
    material: 'Heavyweight cotton jersey, acid-washed so that the colour breaks up into brown and black clouds. Ribbed collar. The seams are left open on the outside, and the raw edges fray with wear.',
    colours: 'Washed brown and black. The acid wash makes every shirt slightly different.',
    details: ['Boxy, oversized fit with dropped shoulders', 'Short sleeves', 'Ribbed round neck', 'Panel seams across the chest, shoulders and back', 'Raw, open seams on the outside'],
    inspiration: 'Dust and rock on the surface of the moon, and worn vintage workwear. The mottled colour looks like weathered stone.'
  },
  {
    id: 'cap', ref: 'UMB-05', name: 'CAP IN WASHED BROWN', category: 'CAPS',
    images: ['images/cap-cut.webp'],
    sketch: 'images/sketch-cap.jpg',
    idea: 'A classic cap changed by one idea: nature growing over an object. Instead of a logo, moss-like embroidery sits in uneven patches, as if the cap had been left outside for years.',
    material: 'Washed cotton twill in a faded brown. The moss is raised embroidery in green yarn with a soft, fuzzy surface. Metal eyelets on the sides and an adjustable fabric strap with a metal buckle at the back.',
    colours: 'Washed brown with several tones of moss green.',
    details: ['Six panels with a curved brim', 'Metal eyelets on the sides', 'Adjustable back strap with metal buckle', 'Raised moss embroidery on the crown, the brim and the sides', 'One size'],
    inspiration: 'Moss and lichen on old stone, on ruins and on abandoned objects.'
  },
  {
    id: 'tycho', ref: 'UMB-06', name: 'PANTS IN RAW INDIGO', category: 'PANTS',
    images: ['images/tycho-cut.webp'],
    sketch: 'images/sketch-tycho.jpg',
    idea: 'Workwear trousers with a different line. Instead of straight panels, the seams curve down the legs and meet in a V at the waist. The large cargo pockets stay practical and give the wide leg some structure.',
    material: 'Stiff raw cotton denim in a deep indigo. It is not pre-washed, so it keeps its dark colour. Contrast topstitching in golden brown thread, metal buttons, rivets and metal buckles on the pocket straps.',
    colours: 'Raw indigo with golden-brown stitching and silver-coloured metal.',
    details: ['High waist with a V-shaped yoke', 'Curved panel seams with contrast topstitching', 'Large cargo pockets with buckled straps and button closures', 'Wide leg'],
    inspiration: 'Classic cargo pants and work trousers. The seams follow the shape of the leg and make the wide fit look more sculpted.'
  }
];

/* ---------------- page ---------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

function li(items) { return '<ul>' + items.map(t => '<li>' + t + '</li>').join('') + '</ul>'; }

$('#designs').innerHTML = DESIGNS.map((d, i) => `
  <article class="design reveal ${i % 2 ? 'flip' : ''}" id="${d.id}">
    <div class="design-media">
      <figure class="design-main"><img id="main-${d.id}" src="${d.images[0]}" alt="${d.name}"></figure>
      ${d.images.length > 1 ? '<div class="design-views">' + d.images.map((src, k) => '<button type="button" class="' + (k ? '' : 'active') + '" data-for="' + d.id + '" data-src="' + src + '" aria-label="View ' + (k + 1) + '"><img src="' + src + '" alt=""></button>').join('') + '</div>' : ''}
      <figure class="design-sketch" hidden><img src="${d.sketch}" alt="Sketch of ${d.name}"><figcaption>SKETCH</figcaption></figure>
    </div>
    <div class="design-text">
      <p class="design-ref">${d.ref} · ${d.category}</p>
      <h2>${d.name}</h2>
      <p class="design-idea">${d.idea}</p>
      <dl>
        <div><dt>MATERIAL</dt><dd>${d.material}</dd></div>
        <div><dt>COLOURS</dt><dd>${d.colours}</dd></div>
        <div><dt>DETAILS</dt><dd>${li(d.details)}</dd></div>
        <div><dt>INSPIRATION</dt><dd>${d.inspiration}</dd></div>
      </dl>
    </div>
  </article>`).join('');

/* show the sketch only if the file exists */
$$('.design-sketch').forEach(f => {
  const im = $('img', f);
  im.addEventListener('load', () => { f.hidden = false; });
  if (im.complete && im.naturalWidth) f.hidden = false;
});

/* switch between views */
$$('.design-views button').forEach(b => b.addEventListener('click', () => {
  $('#main-' + b.dataset.for).src = b.dataset.src;
  $$('.design-views button[data-for="' + b.dataset.for + '"]').forEach(x => x.classList.toggle('active', x === b));
}));

/* background stars */
(function () {
  const box = $('#spaceStars'); let html = '';
  const n = innerWidth < 700 ? 90 : 190;
  for (let i = 0; i < n; i++) {
    const sz = Math.random() < .85 ? 1 : 2;
    html += `<i class="s" style="left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${sz}px;height:${sz}px;opacity:${(.25 + Math.random() * .6).toFixed(2)};animation-delay:${(Math.random() * 5).toFixed(1)}s;animation-duration:${(3 + Math.random() * 5).toFixed(1)}s"></i>`;
  }
  box.innerHTML = html;
})();

/* header, burger, progress, big moon, reveal */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .08 });
$$('.reveal').forEach(el => io.observe(el));
const header = $('#header'), progress = $('#progress'), moon = $('#spaceMoon');
let lastY = 0;
addEventListener('scroll', () => {
  const y = scrollY, vh = innerHeight;
  header.classList.toggle('scrolled', y > 40);
  header.classList.toggle('hide', y > lastY && y > 400);
  lastY = y;
  progress.style.transform = 'scaleX(' + Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - vh)) + ')';
  moon.style.transform = 'translate(-50%, calc(-50% - ' + (y * .04) + 'px)) rotate(' + (y * .012) + 'deg)';
}, { passive: true });
$('#burger').onclick = () => { const o = $('#burger').classList.toggle('open'); $('#mobileMenu').classList.toggle('open', o); $('#burger').setAttribute('aria-expanded', o); };
$$('#mobileMenu a').forEach(a => a.onclick = () => { $('#burger').classList.remove('open'); $('#mobileMenu').classList.remove('open'); });
