document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelectorAll('input')[0];
    const btn = document.querySelector(".btn-validate")

    btn.addEventListener('click', (e)=>{
       

        e.preventDefault();
        //alert("ok")
        
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