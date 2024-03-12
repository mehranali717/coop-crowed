const toggleNavbar =()=>{
    const navbar = document.querySelector(".navbar")
    const accountbtn = document.querySelector(".account-btn")
    navbar.classList.toggle("show-navbar");
    accountbtn.classList.toggle("show-account-btn")
}