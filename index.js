let header = document.querySelector(".header");
let local = location.pathname;
console.log(local)
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})


const openModal = () => {
    document.querySelector(".signUpWindow").style.display = "flex";
    document.body.style.overflow = "hidden";
}


const closeModal = () => {
    document.querySelector(".signUpWindow").style.display = "none";
    document.body.style.overflow = "";
}

const openQ = (question) => {
    if (document.getElementById(question + "answer").style.display == "block") {
        document.getElementById(question + "answer").style.display = "none";
        document.getElementById(question + "plus").innerHTML = "+";
    }
    else{
        document.getElementById(question + "answer").style.display = "block";
        document.getElementById(question + "plus").innerHTML = "-";

    }
}