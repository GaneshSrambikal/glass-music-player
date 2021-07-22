
var theme = document.getElementById('theme');
var githubrepo = document.getElementById('githubrepo')
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
    githubrepo.classList.toggle("dark");
    
};
// show playlists
function showPlaylists(){
    playlist.classList.add("show-list")
}
function closePlaylists(){
    playlist.classList.remove("show-list")
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
        setSongsTimeStamps();
        curTimeStamp();
        setSeeker();
        
    }else{
        audioplayer.pause();
    }
    
}

function curTimeStamp(){
       return setInterval(()=> {
            songCurTime.innerHTML = "0"+(audioplayer.currentTime / 60).toFixed(2);
        },999);
}
function setSeeker(){
    return setInterval(()=>{
        controlPoint.max = (audioplayer.duration && audioplayer.duration / 60 );
        
        controlPoint.min = (audioplayer.currentTime / 60).toFixed(1);
    },999)
}

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

// next track
function nextTrack(){
    
    if(trackCount == 6){
        trackCount = 0;
    }else{
        trackCount++;
    }
    audioplayer.innerHTML = `<source src="${trackCount}.mp3" type="audio/mpeg">`
    audioplayer.load();
    trackname.innerHTML = songNames[trackCount];
    playbtn.classList.toggle("fa-play");
    setTimeout(()=>{
        setSongsTimeStamps();
        audioplayer.play();
        playbtn.classList.toggle("fa-play");
    },2000)
    
}
// prev track
function prevTrack(){
    if(trackCount == 0){
        trackCount = 6;
    }else{
        trackCount--;
    }
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
    trackCount = id;
    
}


