/*
function generateTable() {
  let body = document.querySelector("body");
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  let users = [
    ["Mari", "Doucet"],
    ["Hugues", "Froger"],
    ["Alex", "Terieur"],
    ["Anne", "O'Neam"]
  ];

  users.forEach(function(user) {
    let row = document.createElement("tr");

    user.forEach(function(data) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(data);
      cell.appendChild(cellText);
      row.appendChild(cell);
    });

    tblBody.appendChild(row);
  });

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}


window.addEventListener("DOMContentLoaded", generateTable);
    // votre code ici
    /*
    let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];
    /*
    // Sélection de l'élément body de mon HTML
    let body = document.querySelector("body");
    
    // Création du tableau
    let tab = document.createElement("table");
    
    // Boucle à travers le tableau users pour création des éléments du tableau html
    users.forEach(function(user) {
        // Création d'une ligne (tr) pour chaque utilisateur
        let row = document.createElement('tr');
        
        // Création de td pour le prénom et le nom de user
        user.forEach(function(usernames) {
            let col = document.createElement('td');
            col.textContent = usernames;
            // Ajout de la colonne à la ligne
            row.appendChild(col);
        });
        // Ajout de la ligne au tableau
        tab.appendChild(row); 
    });

    // Ajout du tableau à body
    body.appendChild(tab);
    */
    
    /*
    
    // Sélection de l'élément body dans le HTML
    let body = document.querySelector("body");

    // Création de l'élément de tableau (table)
    let table = document.createElement("table");

    // Parcourir le tableau des utilisateurs et créer les lignes et colonnes du tableau
    users.forEach(function(user) {
        // Création d'une ligne (tr) pour chaque utilisateur
        let row = document.createElement("tr");

        // Création de cellules (td) pour le prénom et le nom de l'utilisateur
        user.forEach(function(data) {
            let cell = document.createElement("td");
            cell.textContent = data;
            // Ajout de la cellule à la ligne
            row.appendChild(cell);
        });
    // Ajout de la ligne au tableau
    table.appendChild(row); 
    });

    // Ajout du tableau à la page HTML, à l'intérieur de l'élément body
    body.appendChild(table);
    
    
 // Création du tableau
    let table = document.createElement('table');

    // Création de l'en-tête (thead) avec les titres
    let tableHead = document.createElement('thead');
    let headRow = document.createElement('tr');
    let headers = ['Prénom', 'Nom'];

    headers.forEach(function(headerText) {
        let header = document.createElement('th');
        header.textContent = headerText;
        headRow.appendChild(header);
    });

    tableHead.appendChild(headRow);
    table.appendChild(tableHead);

    // Création du corps du tableau (tbody) et ajout des données
    let tableBody = document.createElement('tbody');

    users.forEach(function(user) {
        let row = document.createElement('tr');

        user.forEach(function(data) {
            let cell = document.createElement('td');
            cell.textContent = data;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);

    // Ajout du tableau complet au corps du document
    let body = document.querySelector("body");
    body.appendChild(table);
   
    
    function generateTable(user) {
    // Sélection de l'élément body de mon HTML
    let body = document.querySelector("body");
    
    // Création des éléments table et table body
     let tbl = document.createElement("table");
     let tblBody = document.createElement("tbody");
     
     // Création des cellulles du tableau
     for(let i = 0; i < 2; i++) {
         // Création des lignes du tableau
         let tabRow = document.createElement("tr");
         
          for(let j = 0; j < 2; j++) {
              // Création des balises td et de leur contenu
              let cell = document.createElement("td");
              var cellText = document.createTextNode("cell in row " + i + ", column " + j,);
              // Ajout des éléments  du td et du tableau
              cell.appendChild(cellText);
              tabRow.appendChild(cell);
          }
          // Ajouter le tableau 
     }
    }
    */
    
  

