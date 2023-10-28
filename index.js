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
    }
    // to clear input field
    inputBoxEl.value ='';
}