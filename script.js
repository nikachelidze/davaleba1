
// 1. მოცემულია ობიექტი:ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let  user = {
     firstname: 'giorgi',
     lastname: 'smith',
     age: 25,
     studentstatus: 'active'
};

console.log(user.studentstatus);

// დავალება 2: შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი;

let names = ['ნიკა', 'გიო', 10, 5, 'კეთილი იყოს თქვენი მობრძანება']

for (let i = 0; i <names.length; i++) {
    console.log(names[i]);
}

// დავალება 3: შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let j = 0; j <numbers.length; j++) {
   if (numbers[j]>5){
    console.log(numbers[j]);
   }   
}
// დავალება 4: თუ უსერის ასაკი მეტია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user1 = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
};
 
if (user1.age > 18 && user1.studentstatus == 'active' ){
        console.log('hello');
} else if (user1.name === 'levani') {
    console.log('hello giorgi');
} else if (user1.studentstatus == 'active' || user1.age < 25) {
    console.log('hello world'); 
} else {
    console.log('error');
}
// დავალება 5: მოცემულია მასივი:გამოიტანეთ მარტო სრტინგები;

let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'] ;

for (let k = 0; k < array.length; k++){
    if(typeof array[k] === 'string'){
    console.log(array[k]);
    }
}

// დავალება 6: მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
let array1 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
for (let l = 0; l < array1.length; l++) {
    for (let m = 0; m < array1[l].length; m++) {
        if (array1[l][m]>0){
            console.log(array1[l][m]);
        }  
    }
}
 
// დავალება 7: მოცემული მასივიდან ამოარჩიეთ მხოლოდ ციფრები, რომელიბიც 5-ის ჯერადია

let array2 = [32, 10, 'hello', null, 'hello2', 50 ]

for (let i = 0; i < array2.length; i++){
    if(typeof array2[i] === 'number'){
        for (j = 1; j < array2[i]; j++){
            if(j*5 === array2[i]){
                console.log(array2[i]);
            }
        }
    }
}