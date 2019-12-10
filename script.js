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

/* 

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
    var res = iznos/kursnaVrijednost;
    alert('Vrijednost je: ' +res+' '+enteredCurrency);
}
else alert('Valuta nije podrzana');


 */

/* 
var arr = [];

var person = {
    name: 'Haris',
    surname: 'Lapo',
    age: '23',
    address: {}
};

arr.push(person);

console.log(person.name);
console.log(arr);

 */

/* 
var enteredNumbers = (prompt('Enter numbers to add: '));
console.log(enteredNumbers);
var arr = enteredNumbers.split(',')
console.log(arr);

function saberi(arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res += parseInt(arr[i]);
    }
    return res;
}
var rezultat = saberi(arr);

console.log(rezultat);

 */
/* 
var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [7, 8, 9, 10, 11, 12];

function arrayAdder(a1, a2) {

    var result = [];

    for (var i = 0; i < a2.length; i++) {

        result[i] = a1[i] + a2[i];
    }
    return result;

}

var rezultat = arrayAdder(arr1, arr2);
console.log(rezultat);
 */

/* 
var str = 'RIMAC';
function abeceda(st1) {
    return st1.split('').sort().join(' ');
}

var rezultat = abeceda(str);
console.log(rezultat);

 */

/* var arr = [1, 4, 56, -34, -9, 10, 4, 1, 67, -2];
console.log("The numbers are:  " + arr); 
*/
/* 
function positiveNumbers(arr1) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr[i] > 0) {
            result.push(arr1[i]);
        }
    }   
    return result;
}

function negativeNumbers(arr2) {
    var result = [];
    for (var i = 0; i < arr2.length; i++) {
        if (arr[i] < 0) {
            result.push(arr2[i]);
        }
    }
    return result;
}

var rezultat1 = positiveNumbers(arr);
console.log(rezultat1);

var rezultat2 = negativeNumbers(arr);
console.log(rezultat2);
 */


/* function dupli(niz) {
    
    var duplicate = [];
    var original = [];

    for (var i = 0; i < niz.length; i++) {
        if (!original.includes(niz[i])) {
            original.push(niz[i])
        }
        else {
            duplicate.push(niz[i]);
        }
    }
    return {d: duplicate, o: original};
}

var res = dupli(arr);
console.log(res);

 */
/* 
var s1 = 'Hello World ';
var s2 = 'From JavaScript';
var s3 = s1.concat(s2);



function colorizedString(str) {

    for (var i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            document.write('<span style = "color: red">' + str[i] + '</span>');
        }
        else {
            document.write('<span>' + str[i] + '</span>');
        }
    }
} 

colorizedString(s3);
 */

/* 
var arr = [245, 56, 67, 92, 345, 'bruca', 'braca', 'bruda', 'brada', false, true, 'teufik', 'shchenik'];

function randomItemArray(a) {
    var index = Math.floor( Math.random() * a.length);
    return a[index];
}
var result = randomItemArray(arr);
console.log(result);
 */

/* 
var bubanj = [12, 334, 35, 123, 67, 87];

while (true) {
    var check = parseInt(prompt('Enter number to play or enter 0 to exit'));
    if (check == 0) {
        break;
    }
    else if (bubanj.includes(check)) {
        alert('Congrats, you won!');
    }
    else {
        alert('Sorry, you lost.');
    }
} */

/* var height = parseInt(prompt('Enter height: '));
var width = parseInt(prompt('Enter width: '));

function printMatrix(h, w) {

    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            document.write('#');
            
        }
        document.write('<br>');
    }

}



printMatrix(height, width); */


var height = parseInt(prompt('Enter height: '));
var width = parseInt(prompt('Enter width: '));
var points = [3, 4, 2];

function printMatrix(h, w) {

    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            if (points.includes(i) && points.includes(j)) {
                document.write('0');
            }
            else 
            document.write('#');
        }
        document.write('<br>');
    }

}

printMatrix(height, width);


//overapi.com