const p = document.querySelector("p");

// //시간 가지고 오기
function clock() {
    let bring_time = new Date();
    let hour = String(bring_time.getHours()).padStart(2,"0");
    let minute = String(bring_time.getMinutes()).padStart(2,"0");
    let second = String(bring_time.getSeconds()).padStart(2,"0");
    p.textContent = `${hour}:${minute}:${second}`;
}

clock();
setInterval(clock, 1000);   //1초마다 실행