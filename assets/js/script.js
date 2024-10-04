// Sample album data with songs (You can replace this with dynamic data or fetch from a server)
const albums = {
    1: {
        title: "Guntur Kaarma",
        cover: "assets/img/Guntur Kaarma.jpg",
        songs: [
            { title: "Amma", url: "assets/Music/Guntur Karam/Amma.mp3" },
            { title: "Song 2", url: "assets/music/song2.mp3" },
            { title: "Song 3", url: "assets/music/song3.mp3" },
            { title: "Song 4", url: "assets/music/song4.mp3" },
            { title: "Song 5", url: "assets/music/song5.mp3" },
            { title: "Song 6", url: "assets/music/song6.mp3" }
        ]
    }
    // Add more albums here...
};

// Function to display album songs
function viewAlbum(albumId, albumTitle, albumCover) {
    // Hide album list
    document.getElementById("album-container").style.display = "none";

    // Show song list
    document.getElementById("song-list").style.display = "block";

    // Set album title and cover
    document.getElementById("album-title").textContent = albumTitle;
    document.getElementById("album-cover").src = albumCover;

    // Get songs for the selected album
    const songList = albums[albumId].songs;
    const songUl = document.getElementById("songs");
    songUl.innerHTML = ""; // Clear any previous songs

    // Inject song items
    songList.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.addEventListener("click", () => playSong(song.url));
        songUl.appendChild(li);
    });
}

// Function to play the selected song
function playSong(songUrl) {
    const audioSource = document.getElementById("audio-source");
    const audioPlayer = document.getElementById("audio-player");

    audioSource.src = songUrl;
    audioPlayer.load();
    audioPlayer.play();
}

// Function to go back to the album list
function goBack() {
    document.getElementById("song-list").style.display = "none";
    document.getElementById("album-container").style.display = "block";
}
