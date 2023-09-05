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

const arr =[ 23, 34, [7,8]];

console.log(arr)