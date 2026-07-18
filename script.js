const surpriseButton = document.getElementById("surpriseButton");

const birthdayMessage = document.getElementById("birthdayMessage");

const slideshowImage = document.getElementById("slideshowImage");

const photoCaption = document.getElementById("photoCaption");


// Open Birthday Surprise

surpriseButton.addEventListener("click", function () {

    // Hide Opening Section

    document.querySelector(".birthday-container").style.display = "none";


    // Show Birthday Message

    birthdayMessage.style.display = "block";


    // Scroll to Birthday Message

    birthdayMessage.scrollIntoView({
        behavior: "smooth"
    });


    // Start Confetti

    createConfetti();

});


// Photo Slideshow

const photos = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg"
];

const captions = [
    "Some memories are simply unforgettable 😊",
    "Good friends make ordinary moments special ✨",
    "Life is better when there is more laughter 😂",
    "Every picture holds a beautiful memory 📸"
];

let currentPhoto = 0;

setInterval(function () {

    slideshowImage.style.opacity = 0;

    setTimeout(function () {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        slideshowImage.src = photos[currentPhoto];

        photoCaption.textContent = captions[currentPhoto];

        slideshowImage.style.opacity = 1;

    }, 1000);

}, 4000);
// Background Music

const musicButton = document.getElementById("musicButton");

const backgroundMusic = document.getElementById("backgroundMusic");

let musicPlaying = false;

musicButton.addEventListener("click", function () {

    if (musicPlaying === false) {

        backgroundMusic.play();

        musicButton.textContent = "⏸️ Pause Music";

        musicPlaying = true;

    } else {

        backgroundMusic.pause();

        musicButton.textContent = "🎵 Play Music";

        musicPlaying = false;

    }

});
// Confetti Function

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.backgroundColor =
            getRandomColor();

        document.body.appendChild(confetti);


        // Remove Confetti After Animation

        setTimeout(function () {

            confetti.remove();

        }, 5000);

    }

}


// Random Confetti Colors

function getRandomColor() {

    const colors = [
        "#ec4899",
        "#facc15",
        "#60a5fa",
        "#a78bfa",
        "#34d399",
        "#fb7185"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}