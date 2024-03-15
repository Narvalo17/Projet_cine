import { Theme } from "./controleur.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("loadContent");

    let theme = new Theme();

    let switchButton = document.getElementById("darkModeSwitch");

    switchButton.addEventListener("change", () => {
        theme.changeTheme();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelectorAll('input')[0];
    const btn = document.querySelector(".btn-validate")

    btn.addEventListener('click', (e)=>{
       

        e.preventDefault();
        
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
     if (form.value === '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Quelque chose s'est mal passé !",
                footer: '<a href="#">Why do I have this issue?</a>',
            }); 
            
        } else {
            Swal.fire({
                 title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
            });
        }
    });
});