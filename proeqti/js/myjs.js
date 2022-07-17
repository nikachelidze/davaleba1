//
//     ძირითად გვერდზე შესასვლელად ელექტრონულ ფოსტასა და პაროლს ვიღებ
//     https://reqres.in/api/users?page=1 მისამართიდან email და first_name ქიებს
//     კერძოდ შეგვიძლია ამოვირჩიოთ email: george.bluth@reqres.in ხოლო  first_name: George
//     ან სხვა შესაბამისად მითითებულ მისამართზე ამ ელ. ფოსტის ამორჩევისას გამოაქ შეცდომა
//     რომ არასწორია ფორმატი რადგან ბოლოში წერტილის მერე 2 სიმბოლოა კერძოდ 'in'. მესამეს თუ დაუმატებთ
//     შეცდომა გაქრება. მიუხედავად შეცდომისა sunbmit-ი სრულდება.

// ნავიგაციის ფორმირება
let regnavi = document.getElementById("regnav");
let regburger = document.getElementById("burger");

let newP1 = document.createElement('p');
let newP2 = document.createElement('p');
let newP3 = document.createElement('p');

if(regnavi != null){
  //  ითვლის საიტზე შემოსვლის რაოდენობას
  let divuser = localStorage.getItem('tvla');
  
  let sull;
  if(!divuser){
    sull = 1;
  } else {
    sull = parseInt(divuser) + 1;
  }
  
  localStorage.setItem('tvla',sull);
  document.getElementById('raod').textContent = 'სულ='+localStorage.getItem('tvla');
  //--------------------------------------------------
  document.getElementById('mtavari').appendChild(newP1);
  document.getElementById('mtavari').appendChild(newP2);
  document.getElementById('mtavari').appendChild(newP3);
  regnav();

  let slideIndex = 0;
  showSlides();
  // სლაიდის ფორმირება
  function showSlides() {
    let slides = document.getElementsByClassName("slidershvili");
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 5000);
  }
  //--------------------------------------------------------------------------------------------
}
function regnav(){
  const navigaciatxt=["მთავარი","პროექტის შესახებ","კონტაქტი","რეგისტრაცია"];
  const navigaciahttp=["mtavari()","proeqtisshesaxeb();","kontaqti();"];
  let mtavarinavigacia=navigaciatxt.length;
  let txt="<ul>";

  for (let i=0; i<mtavarinavigacia;i++){
      if(i<3){
        txt+='<li><a href="#" onclick='+navigaciahttp[i]+'>'+navigaciatxt[i]+'</a></li>';
      }
      if(i==3){
        txt+='<li><a href="registracia.html">'+navigaciatxt[i]+'</a></li>';
      }
    }
  txt+="</ul>";
  document.getElementById("regnav").innerHTML=txt;
  burgerreg();
}
function burgerreg(){
if(regburger != null){
  burger.addEventListener('click', function(){
  regnavi.classList.toggle('navigationactive');
  regburger.classList.toggle('burgeractive');
  });
}
}
//--------------------------------------------------------------------------------------
function burgernav(){
  if(regburger != null){
    burger.addEventListener('click', function(){
    navmtavari.classList.toggle('navigationactive');
    regburger.classList.toggle('burgeractive');
    });
  }
}
// ძირითადი გვერდების ნავიგაციის ფორმირება
let navmtavari = document.getElementById("navmtavari");
if(navmtavari != null){
  showFooter();
}
function showNav(){
  const navigaciatxt=["BMW","lamborghini","mustang","jaguar","გასვლა"];
  const navigaciahttp=["mtavari.html","lamborgini.html","mustang.html","jaguar.html","index.html"];
  let mtavarinavigacia=navigaciatxt.length;
  let txt="<ul>";
  
  for (let i=0; i<mtavarinavigacia;i++){
    if(i==0){
      txt+='<li><a href="'+navigaciahttp[i]+'" class="active">'+navigaciatxt[i]+'</a></li>';
    }
    if(i>=1){
      txt+='<li><a href="'+navigaciahttp[i]+'">'+navigaciatxt[i]+'</a></li>';
    }
  }
  txt+="</ul>";
  document.getElementById("navmtavari").innerHTML=txt;
  burgernav();
  }
// ნავიგაციის ფორმირება lamborjini
function LshowNav(){
  const navigaciatxt=["BMW","lamborghini","mustang","jaguar","გასვლა"];
  const navigaciahttp=["mtavari.html","lamborgini.html","mustang.html","jaguar.html","index.html"];
  let mtavarinavigacia=navigaciatxt.length;
  let txt="<ul>";
  console.log(mtavarinavigacia);
  for (let i=0; i<mtavarinavigacia;i++){
    if(i==1){
      txt+='<li><a href="'+navigaciahttp[i]+'" class="active">'+navigaciatxt[i]+'</a></li>';
    }
    if(i!=1){
      txt+='<li><a href="'+navigaciahttp[i]+'">'+navigaciatxt[i]+'</a></li>';
    }
  }
  txt+="</ul>";
  document.getElementById("navmtavari").innerHTML=txt;
  burgernav();
  }
