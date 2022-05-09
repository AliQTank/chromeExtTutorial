let myLeads = [];
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing) 
    inputEl.value = ""
    renderLeads()
 })

function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){   
        //Wrap the lead in an anchor tag (<a>) inside the <li>
        //can you make the link open in a new tab??
        listItems += `
        <li>
            <a href='${myLeads[i]}' target=\"_blank\"> 
                ${myLeads[i]}</a>
        </li>
        `
        
    }
    ulEl.innerHTML = listItems

}
