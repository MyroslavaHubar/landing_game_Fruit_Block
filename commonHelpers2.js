/* empty css                      */import{S as m,N as p,P as g}from"./assets/vendor-f8a42b41.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const y=document.querySelector("#card-4"),v=document.querySelector("#card-5"),L=document.querySelector("#card-6"),c=document.querySelector("#benefit-modal-4"),l=document.querySelector("#benefit-modal-5"),a=document.querySelector("#benefit-modal-6");y.addEventListener("click",()=>{c.classList.add("benefit-modal-show")});v.addEventListener("click",()=>{l.classList.add("benefit-modal-show")});L.addEventListener("click",()=>{a.classList.add("benefit-modal-show")});c.addEventListener("click",e=>{e.preventDefault(),e.target===c&&c.classList.remove("benefit-modal-show")});l.addEventListener("click",e=>{e.preventDefault(),e.target===l&&l.classList.remove("benefit-modal-show")});a.addEventListener("click",e=>{e.preventDefault(),e.target===a&&a.classList.remove("benefit-modal-show")});const d=document.getElementsByClassName("accordion-content");function h(e){const t=e.querySelector(".accordion-panel");t&&(e.classList.toggle("active"),e.classList.contains("active")?t.style.height=t.scrollHeight+"px":t.style.height="0")}for(let e=0;e<d.length;e++)d[e].addEventListener("click",function(){h(this)});window.addEventListener("DOMContentLoaded",()=>{if(d.length>0){const e=d[0],t=e.querySelector(".accordion-panel");t&&(e.classList.add("active"),t.style.height=t.scrollHeight+"px")}});const u=new m(".gallerySwiper",{modules:[p,g],effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:3,coverflowEffect:{rotate:30,stretch:0,depth:100,modifier:1,slideShadows:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},rewind:!0,initialSlide:1,breakpoints:{320:{slidesPerView:1},1200:{slidesPerView:3}}});u.on("slideChange",()=>{const e=document.querySelectorAll(".g-s-slide");e.forEach(r=>r.classList.remove("center-slide"));const t=u.activeIndex;e[t]&&e[t].classList.add("center-slide")});const f=document.querySelectorAll(".g-s-slide");f[u.initialSlide]&&f[u.initialSlide].classList.add("center-slide");function b(){const e=document.getElementById("burger"),t=document.querySelector(".close-mob-menu"),r=document.querySelector(".mob-menu"),s=document.querySelectorAll(".mob-menu-list a");function n(){r.style.transform==="translateX(0%)"?r.style.transform="translateX(-100%)":r.style.transform="translateX(0%)"}function i(){r.style.transform="translateX(-100%)"}e.addEventListener("click",function(o){n(),o.stopPropagation()}),t.addEventListener("click",function(o){i(),o.stopPropagation()}),document.addEventListener("click",function(o){r.style.transform==="translateX(0%)"&&!r.contains(o.target)&&i()}),s.forEach(o=>{o.addEventListener("click",function(){i()})})}document.addEventListener("DOMContentLoaded",b);
//# sourceMappingURL=commonHelpers2.js.map
