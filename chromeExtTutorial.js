let myLeads = [];
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing)       
    //2. Call the renderLeads() function
    renderLeads()
 })

//1. Wrap the code below in a renderLeads() function
function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){   
    //2. Add the item to the listItems variable instead of the ulEl.innerHTML 
    listItems += "<li>" + myLeads[i] + "</li>"
}
ulEl.innerHTML = listItems

}

