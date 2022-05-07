let myLeads = ["w", "r", "3"];
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing)   
    console.log(myLeads)
})

//Render the leads in the unordered list using ulEl.textContent
for(let i = 0; i < myLeads.length; i++){
    let listItem = ulEl.innerHTML += "<li>" +  myLeads[i] + "</li> "      
}