// Appel de la fonction pour générer le tableau lors du chargement du DOM
//window.addEventListener("DOMContentLoaded", generateTable);
    
 
/*
window.addEventListener("DOMContentLoaded", function(){
    // votre code ici
    let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];
    
   // Sélection de l'élément body dans le HTML
    let body = document.querySelector("body");
    
    // Création de la balise table
    let table = document.createElement("table");
    
    // Ajout de la balise table dans body
    body.appendChild(table);
    
    // Création de la balise thead du tableau
    let thead = document.createElement("thead");
    
    // Ajout du thead dans le tableau
    table.appendChild(thead);
    
    // Création de la balise tr de la balise thead du tableau
    let tr = document.createElement("tr");
    
    // Ajout de la balise tr dans thdead du tableau
    thead.appendChild(tr);
    
    // Création de la balise th de la balise tr de la balise thead du tableau
    let th = document.createElement("th");
    // Création du contenu de th
    let thContent = document.createTextNode("Tableau des utilisateurs");
    
    // Ajout du contenu dans th
    th.appendChild(thContent);
    
    // Création du corps du tableau
    let tbody = document.createElement("tbody");
    
    // Ajout de tbody au tableau
    table.appendChild(tbody);
    
    // Création de tr de body
    let tr2 = document.createElement("tr");
    
    // Ajout de tr2 dans tbody
    tbody.appendChild(tr2);
    
    // boucle pour création des balises td de tbody
    users.forEach(function(user) {
        let td = document.createElement("td");
        let tdContent = document.createTextNode(user);
        td.appendChild(tdContent);
        
        // Ajout de td dans tr
        tr2.appendChild(td);
    })
    
});


window.addEventListener("DOMContentLoaded", function(){
    let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];
    
    // Sélection de l'élément body dans le HTML
    let body = document.querySelector("body");
    
    // Création de la balise table
    let table = document.createElement("table");
    
    // Création de la balise thead du tableau
    let thead = document.createElement("thead");
    
    // Création de la balise tr de la balise thead du tableau
    let tr = document.createElement("tr");
    
    // Création de la balise th de la balise tr de la balise thead du tableau
    let th = document.createElement("th");
    let thContent = document.createTextNode("Tableau des utilisateurs");
    th.appendChild(thContent);
    
    // Ajout du th dans le tr
    tr.appendChild(th);
    // Ajout du tr dans le thead
    thead.appendChild(tr);
    
    // Ajout du thead dans le tableau
    table.appendChild(thead);
    
    // Création du corps du tableau
    let tbody = document.createElement("tbody");
    
    // Ajout du tbody dans le tableau
    table.appendChild(tbody);
    
    // Boucle pour créer les lignes (tr) et les colonnes (td) du tableau
    users.forEach(function(user) {
        // Création d'une ligne (tr) pour chaque user
        let tr = document.createElement("tr"); 
        
        user.forEach(function(col) {
            // Création d'une colonne (td) pour chaque donnée de user
            let td = document.createElement("td"); 
            let tdContent = document.createTextNode(col);
            td.appendChild(tdContent);
            // Ajout de la colonne à la ligne
            tr.appendChild(td); 
        });
        
        // Ajout de la ligne au corps du tableau
        tbody.appendChild(tr); 
    });
    
    // Ajout du tableau complet au body
    body.appendChild(table); 
});
*/

window.addEventListener("DOMContentLoaded", function(){
    let users = [
        ["Mari", "Doucet"],
        ["Hugues", "Froger"],
        ["Alex", "Terieur"],
        ["Anne", "O'Neam"]
    ];
    
    // Sélection de l'élément body dans le HTML
    let body = document.querySelector("body");
    
    // Création de la balise table
    let table = document.createElement("table");
    
    // Création de la balise thead du tableau
    let thead = document.createElement("thead");
    
    // Création de la première ligne du tableau contenant les titres (Nom et Postnom)
    let trHead = document.createElement("tr");
    
    let th1 = document.createElement("th");
    let thContent1 = document.createTextNode("Nom");
    th1.appendChild(thContent1);
    trHead.appendChild(th1);
    
    let th2 = document.createElement("th");
    let thContent2 = document.createTextNode("Postnom");
    th2.appendChild(thContent2);
    trHead.appendChild(th2);
    
    thead.appendChild(trHead);
    table.appendChild(thead);
    
    // Création du corps du tableau
    let tbody = document.createElement("tbody");
    
    // Boucle pour créer les lignes (tr) et les colonnes (td) du tableau
    users.forEach(function(user) {
        // Création d'une ligne (tr) pour chaque user
        let tr = document.createElement("tr"); 
        
        user.forEach(function(col) {
            // Création d'une colonne (td) pour chaque donnée de user
            let td = document.createElement("td"); 
            let tdContent = document.createTextNode(col);
            td.appendChild(tdContent);
            // Ajout de la colonne à la ligne
            tr.appendChild(td); 
        });
        // Ajout de la ligne au corps du tableau
        tbody.appendChild(tr); 
    });
    
     // Ajout du tbody dans le tableau
    table.appendChild(tbody);
    // Ajout du tableau complet au body
    body.appendChild(table); 
});









