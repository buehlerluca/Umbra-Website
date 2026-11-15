/* UMBRA: texts and images for the designs page (design.html).
   To change a text, edit it here. Sketch images are optional: put the file in images/ with the name given in "sketch". */
const DESIGNS = [
  {
    id: 'hecate', ref: 'UMB-01', name: 'JACKET', category: 'JACKEN',
    images: ['images/hecate-brown-1.webp', 'images/hecate-brown-2.webp', 'images/hecate-brown-3.webp'],
    sketch: 'images/sketch-hecate.jpg',
    idea: "Eine kurze Jacke mit betontem Oberkörper. Die Schultern tragen den Grossteil des Designs, mit gestepptem Labyrinth-Muster und erhabenen Punkten, während die Brust mit senkrechten Falten ruhig bleibt. Die kurze Länge und die weiten Ärmel halten die Jacke fern von einer klassischen Rennjacke und passen gut zu weiten Hosen.",
    material: "Schwerer Baumwoll-Twill, gewaschen, damit die Oberfläche abgetragen und leicht staubig wirkt. Die Schulterteile sind gepolstert und gesteppt. Reissverschluss vorne und Ösen an den Schultern aus Metall.",
    colours: "Drei Farbvarianten: Braungrau (die Hauptfarbe), verwaschenes Grau und Rot. Die Wäsche sorgt für ungleichmässig helle und dunkle Stellen, am stärksten an Brust und Ärmelabschlüssen.",
    details: ["Stehkragen und durchgehender Reissverschluss vorne","Gestepptes Labyrinth-Muster auf Schultern und Rücken","Erhabene Punktstruktur an den Oberärmeln","Senkrechte Falten auf der Brust","Weite Ärmel mit spitzen Abschlüssen","Ösen an den Schultern"],
    inspiration: "Das Labyrinth-Muster stammt von Hirnkorallen. Die erhabenen Punkte sind den Kratern auf Gestein und auf der Mondoberfläche nachempfunden, was die Jacke mit dem UMBRA-Mondlogo verbindet."
  },
  {
    id: 'mare', ref: 'UMB-02', name: 'BAG', category: 'TASCHEN',
    images: ['images/bag-grey-1.webp', 'images/bag-beige-1.webp', 'images/bag-grey-4.webp', 'images/bag-beige-2.webp'],
    sketch: 'images/sketch-mare.jpg',
    idea: "Eine kleine Tasche, die die Weichheit der gepolsterten Details der Jacke aufnimmt. Wir wollten ein Accessoire, das wie ein Kissen aussieht: rund, gepolstert und mit Knöpfen abgesteppt, aber mit Metallteilen, damit es nicht wie Spielzeug wirkt.",
    material: "Gewaschener Baumwoll-Twill mit weicher Polsterung im Inneren. Der Gurt ist aus demselben Stoff. Reissverschluss, Knöpfe für die Steppung, Karabiner und Gurtversteller aus Metall.",
    colours: "Grau und Beige. Beide haben eine leichte, ungleichmässige Wäsche, die den Stoff weich und getragen wirken lässt. Die Beschläge sind bei der grauen Tasche dunkles Metall und bei der beigen ein hellerer Silberton.",
    details: ["Gepolsterter Körper mit Knöpfen","Reissverschluss oben","Verstellbarer Gurt mit Karabinern, dadurch abnehmbar","Wird quer über den Körper an der Hüfte getragen","Einheitsgrösse"],
    inspiration: "Gepolsterte Kissen und Sofas sowie die Form von Wolken. Möbelpolsterung, übersetzt in ein kleines Accessoire."
  },
  {
    id: 'selene', ref: 'UMB-03', name: 'PANTS IN FADED BLACK', category: 'HOSEN',
    images: ['images/selene-cut.webp', 'images/selene-back.webp'],
    sketch: 'images/sketch-selene.jpg',
    idea: "Weite Hose, bei der der Schnitt selbst die Aussage ist: ein Fassbein, das am Knie nach aussen schwingt. Die erhabenen Wellen-Nähte folgen der Rundung des Beins von der Hüfte bis zum Saum, und die Koi sind so platziert, dass sie an den Nähten entlangzuschwimmen scheinen. Vorder- und Rückseite sind verschieden: Die Fische verteilen sich über die Beine, hinten sitzt ein Fisch auf einer Tasche.",
    material: "Schwerer Baumwoll-Denim, gewaschen zu einem verblichenen Schwarz mit ungleichmässiger, leicht marmorierter Oberfläche. Die Wellen-Nähte sind aus dem Stoff selbst gelegt und erhaben. Die Koi sind mit metallischem Goldgarn und kobaltblauem Garn gestickt. Am hinteren Bund sitzt ein kleines Lederpatch. Knopf und Nieten aus Metall.",
    colours: "Verblichenes Schwarz. Die Fische sind gold mit kobaltblauen Flossen und Flecken und die einzige Farbe am Kleidungsstück. Das Lederpatch ist schwarz.",
    details: ["Fassbein","V-förmige Laschen am vorderen Bund","Fünf-Taschen-Konstruktion","Erhabene Wellen-Nähte vorne und hinten","Koi-Stickerei auf den Beinen und auf einer Gesässtasche","Lederpatch am hinteren Bund"],
    inspiration: "Japanische Koi und bewegtes Wasser. Die Nähte sind wie Wellenringe gezeichnet, und die Fische bringen Farbe in ein sonst schwarzes Teil."
  },
  {
    id: 'shirt', ref: 'UMB-04', name: 'T-SHIRT IN WASHED BROWN', category: 'OBERTEILE',
    images: ['images/shirt-cut.webp'],
    sketch: 'images/sketch-shirt.jpg',
    idea: "Ein schlichtes Shirt, das durch seine Konstruktion interessant wird statt durch einen Print. Der Körper ist aus mehreren Teilen geschnitten und aussen mit offenen, ausgefransten Nähten verbunden, sodass der Schnitt zum Muster wird. Es gibt keine Tasche und kein Logo. Die Form ist kastig und oversized.",
    material: "Schwerer Baumwoll-Jersey, mit Säurewäsche behandelt, sodass die Farbe in braune und schwarze Wolken aufbricht. Gerippter Kragen. Die Nähte bleiben aussen offen, und die rohen Kanten fransen mit dem Tragen aus.",
    colours: "Verwaschenes Braun und Schwarz. Durch die Säurewäsche ist jedes Shirt ein bisschen anders.",
    details: ["Kastiger, oversized Schnitt mit überschnittenen Schultern","Kurze Ärmel","Gerippter Rundhalsausschnitt","Teilungsnähte über Brust, Schultern und Rücken","Rohe, offene Nähte aussen"],
    inspiration: "Staub und Gestein auf der Mondoberfläche sowie abgetragene Vintage-Arbeitskleidung. Die gesprenkelte Farbe sieht aus wie verwitterter Stein."
  },
  {
    id: 'cap', ref: 'UMB-05', name: 'CAP IN WASHED BROWN', category: 'KAPPEN',
    images: ['images/cap-cut.webp'],
    sketch: 'images/sketch-cap.jpg',
    idea: "Eine klassische Kappe, verändert durch eine einzige Idee: Natur, die einen Gegenstand überwächst. Statt eines Logos sitzt eine moosartige Stickerei in unregelmässigen Flecken, als hätte die Kappe jahrelang draussen gelegen.",
    material: "Gewaschener Baumwoll-Twill in verblichenem Braun. Das Moos ist erhabene Stickerei aus grünem Garn mit weicher, flauschiger Oberfläche. Metallösen an den Seiten und ein verstellbares Stoffband mit Metallschnalle hinten.",
    colours: "Verwaschenes Braun mit mehreren Moosgrün-Tönen.",
    details: ["Sechs Segmente mit gebogenem Schirm","Metallösen an den Seiten","Verstellbares Band hinten mit Metallschnalle","Erhabene Moosstickerei auf Kopfteil, Schirm und Seiten","Einheitsgrösse"],
    inspiration: "Moos und Flechten auf altem Stein, auf Ruinen und auf verlassenen Gegenständen."
  },
  {
    id: 'tycho', ref: 'UMB-06', name: 'PANTS', category: 'HOSEN',
    images: ['images/tycho-cut.webp','images/tycho-black.webp','images/tycho-grey.webp','images/tycho-brown.webp'],
    sketch: 'images/sketch-tycho.jpg',
    idea: "Arbeitshose mit einer anderen Linie. Statt gerader Teile verlaufen die Nähte geschwungen über die Beine und treffen sich am Bund in einem V. Die grossen Cargo-Taschen bleiben praktisch und geben dem weiten Bein Struktur.",
    material: "Steifer, roher Baumwoll-Denim in tiefem Indigo. Er ist nicht vorgewaschen und behält deshalb seine dunkle Farbe. Kontrastnähte in goldbraunem Garn, Knöpfe, Nieten und Schnallen an den Taschenriemen aus Metall.",
    colours: "Vier Farbvarianten: Rohes Indigo (die Hauptfarbe), Schwarz, Grau und Dunkelbraungrau. Die Kontrastnähte bleiben hell, das Metall silberfarben.",
    details: ["Hoher Bund mit V-förmiger Passe","Geschwungene Teilungsnähte mit Kontrastnähten","Grosse Cargo-Taschen mit Schnallenriemen und Knopfverschluss","Weites Bein"],
    inspiration: "Klassische Cargo- und Arbeitshosen. Die Nähte folgen der Form des Beins und lassen die weite Passform skulpturaler wirken."
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
      ${d.images.length > 1 ? '<div class="design-views">' + d.images.map((src, k) => '<button type="button" class="' + (k ? '' : 'active') + '" data-for="' + d.id + '" data-src="' + src + '" aria-label="Ansicht ' + (k + 1) + '"><img src="' + src + '" alt=""></button>').join('') + '</div>' : ''}
      <figure class="design-sketch" hidden><img src="${d.sketch}" alt="Skizze von ${d.name}"><figcaption>SKIZZE</figcaption></figure>
    </div>
    <div class="design-text">
      <p class="design-ref">${d.ref} · ${d.category}</p>
      <h2>${d.name}</h2>
      <p class="design-idea">${d.idea}</p>
      <dl>
        <div><dt>MATERIAL</dt><dd>${d.material}</dd></div>
        <div><dt>FARBEN</dt><dd>${d.colours}</dd></div>
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


/* custom cursor (same dot as on the shop page): the normal mouse pointer is hidden by the stylesheet, so the page needs its own */
(function () {
  if (matchMedia('(hover: none)').matches) return;
  const cur = $('#cursor'); if (!cur) return;
  let cx = 0, cy = 0, tx = 0, ty = 0;
  addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; cur.classList.add('on'); });
  document.addEventListener('mouseleave', () => cur.classList.remove('on'));
  document.addEventListener('mouseenter', () => cur.classList.add('on'));
  (function loop() {
    cx += (tx - cx) * .22; cy += (ty - cy) * .22;
    cur.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', e => {
    const small = e.target.closest('button, a, input, textarea');
    cur.classList.remove('big');
    cur.classList.toggle('small', !!small);
  });
})();
