let item = document.querySelector("#item");
let add = document.querySelector("#add");
let list = document.querySelector("#list");



add.addEventListener("click",function(){

    let li = document.createElement("li");
    li.textContent = item.value;
    list.appendChild(li);
    item.value="";

})


