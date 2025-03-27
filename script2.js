let card = document.querySelector(".trend");
let card2 = document.getElementById("trendsec");
let card3 = document.getElementById("trendthrd");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");


let blog = document.querySelector(".trends");
let mainpage = document.querySelector(".main");

let login = document.getElementById("login");

login.addEventListener("click", function () {
    document.querySelector(".loginpage").style.display = "block";
})

let loged = document.getElementById("loged");
loged.addEventListener("click", function () {
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    if (email.value == "" || pass.value == "") {
        alert("please Enter Email password")
    } else {
        alert("you loged in")
        document.querySelector(".loginpage").style.display = "none";
    }

})



function homes() {
    mainpage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    card3.style.display = "block";
    blog.style.display = "block";
    about.style.display = "none";


    document.getElementById("shop").style.color = "black";
    document.getElementById("home").style.color = "rgb(2, 173, 173)";
    document.getElementById("blog").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";


}
function shops() {
    mainpage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    card3.style.display = "block";


    document.getElementById("shop").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("blog").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";

}

function blogs() {

    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";


    document.getElementById("blog").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";


}
function abouts() {
    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "rgb(2, 173, 173)";



}
function contacts() {
    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "rgb(2, 173, 173)";



}
function show(img) {
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    mainpage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";

    document.querySelector(".cart").style.display = "flex";

}
function addcart() {
    alert("added to cart");
    location.reload();

}
function buynow() {
    alert("Thanks for shopping");
    location.reload();

}
function back() {
    location.reload();
}

function submit() {
    alert("Thanks for connecting");
    location.reload();
}

function signup() {
    alert("Thanks for sign up");
    location.reload();
}

