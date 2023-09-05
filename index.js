//Javascript Console API
// console.log("Hello World", 4 + 7, "another vlog");
// console.warn("this is warning");
// console.error("this is error");
// //Ways to print in Javascript.
// //console.log("Hello World");
// //alert("me");
// //document.write("This is JSP Document");

// //3. Javascript variables 
// //What are variables? -containers to store values
// /*mutliline
// comments
// are*/

// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// //datatypes in Javascript
// //number
// var num1 = 10
// var num2 = 45
// //string
// var str1 = "first string"
// var str2 = "hello vishu"
// //objects
// var emp = {
//     name: "Vishu",
//     age: 24,
//     number: 9898989898
// }
// console.log(str2)

// //booleans
// var a = true;
// var b = false;
// console.log(a)
// console.log(b)
// console.log(a, b)

// //undefined 
// //var und = undefined
// var und; //bydefault value undefined
// console.log(undefined)
// console.log(und)

// //null variable
// var n = "null"
// console.log(n)

// /*
// there are two types of datatypes in Javascript
// 1. Primitive data types : undefined, null, number, string, boolean, symbol
// 2. Reference data types : arrays and objects
// */

// var arr = [1, 2, "Vishu", 4, 5, 6]
// console.log(arr[2])
// var str3 = 'Jay Shivray'

// //operators in Javascript
// //arithmetic
// var p = 10
// var q = 20
// console.log(p, q)

// console.log("Addition of p+q=", p + q);
// console.log("substraction of p-q=", p - q);
// console.log("Mulitiply of p*q=", p * q);
// console.log("Division of p/q=", p / q);

// //assignment operator
// var c = q
// console.log(c)
// c += 2; //c=c+2
// console.log(c)
// c -= 2;
// console.log(c)
// c /= 2;
// console.log(c)
// c *= 2;
// console.log(c)

// //comparison operator
// var x = 14
// var y = 41
// console.log(x == y)
// console.log(x >= y)
// console.log(x <= y)
// var y = 14
// console.log(x > y)
// console.log(x < y)
// console.log(x == y)

// console.log("logical")

// //logical operators
// console.log("logical AND")

// console.log(false && false)
// console.log(false && true)
// console.log(true && true)

// console.log("Logical OR")

// console.log(false || false)
// console.log(false || true)
// console.log(true || true)

// console.log("Logical NOT")

// console.log(!false)
// console.log(!true)

// //Function in Javascript
// function avg(a, b) {
//     return (a + b) / 2;
// }
// c1 = avg(8, 6);
// c2 = avg(16, 12);
// console.log(c1, c2)

// //conditional statments

// var age = 5;
// if (age > 10) {
//     console.log("you are not kid")
// }
// else {
//     console.log("you are the smallest kid")
// }

// //if-else ladder
// var age = 15;
// if (age > 18 && age < 24) {
//     console.log("Bade Ho")
// }
// else if (age < 8) {
//     console.log("You're not matured enough")
// }
// else if (age > 8 && age < 18) {
//     console.log("you are teenager")
// }
// else {
//     console.log("Bohot bade hogaye")
// }

// //array in Javascript

// var arr1 = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr1)
// console.log("for loop");
// for (var i = 0; i < arr1.length; i++) {
//     console.log(arr1[i])
// }

// //for each loop
// console.log("For each loop")

// arr1.forEach(function (element) {
//     console.log(element)
// })
// //constant variable whose value cant be changed
// const bc = 0;
// //bc++; //throws error 
// //bc=bc+1; //also throws error

// //while loop
// console.log("while loop")
// let j = 0; //'let' used instead of var if to limit scope within block
// while (j < arr1.length) {
//     console.log(arr1[j])
//     j++;
// }

// //Array Methods

// let arr2 = [15, "Vishu", null, true];
// console.log(arr2);
// console.log("array length")
// console.log(arr2.length);
// arr2.pop();
// console.log(arr2);
// arr2.push(20);
// console.log(arr2);
// arr2.shift();
// console.log(arr2);
// const newLen = arr2.unshift(15);
// console.log(arr2);
// console.log(newLen);
// console.log(arr2.toString());
// console.log(arr2.sort())

