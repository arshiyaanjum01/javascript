console.log('hello')

//Displaying outputs

//alert('Alert occured')
//console.warn('this is warninh')
//console.error('this is a error')

//JS Basics
//Variables & constants
//Data types

a=10.234;
b=null;
//console.log(a);
console.log(typeof a);
console.log(typeof b);

//Declaration of variable

var v='hi iam a data';
console.log(v);
let av= 25;
console.log(av);
const c ='my name';
//c='ashi'
console.log(c);

//Strings and string methods

const str = 'java script, c , c++,python,ruby'
//find the length of the string
console.log(str.length);

//change the case
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//create sub- string
console.log(str.substring(7))
//in sub string only one value is allowed
//every indexstarts from zero
console.log(str.substring(3,10));
//starting index is included and end index is excluded

//split
console.log(str.split(' ,'));

const dfp = str.split(',');
console.log(dfp)
console.log(dfp[4])

//index of
const st ='this is a string'
console.log('index of i:'+st.indexOf('i'));
//indicates first index value
console.log(str.indexOf('z'));

//concatination & string literals
console.log('my number is '+ (2+3)+' this is an example');
//string literals
const Myno=5
console.log('my number is ${Myno}, this is an example')

