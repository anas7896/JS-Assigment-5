// CHAPTER: MATH METHODS

// Q NO: 1

var num = +prompt('Enter a positive integer number')

document.write(num + '<br>')
document.write('Round off value: ' + Math.round(num) + '<br>')
document.write('Floor value: ' + Math.floor(num) + '<br>')
document.write('Ceil value: ' + Math.ceil(num) + '<br>')

// Q NO: 2

var num1 = +prompt('Enter a negative integer number')

document.write('Number: ' + num1 + '<br>')
document.write('Round off value: ' + Math.round(num1) + '<br>')
document.write('Floor value: ' + Math.floor(num1) + '<br>')
document.write('Ceil value: ' + Math.ceil(num1) + '<br>')

// Q NO: 3

var random = Math.floor(Math.random() * 10)

document.write('Random dice value: ' + random)

// Q NO: 4

var head = prompt('Enter your name')
var tail = prompt('Enter your name') 

var toss = Math.ceil(Math.random() * 2)

if (toss === 1) {
    alert(head + ': Win the toss')
}
else{
    alert(tail + ': Wins the toss')
}

// Q NO: 5

var rand = Math.floor(Math.random() * 100)

document.write('Random number between 1 and 100: ' +  rand)

// Q no: 6

var userWeight = prompt('Enter ypur weight in Kilograms')

if (userWeight) {
    document.write('The weight of user is ' + userWeight + ' Kilograms') 
} else {
    document.write("Invalid input. Please enter a valid weight in kilograms.");
}

// Q NO: 7

var userInput = +prompt('Enter a number between 1 and 10')
var secreat = 5

if (userInput === secreat) {
    alert('congratulation you are selected.....')
} else {
    alert('Try again later.....')
}




