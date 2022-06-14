const todolist = document.querySelector(".todolist");
const todolist_iframe = document.querySelector(".todolist_iframe");

function todolist_click_handler() {
    todolist_iframe.classList.remove("hidden_three");

}



todolist.addEventListener("click", todolist_click_handler);