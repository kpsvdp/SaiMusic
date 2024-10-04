// js/script.js

// List of albums and songs
const albums = [
    {
        id: 1,
        title: "Guntur Kaaram",
        artist: "Artist 1",
        cover: "images/album1.jpg", // Add cover image
        songs: [
            { title: "AMMA", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Amma.mp3" },
            { title: "Song 2", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Amma.mp3" },
            { title: "Song 3", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Amma.mp3" },
            { title: "Song 4", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Amma.mp3" },
            { title: "Song 5", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Amma.mp3" },
            { title: "Song 6", src: "/Users/kpsvdprashanth/Downloads/HTML & CSS/Music Player/assets/Music/Guntur Karam/Amma.mp3" }
        ]
    },

    {
        id: 2,
        title: "Album 2",
        artist: "Artist 2",
        songs: [
            { title: "Song 1", src: "music/album2/song1.mp3" },
            { title: "Song 2", src: "music/album2/song2.mp3" },
            { title: "Song 3", src: "music/album2/song3.mp3" },
            { title: "Song 4", src: "music/album2/song4.mp3" },
            { title: "Song 5", src: "music/album2/song5.mp3" },
            { title: "Song 6", src: "music/album2/song6.mp3" }
        ]
    }
    
    // Add 19 more albums in a similar format
];


function showSongs(albumId) {
    const album = albums.find(a => a.id === albumId);
    
    if (album) {
        // Update album title
        document.getElementById('album-title').innerText = album.title;

        // Update album cover
        document.getElementById('album-cover').src = album.cover;

        const songList = document.getElementById('songs');
        songList.innerHTML = '';

        // Populate songs
        album.songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.innerText = song.title;
            li.onclick = () => playSong(song.src, album.title, song.title);
            songList.appendChild(li);
        });

        // Display song list
        document.getElementById('song-list').style.display = 'block';
    }
}

function playSong(src, albumTitle, songTitle) {
    document.getElementById('audio-source').src = src;
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.load();
    audioPlayer.play();
}
