let newPage = 1;
let totalPage;
function getUsers(Page){
    fetch('https://reqres.in/api/users?page=' + Page, {
        method:'GET'
    })
    .then(function(x){
        if(x.status != 200){
            throw x.status;
        }
        return x.json();

    })
    .then(function(xdata){
        let fr = document.createDocumentFragment();
        xdata.data.forEach( y => {
            let li = document.createElement('li');
            li.classList.add('li-item');
            let span = document.createElement('span');
            span.textContent = y.first_name;
            let img = document.createElement('img');
            img.src=y.avatar;
            img.classList.add('imgitem');

            li.appendChild(img);
            li.appendChild(span);
            fr.appendChild(li);
        });

        document.getElementById('list').innerHTML = '';
        document.getElementById('list').appendChild(fr);
        totalPage = xdata.total_pages;
    })
    .catch(function(z){
        if(z == 404){
            let p=document.createElement('p');
            p.textContent = 'Server error';
            document.getElementById('api').appendChild(p);
        }
        else{
            let p=document.createElement('p');
            p.textContent = 'Page not found';
            document.getElementById('api').appendChild(p);
        }
    })

}

document.getElementById('loadprev').addEventListener('click', function(){
    if (newPage == 1){
        return;
    }
    newPage -=1;

    getUsers(newPage);
});
document.getElementById('loadnext').addEventListener('click', function(){
    if (newPage == totalPage){
        return;
    }
    newPage +=1;

    getUsers(newPage);
});

getUsers(newPage);

//-------------------------------------------

let mainwrapper = document.getElementById('post-block-wraper');
let overly = document.getElementById('overlaiid');
let closeid = document.getElementById('closeid');
let content = document.getElementById('content');

function ajax(url,callback){
    let req = new XMLHttpRequest();
    req.open('get', url);
    req.addEventListener('load', function(){

    let  reqdata = JSON.parse(req.responseText);
    callback(reqdata);    
    });
    req.send();
}
function printdata(reqdata){
    reqdata.forEach(e =>{
        divdata(e);
    })
}

function divdata(s){
    let div = document.createElement('div');
    div.classList.add('posts');
    div.setAttribute('data-id',s.id);
    
    let delet = document.createElement('button');
    delet.setAttribute('data-id',s.id);
    delet.innerText = 'delete this post';
    delet.classList.add('del');
    
    let h3 = document.createElement('h3');
    h3.innerText = s.id;
    let h2 = document.createElement('h2');
    h2.innerText = s.title;

    div.appendChild(h3);
    div.appendChild(h2);
    div.appendChild(delet);
    mainwrapper.appendChild(div);

    div.addEventListener('click', function(se){
        let id = se.target.getAttribute('data-id');
        openooverly(id);
    })
    delet.addEventListener('click', function(ss){
        ss.stopPropagation();
        let id = ss.target.getAttribute('data-id');
        div.classList.add('active');

    })
}

ajax('https://jsonplaceholder.typicode.com/posts', function(reqdata){
    printdata(reqdata);
});

function openooverly(id){
    overly.classList.add('active');
    let url =`https://jsonplaceholder.typicode.com/posts/${id}`;
    ajax(url, function(reqdata){
        overlaif(reqdata);
    })
    console.log(id);
}
closeid.addEventListener('click', function(){
    overly.classList.remove('active');
    content.innerHTML = '';
})

function overlaif(s){
    let span = document.createElement('span');
    span.innerText = s.userId;
    let p = document.createElement('p');
    p.innerText = s.body;

    content.appendChild(span);
    content.appendChild(p);
}
//function deletep(){
    //div.classList.add('active');

//    mainwrapper.classList.add('active');
//}
// function deletep(id){
//     let url =`https://jsonplaceholder.typicode.com/posts/${id}`;
//     fetch(url, {
//         method: 'DELETE'
//     })
//     .then( response => response.json())
//     .then(reqdata => {
//         console.log(reqdata);
//     })
// }



// function row(){
//     let divteg=document.createElement('div');
//     divteg.setAttribute('id','washla');
//     divteg.setAttribute('class','washlismeniu');
//     let spanteg1=document.createElement('span')
//     let spanteg2=document.createElement('span')
//     let spanteg3=document.createElement('span')
//     spanteg1.setAttribute('class','row');
//     spanteg2.setAttribute('class','row');
//     spanteg3.setAttribute('class','row');
//     divteg.appendChild(spanteg1);
//     divteg.appendChild(spanteg2);
//     divteg.appendChild(spanteg3);

//     divteg.addEventListener('click', function(){
//         li.remove();
//     })
// //    li.appendChild(divteg);
// //   ul.appendChild(li);

// }

