let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing) 
    inputEl.value = ""
    // save the myLeads array to localStorage
    // use JSON.stringify()
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
