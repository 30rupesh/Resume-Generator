

// alert("loading");
function addNewWEField() {
   //   console.log("Adding new field");
 
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");
 
   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");
 
   weOb.insertBefore(newNode, weAddButtonOb);
 }
 
 function addNewAQField() {
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");
 
   let aqOb = document.getElementById("aq");
   let aqAddButtonOb = document.getElementById("aqAddButton");
 
   aqOb.insertBefore(newNode, aqAddButtonOb);
 }
 function addNewSKField() {
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("skField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");
 
   let skOb = document.getElementById("sk");
   let skAddButtonOb = document.getElementById("skAddButton");
 
   skOb.insertBefore(newNode, skAddButtonOb);
 }
 function addNewADField() {
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("adField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder", "Enter here");
 
   let adOb = document.getElementById("ad");
   let adAddButtonOb = document.getElementById("adAddButton");
 
   adOb.insertBefore(newNode, adAddButtonOb);
 }
 
 //generating cv
function generateCV() {
  // console.log("generating CV");

  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;

  //direct

  document.getElementById("nameT2").innerHTML = nameField;

  //contact
  document.getElementById("contactT").innerHTML = document.getElementById(
    "contactField"
  ).value;

  //address
  document.getElementById("addressT").innerHTML = document.getElementById(
    "addressField"
  ).value;
  document.getElementById("fbT").innerHTML = document.getElementById(
    "fbField"
  ).value
 

  document.getElementById("instaT").innerHTML = document.getElementById(
    "instaField"
  ).value;
  document.getElementById("linkedT").innerHTML = document.getElementById(
    "linkedField"
  ).value;

  //objective

  document.getElementById("objectiveT").innerHTML = document.getElementById(
    "objectiveField"
  ).value;

  //we

  let wes = document.getElementsByClassName("weFild");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;


  let weq = document.getElementsByClassName("skField");

  let stq = "";

  for (let m of weq) {
    stq = stq + `<li> ${m.value} </li>`;
  }

  document.getElementById("skT").innerHTML = stq;

  let wec = document.getElementsByClassName("adField");

  let stc = "";

  for (let m of wec) {
    stc = stc + `<li> ${m.value} </li>`;
  }

  document.getElementById("adT").innerHTML = stc;

  //aq

  let aqs = document.getElementsByClassName("eqField");

  let str1 = "";

  for (let e of aqs) {
    str1 += `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  //code for setting image

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  console.log(reader.result);

  //set the image to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

//print cv
function printCV() {
  window.print();
}