// arr3 = [10, 5, 20, 7, 90.11]
// console.log(arr3);
// console.log(arr3.sort());
// console.log(arr3.valueOf());



// //String methods
// let myString = "Friends loves all time but brother brother is born for adversity";
// console.log(myString.length);
// console.log("String index is", myString.indexOf("brother"));
// console.log("String index is", myString.lastIndexOf("brother"));
// console.log(myString.slice(27, 35))
// d = myString.replace("brother", "bro") //replaced only first occurances
// console.log(d)
// console.log(myString)
// console.log(myString.replace("all", "ALLL"))
// console.log(myString);

// //date methods

// let myDate = new Date();
// console.log(myDate)
// console.log(myDate.getDay())
// console.log(myDate.getFullYear())
// console.log(myDate.getTime())
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// //DOM Manipulation
// let elem = document.getElementById('click');
// console.log(elem);
// elem.style.border = "2px solid blue"

// let eclass = document.getElementsByClassName("container")
// console.log(eclass);
// /*eclass[0].style.background="orange";
// eclass[0].style.border="2px solid black";
// eclass[1].style.background="blue";
// eclass[1].style.border="2px solid black";*/
// eclass[0].classList.add("bg-primary");
// eclass[0].classList.add("text-change");

// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(eclass[0].innerHTML)
// console.log(eclass[0].innerText)
// console.log(eclass[1].innerText)
// console.log(eclass[1].innerHTML)
// /*tn = document.getElementsByTagName('button');
// console.log(tn)
// console.log(document.getElementsByTagName('button')) *///same method through two types

// tn = document.getElementsByTagName('div')

// createdElement = document.createElement('p');
// createdElement.innerText = " This is new para created";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "Bold text appears";
// tn[0].appendChild(createdElement2);
// tn[0].replaceChild(createdElement2, createdElement);
// //tn[0].removeChild(createdElement2);

// console.log(document.title)
// console.log(document.location)
// console.log(document.scripts)
// console.log(document.URL)

// /*document.links
// document.images
// document.domain
// */
// //selecting using query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// //event listener

// function clicked() {
//     console.log("button is clicked");
// }

// window.onload=function(){
//     console.log("Page loaded")
// }
/*firstContainer.addEventListener('click', function(){
    console.log("click on container")
})

firstContainer.addEventListener('mouseover', function(){
    console.log("hovered on container")
})

firstContainer.addEventListener('mouseout', function(){
    console.log("mouse out of container")
})

firstContainer.addEventListener('mouseup', function(){
    console.log("mouseUP ON container")
})

firstContainer.addEventListener('mousedown', function(){
    console.log("mouse down on container")
}) */

/*firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML ="<b> we have clicked</b>";
    console.log("click on container")
})*/
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("mouseUP ON container")
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> We have Clicked </b>";
//     console.log("mouse down on container")
// })

//Nromal function decalaration
// function summ(a,b){
//     return a+b;
// }

//Arrow function
// summ = (a, b) => {
//     return a + b;
// }

// logKaro = () => {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired</b>";
//     console.log("I am your log")
// }

//setTimeout and setInterval
//setTimeout(logKaro,5000);
//setInterval(logKaro, 5000);
//clr = setInterval(logKaro, 5000);
//clearInterval(clr);

//use clearInterval(clr) and clearTimeout(clr) to cancel setInterval and setTimeout
//clr = setTimeout(logKaro, 5000)

//local storage
// localStorage.setItem('name', 'harry')
// console.log(localStorage)
// console.log(localStorage.getItem('name'))

//Json
// obj = {name: "Vishu", length: 1, a: {this:"that"}}
// jso=JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)

// parsed = JSON.parse(jso)
// console.log(parsed)

//or we can pass directly string to parse method

// parsed = JSON.parse('{"name":"harry","length":1, "a":{"this":"that"}}') //each string itme or content must be in double quotes "" for JSON Parsing
// console.log(parsed);

// const students = [
    
//         {name : "vishu", subject : "JavaCript"},
//         {name : "Yash", subject: "Java"}
    
// ]

// function enrollStudent (student, callback){
//     setTimeout(function(){
//         students.push(student);
//         console.log("Student has been enrolled");
//         callback();
//     }, 8000);
// }

// function getStudents(){
//     setTimeout(function(){
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Student has been fetched");
//     }, 3000);
// }

