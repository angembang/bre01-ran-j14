window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    
    // Création du titre de la deuxième section
    let h2Section2 = document.createElement("h2");
    
    // Ajout du texte à h2
    let h2Section2Text = document.createTextNode("Le titre de la deuxième section");
    
    // Création  du paragraphe de la deuxième section
    let pSection2 = document.createElement("p");
    
    // Ajout du texte à p
    let pSection2Text = document.createTextNode("Le paragraphe de la deuxième section");
    
    // Insertion du texte dans h2
    h2Section2.appendChild(h2Section2Text);
    
    // Insertion du texte dans p
    pSection2.appendChild(pSection2Text);
    
    // Selection de ma deuxième section
    let deuxiemeSection = document.querySelector("section:nth-of-type(2)");
    
    // Ajout de mon h2 à ma fin section
    deuxiemeSection.appendChild(h2Section2);
    deuxiemeSection.appendChild(pSection2);
    
    
    
});
