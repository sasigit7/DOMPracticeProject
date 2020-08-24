const entryForm = document.getElementById("entryForm");
//console.log(entryForm);
const entryTextBox = document.querySelector(".entryTextBox");
//console.log(entryTextBox.value);
const entriesSection = document.querySelector("#entriesSection");
//console.log(entriesSection);
const entriesNav = document.querySelector(".entriesNav");
//console.log(entriesNav);

let count = 1; 

function addEntryToDOM(event) {
    event.preventDefault(); // This will prevent the page reload on submit 

    const entryDiv = document.createElement("div"); // Creates a HTML div element 
    entryDiv.className = "singleEntry"; // Adds a class name to new div  
    entryDiv.innerText = entryTextBox.value; // Accessing the user's input value
    entryDiv.style.display = "none"; // Hide user entry by default 
    entriesSection.appendChild(entryDiv); // Adding the user's input to the DOM 
    entryTextBox.value = ""; // Clear entry textBox when submit button is clicked 

    const displayEntryButton = document.createElement("button"); // Creates a button 
    displayEntryButton.className = "displayEntryButton"; // Adds a class name 
    displayEntryButton.innerText = count; // Displaying Button Number incrementally 
    entriesNav.appendChild(displayEntryButton); // Adding the user's input to the DOM

   
    displayEntryButton.addEventListener("click", function() {
      const allEntries = document.querySelectorAll(".singleEntry"); 
      for(let i = 0; i < allEntries.length; i++) {
          allEntries[i].style.display = "none";
      } 
      entryDiv.style.display = "block";
    });

count++;
}
entryForm.addEventListener("submit", addEntryToDOM); // Added an event listener "submit"
