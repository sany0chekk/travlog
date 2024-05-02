'use strict';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  '.header-logo',
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.header-logo',
      start: 'top 80%',
    },
  }
);

gsap.fromTo(
  '.header-nav-item',
  {
    opacity: 0,
    y: -100,
  },
  {
    opacity: 0.5,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.header',
      start: 'top 80%',
    },
    onComplete: () => gsap.set('.header-nav-item', { clearProps: 'opacity' }), // remove the opacity property after the animation has completed
  }
);

gsap.fromTo(
  '.header-auth',
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.header',
      start: 'top 80%',
    },
  }
);

gsap.fromTo(
  '.header-mobile-open',
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.header',
      start: 'top 80%',
    },
  }
);

gsap.fromTo(
  '.hero-content',
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top 80%',
    },
  }
);

gsap.fromTo(
  '.js-hero-btn',
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.hero-content',
      start: 'top 80%',
    },
    onComplete: () => gsap.set('.js-hero-btn', { clearProps: 'opacity' }), // remove the opacity property after the animation has completed
  }
);

gsap.fromTo(
  '.hero-img-container',
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top 80%',
    },
  }
);

gsap.from('.partners-item', {
  scrollTrigger: {
    trigger: '.partners',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  },
  x: '-100%',
  autoAlpha: 0,
  duration: 1,
  ease: 'power2.out',
  stagger: 0.2,
});

gsap.fromTo(
  '.services-top',
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.services-container',
      start: 'top 80%',
    },
  }
);

gsap.fromTo(
  '.services-list-container',
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.services-container',
      start: 'top 80%',
    },
  }
);

gsap.from('.travel-tag, .travel-title, .travel-descr, .travel-item', {
  scrollTrigger: {
    trigger: '.travel-content',
    start: 'top bottom',
    end: 'bottom 50%',
    scrub: true,
  },
  x: '100%',
  autoAlpha: 0,
  duration: 1,
  ease: 'power2.out',
  stagger: 0.2,
});

gsap.from('.travel-img', {
  scrollTrigger: {
    trigger: '.travel-img',
    start: 'top bottom',
    end: 'bottom 50%',
    scrub: true,
  },
  x: '-100%',
  autoAlpha: 0,
  duration: 1,
  ease: 'power2.out',
  stagger: 0.2,
});

gsap.fromTo(
  '.features-content',
  {
    opacity: 0,
    y: -50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.features-container',
      start: 'top 50%',
    },
  }
);

gsap.fromTo(
  '.features-item',
  {
    opacity: 0,
    x: -50,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.features-container',
      start: 'top 50%',
    },
  }
);

gsap.fromTo(
  '.features-img',
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.features-container',
      start: 'top 50%',
    },
  }
);

gsap.fromTo(
  '.dest-top',
  {
    opacity: 0,
    y: -50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.dest-container',
      start: 'top 50%',
    },
  }
);

gsap.fromTo(
  '.dest-list',
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.dest-container',
      start: 'top 50%',
    },
  }
);

gsap.fromTo(
  '.testimonials-container',
  {
    opacity: 0,
    y: -50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.testimonials-container',
      start: 'top 50%',
    },
  }
);

gsap.from('.join-content, .join-el', {
  scrollTrigger: {
    trigger: '.join-content',
    start: 'top bottom',
    end: 'bottom 50%',
    scrub: true,
  },
  x: '-100%',
  autoAlpha: 0,
  duration: 1,
  ease: 'power2.out',
  stagger: 0.2,
});

gsap.fromTo(
  '.footer-item',
  {
    opacity: 0,
    y: -50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 50%',
    },
  }
);

gsap.fromTo(
  '.footer-content',
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 50%',
    },
  }
);