// let newStudent = {name: "Rahul", subject:"Pyhton"}
// enrollStudent(newStudent, getStudents);
// getStudents();

// const arr =[ 23, 34, [7,8]];

// console.log(arr)

// String Manipulation
// const name = "harry";
// console.log(name);
// const greeting = 'Good Morning';
// console.log(greeting + ' ' +name);

// let html;
// html = "<h1> This is Heading </h1>" + 
//          "<p>this is My Para </p>";
//          console.log(html)

// html = html.concat('this', ' str2');
// console.log(html)
// console.log(html.length)
// console.log(html.toLocaleLowerCase())
// console.log(html.toUpperCase()) //thios function doesn't change the original string it just return the string
// console.log(html.indexOf('h1'));
// // console.log(html.indexOf('is My Para')) //first letter index returned 
// // console.log(html.indexOf('hdhgdghdgh')) //return -1 if string not present
// // console.log(html.indexOf('<')) //return only first occurrences of string
// console.log(html.lastIndexOf('h1')) //last occurrences index
// console.log(html.charAt(17)) //retruns character from specified index
// console.log(html.endsWith('str2')) //returns true if string ends with specified string otherwise returns false
// console.log(html.endsWith('this'))
// console.log(html.includes('My')) //returns true if given string is present in original string

// console.log(html.substring(0,4)) //gives string from specified range but not include last index as count from 0
// console.log(html.substring(57,60))
// console.log(html.length)
// console.log(html.slice(-4)) //returns from last 
// console.log(html.slice(0,-4)) //returns from first to -4th index
// console.log(html.substring(-2)) //returns whole string

// console.log(html.split(' ')) //retruns array of string and spilit it according to the string or character given
// console.log(html.split('>'))

// console.log(html.replace('Para', 'Paragraph'));
// console.log(html.replace('h1', 'h2')) //replaced only first occrrences of string

//template literals which is introduced in ES6 (latest version of javascript)

// let fruit1 = 'Orange\''; // \ used to add double single quotes and one single quote in string
// let fruit2 = 'Apple';
// let myHTML = `Hello ${name} <h1> this is heading </h1>
//                 <p> you like ${fruit1} and ${fruit2}`;

//                 console.log(myHTML)
//     document.body.innerHTML = myHTML;

// document.body.innerHTML = `<h1> hello from vishu</h1> <div>Hello<style color:black></style></div>`

// more array methods 
// let num = [10,20,30,40,2,45,56];
// console.log(num.length)

// delete num[0]
// console.log(num)
// console.log(num.length)

// let num2 = [ 100, 200, 300, 60, 70];

// num = num.concat(num2)
// console.log(num)

// let newArray = num.concat(num2)
// console.log(newArray)

// let num3 = [21, 'Vishu', [13,14]]
// let newArray = num.concat(num2, num3)//can concate two or more arrays
// console.log(newArray)
// console.log(newArray.length)

// let num = [900,670,30,402,221,145,56];

// num.sort() //it changes the original array

// console.log(num)//sort methods perform sorting according to the alphabetical order that is 1 , 2, 3, 4 etc

//sort using compare to print in ascending and descending order
// let num = [900,670,30,402,221,145,56];
// let compare = (a,b)=> {
//     return a-b ;    //for sorting in smallest to largest order
// }
// num.sort(compare)
// console.log(num)

// let compare = (a,b)=> {
//     return b-a ;    //for sorting in largest to smallest order
// }
// num.sort(compare)
// console.log(num)

// num.reverse();
// console.log(num)

// let num = [900,670,30,402,221,145,56];

// // num.splice(2, 3 , 2022, 2024, 1023, 1046) 
// // //splice methods takes firts argument as on which position you want to start inserting elements, 
// // // then take 2nd argument as how much elements need to be removed from this index 
// // // and the elements to be inserted 
// // console.log(num);

// let deletedValues = num.splice(2, 3 , 2022, 2024, 1023, 1046);
// console.log(deletedValues) //returns deleted values 
// // console.log(typeof deletedValues) //type of returns type of given 
// // console.log(typeof num)
// console.log(num)

// let newArr = num.slice(2, 5) //it returns new array from starting index to ending exclusive i.e. to ending-1 index 
// console.log(newArr)

