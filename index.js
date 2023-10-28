const inputBoxEl = document.getElementById("input-box")
const listContainerEl = document.getElementById("list-container");

function addTask(){
    if(inputBoxEl.value ===''){
        alert('You must type something!!!')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputBoxEl.value;
        listContainerEl.appendChild(li);

        // to show cross icon..multiplication icon
        let span = document.createElement("span");
        span.innerHTML ='\u00d7';
        li.appendChild(span)
    }
    // to clear input field
    inputBoxEl.value ='';
}

listContainerEl.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false)