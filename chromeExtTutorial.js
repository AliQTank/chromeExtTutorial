let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")
//1. Store the dlete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

//2. Listen for double clicks on the delete button 
//3. When clicked, clear localStorage, myLeads, and teh DOM
deleteBtn.addEventListener("dblclick", function(){
    console.log("double clicked")
})

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing) 
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    //to verify that it works:
    console.log(localStorage.getItem("myLeads"))
 })

function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){   
        listItems += `
        <li>
            <a href='${myLeads[i]}' target=\"_blank\"> 
                ${myLeads[i]}</a>
        </li>
        `
        
    }
    ulEl.innerHTML = listItems

}
