// ---------------------------
// Part 1: Variables & Conditionals
// ---------------------------
function checkAge() {
  let age = document.getElementById("ageInput").value;

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult.";
  } else if (age > 0) {
    document.getElementById("ageResult").textContent = "You are under 18.";
  } else {
    document.getElementById("ageResult").textContent = "Please enter a valid age.";
  }
}

// ---------------------------
// Part 2: Functions
// ---------------------------

// Function 1: calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: show result of calculateTotal
function showTotal() {
  let total = calculateTotal(50, 3); // Example: 50 per item, 3 items
  document.getElementById("totalResult").textContent = "Total = $" + total;
}

// ---------------------------
// Part 3: Loops
// ---------------------------

// Example 1: countdown using for loop
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old items
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: array iteration using forEach
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function(fruit) {
  console.log("Fruit:", fruit);
});

// ---------------------------
// Part 4: DOM Manipulation
// ---------------------------

// Interaction 1: toggle class on click
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("domText").classList.toggle("highlight");
});

// Interaction 2: change text dynamically
document.getElementById("domText").addEventListener("mouseover", function() {
  this.textContent = "Mouse is over me!";
});

document.getElementById("domText").addEventListener("mouseout", function() {
  this.textContent = "Click the button to highlight this text.";
});

// Interaction 3: create new list item on click
document.getElementById("addItemBtn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New Item added!";
  document.getElementById("dynamicList").appendChild(li);
});
