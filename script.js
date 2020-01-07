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


/* var height = parseInt(prompt('Enter height: '));
var width = parseInt(prompt('Enter width: '));
var points = [2, 3, 4];
var points2d = [[2, 3],[6, 3],[3, 1]]; */

/* function printMatrix(h, w, z) {

    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            var exists = false;
            for (var p = 0; p < z.length; p++) {
                if (z[p] === i && z[p] === j) {
                    exists = true;
                    document.write('<span style ="font-size:18px;">0</span>');
                }
            }
            if (!exists)
                document.write('<span style ="font-size:18px;">#</span>');
        }
        document.write('</br>');
    }
}
 */
/* 
function printMatrix(h, w, z) {

    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            var exists = false;
            for (var p = 0; p < z.length; p++) {
                if (z[p][0] === i && z[p][1] === j) {
                    exists = true;
                    document.write('<span style ="font-size:18px;">0</span>');
                }
            }
            if (!exists)
                document.write('<span style ="font-size:18px;">#</span>');
        }
        document.write('</br>');
    }
}
printMatrix(height, width, points2d);
 */

/* 
var nizDivova = document.getElementsByClassName('konzola');

console.log(nizDivova);
 */

/* 
var language = 'bs_bs';
var locales = {
    'en_us': {
        hello: "Hello",
        welcome: "Welcome to our page",
        how_are_you: "How are you today?",
        msg: "JS"
    },
    'sr_rs': {
        hello: "Dobar dan",
        welcome: "Dobro dosli na nasu stranicu",
        how_are_you: "Kako ste danas?",
        msg: "DzEJES"
    },
    'bs_bs': {
        hello: "Dobar dan bosanski",
        welcome: "Dobro dosli na nasu stranicu",
        how_are_you: "Kako ste danas?",
        msg: "DejEs"
    }
};

function translatePage(lang) {
    var nizDivova = document.getElementsByTagName('div');
    for(var i=0; i<nizDivova.length; i++){
        nizDivova[i].innerHTML = locales[lang][nizDivova[i].innerHTML];
    }
}

translatePage(language);

 */

/* 
var div = document.createElement('div');
div.innerHTML = 'Ovo je div kreiran iz JSa';

var h2 = document.createElement('h2');
h2.innerHTML = 'Ovo je naslov drugog nivoa';

document.body.appendChild(div);
div.appendChild(h2);

 */
/* 
var images = ['https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'];

var image = document.createElement('img');
document.body.appendChild(image);
image.style.width = 30;
var counter = 0;

setInterval(function () {
    image.src = images[counter];
    counter++;    
    if(counter >= images.length){
        counter=0;
    }  

}, 1000);
 */

/* 
var data = [
    {
        id: 1,
        name: 'BATMAN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: 'https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c01d.png'
    },
    {
        id: 2,
        name: 'SUPERMAN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: 'https://purepng.com/public/uploads/large/purepng.com-supermansupermanfictional-superherocomic-booksdc-comicscharacterjerry-siegelson-of-kryptonaction-comicsman-of-steel-1701528657757hwozy.png'
    },
    {
        id: 3,
        name: 'SPIDERMAN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        image: 'https://i.pinimg.com/originals/c1/0d/ee/c10dee09355e81e8e69c0580b4e05f38.png'
    }
]

var table = document.createElement('table');
document.body.appendChild(table);

var tr = document.createElement('tr');
table.border = 1;
table.style.margin = 'auto';
table.appendChild(tr);

var th_id = document.createElement('th');
th_id.innerHTML = '#';
tr.appendChild(th_id);

var th_name = document.createElement('th');
th_name.innerHTML = 'Name';
tr.appendChild(th_name);

var th_desc = document.createElement('th');
th_desc.innerHTML = 'Description';
tr.appendChild(th_desc);

var th_image = document.createElement('th');
th_image.innerHTML = 'Image';
tr.appendChild(th_image);


for (var i = 0; i < data.length; i++) {
    var tr1 = document.createElement('tr');

    tr1.style.background = i % 2 == 0 ? 'lightyellow':'whitesmoke';

    table.appendChild(tr1);

    var td_id = document.createElement('td');
    td_id.innerHTML = data[i].id;
    tr1.appendChild(td_id);

    var td_name = document.createElement('td');
    td_name.innerHTML = data[i].name;
    tr1.appendChild(td_name);

    var td_desc = document.createElement('td');
    td_desc.innerHTML = data[i].description;
    tr1.appendChild(td_desc);

    var td_image = document.createElement('td');
    var img = document.createElement('img');
    img.src = data[i].image;
    img.width = 130;
    img.height = 160;
    td_image.appendChild(img);
    tr1.appendChild(td_image);


}
 */


