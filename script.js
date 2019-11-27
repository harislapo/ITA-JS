// ----- zadatak -----



/* 
console.log("ovo je ispis na konzolu")
console.error("ovo je ispis na konzolu") 
*/




// ----- zadatak -----

/* var userName = "Haris";
var age = 20;
var learningJS = true;

console.log(userName);
console.log(age);
console.log(learningJS);
 */



// ----- zadatak -----

/* 
var number1 = parseInt (prompt("Enter first number: "));
var number2 = parseInt (prompt("Enter second number: "));
var result = number1 + number2;

console.log("Prvi broj: " + number1);
console.log("Drugi broj: " + number2);
console.log("Rezultat je: " + result); 

 */


// ----- zadatak -----

/* 
var text = "Today is a good day";
console.log(text);
console.log(typeof(text)); 
*/




// ----- zadatak -----

/* 
var a = true;
var b = false;

var c = a && b;
var d = a || b;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
 */




// ----- zadatak -----

/* var number1 = prompt('Enter first number: ');
var number2 = prompt('Enter second number: ');

function isEqual(x, y) {
    alert('Entered numbers are: ' + number1 + ' and ' + number2);
    confirm('Find out if entered numbers are equal?');
    document.write('Entered numbers are: ' + number1 + ' and ' + number2);
    document.write('<br>')

    if (number1 === number2) {
        alert('The numbers are equal');
        document.write('The numbers are equal');
    }
    else {
        alert('The numbers are not equal');
        document.write('The numbers are not equal');
    }
}

isEqual(number1, number2);   
*/



// ----- control flow ------

// ----- zadatak -----

/* var number = prompt('Please enter number: ');
if (number > 5) {
    alert('Entered number is bigger than 5');
}
else if (number == 5) {
    alert('Entered number is equal to 5');
}
else {
    alert('Entered number is smaller than 5');
} */




// ----- zadatak -----

/* var question = prompt("Is the sun out now? yes/no"); // MOJA VARIJANTA

 if (question == "yes") {
    alert("Good day!");
}
else if (question == "no") {
    alert("Good evening");
}
else alert("Please enter yes or no!"); 
*/


/* 
var question = confirm("Is the sun out now? yes/no"); // NJEGOVA VARIJANTA

if (question) {
    document.write("Good day");
}
else {
    document.write("Good evening");
}
*/



/* 
var question = confirm("Is the sun out now? yes/no"); // NJEGOVA VARIJANTA 2

alert(question ? 'Good day' : 'Good evening'); 
*/


// --- zadatak ---


/* 
var firstNumber = parseInt(prompt('Enter first number:'));              //MOJA VARIJANTA
var secondNumber = parseInt(prompt('Enter second number:'));
var operand = prompt('Enter operand: ');

function calculate(firstNumber, secondNumber, operand) {

    switch (operand) {
        case '+':
            prompt(result = firstNumber + secondNumber);
            break;

        case '-':
            prompt(result = firstNumber - secondNumber);
            break;

        case '*':
            prompt(result = firstNumber * secondNumber);
            break;

        case '/':
            prompt(result = firstNumber / secondNumber);
            break;

        default:
            alert("Enter valid operand");
    }

}

calculate(firstNumber, secondNumber); 
*/


/* var operand1 = parseInt(prompt('Enter first number:'));         //NJEGOVA VARIJANTA
var operand2 = parseInt(prompt('Enter second number:'));
var operacija = prompt('Enter operand: ');

function izvrsiOperaciju(op1, op2, op) {
    switch (op) {
        case '+':
            alert(op1 + op2);
            break;

        case '-':
            alert(op1 - op2);
            break;

        case '*':
            alert(op1 * op2);
            break;

        case '/':
            alert(op1 / op2);
            break;

        default:
            alert("Enter valid operand");
    }
}

izvrsiOperaciju(operand1, operand2, operacija); */



// --- ZADATAK ---

/* 
const date1 = new Date;
var date2 = date1.getHours(); 

console.log(date2);

function hello(currentTime){

    if (currentTime < 10){
        alert("Good morning");
    }
    else if(currentTime >= 10 && currentTime <=17){
        alert("Good afternoon");
    }
    else
        alert("Good evening");
} 

hello(date2); 
*/

// --- zadatak ---

/* 
var enteredAmount = parseFloat(prompt("Please enter amount of money in KM's you want to exchange: "));
var enteredCurrency = prompt("To currency: (EUR/HRK/GBP/USD)");


switch(enteredCurrency) {
    case 'EUR': alert(result = enteredAmount * 0.51);
    break;

    case 'HRK': alert(result = enteredAmount * 3.81);
    break;

    case 'GBP': alert(result = enteredAmount * 0.44);
    break;

    case 'USD': alert(result = enteredAmount * 0.56);
    break;
}     
*/


// --- NIZOVI ----

/* 
var niz = [1, 2, 3, 'super skola', [1, 9, 9, ['treci niz u nizu']], 'gađanje css-om'];
niz[4].push(true);
var drugiClan = niz[4][3];
console.log(niz);
console.log(drugiClan);
 */
/* 
var niz2 = [1, 'super niz', 6, 8];
var index = niz2.indexOf('super niz');
 */
/* console.log(index);
console.log(niz2.includes(3));
console.log(niz2.pop());
console.log(niz2); */

/* 
niz2.splice(index, 1);
console.log(index);
console.log(niz2);
*/

var kurs = {
    EUR: 1.95,
    HRK: 4,
    GBP: 2.3,
    USD: 1.6
}

var valute = Object.keys(kurs);

var iznos = parseInt(prompt("Please enter amount of money in KM's you want to exchange: "));
var enteredCurrency = prompt("To currency: (EUR/HRK/GBP/USD)");

if (valute.includes(enteredCurrency)) {
    var kursnaVrijednost = kurs[enteredCurrency];
    var res = iznos*kursnaVrijednost;
    alert('Vrijednost je: ' +res+' '+enteredCurrency);
}
else alert('Valuta nije podrzana');







//overapi.com

