'use strict';

const cup=document.querySelector('#cup');
const adv=document.querySelector("#adv");
const arrow=document.querySelector(".arrowHome");


cup.addEventListener('click',(e)=>{
    e.preventDefault()
    window.scrollTo({
        top:2000,
        behavior: 'smooth'
    });
});

arrow.addEventListener('click',(e)=>{
    e.preventDefault()
    window.scrollTo({
        top:-2000,
        behavior:"smooth"
    })
})