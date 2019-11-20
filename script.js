// console.log("ovo je ispis na konzolu")
// console.error("ovo je ispis na konzolu")

// var userName = "Haris";
// var age = 20;
// var learningJS = true;

// console.log(userName);
// console.log(age);
// console.log(learningJS);

// var number1 = parseInt (prompt("Enter first number: "));
// var number2 = parseInt (prompt("Enter second number: "));
// var result = number1 + number2;

// console.log("Prvi broj: " + number1);
// console.log("Drugi broj: " + number2);
// console.log("Rezultat je: " + result);

// var text = "Today is a good day";
// console.log(text);
// console.log(typeof(text));

// var a = true;
// var b = false;

// var c = a && b;
// var d = a || b;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

var a = 6;
var b = 6;

function isEqual(number1, number2) {
    alert('Entered numbers are: ' + number1 + ' and ' + number2);
    confirm('Find out if entered numbers are equal?');
    document.write('Entered numbers are: ' + number1 + ' and ' + number2);
    document.write('<br>')

    if (number1 === number2) {
        alert('The numbers are equal');
        document.write('The numbers are equal');

    }
    else
        alert('The numbers are not equal');
    document.write('The numbers are not equal');
}

isEqual(50, 2);