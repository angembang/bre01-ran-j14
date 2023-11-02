window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    
    // Selection du formulaire 
    let form = document.querySelector("form");
    
    // Selection de l'élément ul
    let ul = document.querySelector("ul");
    
    // Fonction pour ajouter une nouvelle tâche
    function addTask() {
         // Empêche le rechargement automatique de la page lors de la soumission du formulaire
        event.preventDefault(); 
       
    // Récupération de la valeur saisie dans l'input du formulaire
    let input = document.querySelector("#newTask");
    let inputText = input.value;
       
    // Vérifier si l'input n'est pas vide
    if(inputText !== "") {
          
      // Création de l'élément li
      let li = document.createElement("li");
          
      // Assignation du texte de la tâche à l'élément li
      li.textContent = inputText;
          
      // Ajout de la nouvelle tâche à la liste ul
      ul.appendChild(li);

      }
    }
    
    // Écoute de l'événement de soumission du formulaire et appele de la fonction addTask
    form.addEventListener("submit", addTask);   
    
});