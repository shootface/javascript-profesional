import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({el:video, plugins:[
    new AutoPlay()
]});
const buttonPlay = document.querySelector('#play');
const buttonMuted = document.querySelector('#mute');

buttonPlay.onclick = () => player.togglePlay();
buttonMuted.onclick = () => {
    if(player.media.muted){
        player.unmute();
    }else{
        player.mute();
    }
}