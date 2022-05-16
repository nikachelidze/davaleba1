// 1. 1.	შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
function xxxx (...nnn){
    let yyy = 0;
    for (let i of nnn){
        if (i > 0){
            yyy += i;
        }
    } 
    return yyy;

}
 
let jjj=xxxx(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)  
console.log(jjj);

// 2.	ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
function aaa(...ooo){
    let qqq = 0;
    for (let u of ooo){
        qqq += u;
    }
    return qqq;

}
let jj = aaa(10, 50, 6, 7, 8, 11, 6, 3, 9)
    console.log(jj);

// 3.ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: 'true'
  }
  function array(){
    let i;
    if (user.isloggedin === 'true'){
      i  =  user.firstname +' '+ user.lastname;
    }
    else{
      i = 'false'
    }
    return i;
  }

let m = array()
  console.log(m);



// 4.	შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function aaa(...ooo){
   return Math.max.apply(null, ooo);
}
let jrj = aaa(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(jrj);

