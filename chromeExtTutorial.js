let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")
//1. Store the dlete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){    
        listItems += `
        <li>
            <a href='${leads[i]}' target=\"_blank\"> 
                ${leads[i]}</a>
        </li>
        `        
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing) 
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    //to verify that it works:
    console.log(localStorage.getItem("myLeads"))
 })

