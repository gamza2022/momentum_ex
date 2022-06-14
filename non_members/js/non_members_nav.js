alert("이용관련 안내는 NOTICE로 확인하세요~! Please check the NOTICE~!");

// 메뉴 NOTICE event 제어
const notice = document.querySelector(".notice");
const notice_in_tab = document.querySelector(".notice_in_tab");

// console.log(notice);
// console.log(notice_in_tab);

function notice_in_tab_handler_on() {
    notice_in_tab.classList.remove("hidden");
}

function notice_in_tab_handler_off() {
    notice_in_tab.classList.add("hidden");
}


notice.addEventListener("mouseover", notice_in_tab_handler_on);
notice.addEventListener("mouseleave", notice_in_tab_handler_off);



//////////////////////////////////////////////////////////////////////////////



// 메뉴 Settings event 제어
const settings = document.querySelector(".settings");
const settings_in_tab = document.querySelector(".settings_in_tab");

// console.log(settings);
// console.log(Settings_in_tab);

function settings_in_tab_handler_on() {
    settings_in_tab.classList.remove("hidden");
}
function settings_in_tab_handler_off() {
    settings_in_tab.classList.add("hidden");
}



settings.addEventListener("mouseover", settings_in_tab_handler_on);
settings.addEventListener("mouseleave", settings_in_tab_handler_off);



//////////////////////////////////////////////////////////////////////////////
