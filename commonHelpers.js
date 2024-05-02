import{g as e,S as u,a as p}from"./assets/vendor-daa9cf5b.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();e.registerPlugin(u);const g=document.querySelector(".header-mobile-open"),d=document.querySelector(".header-mobile");function m(){document.body.style.overflow="hidden",e.to(".header-mobile",{opacity:1,x:0,visibility:"visible",pointerEvents:"auto",duration:.5,onComplete:function(){e.to(".header-mobile-list li, .header-mobile-button",{opacity:1,x:0,duration:1,ease:"power3.out",stagger:.2})}})}function y(){document.body.style.overflow=null,e.to(".header-mobile-list li, .header-mobile-button",{opacity:0,x:100,duration:.2,ease:"power1.out",stagger:-.1,onComplete:function(){e.to(".header-mobile",{x:-100,opacity:0,duration:.2,ease:"power1.out",onComplete:function(){e.to(".header-mobile",{visibility:"hidden",pointerEvents:"none"})}})}})}g.addEventListener("click",m);d.addEventListener("click",o=>{o.target!==o.currentTarget&&y()});const f=document.querySelectorAll('a[href*="#"]');for(let o of f)o.addEventListener("click",function(i){i.preventDefault();const a=o.getAttribute("href").substr(1);document.getElementById(a).scrollIntoView({behavior:"smooth",block:"start"})});const h=document.querySelectorAll(".hero-img-el");h.forEach(o=>{const i=Math.random()*2e3,a=Math.random()*10-5,s=Math.random()*10-5;setTimeout(()=>{o.style.transform=`translate(${a}px, ${s}px)`,setInterval(()=>{const t=Math.random()*10-5,r=Math.random()*10-5;o.style.transform=`translate(${t}px, ${r}px)`},1e3)},i)});const n=document.querySelectorAll(".features-item");let l=0;n[l].classList.add("active");setInterval(()=>{n.forEach(o=>o.classList.remove("active")),n[l].classList.add("active"),l=(l+1)%n.length},2e3);const b=document.querySelector(".join-form");b.addEventListener("submit",o=>{o.preventDefault()});const v=document.querySelectorAll(".footer-item");v.forEach(o=>{const i=o.querySelector(".footer-item-title"),a=o.querySelector(".footer-item-list");i.addEventListener("click",()=>{i.classList.toggle("active"),a.classList.toggle("active")})});e.registerPlugin(u);e.fromTo(".header-logo",{opacity:0,x:-100},{opacity:1,x:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".header-logo",start:"top 80%"}});e.fromTo(".header-nav-item",{opacity:0,y:-100},{opacity:.5,y:0,duration:1,ease:"power3.out",stagger:.3,scrollTrigger:{trigger:".header",start:"top 80%"},onComplete:()=>e.set(".header-nav-item",{clearProps:"opacity"})});e.fromTo(".header-auth",{opacity:0,x:100},{opacity:1,x:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".header",start:"top 80%"}});e.fromTo(".header-mobile-open",{opacity:0,x:100},{opacity:1,x:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".header",start:"top 80%"}});e.fromTo(".hero-content",{opacity:0,x:-100},{opacity:1,x:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".hero",start:"top 80%"}});e.fromTo(".js-hero-btn",{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",stagger:.2,scrollTrigger:{trigger:".hero-content",start:"top 80%"},onComplete:()=>e.set(".js-hero-btn",{clearProps:"opacity"})});e.fromTo(".hero-img-container",{opacity:0,x:100},{opacity:1,x:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".hero",start:"top 80%"}});e.from(".partners-item",{scrollTrigger:{trigger:".partners",start:"top bottom",end:"bottom top",scrub:!0},x:"-100%",autoAlpha:0,duration:1,ease:"power2.out",stagger:.2});e.fromTo(".services-top",{opacity:0,x:-100},{opacity:1,x:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".services-container",start:"top 80%"}});e.fromTo(".services-list-container",{opacity:0,x:100},{opacity:1,x:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".services-container",start:"top 80%"}});e.from(".travel-tag, .travel-title, .travel-descr, .travel-item",{scrollTrigger:{trigger:".travel-content",start:"top bottom",end:"bottom 50%",scrub:!0},x:"100%",autoAlpha:0,duration:1,ease:"power2.out",stagger:.2});e.from(".travel-img",{scrollTrigger:{trigger:".travel-img",start:"top bottom",end:"bottom 50%",scrub:!0},x:"-100%",autoAlpha:0,duration:1,ease:"power2.out",stagger:.2});e.fromTo(".features-content",{opacity:0,y:-50},{opacity:1,y:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".features-container",start:"top 50%"}});e.fromTo(".features-item",{opacity:0,x:-50},{opacity:1,x:0,duration:1,ease:"power3.out",stagger:.2,scrollTrigger:{trigger:".features-container",start:"top 50%"}});e.fromTo(".features-img",{opacity:0,x:100},{opacity:1,x:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".features-container",start:"top 50%"}});e.fromTo(".dest-top",{opacity:0,y:-50},{opacity:1,y:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".dest-container",start:"top 50%"}});e.fromTo(".dest-list",{opacity:0,y:50},{opacity:1,y:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".dest-container",start:"top 50%"}});e.fromTo(".testimonials-container",{opacity:0,y:-50},{opacity:1,y:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".testimonials-container",start:"top 50%"}});e.from(".join-content, .join-el",{scrollTrigger:{trigger:".join-content",start:"top bottom",end:"bottom 50%",scrub:!0},x:"-100%",autoAlpha:0,duration:1,ease:"power2.out",stagger:.2});e.fromTo(".footer-item",{opacity:0,y:-50},{opacity:1,y:0,duration:1,ease:"power3.out",stagger:.2,scrollTrigger:{trigger:".footer",start:"top 50%"}});e.fromTo(".footer-content",{opacity:0,x:-100},{opacity:1,x:0,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:".footer",start:"top 50%"}});new p(".services-list-container",{direction:"horizontal",loop:!0,spaceBetween:16,autoplay:{delay:4e3},breakpoints:{768:{slidesPerView:3,centeredSlides:!0}}});new p(".dest-swiper",{direction:"horizontal",loop:!0,spaceBetween:30,navigation:{nextEl:".dest-next",prevEl:".dest-prev",lockClass:null},breakpoints:{768:{slidesPerView:2},880:{slidesPerView:3}}});new p(".testimonials-swiper-container",{direction:"horizontal",loop:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:16,autoplay:{delay:4e3},navigation:{nextEl:".testimonials-next-btn",prevEl:".testimonials-prev-btn",lockClass:null},pagination:{el:".swiper-pagination"}});
//# sourceMappingURL=commonHelpers.js.map
