/* empty css                      */import{S as a,N as l,P as d}from"./assets/vendor-f8a42b41.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.getElementsByClassName("accordion-content");function u(o){const n=o.querySelector(".accordion-panel");n&&(o.classList.toggle("active"),o.classList.contains("active")?n.style.height=n.scrollHeight+"px":n.style.height="0")}for(let o=0;o<c.length;o++)c[o].addEventListener("click",function(){u(this)});window.addEventListener("DOMContentLoaded",()=>{if(c.length>0){const o=c[0],n=o.querySelector(".accordion-panel");n&&(o.classList.add("active"),n.style.height=n.scrollHeight+"px")}});document.addEventListener("DOMContentLoaded",()=>{new a(".aboutSwiper",{modules:[l,d],slidesPerView:1,spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},rewind:!0,breakpoints:{320:{slidesPerView:1},1200:{slidesPerView:3}}})});function f(){const o=document.getElementById("burger"),n=document.querySelector(".close-mob-menu"),i=document.querySelector(".mob-menu"),s=document.querySelectorAll(".mob-menu-list a");function e(){i.style.transform==="translateX(0%)"?i.style.transform="translateX(-100%)":i.style.transform="translateX(0%)"}function t(){i.style.transform="translateX(-100%)"}o.addEventListener("click",function(r){e(),r.stopPropagation()}),n.addEventListener("click",function(r){t(),r.stopPropagation()}),document.addEventListener("click",function(r){i.style.transform==="translateX(0%)"&&!i.contains(r.target)&&t()}),s.forEach(r=>{r.addEventListener("click",function(){t()})})}document.addEventListener("DOMContentLoaded",f);
//# sourceMappingURL=commonHelpers2.js.map
