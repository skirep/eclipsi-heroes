# Eclipsi v3 — model and music credits

The four character meshes are now distinct textured and rigged character assets, not recolored human mannequins. Their original materials and skin weights are retained, with metalness/roughness adjusted for the scene. Animation root translation is removed to keep characters on the film's own paths; wind-driven capes are added.

| File | Model / creator | Source |
|---|---|---|
| superman.glb | Hatch Superman — nitwit.friends | https://sketchfab.com/3d-models/e023b533044a4c37a8f899c9517c9804 |
| batman.glb | Hatch Batman — nitwit.friends | https://sketchfab.com/3d-models/d5bf95c4f6ca4752aedc462307c46f5c |
| spiderman.glb | Spiderman — nitwit.friends | https://sketchfab.com/3d-models/b0e695e8483f46f88943173a70be9709 |
| ironman.glb | IRONMAN — NORBERTO-3D | https://sketchfab.com/3d-models/22a00b0477d7475495938f80aeaad1cf |

The source pages label these models CC Attribution. CC BY 4.0: https://creativecommons.org/licenses/by/4.0/ . The GLBs were retrieved from the public Objaverse dataset (allenai/objaverse on Hugging Face), using its `object-paths.json.gz` mapping for these exact model UIDs. The original authors' copyright and the underlying DC/Marvel character rights remain with their respective owners. This is an unofficial fan animation, with no affiliation or endorsement.

## Original soundtrack

**Eclipsi / Four Signals**, 2:24. Original composition for this film. D minor, 112 BPM, with a major resolution. Four sections: restrained piano and strings; combat ostinato, horns and percussion; a sparse harp/synth reveal; brass-led alliance reprise. Scene impacts at 28, 42, 56, 63, 84, 98, 112 and 126 seconds.

Recorded from a generated MIDI event score using GeneralUser GS by **S. Christian Collins**. Author and license: https://www.schristiancollins.com/generaluser and https://github.com/mrbumpy409/GeneralUser-GS . The author's license permits publishing musical recordings made with the bank. The SoundFont is used only during rendering and is not bundled in this repository.

Render engine: js-synthesizer / FluidSynth (tooling only, not shipped in the web app). Delivered as a 160 kbps MP3, normalized to -16 LUFS, with a four-second ending fade. Playback follows pause, seek, replay and hidden-tab transitions.

## Environment and rendering

Rooftop, facades, cathedral towers, service equipment, water tower, weather, sky shader and film postprocess: created in this repository. Concrete texture is procedurally generated locally in the browser. No additional environment art downloads are required.

Three.js, GLTFLoader and Reflector: Three.js contributors, MIT. See `../vendor/THREE-LICENSE.txt`.

## Previous assets

`human-athletic.glb` and `hair.glb` are retained for source history but are no longer loaded. They derive from MakeHuman CC0 system assets exported by kblood/CharacterCreator, with morphs baked and unused targets removed. See https://github.com/kblood/CharacterCreator/blob/master/LICENSE-NOTES.md . No CharacterCreator application code was imported.
