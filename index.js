var btn = document.getElementById("add-btn");
var newTaskBtn = document.getElementById("new-task-btn");
var modal = document.getElementsByClassName("modal");
var input_field = document.getElementById("input-field");
var list = document.getElementsByClassName("list-container");
var closeBtn = document.getElementById("close-btn");

btn.addEventListener('click', () => {
    if (input_field.value === "") return;

    var newItem = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", 'imgs/trash.png');
    image.setAttribute("id", 'trash');

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");

    newItem.innerHTML += input_field.value;

    newItem.appendChild(image);
    newItem.appendChild(checkbox);
    list[0].appendChild(newItem);

    image.addEventListener('click', () => {
        newItem.remove();
    });

    checkbox.addEventListener('change', () => {
        newItem.style.color = checkbox.checked ? "grey  " : "black";
        newItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    // Reset Modal
    input_field.value = "";
    modal[0].style.display = "none";
});


// Open Modal
newTaskBtn.addEventListener('click', () => {
    modal[0].style.display = 'initial';
    input_field.focus();
});

// Submit Modal
input_field.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        btn.click();
    }
});

closeBtn.addEventListener('click', () => {
    modal[0].style.display = 'none';
});
