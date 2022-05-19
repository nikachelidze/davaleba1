// დავალება:

// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.

let mas = [5, 25, 89, 120, 36];
    mas.push('javascript', 'python');
    mas.unshift('html', 'css');
      console.log(mas.length);
    mas.shift();
    mas.pop();
    console.log(mas);


// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let xili = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
    console.log(xili.length);
        xili.push('ვაშლი', 'ანანასი');
        xili.unshift('საზამთრო');
    console.log(xili.length);
        xili.splice(2, 0,'მანგო');
        xili.shift();
        xili.pop();
    console.log(xili.length);
    
// 3. მოცემულია მასივი: map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let array1 = [12, 25, 3, 6, 8, 14, 7, 23];
    let newarray1 = array1.map(function(i) {
        return i / 3;
    });
console.log(newarray1);


// 4.  მოცემულია მასივი: filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 


let array2 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newarray2 = array2.filter(function(i) {
    if (typeof i ===  'number'){
        return i ;
    }
});
console.log(newarray2);


// 5.მოცემულია მასივი:ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let newlanguages = languages.filter(function(i){
    if(i.length > 3){
        return i;
    }
})
console.log(newlanguages);


// 6.მოცემულია მასივი:Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);

let array= ['academy', 'of', 'digital', 'industries'];
let newarray =  array.reduce(function(x, y){
    return x.concat(y, ' ');   
},
''
)
console.log(newarray);


// 7. მოცემულია მასივი:შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

let item = [12, 'google', 32, null, 'yahoo', 25];
    let y;
    let newitem = item.map(function(i) {
        if (typeof i === 'number'){
             y = i*i;
        }
        else if (typeof i === 'string'){
            y = i.toUpperCase();    
        }
        else { y = null}
          return y;
     });
     console.log(newitem);

// 8. Მოცემულია მასივი:Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

let newwords = words.filter(function(i){
    if(i.includes('m') || i.includes('M')){
             return i;
         }
     })
console.log(newwords);