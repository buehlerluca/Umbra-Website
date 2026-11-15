# UMBRA – Projektbriefing (für einen neuen Chat)

## Was das ist
Ein Online-Shop-Look für die fiktive Marke **UMBRA** (Kleider/Fashion). Es ist ein **Projekt, kein echter Shop**: Es soll komplett wie ein Shop aussehen, es wird aber nichts verkauft (die Kleider können nicht hergestellt werden). Später könnte daraus ein echter Shop mit eigenen Produkten und Skizzen werden. Gebaut von dem Nutzer und einem Kollegen. **Auf der Seite dürfen keine persönlichen Infos stehen** (keine Namen, Herkunft, Adresse, "Über uns").

## Marke und Design
- Name: **UMBRA**. Logo: weißer Mond mit Kratern (`images/umbra-moon.png`, weiß auf Schwarz).
- Farbpalette: `#C48D41` (Gold), `#543B26` (Braun), `#454344` (Graphit), `#CFCFCF` (Silber), `#000000` (Schwarz). Hintergrund schwarz.
- Schriftart: **Stalinist One** (Google Fonts), `font-family: "Stalinist One", sans-serif; font-weight: 400;`. Für kleine Texte wird eine Monospace-Schrift verwendet.
- Stil: Nische, eigenartig, ansprechend, nicht wie H&M. Wortwahl in Großbuchstaben, Produktnamen in Anführungszeichen, zum Beispiel `'TYCHO' ...`.
- Vorbilder, vor allem Badson: https://www.badson.us/pages/collections (Hauptvorbild). Weitere: https://outfit.hellohello.is/ (riesige Schrift, horizontales Scrollen) und https://d5ove.com/. Von Badson übernommen: Menü mit wenigen Großbuchstaben-Punkten, Kollektionen als Textzeile (SALT 2026, LIGHT 2025 ...), Streifen mit großen Bildern, Raster aus Bild/Titel/Preis, schlichter Footer, Warenkorb und Kontakt als Seitenleisten.

## Gewünschtes Verhalten
- Interaktiv: Beim Scrollen bewegt sich etwas (Parallax, horizontaler Streifen).
- Beim Hover über Produkte oder Buttons kommt das Bild "ein bisschen aus dem Bild heraus".
- Offene Plätze für weitere Kleider, die der Nutzer später als Bilder schickt (Slots mit "COMING SOON").
- Preise vorerst $0.00 USD (der Nutzer ändert sie später). Namen der Produkte dürfen bleiben oder geändert werden.
- Checkout und Kontaktformular tun nichts, sie zeigen "PROTOTYPE".

## Aktueller Stand (gebaut, aber noch nicht im Browser getestet)
Ordner: `Umbra Website/` mit `index.html`, `style.css`, `app.js`, `images/`.
Enthält: Hero mit schwebendem Mond und Maus-/Scroll-Effekt, Laufband, horizontal scrollender Featured-Streifen, Kollektionsleiste (funktionierende Filter), Kategorie-Filter, 4-Spalten-Raster (mindestens 12 Karten, Rest = leere Slots), Produkt-Detailansicht mit Zoom und Größenwahl, Warenkorb- und Kontakt-Seitenleiste, eigener Cursor, Körnung, Footer mit großem UMBRA.
Produkte (Namen änderbar): 'TYCHO' Cargo-Denim (tycho.jpg), 'MARE' Puff-Tasche (mare.webp), 'REGOL' Jacke mit Mond (regol.webp), 'SELENE' Koi-Hose (selene.jpg), 'HECATE' Oxblood-Jacke (hecate.jpg, auf 1400 px verkleinert).
Neue Produkte: Bild in `images/` legen und einen Eintrag in `PRODUCTS` (oben in `app.js`) hinzufügen. Leere Slots passen sich automatisch an.

## Offen / nächste Schritte
- Im Browser testen und Feinschliff (Tempo der Animationen, Layout, Mobile).
- Weitere Kleider vom Nutzer eintragen.
- Kollektionsnamen (SYZYGY 2026, PERIGEE 2027, NADIR 2027, APSIS 2028) sind Platzhalter.

## Sprache
Der Nutzer schreibt Deutsch. Antworten auf Deutsch, Code und Texte auf der Website auf Englisch.
