
var closeBtnS = document.getElementsByClassName('closeBtnS')[0];
var closeBtnL = document.getElementsByClassName('closeBtnL')[0];  /*this gives array of elements with 
specified class name, so you have to have index number even if there is only one button */

var formS = document.getElementById("signInForm");
var formL = document.getElementById("logInForm");

var btnLastS = document.getElementById("btnLastS");
var btnLastL = document.getElementById("btnLastL");

closeBtnS.addEventListener("click", closeFormS);
closeBtnL.addEventListener("click", closeFormL);

function closeFormS() {
    formS.style.display="none";
 }
function closeFormL() {
   formL.style.display="none";
}

btnLastS.addEventListener("click", openFormS);
btnLastL.addEventListener("click", openFormL);

function openFormL() {
    formS.style.display="none";
    formL.style.display="inline-block";
 }
 
 function openFormS() {
     formL.style.display="none";
     formS.style.display="inline-block";
  }
 