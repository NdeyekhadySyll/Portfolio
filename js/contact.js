document.getElementById("contactForm").addEventListener("submit", 
    function(e){
        e.preventDefault()
        let prenom = document.getElementById("firstname").value;
        let nom = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let mess = document.getElementById("mess");

        if(prenom !== "" && nom !== "" && email !== "" && message !==""){
            mess.textContent = "Félicitation votre formulaire a été soumis avec succés !";
            mess.style.color = "green"

            prenom = "" 
            nom == "" 
            email == "" 
            message ==""

        }else{
            mess.textContent = "Veuillez remplir tous les champs s'il vous plait !";
            mess.style.color = "red";
            mess.style.textAlign = "center"
        }
        

    }
)