import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/Hfoi76YbnzA" width="800" height="515" frameborder="0" allow="autoplay; fullscreen"></iframe>
`);

const playVideoBtn = document.querySelector('.hero-content-video-btn');

playVideoBtn.addEventListener('click', instance.show);
