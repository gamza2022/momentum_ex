const p = document.querySelector("p");

let bring_date = new Date();
let year = bring_date.getFullYear();
let month = bring_date.getMonth();
let month_plus = month+1;
let day = bring_date.getUTCDate();
p.textContent = `${year}년 ${month_plus}월 ${day}일`;


