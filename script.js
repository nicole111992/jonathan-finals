function myalert() {
  alert("I am an alert box!");
  }

function myconfirm() {
  var txt;
  if (confirm("Press a button!")) {
      txt = "You pressed OK!";
  } else {
      txt = "You pressed Cancel!";
  }
  document.getElementById("demo_con").innerHTML = txt;
  }

function myprompt() {
  let text;
  let person = prompt("Please enter your name:");
  if (person == null || person == "") {
      text = "User cancelled the prompt.";
  } else {
      text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo_prop").innerHTML = text;
  }

  // if
  function ifs() {
  var age = prompt("Enter your age:");
  if(age > 0 ) {
    alert("You are " + age + " years old.");
    }
  }
  
  // if else
  function el() {
  var age = prompt("Enter your age:");
  if(age < 18 ) {
    alert("User is a Minor, can't Enter!");
    } else {
      alert("User is Legal, u can Enter!")
    }
  }
  
  // else if
  function al() {
    var x = prompt("Enter Integer:");
    if(x<10){
      alert("x is more than 10");
    } else if(x>10) {
      alert("x is less than 10")
    } else {
      alert("x is equal to 10")
    }
  
  }
  
  // nested if else
  function red() {
  let name = prompt("Please Enter Your Name:");
  let age = +prompt("And your age please:");
  let gender = prompt("Male or Female?");
  
  if (age <= 1){
    if(gender.toLowerCase() == "female"){
      alert(name +" is a Baby Girl.");
  } else{
    alert(name +" is a Baby Boy.");
  }
  } else if (age <= 3){
    if(gender.toLowerCase() == "female"){
      alert(name +" is a Girl Toddler.");
  } else{
    alert(name +" is a Boy Toddler.");
  }
  } else if (age <= 5){
    if(gender.toLowerCase() == "female"){
      alert(name +" is a Pretty Preschooler.");
  } else{
    alert(name +" is a Handsome Preschooler.");
  }
  } else if (age <= 12){
    if(gender.toLowerCase() == "female"){
      alert(name +" is a Pretty Gradechooler.");
  } else{
    alert(name +" is a Handsome Gradeschooler.");
  }
  } else if (age <= 18){
    if(gender.toLowerCase() == "female"){
      alert(name +" is a Fine Teen Woman.");
  } else{
    alert(name +" is a Handsome Teen.");
  }
  } else if (age <= 28){
    if(gender.toLowerCase() == "female"){
      alert(name +" is a grown adult female.");
  } else{
    alert(name +" is a grown adult gentleman.");
  }
  } else if (age <= 59){
    if(gender.toLowerCase() == "female"){
      alert(name +" is a Hot Mama.");
  } else{
    alert(name +" is a Macho Papa.");
  }
  }else {
    alert(name + " is a Senior Citezen")
  }
  }

  
  
let shiftButton= document.getElementById('shift');

let unshiftButton= document.getElementById('shift');

let pushButton= document.getElementById('shift');

let popButton= document.getElementById('shift');




let countries = ['Japan', 'India', 'Italy', 'Philippines'];



function showFruits(){
    let container= document.querySelector('.fruits')

    container.innerHTML= '';

    let list= document.createElement('ul');


    for (let i=0; i< countries.length; i++){
        const listItems= document.createElement('li');
        listItems.innerHTML= countries[i];
        list.appendChild(listItems);
    }

    container.appendChild(list);
}

showFruits()


function shiftBtn(){
    countries.shift();
    showFruits();
}

function unshiftBtn(){
    const fruit= prompt("Enter a country");
    countries.unshift(fruit);
    showFruits();
}
    
function pushBtn(){
    const fruit= prompt("Enter a country");
    countries.push(fruit);
    showFruits();
}


function popBtn(){
    countries.pop();
    showFruits();
}
