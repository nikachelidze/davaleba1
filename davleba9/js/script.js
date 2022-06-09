let data = [
    {
        id: 1,
        imgurl: 'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688',
        title: 'Imig title 1',
        url: 'https://www.google.com'
    },
    {
        id: 2,
        imgurl: 'https://media.istockphoto.com/photos/high-mountain-ridge-picture-id517189524',
        title: 'Imig title 2',
        url: 'https://www.google.com'

    },
    {
        id: 3,
        imgurl: 'https://media.istockphoto.com/photos/view-of-the-famous-lake-braies-at-the-foot-of-a-seekofel-mountain-in-picture-id1262302927',
        title: 'Imig title 3',
        url: 'https://www.google.com'

    },
    {
        id: 4,
        imgurl: 'https://media.istockphoto.com/photos/travel-to-the-southern-tyrol-italy-picture-id898744120',
        title: 'Imig title 4',
        url: 'https://www.google.com'
    },
    {
        id: 5,
        imgurl: 'https://media.istockphoto.com/photos/beautiful-lake-with-azure-water-in-the-forest-picture-id519186760',
        title: 'Imig title 5',
        url: 'https://www.google.com'
    }
]
let arrowleft = document.getElementById('arrow-left');
let arrowright = document.getElementById('arrow-right');
let slidercontent = document.getElementById('slider-content');
let doti = document.getElementsByClassName('dot');

let index = 0;

function createA(x){
    let Ateg = document.createElement('a');
    Ateg.classList.add('slide');
    Ateg.setAttribute('href', x.url);

    return Ateg;
}

function createimg(x){
    // let imgteg = document.createElement('img');
    // imgteg.setAttribute('src',x.imgurl);
    // imgteg.setAttribute('alt',x.title);
    // imgteg.classList.add('image-slider');
    let div = document.createElement('div');
    div.classList.add('image-slider');
    div.setAttribute('id','idd');
    document.querySelector('div').style.backgroundImage = 'url('+ x.imgurl+')';

    return div;
}

function createtxt(x){
    let txt = document.createElement('h2')
    txt.textContent = x.title;
    txt.classList.add('title-slider');

    return txt;
}

function setslaid(){
   slidercontent.innerHTML = '';
   
   let slda = createA(data[index]);
   let sldimg = createimg(data[index]);
   let sldtxt = createtxt(data[index]);
   let dots = sliderdot();

   slda.appendChild(sldtxt);
   slda.appendChild(sldimg);
   slidercontent.appendChild(slda);
   slidercontent.appendChild(dots);
   dotactive();
}
setslaid();

function sliderleft(){
    if(index == 0)
    {
        index = data.length - 1;
        setslaid();
        return;
    }
    index--;
    setslaid();
}

function sliderright(){
    if(index == data.length - 1){
        index = 0;
        setslaid();
        return
    }
    index++;
    setslaid();
}

arrowleft.addEventListener('click', sliderleft);
arrowright.addEventListener('click', sliderright);

setInterval( () => {
    sliderright();
}, 5000 )

function sliderdot(y){
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (jj) => {
        let dot =document.createElement('div')
        dot.classList.add('dot');
        dot.setAttribute('data-id', jj.id - 1);

        dot.onclick = function(ss){
            let id = ss.target.getAttribute('data-id');
            index = id;
            setslaid();
        }

        dots.appendChild(dot);
    } )
    return dots;
}

function dotactive(){
    doti[index].classList.add('active');
}
