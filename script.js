// FIRST TASK. SHOW/HIDE BOX BY CLICKING THE BUTTON

const toggleBtn = document.getElementById("toggle-button");
const box = document.querySelector(".box");

toggleBtn.addEventListener("click", showHideBox);

function showHideBox () {
   if (box.style.display === "none") {
    box.style.display = "block";
   } else {
    box.style.display = "none";
   }
}

// SECOND TASK. CHANGING THE SIZE AND POSITION

// a)
const widthBtn = document.getElementById("width-btn");
const movingBox = document.querySelector(".moving-box");

widthBtn.addEventListener("click", changeWidth);

function changeWidth () {
    movingBox.style.width = "600px";
}

widthBtn.addEventListener("dblclick", resetWidth);

function resetWidth () {
    movingBox.style.width = "300";
}

// b)
const heightBtn = document.getElementById("height-btn");

heightBtn.addEventListener("click", changeHeight);

function changeHeight ()  {
    movingBox.style.height = "600px";
}

heightBtn.addEventListener("dblclick", resetHeight);

function resetHeight ()  {
    movingBox.style.height = "300px";
}

// c)
const centerBtn = document.getElementById("centering-btn");

centerBtn.addEventListener("click", centerMe);

function centerMe () {
    movingBox.style.marginLeft = "150px";
}

centerBtn.addEventListener("dblclick", resetCenter);

function resetCenter ()  {
    movingBox.style.marginLeft = "0px";
}

// d)
const positionBtn = document.getElementById("position-btn");  

positionBtn.addEventListener("click", changePosition);

function changePosition () {
    movingBox.style.position = "absolute";
    movingBox.style.left = "300px";
}





// 4th TASK. RANDOM COLORS
const bobble1 = document.getElementById("bobble1");
const bobble2 = document.getElementById("bobble2");
const bobble3 = document.getElementById("bobble3");
const bobble4 = document.getElementById("bobble4");
const color = document.querySelectorAll(".color");
const bobbles = [bobble1, bobble2, bobble3, bobble4];

// let colorBtn = document.querySelector(".color-button");
let randcol = "";
let allchar = "0123456789ABCDEF";

function randomColor () {
   for (let i = 0; i < bobbles.length; i++) {

    console.log(bobbles[i]);
       for (let i = 0; i < 6; i++) {
           randcol += allchar[Math.floor(Math.random() * 16)];
        };
       bobbles[i].style.backgroundColor = "#" + randcol;
       randcol = "";
    }
};






// 5th TASK.FORM

let row = 1;

function displayDetails () {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let birthYear = document.getElementById("birth").value;

    if (!firstName || !lastName || !birthYear) {
        alert("Please fill all the boxes!");
        return;
    }
    let showTable = document.getElementById("show");
    showTable.style.display = "block";

    let newRow = showTable.insertRow(row);

    const d = new Date();
    let year = d.getFullYear();
    let age = year - birthYear;

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = row;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = age;

    row++; 
}