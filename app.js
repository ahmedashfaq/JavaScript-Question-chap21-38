// Chap 21 - 25

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 

var first_name = prompt("Enter first name")
var last_name = prompt("Enter last name");
var full_name = first_name+" "+last_name;
alert("Hello"+" "+full_name+"\nWelcome to Our page");


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser 

var favorite_mobile = prompt("Enter your favorite mobile model");
var len = favorite_mobile.length;
document.write("My favorite phone is:"+" "+favorite_mobile+"<br>"+"Length of string:"+" "+len);


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser 

var word = "Pakistani";
var lo = word.indexOf("n");
document.write("String:"+" "+word+"<br>"+"Index of 'n':"+" "+lo);



// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 

var word = "Hello World";
var lo = word.lastIndexOf("l");
document.write("String:"+" "+word+"<br>"+"Index of 'n':"+" "+lo);

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 

var word = "Pakistani";
var char = word.charAt(3);
document.write("String:"+" "+word+"<br>"+"Character at index 3:"+" "+char);

// 6. Repeat Q1 using string concat() method. 

var first_name = prompt("Enter first name");
var last_name = prompt("enter last name");
var full_name = first_name.concat(last_name);


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

var city = "Hyderabad";
var repla = city.replace("Hyder","Islam");
document.write("City:"+" "+city+"<br>"+"After replacement:"+" "+repla);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together"
var repla = message.replace(/and/g,"&");
document.write(repla);

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 

var val1 = "472";
var val2 = 472;
document.write("Value:"+" "+val1+"<br>");
document.write("Type:"+" "+"String"+"<br>");
document.write("Value:"+" "+val2+"<br>");
document.write("Value:"+" "+"Number"+"<br>");

// Write a program that takes user input. Convert and show the input in capital letters. 

var name = prompt("enter name");
var capi = name.toUpperCase();
document.write("input:"+" "+name+"<br>"+"UPPER CASE:"+" "+capi);

// 11. Write a program that takes user input. Convert and show the input in title case. 

var name = prompt("Enter name");
var capi = name[0].toUpperCase() + name.slice(1).toLowerCase();
document.write("User input:"+" "+name+"<br>"+"Title Case"+" "+capi);


// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.


var user = prompt("What you want");
var change_case = user.toLowerCase();
var lst =  ["cake", "apple pie", "cookie", "chips", "patties"];
var res = lst.indexOf(change_case);
if(res === -1){
    document.write(user+" "+"is not availabe in our shop");
}else{
    document.write(change_case+" "+"is availabe at index"+" "+res+" "+"in our shop");
}


// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 

var passw = prompt("Enter password");
var letter = /[a-zA-Z]/;
var number = /[0-9]/;
var chk = passw.charAt(0);
if(passw.length < 6){
    alert("Please make sure password is longer than 6 characters");
}else if(!letter.test(passw)){
    alert("Please make sure Password Includes an UpperCase and LowerCase character");
}else if(!number.test(passw)){
    alert("Please make sure Password Includes a Digit");
}
if(!number.test(chk)){
}else{
    alert("Password can not begin with a number"+"\nPlease enter a valid number");
}

// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser. 

var str = "University of Karachi";
var str = str.split("");
document.write(str);

// 17. Write a program to display the last character of a user input. 

var user = prompt("Enter What you want");
var last_char = user[user.length-1];
document.write("User input:"+" "+user+"<br>"+"Last character of input:"+" "+last_char)

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. 
 
var str = "The quick brown fox jumps over the lazy dog";
var change_case = str.toLowerCase();
var count = (change_case.match(/the/g)).length;
document.write("Text:"+" "+str+"<br>"+"There are"+" "+count+" "+"occurrence(s) of the word 'the'")

// Chapn 26 - 30

// MATH METHODS 

// 1. Write a program that takes a positive integer from user & display the following in your browser.

