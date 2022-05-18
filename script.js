const input = document.querySelector("#task");
const collection = document.querySelector(".collection");

window.addEventListener("submit", (ev) =>{
    ev.preventDefault()
    console.log(input.value);
    if(input.value === ""){
        alert("sorry, you have to note something");
    }
    else{
        const li = document.createElement("li");
        collection.append(li);
        li.classList.add("collection-item");
        li.classList.add("collection");
        li.textContent = input.value
        const deletee = document.createElement("a");
        li.append(deletee)
        deletee.classList.add("delete-item" , "secondary-content");
        deletee.setAttribute("id", "close");
        const i = document.createElement("i");
        deletee.append(i);
        i.classList.add("fa", "fa-remove");
        const img = document.createElement("img");
        i.append(img);
        img.setAttribute("src", "https://assets.webiconspng.com/uploads/2017/01/Red-Trash-Simple-Icon.png")
        img.style.width = "20px";
        img.style.height = "20px";
        input.value = ""
        i.addEventListener("click", () =>{
            collection.removeChild(li);
        });
    }
});