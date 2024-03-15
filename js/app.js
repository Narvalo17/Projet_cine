import { Theme, User } from "./controleur.js";

document.addEventListener("DOMContentLoaded", () => {
    //console.log("loadContent");

    let theme = new Theme();

    let switchButton = document.getElementById("darkModeSwitch");

    switchButton.addEventListener("change", () => {
        theme.changeTheme();
    });

    //form
    const btn_form = document.querySelector("button")

        btn_form.addEventListener("click", (e) => {
       
            e.preventDefault()

            if (User.nom.value && User.prenom.value && User.email.value && User.ville.value && User.pays.value) {
                Swal.fire({
                    title: "🎉Super!!!",
                    text: "Tu a bien cliqué",
                    icon: "success"
                  });
    
    
            }
            else {
                Swal.fire({
                    icon: "🚨error",
                    title: "Oulala!!!!",
                    text: "Mauvais karma",
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
    
            }
  
    })
    
    




    




    
});