// console.log(num.slice(4)) //takes 4 as starting index and print till last index

// let num = [ 2, 6, 1, 6, 9];

// for ( let i=0; i<num.length;i++){
//     // console.log(num[i])
//     console.log(num[i]*=num[i]);
// }

// num.forEach((element)=>{
//     console.log(element * element)
// })
// let num = [ 2, 6, 1, 6, 9];
//array.from 
// let name = "Vishwesh";
// let arr = Array.from (name);
// console.log(arr); //used to create array from any object

//for of loop

// for(let i of num) {
//     console.log(i)

//for in loop
// console.log(num)
// for (let i in num)
// {
//     console.log(i)   //print arrays keys or indexes 
// //     // console.log(i+ " " + num[i])
// }

// let arr = [10,25, 50]

// array map() method

// let a = arr.map((value)=>{
//     console.log(value);
//     return value + 1; // creates a new array by performing some operations on each array element
// });
// console.log(a)

// let b = arr.map((value, index, array)=>{  //takes theree argument similar for 'for each loop'
//     console.log(value, index, array)
//     return value+1;
// })
// console.log(b)


// let b = arr.map((value, index, array)=>{  //takes theree argument similar for 'for each loop'
//     console.log(value, index, array)
//     return value+index;
// })
// console.log(b)

//array filter() method

// let arr2= [20, 40, 6, 9, 2]

// let a2 = arr2. filter((b)=>{
//     return b<10;
// });
// console.log(a2) 

//map(), reduce(), filter () methods doesn't changed the original array
 //reduce () array method

//  let arrNew = [ 1, 2, 4, 3, 1]
//  let newArr = arrNew.reduce((h1, h2)=> {
//     return h1+h2;
//  });

//  console.log(newArr)

//reduce() method using function

// let arr1= [1, 2, 6, 8, 2]

// const reduce_func = (h1, h2) => {
//     return h1+h2
// }
// let newArr = arr1. reduce(reduce_func);
// console.log(newArr)

//practise set on array 
//question 1 : create an array of numbers and take inpur from the
// users to add numbers to this array

// let arr = [10, 20, 30, 40 ,50]
// let a = prompt("Enter a Number");
// a= Number.parseInt(a);
// arr.push(a);
// console.log(arr)

//question 2 : keep adding numbers to the array until '0' is added to the array

// let arr = [10, 20, 30, 44 ,50, 87]
// let a; 

//         do{
//             a = prompt("Enter a Number");
//             a= Number.parseInt(a);
//         arr.push(a);
//     }while(a!=0)
//     console.log(arr)

//question 3 : Array numbers divisble by 10

// for (let i =0; i<arr.length;i++){
//     if(arr[i]%10==0){
//         console.log(arr[i]);
//     }
// }

//question : calculate factorial of given number

// let fact = 1; 
// let a = prompt("Enter a number")
// a= Number.parseInt(a);

// for (let i=1; i<=a;i++){
 
//     fact= fact*i;


// }
// console.log(fact)

  
//manual array elements reading
// let arr = [ ];
// let a; 

// for(let i=0;i<5; i++){
//     a=prompt("Enter Array values");
//     a= Number.parseInt(a);
//     arr.push(a)
// }
// console.log(arr);


// let a=prompt("Enter Message");
// alert(a);

// console.error("this is an error") //method used to differentiate between error i.e. error in red color
// console.assert(5>53) //used to add condition returs assertion failed if not true

// let obj = ["vishu", "yash","sahil"]
// console.table(obj) //display array in index value pair 

// obj1 = {
//     name:"vishu",
//     age: 23,
//     address: "shivajinagar"
// }
// console.table(obj1) //objects in index value pair

// console.warn("this is warning") //used to display warning in yellow 

//console.info("This is info")//similar to console.log() but info just added in info section of console

// console.time("a")
// console.timeEnd("a") //returns time takes between time and time end 

//calculating time between for and while loop

// console.time("for Loop")

// for(let i=0;i<5;i++){
//     console.log(233)
// }
// console.timeEnd("for Loop")

// console.time("while Loop")
// let i=0;
// while(i<5){
//     console.log(233)
// }
// console.timeEnd("while Loop") 
