console.log("sound.js loaded");

/**
 * @type {p5.SoundFile}
 */
let backgroundMusic;
let isMusicPlaying = false;

function loadBackgroundMusic() {
    console.log("Loading background music");
    backgroundMusic = loadSound('./audio/background.mp3', 
        () => {
            console.log("Background music loaded successfully");
            // Remove the automatic playback here
        },
        (error) => console.error("Error loading background music:", error)
    );
}

function playBackgroundMusic() {
    if (backgroundMusic && !backgroundMusic.isPlaying()) {
        console.log("Playing background music");
        backgroundMusic.loop();
        isMusicPlaying = true;
        updateMusicButton();
    }
}

function stopBackgroundMusic() {
    if (backgroundMusic && backgroundMusic.isPlaying()) {
        console.log("Stopping background music");
        backgroundMusic.stop();
        isMusicPlaying = false;
        updateMusicButton();
    }
}

function toggleBackgroundMusic() {
    if (isMusicPlaying) {
        stopBackgroundMusic();
    } else {
        playBackgroundMusic();
    }
}

function updateMusicButton() {
    const toggleMusicBtn = document.getElementById('toggleMusic');
    if (isMusicPlaying) {
        toggleMusicBtn.textContent = 'Music: On';
        toggleMusicBtn.classList.remove('btn-primary');
        toggleMusicBtn.classList.add('btn-success');
    } else {
        toggleMusicBtn.textContent = 'Music: Off';
        toggleMusicBtn.classList.remove('btn-success');
        toggleMusicBtn.classList.add('btn-primary');
    }
}

window.loadBackgroundMusic = loadBackgroundMusic;
window.playBackgroundMusic = playBackgroundMusic;
window.stopBackgroundMusic = stopBackgroundMusic;
window.toggleBackgroundMusic = toggleBackgroundMusic;
window.updateMusicButton = updateMusicButton;