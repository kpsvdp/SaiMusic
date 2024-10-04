// js/album.js

// List of albums and songs (with album cover images)
const albums = [
    {
        id: 1,
        title: "Guntur Kaaram",
        artist: "Artist 1",
        cover: "assets/img/Guntur Kaarma.jpg", // Add cover image
        songs: [
            { title: "Amma", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Amma.mp3" },
            { title: "Dum Masala", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Dum Masala.mp3" },
            { title: "Kurchi Madathapetti", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Kurchi Madathapetti.mp3" },
            { title: "Mawaa Enthaina", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Mawaa Enthaina.mp3" },
            { title: "Oh My Baby", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Oh My Baby.mp3" },
            { title: "Ramana Aei", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Ramana Aei.mp3" }
        ]
    },
    // Add more albums in a similar format
];

// Function to get album ID from URL
function getAlbumIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'), 10); // Extracts the id from URL
}

// Function to load the album details based on the album ID
function loadAlbumDetails(albumId) {
    const album = albums.find(a => a.id === albumId);

    if (album) {
        // Update album title
        document.getElementById('album-title').innerText = album.title;

        // Update album cover
        document.getElementById('album-cover').src = album.cover;

        // Populate songs
        const songList = document.getElementById('songs');
        songList.innerHTML = '';

        album.songs.forEach((song) => {
            const li = document.createElement('li');
            li.innerText = song.title;
            li.onclick = () => playSong(song.src, album.title, song.title);
            songList.appendChild(li);
        });
    }
}

// Function to play a selected song
function playSong(src, albumTitle, songTitle) {
    document.getElementById('audio-source').src = src;
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.load();
    audioPlayer.play();
}

// Initialize the album page with details
const albumId = getAlbumIdFromURL();
loadAlbumDetails(albumId);