// ნავიგაციის ფორმირება მუსტანგი
function MshowNav(){
  const navigaciatxt=["BMW","lamborghini","mustang","jaguar","გასვლა"];
  const navigaciahttp=["mtavari.html","lamborgini.html","mustang.html","jaguar.html","index.html"];
  let mtavarinavigacia=navigaciatxt.length;
  let txt="<ul>";
  console.log(mtavarinavigacia);
  for (let i=0; i<mtavarinavigacia;i++){
    if(i==2){
      txt+='<li><a href="'+navigaciahttp[i]+'" class="active">'+navigaciatxt[i]+'</a></li>';
    }
    if(i!=2){
      txt+='<li><a href="'+navigaciahttp[i]+'">'+navigaciatxt[i]+'</a></li>';
    }
  }
  txt+="</ul>";
  document.getElementById("navmtavari").innerHTML=txt;
  burgernav();
  }
  // ნავიგაციის ფორმირება იაგუარი
  function JshowNav(){
    const navigaciatxt=["BMW","lamborghini","mustang","jaguar","გასვლა"];
    const navigaciahttp=["mtavari.html","lamborgini.html","mustang.html","jaguar.html","index.html"];
    let mtavarinavigacia=navigaciatxt.length;
    let txt="<ul>";
    console.log(mtavarinavigacia);
    for (let i=0; i<mtavarinavigacia;i++){
      if(i==3){
        txt+='<li><a href="'+navigaciahttp[i]+'" class="active">'+navigaciatxt[i]+'</a></li>';
      }
      if(i!=3){
        txt+='<li><a href="'+navigaciahttp[i]+'">'+navigaciatxt[i]+'</a></li>';
      }
    }
    txt+="</ul>";
    document.getElementById("navmtavari").innerHTML=txt;
    burgernav();
  }
