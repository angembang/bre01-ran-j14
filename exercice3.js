window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
     
     // Sélection du paragraphe
     /*let paragraphe = document.querySelector("p"); 

    // Création de l'élément de lien <a>
    let lien = document.createElement("a");
    let lienAttr = document.createAttribute("href");
    
    // Ajout du text de l'attribut du lien
    let lienAttrText = document.createTextNode("https://google.com");
    
    // Ajout du texte de l'attribut dans l'attribut
    lienAttr.appendChild(lienAttrText);
    
    // Ajout de l'attribut dans a
    lien.appendChild(lienAttr);
    

    // Ajout du lien à la fin du paragraphe
    paragraphe.appendChild(lien);
    */
    
    let paragraphe = document.querySelector("p");

    let lien = document.createElement("a");
    lien.href = "https://google.com";
    lien.textContent = "ici";

    paragraphe.appendChild(lien);
     
});