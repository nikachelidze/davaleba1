let newPage = 1;
let totalPage;
function yyy(page){
    let xxx = new XMLHttpRequest();
xxx.addEventListener('load', function() {
     let ppp = this.responseText;
     let pppdata = JSON.parse(ppp);

     let fr = document.createDocumentFragment();
     pppdata.data.forEach( y => {
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
        totalPage = pppdata.total_pages;
});
xxx.addEventListener('error', function(z) {
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

xxx.open('get', 'https://reqres.in/api/users?page='+page);
xxx.send();
}

document.getElementById('loadprev').addEventListener('click', function(){
    if (newPage == 1){
        return;
    }
    newPage -=1;

    yyy(newPage);
});
document.getElementById('loadnext').addEventListener('click', function(){
    if (newPage == totalPage){
        return;
    }
    newPage +=1;

    yyy(newPage);
});
yyy(newPage);



