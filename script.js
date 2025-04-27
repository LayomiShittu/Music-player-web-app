const audioPlayer = document.getElementById('audioPlayer');

// Play a selected song
function playSong(songPath) {
    audioPlayer.src = songPath;
    audioPlayer.play();
}

// Pause the current song
function pauseSong() {
    audioPlayer.pause();
}