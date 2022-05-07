let myLeads = ["facebook", "youtube", "stackoverflow"];
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")
const ulEl = document.getElementById("unordered-list")

inputBtn.addEventListener("click", function(){    
    let inputing = inputEl.value
    myLeads.push(inputing)   
    console.log(myLeads)
})

//Different method
for(let i = 0; i < myLeads.length; i++){    
    const li = document.createElement("li") // used to create Li¿I tag
    li.textContent = myLeads[i] //used to ADD content to LI tag
    ulEl.append(li) //to put Li into de UL id"unordered-list""
}


