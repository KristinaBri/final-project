// BURGER MENU

$(".burger-menu").click(function() {
    $("#links").toggle( "slow", function() {
    //   .......
    });
  });

// BOX GAME. ON/OFF, CHANGING THE SIZE AND POSITION

// a)
const onOff = document.getElementById("on-off-btn");
const movingBox = document.querySelector(".moving-box");

onOff.addEventListener("click", onOffBox);

function onOffBox () {
    if  (movingBox.style.display === "none") {
        movingBox.style.display = "block";
    } else {
        movingBox.style.display = "none";
    }
}

// b)
const widthBtn = document.getElementById("width-btn");

widthBtn.addEventListener("click", changeWidth);

function changeWidth () {
    if (movingBox.style.width === "300px") {
        movingBox.style.width = "500px";
    } else if (movingBox.style.width === "500px") {
        movingBox.style.width = "700px"
    } else {
        movingBox.style.width = "300px";
    }
}

// c)

$("#height-btn").click(function() {
    let box = $(".moving-box");

    box.animate ({
        top: "300px",
        opacity: "0.5",
        height: "600px",
        width: "300px"
    }, 500);
    box.animate ({
        bottom: "600px",
        opacity: "1",
        height: "300px",
        width: "300px"
    }, 1000);
})

// d)
const centerBtn = document.getElementById("centering-btn");

centerBtn.addEventListener("click", centerMe);

function centerMe () {
     movingBox.style.marginLeft = "150px";
}

centerBtn.addEventListener("dblclick", resetCenter);

function resetCenter ()  {
    movingBox.style.marginLeft = "0px";
}

// e)
const positionBtn = document.getElementById("position-btn");  

positionBtn.addEventListener("click", changePosition);

function changePosition () {
    movingBox.style.position = "absolute";
    movingBox.style.right = "0";
    movingBox.style.top = "0";
    movingBox.style.transform = "rotate(45deg)";
}

// 4th TASK. RANDOM COLORS
const bobble1 = document.getElementById("bobble1");
const bobble2 = document.getElementById("bobble2");
const bobble3 = document.getElementById("bobble3");
const bobble4 = document.getElementById("bobble4");
const color = document.querySelectorAll(".color");
const bobbles = [bobble1, bobble2, bobble3, bobble4];

let randcol = "";
let allchar = "0123456789ABCDEF";

function randomColor () {
   for (let i = 0; i < bobbles.length; i++) {

    console.log(bobbles[i]);
       for (let i = 0; i < 6; i++) {
           randcol += allchar[Math.floor(Math.random() * 16)];
        };
       bobbles[i].style.backgroundColor = "#" + randcol;
       bobbles[i].innerHTML = "#" + randcol;
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

// clear input from form after submiting data:
function clearInput () {
   const inputs = document.querySelectorAll('#fname, #lname, #birth');

  inputs.forEach(input => {
        input.value = '';
    });
}

// empty all input from table:

$("#clearTable").click(function() {
    $("table").empty();
})
