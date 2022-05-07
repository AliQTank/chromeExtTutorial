let myLeads = ["w", "r", "3"];
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")
console.log(ulEl)
// 2.- Grab the unordered list and store it in a const variable called ulEl

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing)   
    console.log(myLeads)
})

for(let i = 0; i < myLeads.length; i++){
    console.log(myLeads[i])       
}



