const playButton = document.getElementById('play-button');
const audioPlayer = document.getElementById('audio-player');

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

customElements.define('play-button', playButton);