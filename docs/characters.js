import * as T from './vendor/three.module.js';
import {GLTFLoader} from './vendor/GLTFLoader.js';
const loader=new GLTFLoader();
const specs=[{type:'super',file:'superman.glb',height:3.18,idle:'Male Dynamic Pose',fight:'Flying',air:'Flying'},{type:'bat',file:'batman.glb',height:3.14,idle:'Male Dynamic Pose',fight:'Punch Combo',air:'Falling Idle'},{type:'spider',file:'spiderman.glb',height:2.97,idle:'stand',fight:'swingStart',air:'hanging'},{type:'iron',file:'ironman.glb',height:3.2,idle:'Take 001',fight:'Take 001',air:'Take 001'}];
function actualBounds(model){model.updateMatrixWorld(true);let b=new T.Box3();model.traverse(o=>{if(!o.isMesh||!o.visible)return;if(o.isSkinnedMesh)o.skeleton.update();let p=o.geometry.attributes.position,v=new T.Vector3();for(let i=0;i<p.count;i++){o.getVertexPosition(i,v);b.expandByPoint(v.applyMatrix4(o.matrixWorld))}});return b}
function clipClean(clip,type){const c=clip.clone();c.tracks=c.tracks.filter(t=>!t.name.endsWith('.position')&&!t.name.endsWith('.scale'));return c}
export async function createCharacters(scene){let loaded=await Promise.all(specs.map(s=>loader.loadAsync(new URL('./assets/'+s.file,import.meta.url).href)));return loaded.map((asset,i)=>{const spec=specs[i],root=new T.Group(),model=asset.scene;root.add(model);scene.add(root);
 model.traverse(o=>{if(o.isMesh){if(spec.type==='iron'&&!o.isSkinnedMesh){o.visible=false;return}o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;for(let m of (Array.isArray(o.material)?o.material:[o.material])){m.metalness=spec.type==='iron'?.78:spec.type==='bat'?.28:.08;m.roughness=spec.type==='iron'?.28:spec.type==='bat'?.56:.66;m.envMapIntensity=spec.type==='iron'?1.5:.7;if(m.map)m.map.anisotropy=4}}});
 const mixer=new T.AnimationMixer(model),clips=asset.animations.map(c=>clipClean(c,spec.type));let actions={};for(let c of clips)actions[c.name]=mixer.clipAction(c);const pick=name=>actions[name]||Object.values(actions)[0];let active=pick(spec.idle);active?.play();mixer.setTime(.6);
 let box=actualBounds(model),height=box.max.y-box.min.y;if(!Number.isFinite(height)||height<.001)throw Error('Invalid model '+spec.type);let scale=spec.height/height,center=box.getCenter(new T.Vector3());model.scale.multiplyScalar(scale);model.position.sub(new T.Vector3(center.x,box.min.y,center.z).multiplyScalar(scale));model.updateMatrixWorld(true);
 const arms=[0,1].map(()=>({root:new T.Object3D(),elbow:new T.Object3D()})),legs=[0,1].map(()=>({root:new T.Object3D(),knee:new T.Object3D()}));let bones=[];model.traverse(o=>{if(o.isBone)bones.push(o)});
 root.userData={type:spec.type,model,mixer,actions,pick,active,spec,arms,legs,bones};
 // Native capes in these models are rigidly bound. An independent cloth cape
 // adds a continuous wind-driven silhouette, without moving armor/skin pieces.
 if(spec.type==='super'||spec.type==='bat'){let w=spec.type==='bat'?1.75:1.42,h=2.48,g=new T.PlaneGeometry(w,h,22,32);g.translate(0,-h/2,0);let m=new T.MeshStandardMaterial({color:spec.type==='super'?0x760c23:0x070b11,side:T.DoubleSide,roughness:.82});let cape=new T.Mesh(g,m);cape.position.set(0,2.68,-.22);cape.castShadow=true;root.add(cape);root.userData.cape=cape;root.userData.rest=g.attributes.position.array.slice()}
 return root})}
export function skinPose(h,t){let d=h.userData;let fight=t>=28&&t<70,air=h.position.y>1.2;let wanted=d.pick(fight?d.spec.fight:air?d.spec.air:d.spec.idle);if(wanted!==d.active){d.active?.stop();d.active=wanted;wanted?.reset().play()}
 // All clips contain rotations only. Root motion cannot drag a hero away from
 // the film's deliberate world-space choreography or introduce floor drift.
 const speed=fight?1.05:.65;let clipTime=t*speed+(d.type==='spider'?.8:0);d.mixer.setTime(clipTime);d.model.updateMatrixWorld(true)}
