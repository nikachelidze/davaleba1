let nav = document.getElementById("nav");
let burger = document.getElementById("burger");

burger.addEventListener('click', function(){
nav.classList.toggle('navigationactive')
burger.classList.toggle('burgeractive')
})



let but = document.querySelector('.addBut');
let input = document.querySelector('.user')
let ul = document.querySelector('.list');


but.addEventListener('click', function(){
    let saxeli=input.value;
    let li=document.createElement('li');
    let divteg=document.createElement('div');
    divteg.setAttribute('id','washla');
    divteg.setAttribute('class','washlismeniu');
    let spanteg1=document.createElement('span')
    let spanteg2=document.createElement('span')
    let spanteg3=document.createElement('span')
    spanteg1.setAttribute('class','row');
    spanteg2.setAttribute('class','row');
    spanteg3.setAttribute('class','row');
    divteg.appendChild(spanteg1);
    divteg.appendChild(spanteg2);
    divteg.appendChild(spanteg3);

    divteg.addEventListener('click', function(){
        li.remove();
    })
    li.textContent=saxeli;
    li.appendChild(divteg);
    ul.appendChild(li);
    input.value='';
})
