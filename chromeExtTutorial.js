let myLeads = [];
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-element")

inputBtn.addEventListener("click", function(){           
    //push value of InputEl into myLeads array
    //Instead of the hard-coded page value
    //Google -> "get value from input field javascript"
    let inputing = inputEl.value
    myLeads.push(inputing)
    console.log(myLeads)
})


