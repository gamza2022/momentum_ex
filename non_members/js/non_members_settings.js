//nav > Settings > 메뉴설정
// Drag and Drop event 이용

const settings_in_tab_menu_setting = document.querySelector(".settings_in_tab_menu_setting");
// console.log(settings_in_tab_menu_setting);

function settings_in_tab_menu_setting_handler(event) {
    // console.log(settings_in_tab_menu_setting);
    // 보여야하는 요소 보이지않아야할 요소
    const body = document.querySelector("body");
    body.classList.add("grayBGColor");
    const footer = document.querySelector("footer");
    footer.classList.add("hidden");
    const nav = document.querySelector("nav");
    nav.classList.add("navWhiteColor");
    const total = document.querySelector(".total");
    total.classList.add("hidden");

    const draggable_element = document.querySelectorAll(".draggable_space > li");
    let dragged;
    // console.log(draggable_element);//length:7
    
    for(let i of draggable_element) {

        i.addEventListener("dragstart", function() {
            dragged = this;
        });
        i.addEventListener("dragover", function(event) {
            event.preventDefault();
        });
        i.addEventListener("drop", function(event) {
            event.preventDefault();
            if(this != dragged) {
                let all = document.querySelectorAll(".draggable_space > li");
                let draggedpos = 0;
                let droppedpos = 0;
                for(let it =0; it<all.length; it++) {
                    if(dragged == all[it]) {draggedpos = it;}
                    if(this == all[it]) {droppedpos = it;}
                }
            if(draggedpos < droppedpos) {
                this.parentNode.insertBefore(dragged, this.nextSibling);
                
            } else {
                this.parentNode.insertBefore(dragged, this);
                
            }
            }
        });
    }

    // Settings > 메뉴설정 완료버튼이다.
    const settings_button = document.querySelector(".settings_button");
    settings_button.classList.remove("hidden");
    function setting_complete_handler() {
        settings_button.classList.add("hidden");
        body.classList.remove("grayBGColor");
        footer.classList.remove("hidden");
        nav.classList.remove("navWhiteColor");
        total.classList.remove("hidden");
    }
    settings_button.addEventListener("click", setting_complete_handler);
}

settings_in_tab_menu_setting.addEventListener("click", settings_in_tab_menu_setting_handler);