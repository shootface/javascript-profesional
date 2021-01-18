function AutoPlay(){}
AutoPlay.prototype.run = function(player){
    console.log(player.muted);
    if(!player.muted){
        console.log(player.muted);
        player.muted = true;
    }
    player.play();
};
export default AutoPlay;