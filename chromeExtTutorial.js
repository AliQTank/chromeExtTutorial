let myLeads = ["facebook", "youtube", "stackoverflow"];
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing)   
    console.log(myLeads)
    
})

//Create a variable, listItems, to hold all the HTML for the list items
//Assign it to an empty string to begin with
let listItems = ""
for(let i = 0; i < myLeads.length; i++){   
    //2. Add the item to the listItems variable instead of the ulEl.innerHTML 
    
    listItems += "<li>" + myLeads[i] + "</li>"
}

//3. Render the listItems inside the unordered list using ulEl.innerHTML

ulEl.innerHTML = listItems

