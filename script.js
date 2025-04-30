// Play/Pause functionality
const playButton = document.getElementById('play');
let isPlaying = false;

playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playButton.textContent = isPlaying ? '⏸' : '▶';
});

// Add more interactive features here