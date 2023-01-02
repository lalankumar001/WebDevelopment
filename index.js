// ADD ALERT BUTOON
// let namasteBtn = document.querySelector('button');
// namasteBtn.addEventListener('click',inputMsg);
// function inputMsg(){
//     let name= prompt('Enter student name to give roll no');
//     namasteBtn.textContent='Roll no 1:' + name;    
// }

// REVERSE STRING 
// var str ="Hello";
// var output = str.split("").reverse();
// console.log(output);

// constructor of function
// function Person(firstName, lastName, dob){
//     this.firstName= firstName;
//     this.lastName= lastName;
//     this.dob=dob;
// }
// instantiate object
// const person1= new Person('lalan','kumar','1999');
// const person2= new Person('lalan','kumar','1999');
// const person3= new Person('lalan','kumar','1999');

// class Person{
//     constructor(firstName,lastName,dob){
//         this.firstName= firstName;
//         this.lastName= lastName;
//         this.dob=dob;
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


// use strict

// class User{
//     constructor(username,email,password){
//         this.username= username;
//         this.email= email;
//         this.password= password;
//     }
//     register(){
//         console.log(this.username+'is now registered')
//     }
// }
// let bob=new User('bob','bob@gmail.com', '123');
// bob.register()


// select anything and chage 
// const btn=document.querySelector('.btn');
// btn.style.border='1px solid red';

// track how many time button clicked and dark mode 

// const button=document.getElementById('button');
// button.addEventListener('click',(e) =>{
//   e.preventDefault();
//  how many time click butoon has been clicked
//   console.log('click');
// see id class and may thing in html file

// document.querySelector('body').classList.add('bg_dark');
// }) ;

const myForm = document.querySelector('formSection');
const nameInput = document.querySelector('#textfile');
const emailInput = document.querySelector('#email');
 myForm.addEventListener('submit', onsubmit);
 function onsubmit(e) {
  e.preventDefault();
  if(nameInput.value === '' || emailInput.value === ''){
    alert('Please enter required field')
  }
  else{
       const li =document.createElement('li');
       li.appendChild(document.createTextNode(`$
       {nameInput.value}: ${emailInput.value}`));
userList.appendChild(li);
nameInput.value='';
emailInput.value=';'

  }
 }

