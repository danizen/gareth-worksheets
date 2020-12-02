/*
DATATYPES
---------
A variable can hold different datatypes.
The Datatype of a variable means what type of data a variable holds.
*/

// The variable X stores a number 5; JavaScript knows it is a number.

var x = 5;

console.log('type of x is '+typeof(x));

// The variable msg stores a string "Hello Conrad"; JavaScript knows it is a string.
var msg = 'Hello Conrad';

console.log('type of msg is '+typeof(msg));

// In JavaScript, the value and type of a variable can change
var y = 'Was a string';
y = 11.0;

console.log('type of y is '+typeof(y));

// In Javascript you can print variables directly without converting to string first
console.log(x, msg, y);

// another data type is truth and falsehood

var isitok = false;
console.log('type of isitok is', typeof(isitok));
console.log('isitok =',isitok);
isitok = true;
console.log('isitok =',isitok);

/*
All of the above are "scalar" variables - they point to only one thing.
JavaScript has another basic data type - objects.  Many languages
would treat an "array" or "list" as a separate datatype from an object,
but JavaScript not so much.
*/

// mylist is a list of things:
var mylist;
mylist = ['a', 'list', 'of', 5, 'things'];
console.log('type ot mylist is', typeof(mylist));

// we can also declare an "object":

var myobj = {
	color: 'yellow',
	shape: 'circle',
	dimension: 1.06667
};
console.log('type of myobj is', typeof(myobj));

console.log(mylist, myobj);
