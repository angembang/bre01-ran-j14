window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    
    //Création de l'élément li de la liste ul
    let li = document.createElement("li");
    
    // Ajout du texte à li
    let textLi = document.createTextNode("Sucre");
    
    // Insérer le texte dans le li
    li.appendChild(textLi);
    
    // Selection de la liste ul
    let ul = document.getElementById("ingredients");
    
    // Ajout de mon li à la fin de l'ul
    ul.appendChild(li); 
    
});