//----------------------------------------------------------------------------------------
// მთავარი, პროექტის შესახებ, კონტაქტი 
let k = 1; let kk = 1; let kkk = 1;
function mtavari(){
  kk = 1; kkk = 1;
  newP1.textContent = 'კეთილი იყოს თქვენი მობრძანება';
  newP2.textContent = 'იმედია დაგაინტერესებთ ჩვენი საიტი, შეკითხვების დასასმელად შეგიძლია გამოიყენოთ "სასაუბრო"';
  newP3.textContent = 'კონკრეტულ გვერდებზე გათვალისწინებულია კომენტარის და რჩევების დასატოვებელი ადგილი';
  document.getElementById('newh4').textContent = 'მოგესალმებით';

  if(k == 1){
    document.getElementById("proeqtisshesaxeb").style.display = "block";
  }
  if (k == 2){
    document.getElementById("proeqtisshesaxeb").style.display = "none";
    k = 0;
  }
  k ++;
}
function proeqtisshesaxeb(){
  k = 1; kkk = 1;
  newP1.textContent = 'ჩვენი პროექტი წარმოადგენს მანქანებისა და მათი მწარმოებლების შესახებ ინფორმაციას';
  newP2.textContent = 'თუ დაგაინტერესათ მაშინ დარეგისტრირდით ჩვენს საიტზე';
  newP3.textContent = 'და მიიღე მეტი ინფორმაცია';
  document.getElementById('newh4').textContent = 'პროექტის შესახებ';
  if(kk == 1){
    document.getElementById("proeqtisshesaxeb").style.display = "block";
  }
  if (kk == 2){
    document.getElementById("proeqtisshesaxeb").style.display = "none";
    kk = 0;
  }
  kk ++;
}
function kontaqti(){
  kk = 1; k = 1;
  newP1.textContent = 'დამატებითი შეკითხვებისთვის შეგიძლიათ მოგვმართოთ ელექტრონულ ფოსტით';
  newP2.textContent = '<ელექტრონული ფოსტა>';
  newP3.textContent = 'ყურადღება!!! ფოსტაზე მომართვისას მიუთითეთ თქვენი იუზერის სახელი წინააღმდეგ შემთხვევაში თქველი წერილი არ განიხილება';
  document.getElementById('newh4').textContent = 'კონტაქტი';
  
  if(kkk == 1){
    document.getElementById("proeqtisshesaxeb").style.display = "block";
  }
  if (kkk == 2){
    document.getElementById("proeqtisshesaxeb").style.display = "none";
    kkk = 0;
  }
  kkk ++;
}
//--------------------------------------------------
// სასაუბრო
function sasaubrosgaxsna() {
  document.getElementById("myForm").style.display = "block";
}
function sasaubrosdaxurva() {
  document.getElementById("myForm").style.display = "none";
}
//--------------------------------------------------
// შესვლა ძირითად გვერდზე (უკვე რეგისტრირებული მომხმარებლის მიერ)
let forms = document.getElementById('shformid');
function emailvalidacia(){
  let fost = document.getElementById('fosta').value;
  let fosshabloni=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let spann = document.getElementById('error_shed');

  if(fost.match(fosshabloni)){
    spann.textContent = '';
  }
  else {
    spann.textContent = 'არა სწორია ემაილის ფორმატი';
    spann.style.color = 'red';
  }
}
if( forms != null){
  
  let newPage = 1;
  let totalPage;

  forms.addEventListener('submit', function(ee){
    ee.preventDefault();
    let eror = {};
    let forms = ee.target;
    let fos = document.getElementById('fosta').value;
    let pas = document.getElementById('paroli').value;
    

    if ( fos == ''){
      eror.semail = 'ელექტრონული ფოსტა არ შეიძლება იყოს ცარელა';
    } else {
      eror.semail = '';
    }
    if (pas == ''){
      eror.spass ='პაროლი არ შეიძლება იყოს ცარელა';
    } else {
      eror.spass = '';
    }
    if ( fos != '' && pas != ''){
    baza(newPage);
    function baza(page){
      let xxx = new XMLHttpRequest();
      xxx.addEventListener('load', function() {
        let ppp = this.responseText;
        let pppdata = JSON.parse(ppp);

        pppdata.data.forEach( y => {
        let em = y.email;
        let pass = y.first_name;

        if (fos == em && pas == pass){
          return forms.submit();
         } 
         if (fos != em || pas != pass) {
            document.getElementById('error_shed').textContent = 'ასეთი ელექტრონული ფოსტა არა რეგისტრირებული ან პაროლი არასწირია';
          }
         });

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
    }
    for (let z in eror){
      let errorsp = document.getElementById('error_' +z);
      if(errorsp){
        errorsp.textContent = eror[z];
      }
    }

  })
}
//-------------------------------------------------
// შესვლა ძირითად გვერდზე (რეგისტრაცის შემდეგ)
let forma = document.getElementById('shform');
function emailvalidacia1(){
  let fost = document.getElementById('fosta1').value;
  let fosshabloni=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let spann = document.getElementById('error_semail');
  
  if(fost.match(fosshabloni)){
    spann.textContent = '';
  }
  else {
    spann.textContent = 'არა სწორია ემაილის ფორმატი';
    spann.style.color = 'red';
  }
}
if( forma != null){
  let newPage = 1;
  let totalPage;

  forma.addEventListener('submit', function(eee){
    eee.preventDefault();

    let eror1 = {};
    let form1 = eee.target;
    let fost = document.getElementById('fosta1').value;
    let past = document.getElementById('paroli1').value;
    
    if ( fost == ''){
      eror1.semail = 'ელექტრონული ფოსტა არ შეიძლება იყოს ცარელა';
    } else {
      eror1.semail = '';
    }
    if (past == ''){
      eror1.spass ='პაროლი არ შეიძლება იყოს ცარელა';
    } else {
      eror1.spass = '';
    }
    if ( fost != '' && past != ''){
      baza(newPage);
      function baza(page){
        fetch('https://reqres.in/api/users?page='+page, {
          method: 'GET'
        })
        .then(function(res){
          if(res.status != 200){
            throw res.status;
          }
          return res.json();
        })
        .then(function(resdata){
          resdata.data.forEach( y => {
            let em = y.email;
            let pass = y.first_name;

            if (fost == em && past == pass){
              return forma.submit();
            } 
            if (fost != em || past != pass) {
                document.getElementById('error_shed1').textContent = 'ასეთი ელექტრონული ფოსტა არა რეგისტრირებული ან პაროლი არასწირია';
            }
          });
        })
        .catch(function(er){
          if (er == 404){
          let p = document.createElement('p');
          p.textContent = 'Server error';
          } else {
            let p = document.createElement('p');
            p.textContent = 'სხვა შეცდომა';
            }
            document.getElementById('api').appendChild(p)
        })
      }
    }
    form1.querySelectorAll('.error-text').forEach(ell => {
      ell.textContent = '';
    })
    for (let yy in eror1){
      let errorspan1 = document.getElementById('error_' + yy);
        if(errorspan1){
          errorspan1.textContent = eror1[yy];
        }
    }
  })
}
//-------------------------------------------------
//  რეგისტრაცია
let formm = document.getElementById('regformid');
function emailvalidacia2(){
  let fost = document.getElementById('email').value;
  let fosshabloni=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let spann = document.getElementById('error_email');

  if(fost.match(fosshabloni)){
    spann.textContent = '';
  }
  else {
    spann.textContent = 'არა სწორია ემაილის ფორმატი';
    spann.style.color = 'red';
  }
}
if(formm != null){
  formm.addEventListener('submit', function(e) {
    e.preventDefault();
    let errors = {};
    let form = e.target;

    let firstname = document.getElementById('saxeli').value;
    let lastname  = document.getElementById('gvari').value;
    let title = document.getElementById('title').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let password1 = document.getElementById('pass').value;
    let password2 = document.getElementById('gapass').value;

    if ( firstname.length < 2 || firstname == ''){
      errors.saxeli = 'სახელი არ შეიძლება იყოს 2 სიმბოლოზე ნაკლები ან ცარელა';
    }
    if ( lastname.length < 5 || lastname == ''){
      errors.gvari = 'გვარი არ შეიძლება იყოს 5 სიმბოლოზე ნაკლები ან ცარელა';
    }
    if ( title.length < 5 || title == ''){
      errors.title = 'ფსევდონიმი არ შეიძლება იყოს 5 სიმბოლოზე ნაკლები ან ცარელა';
    }
    if ( email == ''){
      errors.email = 'ელექტრონული ფოსტა არ შეიძლება იყოს ცარელა';
    }
    if ( phone == ''){
      errors.phone = 'ტელეფონის ველი არ შეიძლება იყოს ცარელა';
    }
    if (password1 == '' || password1.length < 6 ){
      errors.pass ='პაროლი არ შეიძლება იყოს ცარელა ან 6 სიმბოლოზე ნაკლები';
    }
    if (password2 == '' || password2.length < 6 ){
      errors.gapass ='პაროლი არ შეიძლება იყოს ცარელა ან 6 სიმბოლოზე ნაკლები';
    }
    if (password1 != password2){
      errors.gapass ='პაროლები არ ემთხვევა ერთმანეთს';
    }
    let checkbox = document.getElementById('chek').checked;

    if(!checkbox){
      errors.chek = 'დაეთანხმე წესებსა და პირობებს';
    }

    let sqesi = false

    form.querySelectorAll('[name = "sqesi"]').forEach(x => {
      if (x.checked) {
        sqesi = true;
      }
      if (!sqesi) {
        errors.sqesi = 'არ გაქვთ ამორჩეული სქესი';
      }
    })

  form.querySelectorAll('.error-text').forEach(el => {
    el.textContent = '';
  })
  for (let y in errors){
    let errorspan = document.getElementById('error_' + y);
      if(errorspan){
        errorspan.textContent = errors[y];
      }
  }
  console.log(errors);
  console.log(Object.keys(errors).length);
  if(Object.keys(errors).length == 0){
      formm.submit();
    }
  }) 

  let passwordshow1 = document.getElementById('pass');
  let passwordshow2 = document.getElementById('gapass');
  let toggleicon1 = document.getElementById('icon1');
  let toggleicon2 = document.getElementById('icon2');

  showpassword1 = () =>{
    if(passwordshow1.type == 'password'){
      passwordshow1.setAttribute('type', 'text');
      toggleicon1.classList.add('fa-eye-slash');
    } else {
      passwordshow1.setAttribute('type', 'password');
      toggleicon1.classList.remove('fa-eye-slash');
    }
  }

  showpassword2 = () =>{
    if(passwordshow2.type == 'password'){
      passwordshow2.setAttribute('type', 'text');
      toggleicon2.classList.add('fa-eye-slash');
    } else {
      passwordshow2.setAttribute('type', 'password');
      toggleicon2.classList.remove('fa-eye-slash');
    }
  }

  toggleicon1.addEventListener('click', showpassword1);
  toggleicon2.addEventListener('click', showpassword2);
}
//--------------------------------------------------------------------
// სლაიდის ფორმირება კონკრეტული მანქანების შესახებ ინფორმაციის გამოტანისას
let data;
let hed = document.getElementById('headerbmw8');
let hed1 = document.getElementById('headerbmw5');
let hed2 = document.getElementById('headerbmw6');
let hed7 = document.getElementById('headerlamborginiavendatori');
let hed8 = document.getElementById('headerLamborghiniHuracan');
let hed9 = document.getElementById('headerLamborghiniUrus');
let hed10 = document.getElementById('headermustangi');
let hed11 = document.getElementById('headershelbimustangi');
let hed12 = document.getElementById('headeraxalimustangi');
let hed13 = document.getElementById('headerjaguarxe');
let hed14 = document.getElementById('headerjaguarxj');
let hed15 = document.getElementById('headerjaguarpace');

if (hed != null || hed1 != null || hed2 != null || hed7 != null || hed8 != null || hed9 != null || hed10 != null || hed11 != null || hed12 != null || hed13 != null || hed14 != null || hed15 != null){
  if (hed != null){
    data = [
      {
          id: 1,
          imgurl: 'img/BMW/bmw_m8_1.jpg',
          title: 'Imig title 1',
       },
      {
          id: 2,
          imgurl: 'img/BMW/bmw_m8_2.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/BMW/bmw_m8_3.jpg',
          title: 'Imig title 3',
      },
      {
          id: 4,
          imgurl: 'img/BMW/bmw_m8_4.jpg',
          title: 'Imig title 4',
      },
      {
          id: 5,
          imgurl: 'img/BMW/bmw_m8_5.jpg',
          title: 'Imig title 5',
      }
    ]
  }
  if (hed1 != null){
      data = [
        {
            id: 1,
            imgurl: 'img/BMW/bmw_x5_e70_1.jpg',
            title: 'Imig title 1',
        },
        {
            id: 2,
            imgurl: 'img/BMW/bmw_x5_e70_2.jpg',
            title: 'Imig title 2',
        },
        {
            id: 3,
            imgurl: 'img/BMW/bmw_x5_e70_3.jpg',
            title: 'Imig title 3',
        },
        {
            id: 4,
            imgurl: 'img/BMW/bmw_x5_e70_4.jpg',
            title: 'Imig title 4',
        },
        {
            id: 5,
            imgurl: 'img/BMW/bmw_x5_e70_5.jpg',
            title: 'Imig title 5',
        }
      ]
  }
  if (hed2 != null){
    data = [
      {
          id: 1,
          imgurl: 'img/BMW/bmw_x6_1.jpg',
          title: 'Imig title 1',
      },
      {
          id: 2,
          imgurl: 'img/BMW/bmw_x6_2.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/BMW/bmw_x6_3.jpg',
          title: 'Imig title 3',
      },
      {
          id: 4,
          imgurl: 'img/BMW/bmw_x6_4.jpg',
          title: 'Imig title 4',
      },
      {
          id: 5,
          imgurl: 'img/BMW/bmw_x6_5.jpg',
          title: 'Imig title 5',
      }
    ]
  }
  if (hed7 != null){
    data = [
      {
          id: 1,
          imgurl: 'img/lamborgini/lamborghini-aventador_s.jpg',
          title: 'Imig title 1',
      },
      {
          id: 2,
          imgurl: 'img/lamborgini/lamborghini-aventador_s-2017-1600-02.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/lamborgini/lamborghini-aventador_s-2017-1600-03.jpg',
          title: 'Imig title 3',
      },
      {
          id: 4,
          imgurl: 'img/lamborgini/lamborghini-aventador_s-2017-1600-06.jpg',
          title: 'Imig title 4',
      },
      {
          id: 5,
          imgurl: 'img/lamborgini/lamborghini-aventador_s-2017-1600-08.jpg',
          title: 'Imig title 5',
      }
    ]
  }
  if (hed8 != null){
    data = [
      {
          id: 1,
          imgurl: 'img/lamborgini/lamborghini_huracan_1.jpg',
          title: 'Imig title 1',
       },
      {
          id: 2,
          imgurl: 'img/lamborgini/lamborghini_huracan_2.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/lamborgini/lamborghini_huracan_3.jpg',
          title: 'Imig title 3',
      },
      {
          id: 4,
          imgurl: 'img/lamborgini/lamborghini_huracan_4.jpg',
          title: 'Imig title 4',
      },
      {
          id: 5,
          imgurl: 'img/lamborgini/lamborghini_huracan_5.jpg',
          title: 'Imig title 5',
      }
    ]
  }
  if (hed9 != null){
    data = [
      {
          id: 1,
          imgurl: 'img/lamborgini/lamborghini_urus_1.jpg',
          title: 'Imig title 1',
       },
      {
          id: 2,
          imgurl: 'img/lamborgini/lamborghini_urus_2.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/lamborgini/lamborghini_urus_3.jpg',
          title: 'Imig title 3',
      },
      {
          id: 4,
          imgurl: 'img/lamborgini/lamborghini_urus_4.jpg',
          title: 'Imig title 4',
      },
      {
          id: 5,
          imgurl: 'img/lamborgini/lamborghini_urus_5.jpg',
          title: 'Imig title 5',
      }
    ]
  }
  if (hed10 != null){
    data = [
      {
          id: 1,
          imgurl: 'img/mustangi/Fordf35-mustang1.jpg',
          title: 'Imig title 1',
      },
      {
          id: 2,
          imgurl: 'img/mustangi/Fordf35-mustang4.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/mustangi/Fordf35-mustang-g.jpg',
          title: 'Imig title 3',
      },
      {
          id: 4,
          imgurl: 'img/mustangi/Fordf35-mustang-e.jpg',
          title: 'Imig title 4',
      }
    ]
  }
  if (hed11 != null){
    data = [
      {
          id: 1,
          imgurl: 'img/mustangi/shelby-gt350-live-2.jpg',
          title: 'Imig title 1',
       },
      {
          id: 2,
          imgurl: 'img/mustangi/shelby-gt350-live-3.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/mustangi/shelby-gt350-live-4.jpg',
          title: 'Imig title 3',
      },
      {
          id: 4,
          imgurl: 'img/mustangi/Ford-Mustang-Shelby-GT350-13.jpg',
          title: 'Imig title 4',
      },
      {
          id: 5,
          imgurl: 'img/mustangi/Ford-Mustang-Shelby-GT350-15.jpg',
          title: 'Imig title 5',
      }
    ]
  }
  if (hed12 != null){
    data = [
      {
          id: 1,
          imgurl: 'img/mustangi/Ford-Mustang-Photos-2015-46.jpg',
          title: 'Imig title 1',
      },
      {
          id: 2,
          imgurl: 'img/mustangi/Ford-Mustang-Photos-2015-47.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/mustangi/Ford-Mustang-Photos-2015-48.jpg',
          title: 'Imig title 2',
      },
      {
          id: 4,
          imgurl: 'img/mustangi/Ford-Mustang-Photos-2015-54.jpg',
          title: 'Imig title 3',
      },
      {
          id: 5,
          imgurl: 'img/mustangi/Ford-Mustang-Photos-2015-55.jpg',
          title: 'Imig title 4',
      },
      {
          id: 6,
          imgurl: 'img/mustangi/Ford-Mustang-Photos-2015-15.jpg',
          title: 'Imig title 5',
      }
    ]
  }
  if (hed13 != null){
    data = [
      {
          id: 1,
          imgurl: 'img/jaguar/jaguar_xe_1.jpg',
          title: 'Imig title 1',
      },
      {
          id: 2,
          imgurl: 'img/jaguar/jaguar_xe_2.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/jaguar/jaguar_xe_3.jpg',
          title: 'Imig title 3',
      },
      {
          id: 4,
          imgurl: 'img/jaguar/jaguar_xe_4.jpg',
          title: 'Imig title 4',
      },
      {
        id: 5,
        imgurl: 'img/jaguar/jaguar_xe_5.jpg',
        title: 'Imig title 5',
      }
  ]
  }
  if (hed14 != null){
    data = [
      {
        id: 1,
        imgurl: 'img/jaguar/jaguar_xj_1.jpg',
        title: 'Imig title 1',
      },
      {
        id: 2,
        imgurl: 'img/jaguar/jaguar_xj_2.jpg',
        title: 'Imig title 2',
      },
      {
        id: 3,
        imgurl: 'img/jaguar/jaguar_xj_3.jpg',
        title: 'Imig title 3',
     },
      {
        id: 4,
        imgurl: 'img/jaguar/jaguar_xj_4.jpg',
        title: 'Imig title 4',
      },
      {
        id: 5,
        imgurl: 'img/jaguar/jaguar_xj_5.jpg',
        title: 'Imig title 5',
      }
    ]
  }
  if (hed15 != null){
    data = [
      {
          id: 1,
          imgurl: 'img/jaguar/jaguar_i-pace_1.jpg',
          title: 'Imig title 1',
      },
      {
          id: 2,
          imgurl: 'img/jaguar/jaguar_i-pace_2.jpg',
          title: 'Imig title 2',
      },
      {
          id: 3,
          imgurl: 'img/jaguar/jaguar_i-pace_3.jpg',
          title: 'Imig title 2',
      },
      {
          id: 4,
          imgurl: 'img/jaguar/jaguar_i-pace_4.jpg',
          title: 'Imig title 3',
      },
      {
          id: 5,
          imgurl: 'img/jaguar/jaguar_i-pace_5.jpg',
          title: 'Imig title 4',
      }
    ]
  }

let arrowleft = document.getElementById('arrow-left');
let arrowright = document.getElementById('arrow-right');
let slidercontent = document.getElementById('slider-content');
let doti = document.getElementsByClassName('dot');

let index = 0;

function createimg(x){
  let imgteg = document.createElement('img');
  imgteg.setAttribute('src',x.imgurl);
  imgteg.setAttribute('alt',x.title);
  imgteg.classList.add('image-slider');
  imgteg.setAttribute('style','width: 90%');

  return imgteg;
}
function setslaid(){
  slidercontent.innerHTML = '';
  
  let sldimg = createimg(data[index]);
  let dots = sliderdot();

  slidercontent.appendChild(sldimg);
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
      return;
  }
  index++;
  setslaid();
}
arrowleft.addEventListener('click', sliderleft);
arrowright.addEventListener('click', sliderright);
setInterval( () => {
  sliderright();
}, 3000 )

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
}
//  ძირითადი ინფორმაციის გამოტანა
let databmw;
let hed3 = document.getElementById('headerbmw');
let hed4 = document.getElementById('headerlamborjin');
let hed5 = document.getElementById('headermustang');
let hed6 = document.getElementById('headerjaguar');

if (hed3 != null || hed4 != null || hed5 != null | hed6 != null){
  if (hed3 != null){
    showNav();
    databmw = [
      {
        id: 1,
        imgurl: 'img/bmw/bmw8.webp',
        title: 'Imig title 1',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 2,
        imgurl: 'img/bmw/bmwixm60.webp',
        title: 'Imig title 2',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 3,
        imgurl: 'img/bmw/bmwx6m.webp',
        title: 'Imig title 3',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 4,
        imgurl: 'img/bmw/bmwx5.webp',
        title: 'Imig title 4',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 5,
        imgurl: 'img/bmw/bmwx5m.webp',
        title: 'Imig title 5',
        url: 'Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 6,
        imgurl: 'img/bmw/bmw8.webp',
        title: 'Imig title 6',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 7,
        imgurl: 'img/bmw/bmwx6.webp',
        title: 'Imig title 7',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 8,
        imgurl: 'img/bmw/bmwx2.webp',
        title: 'Imig title 8',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 9,
        imgurl: 'img/bmw/bmwx7.webp',
        title: 'Imig title 9',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 10,
        imgurl: 'img/bmw/bmwx7m.webp',
        title: 'Imig title 10',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      }
    ]
  }
  if (hed4 != null){
    LshowNav();
    databmw = [
      {
        id: 1,
        imgurl: 'img/lamborgini/traqtori.jpg',
        title: 'Imig title 1',
        url: 'ლამბორჯინმა თავდაპირველად ტრაქტორები გამოუშვა '
      },
      {
        id: 2,
        imgurl: 'img/lamborgini/lamborgin1.jfif',
        title: 'Imig title 2',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 3,
        imgurl: 'img/lamborgini/lamborgin2.jfif',
        title: 'Imig title 3',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 4,
        imgurl: 'img/lamborgini/lamborgin3.jfif',
        title: 'Imig title 4',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 5,
        imgurl: 'img/lamborgini/lamborgin4.jfif',
        title: 'Imig title 5',
        url: 'Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 6,
        imgurl: 'img/lamborgini/lamborgin5.jfif',
        title: 'Imig title 6',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 7,
        imgurl: 'img/lamborgini/lamborgin6.jfif',
        title: 'Imig title 7',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 8,
        imgurl: 'img/lamborgini/lamborgin7.jfif',
        title: 'Imig title 8',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 9,
        imgurl: 'img/lamborgini/lamborgin8.jfif',
        title: 'Imig title 9',
        url: 'Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 10,
        imgurl: 'img/lamborgini/lamborgin9.jfif',
        title: 'Imig title 10',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 11,
        imgurl: 'img/lamborgini/lamborgin10.jfif',
        title: 'Imig title 9',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 12,
        imgurl: 'img/lamborgini/lamborgin11.jfif',
        title: 'Imig title 10',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      }
    ]
  }
  if (hed5 != null){
    MshowNav();
    databmw = [
      {
        id: 1,
        imgurl: 'img/mustangi/mustang11.jfif',
        title: 'Imig title 1',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 2,
        imgurl: 'img/mustangi/mustang2.jfif',
        title: 'Imig title 2',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 3,
        imgurl: 'img/mustangi/mustang3.jfif',
        title: 'Imig title 3',
        url: 'Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 4,
        imgurl: 'img/mustangi/mustang4.jfif',
        title: 'Imig title 4',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 5,
        imgurl: 'img/mustangi/mustang5.jfif',
        title: 'Imig title 5',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 6,
        imgurl: 'img/mustangi/mustang6.jfif',
        title: 'Imig title 6',
        url: 'Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 7,
        imgurl: 'img/mustangi/mustang7.jfif',
        title: 'Imig title 7',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 8,
        imgurl: 'img/mustangi/mustang8.jfif',
        title: 'Imig title 8',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 9,
        imgurl: 'img/mustangi/mustang9.jfif',
        title: 'Imig title 9',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 10,
        imgurl: 'img/mustangi/mustang10.jfif',
        title: 'Imig title 10',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 11,
        imgurl: 'img/mustangi/mustang1.jfif',
        title: 'Imig title 9',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      }
    ]
  }
  if (hed6 != null){
    JshowNav();
    databmw = [
      {
        id: 1,
        imgurl: 'img/jaguar/jaguar12.jfif',
        title: 'Imig title 1',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 2,
        imgurl: 'img/jaguar/jaguar2.jfif',
        title: 'Imig title 2',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 3,
        imgurl: 'img/jaguar/jaguar3.jfif',
        title: 'Imig title 3',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 4,
        imgurl: 'img/jaguar/jaguar4.jfif',
        title: 'Imig title 4',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 5,
        imgurl: 'img/jaguar/jaguar5.jfif',
        title: 'Imig title 5',
        url: 'Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 6,
        imgurl: 'img/jaguar/jaguar6.jfif',
        title: 'Imig title 6',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 7,
        imgurl: 'img/jaguar/jaguar7.jfif',
        title: 'Imig title 7',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 8,
        imgurl: 'img/jaguar/jaguar8.jfif',
        title: 'Imig title 8',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 9,
        imgurl: 'img/jaguar/jaguar9.jfif',
        title: 'Imig title 9',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 10,
        imgurl: 'img/jaguar/jaguar10.jfif',
        title: 'Imig title 10',
        url: ' დათო Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      },
      {
        id: 11,
        imgurl: 'img/jaguar/jaguar11.jfif',
        title: 'Imig title 9',
        url: ' ნიკა Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე'
      }
    ]
  }
  let fr = document.createDocumentFragment();
    databmw.forEach( yy => {
      let divtag = document.createElement('div');
      divtag.classList.add('bmw');
      let ptag = document.createElement('p');
      ptag.textContent = yy.url;
      let imgtag = document.createElement('img');
      imgtag.setAttribute('src',yy.imgurl);
      imgtag.setAttribute('alt',yy.title);

      divtag.appendChild(imgtag);
      divtag.appendChild(ptag);
      fr.appendChild(divtag);
  });

  document.getElementById('manqanebi').innerHTML = '';
  document.getElementById('manqanebi').appendChild(fr);

  let filt = document.getElementById('filter');
 
  function filterdata(serch){
    databmw.forEach( yy => {
      let divtag = document.createElement('div');
      divtag.classList.add('bmw');
      let ptag = document.createElement('p');
      ptag.textContent = yy.url;
      let imgtag = document.createElement('img');
      imgtag.setAttribute('src',yy.imgurl);
      imgtag.setAttribute('alt',yy.title);
      if(ptag.textContent.toLowerCase().includes(serch.toLowerCase())){
      divtag.appendChild(imgtag);
      divtag.appendChild(ptag);
      fr.appendChild(divtag);
      }
    });
      document.getElementById('manqanebi').innerHTML = '';
      document.getElementById('manqanebi').appendChild(fr);
  }

   filt.addEventListener('input', function(cc){
     filterdata(cc.target.value);
   })
}
// ---------------------------------------------------------------------
// ფუტერის ფორმირება
function showFooter(){
    const fotigaciatxt=["img/icons/twitter.png","img/icons/fb.png","img/icons/instagram.png","img/icons/telegram.png"];
    const fotigaciahttp=["https://twitter.com/twitter","https://www.facebook.com/","https://www.instagram.com/","https://telegram.org/"];
    let mtavarifot=fotigaciatxt.length;
    let fottxt;
  
    for (let i=0; i<mtavarifot; i++){
      fottxt+='<div class="footlogo"> <a target="_blank" href="'+fotigaciahttp[i]+'"><img id="footimg'+i+'" src="'+fotigaciatxt[i]+'"></a></div>';
    }
     document.getElementById("foot").innerHTML=fottxt;
     document.getElementById("fotter").style.width="100%";
     document.getElementById("fotter").style.backgroundColor="#000000";
     document.getElementById("fotter").style.padding="15px";
     document.getElementById("fotter").style.borderRadius="20px";
     document.getElementById("fotter").style.position="fixed";
     document.getElementById("fotter").style.bottom="0";
     document.getElementById("foot").style.display='flex';
     document.getElementById("foot").style.justifyContent="center"
     document.getElementById("foot").style.paddingTop="5px";
     document.getElementById("footimg0").style.width='20px';
     document.getElementById("footimg0").style.height='20px';
     document.getElementById("footimg1").style.width='20px';
     document.getElementById("footimg1").style.height='20px';
     document.getElementById("footimg2").style.width='20px';
     document.getElementById("footimg2").style.height='20px';
     document.getElementById("footimg3").style.width='20px';
     document.getElementById("footimg3").style.height='20px';
     document.getElementById("footimg1").style.marginLeft='160px';
     document.getElementById("footimg2").style.marginLeft='160px';
     document.getElementById("footimg3").style.marginLeft='160px';
}
//-----------------------------------------------------------------------------