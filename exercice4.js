window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
    
    /*
    // Création de la liste ul
    let ul = document.createElement("ul");
    
    // Création des élements li
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    
    // Ajouter du texte aux li
    */
    
    // Sélection de l'élément body dans le HTML
    let body = document.querySelector("body");
    
    // Création de la liste ul
    let listePokemon = document.createElement("ul");

    
    // Boucle à travers le tableau Pokemons pour création des éléments li
       
        pokemons.forEach(function(pokemon) {
        let li = document.createElement("li");
        let liContent = document.createTextNode(pokemon);
        //li.textContent = pokemon;
        li.appendChild(liContent);
        listePokemon.appendChild(li);
    });
    

    // Ajout de la liste au corps du document HTML
    body.appendChild(listePokemon);
});