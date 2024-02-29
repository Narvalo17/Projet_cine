document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.submit submit');

        form.addEventListener('submit', function(event) {

        event.preventDefault();
        if (condition) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
            }); 
            
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Quelque chose s'est mal passé !",
                footer: '<a href="#">Why do I have this issue?</a>',
            });
        }
    });
});