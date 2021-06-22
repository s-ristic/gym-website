// small devices - open navigation

const navBtn = document.querySelector('.nav__menuBtn');
const nav = document.querySelector('nav');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('menu--open');
});

nav.addEventListener('click', (e) => {
  if (e.target.attributes[0].name === 'href')
    nav.classList.remove('menu--open');
});

// form submit

const forms = document.querySelectorAll('form');

forms.forEach((form) =>
  form.addEventListener('submit', (e) => e.preventDefault())
);

// play/pause video

const video = document.querySelector('video');
const playVideo = document.querySelector('.motivation__videoPlayBtn');
const playIcon = document.querySelector('.fa-play');
const pauseIcon = document.querySelector('.fa-pause');

let isPlaying = false;

pauseIcon.style.display = 'none';

playVideo.addEventListener('click', () => {
  if (!isPlaying) {
    video.play();

    pauseIcon.style.display = 'block';
    playIcon.style.display = 'none';

    playVideo.style.bottom = '3.5rem';
    playVideo.style.right = '3.5rem';
    playVideo.style.transform = 'translate(50%,50%) scale(0.5)';

    isPlaying = true;
  } else {
    video.pause();

    pauseIcon.style.display = 'none';
    playIcon.style.display = 'block';

    playVideo.style.bottom = '50%';
    playVideo.style.right = '50%';
    playVideo.style.transform = 'translate(50%,50%) scale(1)';

    isPlaying = false;
  }
});
