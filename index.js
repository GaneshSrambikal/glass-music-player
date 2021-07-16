
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
    
}