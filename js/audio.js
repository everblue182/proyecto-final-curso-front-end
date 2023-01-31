//雪花歌譚(Sekka-Katan) by Noru for BGM DOVA-SYNDROME OFFICIAL YouTube CHANNEL
window.addEventListener('click', () => {
    document.getElementById("song").play();
});

/*
--------una forma en click--------------------
window.addEventListener('click', () => {
    document.getElementById("song").play();
});


--------una forma con autoplay al cargar--------------------
window.addEventListener('load', () => {
    document.getElementById("song").play();
});

---------otra forma con autoplay al cargar------------------

let source = "audio/雪花歌譚 @ フリーBGM DOVA-SYNDROME OFFICIAL YouTube CHANNEL.mp3";
let audio = new Audio(); 
audio.addEventListener("load", function() { 
  audio.play(); 
}, true);
audio.src = source; 
audio.autoplay = true;
audio.loop = true; **/