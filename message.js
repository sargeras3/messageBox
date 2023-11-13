const textarea=document.querySelector("textarea");
const tc=document.getElementById("totalCounter");
const rc=document.getElementById("remainedCounter");


textarea.addEventListener("keyup",updateCounter);

function updateCounter(){
    tc.textContent=textarea.value.length;
    rc.textContent=textarea.getAttribute("maxlength")
    - textarea.value.length;

}
updateCounter();