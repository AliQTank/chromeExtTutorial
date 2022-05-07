let myLeads = ["w", "r", "3"];
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing)   
    console.log(myLeads)
})

//Log out the items in the myLeads array using a for loop
for(let i = 0; i < myLeads.length; i++){
    console.log(myLeads[i])       
}

