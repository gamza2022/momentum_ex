const inquiry_button = document.querySelector(".inquiry button");
// console.log(inquiry_button);

function footer_email_copy() {
    const copy_email = document.querySelector(".copy_email").innerHTML;
    // console.log(copy_email); 실제 이메일 주소입력란에 입력하면 개행문자가 들어가있음
    const remove_space_copy_email_text = copy_email.trim();
    navigator.clipboard.writeText(remove_space_copy_email_text);
    alert("문의 메일이 복사되었습니다.");
    }

inquiry_button.addEventListener("click", footer_email_copy);