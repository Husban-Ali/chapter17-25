document.write("<h>Q1</h>")
const emptyArray = [];

for (let i = 0; i < 3; i++) {
  emptyArray.push([]);
}

console.log(emptyArray); 

document.write("<h>Q2</h>")

const matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  
  document.write("<h>Q3</h>")

  for( let i=0 ; i<=10; i++){
  console.log(i)}

  document.write("<h>Q3</h>")

  const tableNumber = prompt("Enter the table number: ");
const tableLength = prompt("Enter the length of the table: ");

for (let i = 1; i <= tableLength; i++) {
    console.log(tableNumber,"*",i,"=",tableNumber*i)
  }


  // Q1 
// var name = prompt("Enter Name")
// var surname = prompt("Enter Surname")
// var fullname = name+surname;
// alert(fullname)


// Q2
// var phone = prompt("Enter Favorite phone")
// alert(phone.length)


// Q3 
var name = "Pakistan"
var find = name.indexOf("n")
document.write(find)

// Q4
 var greet = "Hello World!";
 var lol = greet.lastIndexOf("l")
 document.write(lol)


// Q5

var name = "Pakistan"
var find = name.search("i")
document.write(find)

// Q6 

var name = "Hamiz"
var surname = "Muzaffer"
var fullname = name.concat(surname)
document.write(fullname)

// Q7

var city = "Faisalabad"
var city1 = city.replace('Faisal', 'Islam')
console.log(city1)


// Q8 

var message = "Ali and Sami are best friends. They play cricket and football together.";
var message1 = message.replaceAll("and", "&")
document.write(message1)

// Q9 
var type = "471"
console.log(type)
var type = 471;

// Q10

var nut = "peanuts"
var nut1 = nut.toUpperCase("peanuts")
document.write(nut1)

// Q11 
var alpha = "javascript"
var alpha1 = alpha.replace("j", "J")
document.write(alpha1)

// Q12
// var num = 35.56;
// var num1 = num.toString()
// (35.56).toString(num1)
// document.write(num1)

// Q13

// var username = prompt("Write Username:")
// if (/[.@!]/.test(username)) {
//     console.log('Invalid username. It cannot contain [@, ., !]');
//   } else {
//     console.log(`Username "${username}" is valid.`);
//   }

// Q14

var menu = ["cake", "apple", "pie", "cookie", "chips", "patties"]
var order = prompt("Write order")
isfound=false;
for(i=0;i<=5;++i)
    if(menu[i]==order){
        document.write(order,"\n is available",indexOf(order))
        isfound=true;
        break;
    }
    else{
        document.write(order,"\n is not available")

    }

    // q15

    