//Napisati funkciju koja  izbacuje element iz niza a ako nema ispisuje da nije pronadjen
/* var array = [5, 'It Akademija', 12, 'Sarajevo', true, 'Student', 122, 'PC', -23, new Date().toLocaleDateString()];
function removeFromArr(inp) {
    console.log(array);
    var index = array.indexOf(inp);
    if (index != -1) {
        array.splice(index, 1);
        console.log(array);
    }
    else {
        console.log('Element not found');
    }
}
removeFromArr(12); 
*/


// Napisati funkciju koja iz niza izvlaci samo brojeve i smjesta ih u drugi novi niz
/* 
function numbersOnly() {
    console.log(array);
    var nizBrojeva = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof (array[i]) == 'number') {
            nizBrojeva.push(array[i]);
        }
    }
    return nizBrojeva;
}
var res = numbersOnly();
console.log(res);
*/


//printanje matrixa
/* function printMatrix() {

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j <= i; j++) {
            document.write('#');
        }
        document.write('<br>');
    }

}

//printanje matrixa
printMatrix(); */
/* 
function printMatrix() {
    for (var i = 5; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            document.write('*');
        }
        document.write('<br>');
    }

}

printMatrix();
 */


//algoritam za trazenje najvece rijeci u stringu
/* var str = 'Web Development Tutorial for Begginers';
function maxWord(text) {
    var words = text.split(' ');
    var start = words[0];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > start.length) {
            start = words[i];
        }
    }            
    return start;
}            


console.log(maxWord(str));
 */


//bubble sort niza
/* 
var arr = [12, 3, 45, 6, 7, 32, 17, 9, 105, 99, 27, 166, 21, 81, 23, 24];

function bubbleSort(niz) {
    for (var i = 0; i < niz.length; i++) {
        for (var j = 0; j < niz.length; j++) {
            if (niz[j] > niz[j + 1]) {

                var temp = niz[j];
                niz[j]=niz[j+1];
                niz[j+1] = temp;

            }
        }
    }

    return niz;
}
document.write('Array: ' + arr.sort());
document.write('<br>')
document.write('Bubble Sort: ' + bubbleSort(arr));
 */

/* function clicked(){
    console.log('You clicked on div');
}
 */

/* 
function copyDiv(evt) {
    var original = document.getElementsByTagName('div');
    original[1].innerHTML = original[0].innerHTML;
    original[0].innerHTML = 'Uspjesno prebaceno';
    console.log('Kliknuo si na div');
    console.log(evt);

} */

/* var div = document.createElement('div');
div.style.cssText = 'height: 400px; width: 800px; border: 7px solid black; margin: 100px auto;'
var mousedown = false;

div.onmousedown = function () {
    console.log('Aktiviran klik');
    mousedown = true;
}

div.onmouseup = function () {
    console.log('Pusten klik');
    mousedown = false;
}

div.onmousemove = function (event) {
    if(!mousedown) return;
    var point = document.createElement('div');
    point.style.cssText = 'width: 5px; height: 5px; background: red; position: absolute;';
    point.style.top = event.clientY+'px';
    point.style.left = event.clientX+'px';
    div.appendChild(point);
    console.log('Aktiviran pokret misa', event);
}

document.body.appendChild(div);
 */
/* 
function checkInput(evt) {
    var unos = evt.target.value;
    evt.target.style.cssText = 'border-bottom: 1px solid black;';
    if (isNaN(unos)) {
        evt.target.style.cssText = 'border-bottom: 3px solid red;';
    }
}
 */

var arr = [
    'https://picsum.photos/200/300', 'https://picsum.photos/200/300',
    'https://picsum.photos/200/300', 'https://picsum.photos/200/300',
    'https://picsum.photos/200/300', 'https://picsum.photos/200/300',
    'https://picsum.photos/200/300', 'https://picsum.photos/200/300'
    ];

var image = document.getElementById('image');
var index = 0;
displayImage(index);

function backImg() {
    displayImage(index);
    index--;
}

function nextImg() {
    displayImage(index);
    index++
}

function displayImage(i) {
    index = arr[i] ? i:0;
    image.src = arr[i];   
}






//overapi.com
//sorting.at