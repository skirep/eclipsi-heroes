# ECLIPSI — Col·lisió d'herois

Un curt animat de 2 minuts i 24 segons, renderitzat en temps real amb Three.js. Superman i Batman s'enfronten a Spider-Man i Iron Man en una ciutat on Gotham i Nova York s'han superposat.

## Història
El nucli Eclipsi falsifica les signatures energètiques dels herois. Cadascú creu que els altres estan destruint la seva ciutat. Cada atac alimenta el portal. Batman detecta l'engany; el sentit aràcnid de Peter el confirma. Els quatre han de coordinar teranyines, repulsors i força kryptoniana per tancar l'esquerda.

## Reproducció
GitHub Pages serveix `docs/`. Prem **Veure el curt** per començar amb música sintetitzada original. Inclou pausa, barra temporal, silenci i pantalla completa. Tecla espai: pausa/reproducció. Compatible amb mòbil i escriptori amb WebGL.

Per executar en local: `python3 -m http.server 8000 --directory docs` i obrir `http://localhost:8000`.

## Implementació
- Three.js 0.170.0 inclòs a `docs/vendor/` (MIT); cap dependència CDN per al motor.
- Personatges 3D estilitzats procedurals amb braços i cames articulats, capes deformables i emblemes.
- 20 plans de càmera, diàlegs en català, ciutat procedural, portal, raigs i teranyines.
- Música original amb Web Audio, activada per un gest de l'usuari.
- Animació determinista: es pot saltar a qualsevol moment amb la barra temporal.
- És una animació web, no un arxiu de vídeo prerenderitzat.

Fan animation no oficial. Personatges Superman i Batman de DC; Spider-Man i Iron Man de Marvel. Sense afiliació a les seves propietàries. No s'inclouen models ni música extrets de pel·lícules.

## Validació
Sintaxi JavaScript comprovada amb Node. També s’han validat 577 instants del curt: totes les transformacions i geometries són finites. La interfície s'ha carregat al navegador de verificació, però aquest entorn no disposa de WebGL: la validació visual del renderitzat 3D queda pendent en un dispositiu amb WebGL.
