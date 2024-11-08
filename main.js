document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

const lyrics = [
    { text: "Karna Aku", duration: 3000 },
    { text: "Mencintai", duration: 2300 },
    { text: "Dan Hatiku", duration: 2300 },
    { text: "Hanya Untukmu", duration: 2700 },
    { text: "Tak Akan Menyerah", duration: 2400 },
    { text: "Dan Takkan Berhenti", duration: 2700 },
    { text: "Mencintaimu", duration: 2800 },
    { text: ". . .", duration: 1750 },
    { text: "Ku Berjuang", duration: 2300 },
    { text: "Dalam Hidupku", duration: 2600 },
    { text: "Untuk Slalu", duration: 2700 },
    { text: "Memilikimu", duration: 2000 },
    { text: " ", duration: 1000 },
    { text: "@dimytma.17", duration: 10000 },
];

let lyricIndex = 0;
let music;

function play() {
    console.log("play ado nahh");
    document.querySelector(".buttonplay").style.display = "none";

    music = new Audio('musik.mp3');
    music.play();

    setTimeout(() => {
        showLyrics();
        document.getElementById("lyric").classList.add("lyric-active");
    }, 6000);

    setTimeout(() => {
        const background = document.querySelector('.background');
        background.classList.add("background-dimmed", "background-shifted"); // Tambahkan kelas untuk mengurangi brightness
    }, 7500);
}

function showLyrics() {
    if (lyricIndex < lyrics.length) {
        const lyricElement = document.getElementById("lyric");

        lyricElement.innerText = lyrics[lyricIndex].text;

        lyricElement.classList.add("fade-in");
        lyricElement.classList.remove("fade-out");

        setTimeout(() => {
            lyricElement.classList.remove("fade-in");
            lyricElement.classList.add("fade-out");

            setTimeout(() => {
                lyricIndex++;
                showLyrics();
            }, 500); //durasi fade-out
        }, lyrics[lyricIndex].duration);
    }
}
