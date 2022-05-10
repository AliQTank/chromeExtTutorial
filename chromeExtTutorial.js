let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

//2. Listen for clicks on tabBtn. Log LinkedIn URL to the console
tabBtn-addEventListener("click", function() {
    console.log(tabs[0].url)
})


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


