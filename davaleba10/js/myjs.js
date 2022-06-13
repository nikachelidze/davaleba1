let formm = document.getElementById('regformid')
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
  
  if ( firstname.lenght < 2 || firstname === ''){
    errors.saxeli = 'სახელი არ შეიძლება იყოს 2 სიმბოლოზე ნაკლები ან ცარელა';
  } else {
    errors.saxeli = '';
  }
  if ( lastname.lenght < 5 || lastname === ''){
    errors.gvari = 'გვარი არ შეიძლება იყოს 5 სიმბოლოზე ნაკლები ან ცარელა';
  } else {
    errors.gvari = '';
  }
  if ( title.lenght < 5 || title === ''){
    errors.title = 'ფსევდონიმი არ შეიძლება იყოს 5 სიმბოლოზე ნაკლები ან ცარელა';
  } else {
    errors.title = '';
  }
  if ( email === ''){
    errors.email = 'ელექტრონული ფოსტა არ შეიძლება იყოს ცარელა';
  } else {
    errors.email = '';
  }
  if ( phone === ''){
    errors.phone = 'ტელეფონის ველი არ შეიძლება იყოს ცარელა';
  } else {
    errors.phone = '';
  }
if (password1 === ''){
  errors.pass ='პაროლი არ შეიძლება იყოს ცარელა';
} else {
  errors.pass ='';
}
if (password2 === ''){
  errors.gapass ='პაროლი არ შეიძლება იყოს ცარელა';
} else {
  errors.gapass ='';
}

if (password1 != password2){
  errors.gapass ='პაროლები არ ემთხვევა ერთმანეთს';
} else {
  errors.gapass ='';
}

let checkbox = document.getElementById('chek').checked;

if(!checkbox){
  errors.chek = 'დაეთანხმე წესებსა და პირობებს';
} else {
  errors.chek = '';
}

let sqesi = false

form.querySelectorAll('[name = "sqesi"]').forEach(x => {
  if (x.checked) {
    sqesi = true;
  }
  if (!sqesi) {
    errors.sqesi = 'არ გაქვთ ამორჩეული სქესი';
  } else {
    errors.sqesi = '';
  }
  
})

for (let y in errors){

  let errorspan = document.getElementById('error_' + y);
      errorspan.textContent = errors[y];
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
