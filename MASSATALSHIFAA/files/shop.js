// ------------------------------------------------- القائمة الرئيسية ---------------------------------------------------------------------------
document.getElementById('menuIcon').addEventListener("focus" , () => {document.getElementById('menu').style.display="block"})
document.getElementById('closeIcon2').addEventListener("focus" , () => {document.getElementById('menu').style.display="none"})
// -------------------------------------------------------- قئمة المنتجات ----------------------------------------------------------------------- 
function cats() {
    
    document.getElementById('cats').classList.add("active");

    document.querySelectorAll(".dogs,.birds,.maqmat,.others").forEach(element => {
    element.classList.remove("active");    });

    document.querySelectorAll(".d,.b,.m,.o").forEach(element => {
    element.style.display="none";    });

    document.querySelectorAll(".c").forEach(element => {
    element.style.display="unset";   });

}
function dogs() {

    document.getElementById('dogs').classList.add("active");

    document.querySelectorAll(".cats,.birds,.maqmat,.others").forEach(element => {
    element.classList.remove("active");    });

    document.querySelectorAll(".c,.b,.m,.o").forEach(element => {
    element.style.display="none";   });

    document.querySelectorAll(".d").forEach(element => {
    element.style.display="unset";   });

}
function birds() {

    document.getElementById('birds').classList.add("active");

    document.querySelectorAll(".cats,.dogs,.maqmat,.others").forEach(element => {
    element.classList.remove("active");    });

    document.querySelectorAll(".c,.d,.m,.o").forEach(element => {
    element.style.display="none";   });

    document.querySelectorAll(".b").forEach(element => {
    element.style.display="unset";   });
}
function maqmat() {

    document.getElementById('maqmat').classList.add("active");

    document.querySelectorAll(".cats,.dogs,.birds,.others").forEach(element => {
    element.classList.remove("active");    });

    document.querySelectorAll(".c,.d,.b,.o").forEach(element => {
    element.style.display="none";   });

    document.querySelectorAll(".m").forEach(element => {
    element.style.display="unset";   });
}
function others() {

    document.getElementById('others').classList.add("active");

    document.querySelectorAll(".cats,.dogs,.birds,.maqmat").forEach(element => {
    element.classList.remove("active");    });

    
    document.querySelectorAll(".c,.d,.b,.m").forEach(element => {
    element.style.display="none";   });

    
    document.querySelectorAll(".o").forEach(element => {
    element.style.display="unset";   });
}

