# ECLIPSI — Col·lisió d'herois

Curt Three.js de 2 minuts i 24 segons. Superman i Batman contra Spider-Man i Iron Man; un nucli falsifica les signatures dels herois per alimentar una esquerda entre universos.

**Veure:** https://skirep.github.io/eclipsi-heroes/

## Versió 3

- Quatre models específics amb vestits i textures propis, esquelets i animacions incloses. Els antics maniquins recolorits ja no es carreguen.
- Superman: vol; Batman: cops i puntades; Spider-Man: balanceig i posició de repòs; Iron Man: seqüència de vol. Desplaçament general controlat per la coreografia del curt.
- Terrassa amb instal·lacions, cables, torre d'aigua, bassal amb reflexió planar, façanes amb finestres instanciades, arquitectura gòtica i torres modernes.
- Núvols procedurals, pluja, boira, llampecs puntuals, ombres, reflexos dels materials i postprocessat amb bloom suau i gra.
- BSO original **Eclipsi / Four Signals**, renderitzada amb instruments mostrejats. Quatre passatges, motiu propi, percussió i accents coordinats amb el curt. MP3 de 160 kbps normalitzat a -16 LUFS.
- Pausa, barra temporal, pantalla completa i silenci. La música es sincronitza en reprendre, saltar o reiniciar.

Els models són models de videojoc texturitzats, no dobles digitals fotorealistes de pel·lícula. L'escenari és un mateix conjunt coherent de Gotham/Manhattan; no s'hi han afegit capítols nous.

## Executar

GitHub Pages serveix `docs/`. Localment: `python3 -m http.server 8000 --directory docs`, després `http://localhost:8000`.

Motor i models inclosos al repositori, sense CDN per al renderitzat. Només la tipografia té una alternativa externa opcional. Requereix WebGL i un gest de l'usuari per iniciar el so.

## BSO reproduïble

`tools/compose-score.cjs` conté els 2.768 esdeveniments musicals generats de manera determinista. Instal·la `tools/package.json` amb npm, obtén GeneralUser GS des de la pàgina oficial de S. Christian Collins, i executa:

```sh
cd tools
npm install
node compose-score.cjs /path/to/GeneralUser-GS.sf2 score.wav
ffmpeg -i score.wav -af 'loudnorm=I=-16:TP=-1.5:LRA=10' -codec:a libmp3lame -b:a 160k ../docs/assets/eclipsi-score.mp3
```

## Validació

Sintaxi dels mòduls comprovada. Càrrega real dels quatre GLB i 289 instants de la coreografia validats: coordenades finites i cap deformació explosiva. Proves de pausa, seek i silenci de la BSO; enregistrament de 144 segons amb pic mesurat de -1,7 dBFS. Revisió de geometria amb renderitzat de comprovació independent.

El navegador de verificació no permet crear contextos WebGL; el renderitzat final de shaders, reflexió i llums en el navegador queda pendent d'una comprovació en un dispositiu amb WebGL. No s'ha substituït aquesta limitació per una afirmació de revisió visual completa.

## Crèdits

[Crèdits visibles a la web](docs/credits.html) i [fonts, llicències i adaptacions](docs/assets/ATTRIBUTION.md). Fan animation no oficial amb personatges de DC i Marvel. Three.js MIT.
