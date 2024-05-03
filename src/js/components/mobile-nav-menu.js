'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const headerMobileOpen = document.querySelector('.header-mobile-open');
// const headerMobileClose = document.querySelector('.header-mobile-close');
const headerMobileMenu = document.querySelector('.header-mobile');

function openMenu() {
  document.body.style.overflow = 'hidden';

  gsap.to('.header-mobile', {
    opacity: 1,
    x: 0,
    visibility: 'visible',
    pointerEvents: 'auto',
    duration: 0.3,
    // ease: 'power1.out',
    onComplete: function () {
      gsap.to('.header-mobile-list li, .header-mobile-button', {
        opacity: 1,
        x: 0,
        duration: 0.2,
        ease: 'power3.out',
        stagger: 0.1,
        onComplete: function () {
          gsap.to('.header-mobile-close', {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        },
      });
    },
  });
}

function closeMenu() {
  document.body.style.overflow = null;

  gsap.to('.header-mobile-list li, .header-mobile-button', {
    opacity: 0,
    x: 100,
    duration: 0.2,
    ease: 'power1.out',
    stagger: -0.1,
    onComplete: function () {
      gsap.to('.header-mobile-close', {
        opacity: 0,
        y: -100,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: function () {
          gsap.to('.header-mobile', {
            x: -100,
            opacity: 0,
            duration: 0.2,
            ease: 'power1.out',
            onComplete: function () {
              gsap.to('.header-mobile', {
                visibility: 'hidden',
                pointerEvents: 'none',
              });
            },
          });
        },
      });
    },
  });
}

headerMobileOpen.addEventListener('click', openMenu);
headerMobileMenu.addEventListener('click', event => {
  if (event.target !== event.currentTarget) {
    closeMenu();
  }
});
