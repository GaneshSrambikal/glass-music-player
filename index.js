
var theme = document.getElementById('theme');
var slider = document.getElementById("slider");
var switchs = document.getElementById("switch");
var innerCircle1 = document.getElementById("inner-circle1");
var innerCircle2 = document.getElementById("inner-circle2");
var albumLogo = document.getElementById("music-logo");
var controls = document.getElementById("controls");
var controlPoint = document.getElementById("control-points")
var controlsTime = document.getElementById("controls-time");
var musicName = document.getElementById("music-name");
var playerBtn = document.getElementById("player-btn");
var playlist = document.getElementById("play-list");
var devinfo = document.getElementById("developer-info");
var playbtn = document.getElementById("playbtn");
var audioplayer = document.getElementById("audioplayer");
var songCurTime =  document.getElementById("song-curtime");
var songEndTime = document.getElementById("song-endtime");
var nexttrack = document.getElementById("nexttrack");
var trackname = document.getElementById("music-name");
// var songDuration = audioplayer.duration;
// var songCurTime = audioplayer.currentTime;
// change theme
function changeTheme(){
    theme.classList.toggle("light-theme");
    innerCircle1.classList.toggle("light-theme");
    innerCircle2.classList.toggle("light-theme");
    albumLogo.classList.toggle("dark");
    controls.classList.toggle("dark");
    controls.classList.toggle("bgdark");
    controlPoint.classList.toggle("light");
    controlsTime.classList.toggle("dark");
    controlsTime.classList.toggle("bolder");
    musicName.classList.toggle("dark");
    playerBtn.classList.toggle("dark");
    slider.classList.toggle("leftslider");
    switchs.classList.toggle("bgdark");
    slider.classList.toggle("bglight");
    
};
// show playlists
function showPlaylists(){
    playlist.classList.add("show-list")
    // playlistContent.classList.add("visibles")
    console.log("show list")
}
function closePlaylists(){
    playlist.classList.remove("show-list")
    // playlistContent.classList.remove("visibles")
    console.log("close list")
}
// show developer credits
function showDevCreds(){
    devinfo.classList.add("show-list");
}
function closeDevCreds(){
    devinfo.classList.remove("show-list")
}

// set songs start and end time
function setSongsTimeStamps(){
    var ends = `0${((audioplayer.duration && (audioplayer.duration).toFixed(2) / 60).toFixed(2) )}`
    setTimeout(()=>{
        songEndTime.innerHTML = ends ;
    songCurTime.innerHTML = (audioplayer.currentTime / 60).toFixed(2);
    curTimeStamp();
    },3000)
}
// playpause
function playPause(){
    playbtn.classList.toggle("fa-play");
    if(playbtn.classList.contains("fa-play") == false){
        audioplayer.play();
        // songEndTime.innerHTML = `0${endTimeStamp()}`;
        // songCurTime.innerHTML = `0${(audioplayer.currentTime / 60).toFixed(2)}`;
        setSongsTimeStamps();
        curTimeStamp();
        setSeeker();
        document.getElementById(String(trackCount)).style.backgroundColor = '#636363';
        document.getElementById(String(trackCount)).style.color = '#faf9f9ee';
    }else{
        audioplayer.pause();
    }
    
}
console.log(audioplayer.duration / 60)
console.log(audioplayer.currentTime)
// console.log(controlPoint.max = `0${((audioplayer.duration && (audioplayer.duration).toFixed(2) / 60).toFixed(2) )}`)
console.log(playlist)
function curTimeStamp(){
    
       return setInterval(()=> {
            songCurTime.innerHTML = "0"+(audioplayer.currentTime / 60).toFixed(2);
        },999);
    
}
function setSeeker(){
    
    return setInterval(()=>{
        controlPoint.max = (audioplayer.duration && audioplayer.duration / 60 );
        // controlPoint.min = (audioplayer.currentTime / 60).toFixed(1);
        controlPoint.min = (audioplayer.currentTime / 60).toFixed(1);
    },999)
}
// function endTimeStamp(){
//     var endtime = (audioplayer.duration / 60).toFixed(2) - 0.60;
//     return endtime;
// }
// convert timestamp
function convertTimeStamp(){

}
// set count for total number of tracks
var trackCount = 0;
var totalTrack = 3;
// set track names 
var songNames =[
    "The Weekend - I Feel it coming","Imagine Dragon - Thunder","Post Melone - Sunflower","Billie Eilish, Khalid - lovely","Queen- Bohemian Rhapsody","John Denver - Take me Home, Country Road","The Weekend - Save Your Tears"
]
console.log(playlist.children[trackCount])
// next track
function nextTrack(){
    // audioplayer.currentSrc = 'http://127.0.0.1:5500/Sleep%20Away.mp3';
    if(trackCount > 6){
        trackCount = 0;
    }else{
        trackCount++;
    }
    console.log("next track");
    audioplayer.innerHTML = `<source src="${trackCount}.mp3" type="audio/mpeg">`
    audioplayer.load();
    trackname.innerHTML = songNames[trackCount];
    playbtn.classList.toggle("fa-play");
    setTimeout(()=>{
        setSongsTimeStamps();
        audioplayer.play();
        playbtn.classList.toggle("fa-play");
    },2000)
    document.getElementById(String(trackCount)).style.backgroundColor = '#636363';
    document.getElementById(String(trackCount)).style.color = '#faf9f9ee';
}
// prev track
function prevTrack(){
    // audioplayer.currentSrc = 'http://127.0.0.1:5500/Sleep%20Away.mp3';
    if(trackCount < 0){
        trackCount = 6;
    }else{
        trackCount--;
    }
    console.log("prev track");
    audioplayer.innerHTML = `<source src="${trackCount}.mp3" type="audio/mpeg">`
    audioplayer.load();
    trackname.innerHTML = songNames[trackCount];
    playbtn.classList.toggle("fa-play");
    setTimeout(()=>{
        setSongsTimeStamps();
        audioplayer.play();
        playbtn.classList.toggle("fa-play");
    },6000)
    
}
function playSelectedSong(id){
    for(let i=0;i <=6;i++){
        if(i == id){
            document.getElementById(String(id)).style.backgroundColor = '#636363';
            document.getElementById(String(id)).style.color = '#faf9f9ee';
        }
        // else{
        //     document.getElementById(String(i)).style.backgroundColor = 'none';
        //     document.getElementById(String(i)).style.color = '#636363';
        // }
    }
    // document.getElementById(String(trackCount)).style.backgroundColor = '#636363';
    // document.getElementById(String(trackCount)).style.color = '#faf9f9ee';
    // document.getElementById(String(id)).style.backgroundColor = '#636363';
    // document.getElementById(String(id)).style.color = '#faf9f9ee';
    audioplayer.innerHTML = `<source src="${id}.mp3" type="audio/mpeg">`
    audioplayer.load();
    trackname.innerHTML = songNames[id];
    playbtn.classList.toggle("fa-play");
    setTimeout(()=>{
        setSongsTimeStamps();
        audioplayer.play();
        playbtn.classList.toggle("fa-play");
    },6000);
    closePlaylists();
    
}
console.log(audioplayer.currentSrc)