var user = 3.45214
var round_off = Math.round(user);
var flo = Math.floor(user);
var cei = Math.ceil(user);
document.write("Number:"+" "+user+"<br>"+"Round OFF:"+" "+round_off+"<br>"+"Floor:"+" "+flo+"<br>"+"Ceil:"+" "+cei); 

// 2. Write a program that takes a negative floating point number from user & display the following in your browser. 

var user = -2.673
var round_off = Math.round(user);
var flo = Math.floor(user);
var cei = Math.ceil(user);
document.write("Number:"+" "+user+"<br>"+"Round OFF:"+" "+round_off+"<br>"+"Floor:"+" "+flo+"<br>"+"Ceil:"+" "+cei); 

// 3. Write a program that displays the absolute value of a number. 


var val = -4;
var res = Math.abs(val);
document.write("The absolute value of"+" "+val+" "+"is"+" "+res)


// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 
 
 
var rand = Math.random() * (7-1) + 1; // formula for range (max - min) + min
var flo = Math.floor(rand);
document.write("Random dice value:"+" "+flo);

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 
 


var rand = Math.random() * (3-1) + 1; // formula for range (max - min) + min
var flo = Math.floor(rand);
if(flo === 2){
    document.write(flo+"<br>"+"Random coin value: Head");
}else{
    document.write(flo+"<br>"+"Random coin value: Tail");
}


// 6. Write a program that shows a random number between 1 and 100 in your browser. 

var rand = Math.random() * (101-1) + 1; // formula for range (max - min) + min
var flo = Math.floor(rand);
document.write("Rand number between 1 and 100:"+" "+flo);

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 

var user = prompt("Enter your weight");
var kg = "Kilograms";
document.write("The weight of user is"+" "+user+" "+kg);

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 
 
var user = prompt("Enter a number betwenn 1 and 10");
var rand = Math.random() * (11-1) + 1;
var flo = Math.floor(rand);
if(user == flo){
    alert("Congratulations you won the game");
}else{
    alert("Try again");
}

// Chap 31 - 34 
// DATE METHODS 

//1. Write a program that displays current date and time in your browser. 

var curr_day = new Date().getDay();
var curr_month = new Date().getMonth();
var curr_year = new Date().getFullYear();
var curr_date = curr_day+" "+curr_month+" "+curr_year;
var curr_time = new Date().toTimeString();
document.write("Current Date ="+" "+curr_date+"<br>");
document.write("Current Time ="+" "+curr_time);

// 2. Write a program that alerts the current month in words. For example December. 

var curr__month = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[curr__month.getMonth()];
alert(n);


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
 
var curr_day = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[curr_day.getDay()];
alert(n);


// Chap 35 - 38

// FUNCTIONS

// 1. Write a function that displays current date & time in your browser. 

function time(){
    var curr_time = new Date().toTimeString();
    var curr_day = new Date().getDay();
    var curr_month = new Date().getMonth();
    var curr_year = new Date().getFullYear();
    var curr_date = curr_day+"/"+" "+curr_month+"/"+" "+curr_year;
    document.write("Current Date ="+" "+curr_date+"<br>");
    document.write("Current Time ="+" "+curr_time);
}    

time();


// 2. Write a function that takes first & last name and then it greets the user using his full name. 

function greeting(fname,lname){
    document.write("Hello<br>"+" "+fname+" "+lname);
}

greeting("Ahmed","Ashfaq");


// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 

function number(num1,num2){
    var res =num1+num2;
    document.write("The sum of"+" "+num1+" "+"and"+" "+num2+" "+"="+" "+res);
}
a = parseInt(prompt("Enter first number"));
b = parseInt(prompt("Enter second number"));

number(a,b);


// 4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser. 
 
function calculator(num1,num2,operator){
    var res =parseInt(num1)+parseInt(num2);
    document.write(res);
}
a = parseInt(prompt("Enter first number"));
b = parseInt(prompt("Enter second number"));
c = prompt("Enter math operator");

calculator(a,b,c);


// 