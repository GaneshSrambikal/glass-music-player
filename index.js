var theme = document.getElementById('theme');
var githubrepo = document.getElementById('githubrepo');
var slider = document.getElementById('slider');
var switchs = document.getElementById('switch');
var innerCircle1 = document.getElementById('inner-circle1');
var innerCircle2 = document.getElementById('inner-circle2');
var albumLogo = document.getElementById('music-logo');
var controls = document.getElementById('controls');
var controlPoint = document.getElementById('control-points');
var controlsTime = document.getElementById('controls-time');
var musicName = document.getElementById('music-name');
var playerBtn = document.getElementById('player-btn');
var playlist = document.getElementById('play-list');
var devinfo = document.getElementById('developer-info');
var playbtn = document.getElementById('playbtn');
var audioPlayer = document.getElementById('audioplayer');
var songCurTime = document.getElementById('song-curtime');
var songEndTime = document.getElementById('song-endtime');
var nexttrack = document.getElementById('nexttrack');
var trackname = document.getElementById('music-name');

// change theme
function changeTheme() {
  theme.classList.toggle('light-theme');
  innerCircle1.classList.toggle('light-theme');
  innerCircle2.classList.toggle('light-theme');
  albumLogo.classList.toggle('dark');
  controls.classList.toggle('dark');
  controls.classList.toggle('bgdark');
  controlPoint.classList.toggle('light');
  controlsTime.classList.toggle('dark');
  controlsTime.classList.toggle('bolder');
  musicName.classList.toggle('dark');
  playerBtn.classList.toggle('dark');
  slider.classList.toggle('leftslider');
  switchs.classList.toggle('bgdark');
  slider.classList.toggle('bglight');
  githubrepo.classList.toggle('dark');
}
// show playlists
function showPlaylists() {
  playlist.classList.add('show-list');
}
function closePlaylists() {
  playlist.classList.remove('show-list');
}
// show developer credits
function showDevCreds() {
  devinfo.classList.add('show-list');
}
function closeDevCreds() {
  devinfo.classList.remove('show-list');
}

// update the seek bar and time display
audioPlayer.addEventListener('timeupdate', () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  controlPoint.value = progress;

  // update current time
  const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
  const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
  songCurTime.textContent = `${currentMinutes}:${
    currentSeconds < 10 ? '0' + currentSeconds : currentSeconds
  }`;
});

// set total duration of song
audioPlayer.addEventListener('loadedmetadata', () => {
  const totalMinutes = Math.floor(audioPlayer.duration / 60);
  const totalSeconds = Math.floor(audioPlayer.duration % 60);
  songEndTime.textContent = `${totalMinutes}:${
    totalSeconds < 10 ? '0' + totalSeconds : totalSeconds
  }`;
});

// Fallback in case 'loadedmetadata' doesn't capture the duration correctly
audioPlayer.addEventListener('canplaythrough', () => {
  if (!isNaN(audioPlayer.duration)) {
    const totalMinutes = Math.floor(audioPlayer.duration / 60);
    const totalSeconds = Math.floor(audioPlayer.duration % 60);
    songEndTime.textContent = `${totalMinutes}:${
      totalSeconds < 10 ? '0' + totalSeconds : totalSeconds
    }`;
  }
});

// seek functionality which dragable
controlPoint.addEventListener('input', () => {
  const seekTo = (controlPoint.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTo;
});

// playpause
function playPause() {
  playbtn.classList.toggle('fa-play');
  if (playbtn.classList.contains('fa-play') == false) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

// set count for total number of tracks
var trackCount = 0;
var totalTrack = 3;
// set track names
var songNames = [
  'The Weekend - I Feel it coming',
  'Imagine Dragon - Thunder',
  'Post Melone - Sunflower',
  'Billie Eilish, Khalid - lovely',
  'Queen- Bohemian Rhapsody',
  'John Denver - Take me Home, Country Road',
  'The Weekend - Save Your Tears',
];

// next track
function nextTrack() {
  playbtn.classList.add('fa-play');
  if (trackCount == 6) {
    trackCount = 0;
  } else {
    trackCount++;
  }
  audioPlayer.innerHTML = `<source src="audio/${trackCount}.mp3" type="audio/mpeg">`;
  audioPlayer.load();
  trackname.innerHTML = songNames[trackCount];
  setTimeout(() => {
    audioPlayer.play();
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');
  }, 1000);
}
// prev track
function prevTrack() {
  playbtn.classList.add('fa-play');
  if (trackCount == 0) {
    trackCount = 6;
  } else {
    trackCount--;
  }
  audioPlayer.innerHTML = `<source src="audio/${trackCount}.mp3" type="audio/mpeg">`;
  audioPlayer.load();
  trackname.innerHTML = songNames[trackCount];
  setTimeout(() => {
    audioPlayer.play();
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');
  }, 1000);
}
function playSelectedSong(id) {
  audioPlayer.innerHTML = `<source src="audio/${id}.mp3" type="audio/mpeg">`;
  audioPlayer.load();
  trackname.innerHTML = songNames[id];
  playbtn.classList.add('fa-pause');
  playbtn.classList.remove('fa-play');
  audioPlayer.play();
  closePlaylists();
  trackCount = id;
}
