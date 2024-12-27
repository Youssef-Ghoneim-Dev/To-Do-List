let itemInput = document.querySelector("#itemInput");
let submitBtn = document.querySelector("#submitBtn");
let list = document.querySelector("#list");
let p8 = document.querySelector("#pp");
let comlist = document.querySelector("#comlist");
let h1 = document.getElementById("hh");

let liEdit = null;
let editBtn1 = null;
let editMode = false;



function addItem() {
    let li = document.createElement("li");
    li.classList.add("item");

    let check = document.createElement('input')
    check.type = 'checkbox';
    check.oninput = function () {
        comlist1();
    }


    let p = document.createElement("p");
    p.textContent = itemInput.value;
    p.classList.add('p')


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
        removeItem(li);
    };

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");
    editBtn.onclick = function () {
        editItem(li, editBtn);
        editBtn.classList.add("focusb");
    };
    li.append(check, p, editBtn, deleteBtn);
    let check1 = null;
    let div1 = document.createElement('div')
    div1.append(li)
    check1 = div1;
    list.append(div1);

    function comlist1() {
        if (!check.checked) {
            list.append(check1);
            li.classList.remove("rem");
        }
        else {
            comlist.append(check1);
            let div = document.createElement("div");
            li.classList.add("rem");
            li.append(div);
        }
    }
}
function removElement() {
    let element1 = comlist.querySelectorAll('li');
    for (let i = 0; i < element1.length; i++) {
        element1[i].remove();
    }
}




function bg() {
    if (itemInput.value != "") {
        h1.style.color = "rgb(23, 142, 216)"
    }
    else {
        h1.style.color = "#28a745"
    }
}

submitBtn.onclick = function () {
    if (itemInput.value != "") {
        if (editMode == false) {
            addItem();
            h1.style.color = "#28a745"
        } else {
            liEdit.querySelector("p").textContent = itemInput.value;
            editMode = false;
            liEdit.classList.remove("focus");
            itemInput.classList.remove("focus22");
            liEdit.querySelector("p").classList.remove("p1");
            editBtn1.classList.remove("focusb");
            submitBtn.textContent = "Add Item";
            h1.style.color = "#28a745"
            liEdit = null;
        }
        itemInput.value = "";
    }
};


function removeItem(item) {
    item.remove();
}
function editItem(item, item1) {
    liEdit = item;
    editBtn1 = item1;
    itemInput.value = item.querySelector("p").textContent;
    editMode = true;
    submitBtn.textContent = "Edit Item";
    item.classList.add("focus");
    liEdit.querySelector("p").classList.add("p1");
    h1.style.color = "rgb(23, 142, 216)"
    itemInput.classList.add("focus22");
}
