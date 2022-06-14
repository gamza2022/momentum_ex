const non_members_button = document.querySelector(".non_members_button");
const members_button = document.querySelector(".members_button");
// console.log(non_members_button);
// console.log(members_button);

function non_members_button_handler() {
    location.href="./non_members/non_members.html"
}

non_members_button.addEventListener("click", non_members_button_handler);

//////////////////////////////////////////////////////////////////////////////

function members_button_handler() {
    alert("현재 회원기능은 지원하지 않습니다.추후 지원할 예정입니다.감사합니다 :)");
    // location.href="./members/members.html"
}

members_button.addEventListener("click", members_button_handler);

//////////////////////////////////////////////////////////////////////////////




