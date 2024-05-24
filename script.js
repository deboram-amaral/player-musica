// const progressBar = document.getElementById("progressBar");
// const buttonPlay = document.querySelector('#play');
// const buttonPause = document.querySelector('#pause');
// const buttonNext = document.getElementById('next');
// const buttonPrev = document.getElementById('prev');
// const tempoAtual = document.getElementById("tempoAtual");
// const tempoTotal = document.getElementById("tempoTotal");
// const albumCover = document.getElementById("albumCover");
// const musicTitle = document.getElementById("musicTitle");
// const musicSubtitle = document.getElementById("musicSubtitle");

// // Lista de músicas com capas e títulos
// const playlist = [
//   {
//     src: './assets/EBONY - Paranoia [Oficial] - EBONY.mp3',
//     cover: './assets/ebony.jpg',
//     title: 'EBONY - Paranoia [OFICIAL]',
//     subtitle: 'Paranoia'
//   },
//   {
//     src: './assets/FBC & VHOOR - De Kenner - FBC.mp3',
//     cover: './assets/fbc.png',
//     title: 'Song 2 Title',
//     subtitle: 'Artist 2'
//   },
//   {
//     src: './assets/Black Alien - Que Nem o Meu Cachorro (Clipe Oficial) - Black Alien.mp3',
//     cover: './assets/blackalien.png',
//     title: 'Que Nem o Meu Cachorro',
//     subtitle: 'Black Alien'
//   }
// ];

// let currentTrackIndex = 0;
// let music = new Audio(playlist[currentTrackIndex].src);
// let interval;

// function formatarTempo(segundos) {
//   const min = Math.floor(segundos / 60);
//   const seg = Math.floor(segundos % 60);
//   return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
// }

// function updateMusicTime() {
//   const progresso = (music.currentTime / music.duration) * 100;
//   progressBar.value = progresso;
//   tempoAtual.textContent = formatarTempo(music.currentTime);
// }

// function updateMusicDetails(trackIndex) {
//   const track = playlist[trackIndex];
//   albumCover.src = track.cover;
//   musicTitle.textContent = track.title;
//   musicSubtitle.textContent = track.subtitle;
// }

// music.addEventListener('loadedmetadata', function () {
//   tempoTotal.textContent = formatarTempo(music.duration);
// });

// music.addEventListener('timeupdate', updateMusicTime);

// function play() {
//   buttonPlay.classList.add('hide');
//   buttonPause.classList.remove('hide');
//   music.play();
//   interval = setInterval(updateMusicTime, 1000);
// }

// function pause() {
//   buttonPlay.classList.remove('hide');
//   buttonPause.classList.add('hide');
//   music.pause();
//   clearInterval(interval);
// }

// function avancar() {
//   currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
//   music.src = playlist[currentTrackIndex].src;
//   updateMusicDetails(currentTrackIndex);
//   music.load();
//   play();
// }

// function voltar() {
//   currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
//   music.src = playlist[currentTrackIndex].src;
//   updateMusicDetails(currentTrackIndex);
//   music.load();
//   play();
// }

// buttonPlay.addEventListener('click', play);
// buttonPause.addEventListener('click', pause);
// buttonNext.addEventListener('click', nextTrack);
// buttonPrev.addEventListener('click', prevTrack);

// updateMusicDetails(currentTrackIndex);
// music.load();

const progressBar = document.getElementById("progressBar");
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const buttonNext = document.getElementById('next');
const buttonPrev = document.getElementById('prev');
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");
const albumCover = document.getElementById("albumcover"); // Corrigido o ID
const musicTitle = document.querySelector(".desc-musica p"); // Corrigido o seletor
const musicSubtitle = document.querySelector(".desc-musica span"); // Corrigido o seletor

// Lista de músicas com capas e títulos
const playlist = [
  {
    src: './assets/EBONY - Paranoia [Oficial] - EBONY.mp3',
    cover: './assets/ebony.jpg',
    title: 'EBONY - Paranoia [OFICIAL]',
    subtitle: 'Paranoia'
  },
  {
    src: './assets/FBC & VHOOR - De Kenner - FBC.mp3',
    cover: './assets/fbc.jpg',
    title: 'De Kenner',
    subtitle: 'FBC & VHOOR'
  },
  {
    src: './assets/Black Alien - Que Nem o Meu Cachorro (Clipe Oficial) - Black Alien.mp3',
    cover: './assets/blackalien.jpg',
    title: 'Que Nem o Meu Cachorro',
    subtitle: 'Black Alien'
  }
];

let currentTrackIndex = 0;
let music = new Audio(playlist[currentTrackIndex].src);
let interval;

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

function updateMusicTime() {
  const progresso = (music.currentTime / music.duration) * 100;
  progressBar.value = progresso;
  tempoAtual.textContent = formatarTempo(music.currentTime);
}

function updateMusicDetails(trackIndex) {
  const track = playlist[trackIndex];
  albumCover.src = track.cover;
  musicTitle.textContent = track.title;
  musicSubtitle.textContent = track.subtitle;
}

music.addEventListener('loadedmetadata', function () {
  tempoTotal.textContent = formatarTempo(music.duration);
});

music.addEventListener('timeupdate', updateMusicTime);

function play() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  music.play();
  interval = setInterval(updateMusicTime, 1000);
}

function pause() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  music.pause();
  clearInterval(interval);
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  music.src = playlist[currentTrackIndex].src;
  updateMusicDetails(currentTrackIndex);
  music.load();
  play();
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  music.src = playlist[currentTrackIndex].src;
  updateMusicDetails(currentTrackIndex);
  music.load();
  play();
}

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
buttonNext.addEventListener('click', nextTrack);
buttonPrev.addEventListener('click', prevTrack);

updateMusicDetails(currentTrackIndex);
music.load();
