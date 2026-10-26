// One authored recording, not a live loop: deterministic sync when pausing,
// seeking, restarting or returning from a hidden browser tab.
export class Score {
 constructor(onState){this.media=new Audio(new URL('./assets/eclipsi-score.mp3',import.meta.url).href);this.media.preload='auto';this.media.volume=.76;this.muted=true;this.media.muted=true;this.onState=onState;this.lastSeek=-1;this.media.addEventListener('error',()=>onState?.('SO NO DISPONIBLE'));}
 enable(){this.muted=false;this.media.muted=false;this.onState?.('SO ON')}
 toggle(){this.muted=!this.muted;this.media.muted=this.muted;this.onState?.(this.muted?'SO OFF':'SO ON')}
 sync(t,playing,force=false){if(force||Math.abs(this.media.currentTime-t)>.3){try{this.media.currentTime=t}catch{}}if(playing){if(this.media.paused)this.media.play().catch(()=>this.onState?.('ACTIVA EL SO'))}else if(!this.media.paused)this.media.pause()}
}
