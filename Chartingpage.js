// Images Dents Maxillaires/Vestibulaire
    // récupération dans le fichier JSON
    const maxillovestibulaire = await fetch('./maxillairevestibulaire.json');
    const denture1 = await maxillovestibulaire.json();
    
    for (let i = 0; i < denture1.length; i++) {
        const article = denture1[i];
    
        // Création de la div contenant l'image et le nom
        const ficheElement = document.createElement("div");
        ficheElement.classList.add("liste1");
        ficheElement.id = `maxV-${article.nom}`; // Modification de l'ID ici pour inclure le préfixe "maxV-"
    
        // Création de l'image
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        imageElement.id = `maxV-img-${article.nom}`; // Ajout de l'ID unique pour l'image
        ficheElement.appendChild(imageElement);
    
        // Création du nom
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        ficheElement.appendChild(nomElement);
    
        // Rattachement de la fiche au DOM
        const sectionFiches1 = document.querySelector(".dents1");
        sectionFiches1.appendChild(ficheElement);
      }
    
    
    
    // Images Dents Mandibule/Vestibulaire
        // récupération dans le fichier JSON
    const mandibullovestibulaire = await fetch('./mandibulevestibulaire.json');
    const denture2 = await mandibullovestibulaire.json();
    
    for (let i = 0; i < denture2.length; i++) {
        const journal = denture2[i];
    
        // Création de la div contenant l'image et le nom
        const ficheElement = document.createElement("div");
        ficheElement.classList.add("liste2");
        ficheElement.id = `mandV-${journal.nom}`; // Modification de l'ID ici pour inclure le préfixe "mandV-"

    
        // Création du nom
        const nomElement = document.createElement("h2");
        nomElement.innerText = journal.nom;
        ficheElement.id = `mandV-img-${journal.nom}`; // Modification de l'ID ici pour inclure le préfixe "mandV-"
        ficheElement.appendChild(nomElement);
    
        // Création de l'image
        const imageElement = document.createElement("img");
        imageElement.src = journal.image;
        ficheElement.appendChild(imageElement);
    
        // Rattachement de la fiche au DOM
        const sectionFiches2 = document.querySelector(".dents2");
        sectionFiches2.appendChild(ficheElement);
      }
    
    
    
    // Images Dents Maxillaires/Palatin
        // récupération dans le fichier JSON
    const maxillopalatin = await fetch('./maxillairepalatin.json');
    const denture3 = await maxillopalatin.json();
    
    for (let i = 0; i < denture3.length; i++) {
        const article = denture3[i];
    
        // Création de la div contenant l'image et le nom
        const ficheElement = document.createElement("div");
        ficheElement.classList.add("liste3");
        ficheElement.id = `maxP-${article.nom}`; // Modification de l'ID ici pour inclure le préfixe "maxP-"

    
        // Création de l'image
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        ficheElement.id = `maxP-img-${article.nom}`; // Modification de l'ID ici pour inclure le préfixe "maxP-"
        ficheElement.appendChild(imageElement);
    
        // Création du nom
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        ficheElement.appendChild(nomElement);
    
        // Rattachement de la fiche au DOM
        const sectionFiches3 = document.querySelector(".dents3");
        sectionFiches3.appendChild(ficheElement);
      }
    
    
    
    // Images Dents Mandibule/Linguale
        // récupération dans le fichier JSON
    const mandibullopalatin = await fetch('./mandibulepalatin.json');
    const denture4 = await mandibullopalatin.json();
    
    for (let i = 0; i < denture4.length; i++) {
        const journal = denture4[i];
    
        // Création de la div contenant l'image et le nom
        const ficheElement = document.createElement("div");
        ficheElement.classList.add("liste4");
        ficheElement.id = `mandP-${journal.nom}`; // Modification de l'ID ici pour inclure le préfixe "mandP-"

    
        // Création du nom
        const nomElement = document.createElement("h2");
        nomElement.innerText = journal.nom;
        ficheElement.appendChild(nomElement);
    
        // Création de l'image
        const imageElement = document.createElement("img");
        imageElement.src = journal.image;
        ficheElement.id = `mandP-img-${journal.nom}`; // Modification de l'ID ici pour inclure le préfixe "mandP-"
        ficheElement.appendChild(imageElement);
    
        // Rattachement de la fiche au DOM
        const sectionFiches4 = document.querySelector(".dents4");
        sectionFiches4.appendChild(ficheElement);
      }
    
    
    
    
    
    
    
    
    // Création tableau pour les dents maxillaires
        // données pour le tableau
    const data = [
      ["18", "17", "16", "15", "14", "13", "12", "11", "21", "22", "23", "24", "25", "26", "27", "28", "num dent"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
    ];


    const espacementData1 = [
      23, 23, 8, 24, 24, 14, 26, 26, 10, 17, 17, 12, 19, 19, 12, 20, 20, 16, 17, 17, 12, 24, 22, 8, 24, 23, 12, 17, 17, 16, 20, 20, 11, 19, 18, 12, 17, 17, 9, 26, 26, 14, 24, 24, 8, 23, 23
    ];
    
    const espacementData2 = [
      25, 25, 13, 30, 28, 17, 30, 30, 16, 17, 17, 14, 19, 19, 16, 18, 19, 16, 17, 17, 12, 15, 15, 11, 15, 15, 12, 17, 17, 16, 19, 18, 16, 19, 19, 14, 17, 17, 16, 30, 30, 17, 28, 30, 13, 25, 25
    ];
    
    const espacementData3 = [
      23, 23, 8, 24, 24, 14, 26, 25, 9, 17, 17, 12, 19, 18, 12, 19, 19, 16, 17, 17, 12, 23, 24, 9, 23, 23, 12, 17, 17, 16, 20, 20, 11, 19, 18, 12, 17, 17, 9, 26, 26, 14, 24, 24, 8, 23, 23
    ];
    
    const espacementData4 = [
      25, 25, 13, 30, 28, 17, 30, 30, 16, 17, 17, 14, 18, 19, 15, 18, 19, 16, 17, 17, 12, 15, 15, 11, 15, 15, 12, 17, 17, 16, 19, 18, 15, 19, 18, 14, 17, 17, 16, 30, 30, 17, 28, 30, 13, 25, 25
    ];
    
    // Tableau dents maxillaire vestibulaire
    createTable('table-container', data);

    
// Fonction générique pour créer un tableau
function createTable(containerId, tableData) {
  const tableContainer = document.getElementById(containerId);

  // Créez un élément de tableau
  const table = document.createElement('table');

  // Ajoutez chaque élément du tableau comme une ligne dans le tableau
  for (let i = 0; i < tableData.length; i++) {
      const rowData = tableData[i];
      const row = document.createElement('tr');

      // Ajoutez chaque élément du tableau comme une cellule dans la ligne
      for (let j = 0; j < rowData.length; j++) {
          const cell = document.createElement(i === 0 ? 'th' : 'td');
          cell.textContent = rowData[j];
          row.appendChild(cell);

          // Permettez à l'utilisateur d'éditer les cellules (*à l'exception de la première ligne et de la première colonne)
          if (i < tableData.length - 1 && j < rowData.length - 1) {
              cell.contentEditable = true;
              cell.addEventListener('input', function () {
                  // Mettez à jour les données lorsque l'utilisateur modifie la cellule*
                  tableData[i][j] = cell.textContent;
              });
          } else {
              // Désactivez la modification pour les cellules de la première ligne et de la dernière colonne
              cell.contentEditable = false;
          }
      }
      table.appendChild(row);
  }
  // Ajoutez le tableau à votre conteneur
  tableContainer.appendChild(table);
}

    // Création tableau pour les dents maxillaires
        // données pour le tableau
        const data3 = [
          ["28", "27", "26", "25", "24", "23", "22", "21", "11", "12", "13", "14", "15", "16", "17", "18", "num dent"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
        ];
        
        // Tableau dents maxillaire palatin
        createthirdTable('third-table-container', data3);
        
        // Fonction générique pour créer un tableau
        function createthirdTable(containerId, tableData) {
          const tableContainer = document.getElementById(containerId);
        
        // Créez un élément de tableau
        const table = document.createElement('table');
        
        // Ajoutez chaque élément du tableau comme une ligne dans le tableau
        for (let i = 0; i < data.length; i++) {
          const rowData = data[i];
          const row = document.createElement('tr');
        
          // Ajoutez chaque élément du tableau comme une cellule dans la ligne
          for (let j = 0; j < rowData.length; j++) {
            const cell = document.createElement(i === 0 ? 'th' : 'td');
            cell.textContent = rowData[j];
            row.appendChild(cell);
        
            // Permettez à l'utilisateur d'éditer les cellules (*à l'exception de la première ligne et de la première colonne)
            if (i < tableData.length - 1 && j < rowData.length - 1) {
              cell.contentEditable = true;
              cell.addEventListener('input', function () {
                // Mettez à jour les données lorsque l'utilisateur modifie la cellule*
                data[i][j] = cell.textContent;
              });
            } else {
              // Désactivez la modification pour les cellules de la première ligne et de la dernière colonne
              cell.contentEditable = false;
            }
          }
          table.appendChild(row);
        }
        // Ajoutez le tableau à votre conteneur
        tableContainer.appendChild(table);
        }
    

    
    // Création tableau pour les dents mandubulaires
        // données pour le tableau
    const data2 = [
      ["48", "47", "46", "45", "44", "43", "42", "41", "31", "32", "33", "34", "35", "36", "37", "38", "num dent"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
    ];
    
    // Tableau dents mandibule vestibulaire
    createsecondTable('second-table-container', data2);
    
    // Tableau dents mandibule linguale
    createsecondTable('quatre-table-container', data2);
    
    // Fonction générique pour créer un tableau
    function createsecondTable(containerId, tableData) {
      const tableContainer = document.getElementById(containerId);
    
      // Créez un élément de tableau
      const table = document.createElement('table');
    
      // Ajoutez chaque élément du tableau comme une ligne dans le tableau
      for (let i = 0; i < tableData.length; i++) {
        const rowData = tableData[i];
        const row = document.createElement('tr');
    
        // Ajoutez chaque élément du tableau comme une cellule dans la ligne
        for (let j = 0; j < rowData.length; j++) {
          const cell = document.createElement(i === 0 ? 'th' : 'td');
          cell.textContent = rowData[j];
          row.appendChild(cell);
    
          // Permettez à l'utilisateur d'éditer les cellules (*à l'exception de la première ligne et de la première colonne)
          if ((i > 0 && j > 0) && !(i === 0 || j === rowData.length - 1)) {
            cell.contentEditable = true;
            cell.addEventListener('input', function () {
              // Mettez à jour les données lorsque l'utilisateur modifie la cellule
              tableData[i][j] = cell.textContent;
            });
          } else {
            // Désactivez la modification pour les cellules de la première ligne et de la dernière colonne*
            cell.contentEditable = false;
          }
        }
        table.appendChild(row);
      }
      // Ajoutez le tableau à votre conteneur
      tableContainer.appendChild(table);
    }
    
    

    
    // Création tableau pour les dents mandubulaires
        // données pour le tableau
    const data4 = [
      ["38", "37", "36", "35", "34", "33", "32", "31", "41", "42", "43", "44", "45", "46", "47", "48", "num dent"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
    ];
    
    // Tableau dents mandibule linguale
    createquatreTable('quatre-table-container', data4);
    
    // Fonction générique pour créer un tableau
    function createquatreTable(containerId, tableData) {
      const tableContainer = document.getElementById(containerId);
    
      // Créez un élément de tableau
      const table = document.createElement('table');
    
      // Ajoutez chaque élément du tableau comme une ligne dans le tableau
      for (let i = 0; i < tableData.length; i++) {
        const rowData = tableData[i];
        const row = document.createElement('tr');
    
        // Ajoutez chaque élément du tableau comme une cellule dans la ligne
        for (let j = 0; j < rowData.length; j++) {
          const cell = document.createElement(i === 0 ? 'th' : 'td');
          cell.textContent = rowData[j];
          row.appendChild(cell);
    
          // Permettez à l'utilisateur d'éditer les cellules (*à l'exception de la première ligne et de la première colonne)
          if ((i > 0 && j > 0) && !(i === 0 || j === rowData.length - 1)) {
            cell.contentEditable = true;
            cell.addEventListener('input', function () {
              // Mettez à jour les données lorsque l'utilisateur modifie la cellule
              tableData[i][j] = cell.textContent;
            });
          } else {
            // Désactivez la modification pour les cellules de la première ligne et de la dernière colonne*
            cell.contentEditable = false;
          }
        }
        table.appendChild(row);
      }
      // Ajoutez le tableau à votre conteneur
      tableContainer.appendChild(table);
    }
     
     
// Fonctions pour rendre invisibles les dents lorsque l'on clique sur le numéro de la dent dans le tableau        
function attachClickHandlers() {
  // Attachez des gestionnaires d'événements aux containers de tableaux
  document.getElementById('table-container').addEventListener('click', function(event) {
      handleTableCellClick(event, 'maxV-');
  });

  document.getElementById('second-table-container').addEventListener('click', function(event) {
      handleTableCellClick(event, 'mandV-');
  });

  document.getElementById('third-table-container').addEventListener('click', function(event) {
      handleTableCellClick(event, 'maxP-');
  });

  document.getElementById('quatre-table-container').addEventListener('click', function(event) {
      handleTableCellClick(event, 'mandP-');
  });
}

// Fonction pour gérer les clics sur les cellules
function handleTableCellClick(event, prefix) {
  if (event.target.tagName === 'TD' || event.target.tagName === 'TH') {
      const cellIndex = event.target.cellIndex + 1; // +1 pour correspondre à l'index CSS
      const cellValue = event.target.innerText.trim();
      if (!cellValue) return; // Ignore les clics sur des cellules vides ou non numériques

      const imageId = `${prefix}img-${cellValue}`;
      const imageElement = document.getElementById(imageId);

      // Gestion du masquage/affichage des images et du contenu des cellules
      const cells = event.target.closest('table').querySelectorAll(`tr td:nth-child(${cellIndex}), tr th:nth-child(${cellIndex})`);
      let isContentVisible = event.target.dataset.contentVisible === 'true';

      cells.forEach(cell => {
          if (cell === event.target) { // Cellule cliquée
              cell.style.textDecoration = isContentVisible ? '' : 'line-through';
              cell.dataset.contentVisible = !isContentVisible;
              if (imageElement) imageElement.style.visibility = isContentVisible ? 'visible' : 'hidden';
          } else { // Autres cellules de la colonne
              cell.style.visibility = isContentVisible ? '' : 'hidden';
              // Gérer les bords horizontaux pour les cellules rendues invisibles
              cell.style.borderTop = cell.style.borderBottom = isContentVisible ? '' : '0';
          }
      });

      // Après la mise à jour de la visibilité, ajustez les bords verticaux des cellules si nécessaire
      adjustVerticalBorders(event.target.closest('table'));
  }
}

// Fonction pour ajuster les bords verticaux entre les colonnes sélectionnées
function adjustVerticalBorders(table, cellIndex) {
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
      const cells = row.querySelectorAll('td, th');
      // Premièrement, réinitialiser tous les styles de bordure pour éviter l'accumulation
      cells.forEach(cell => {
          cell.style.borderLeft = cell.style.borderRight = '';
      });

      // Ensuite, ajustez les bordures basées sur les cellules voisines
      cells.forEach((cell, index) => {
          if (cell.style.visibility === 'hidden') {
              const nextCell = cells[index + 1];
              const prevCell = cells[index - 1];
              if (nextCell && nextCell.style.visibility === 'hidden') {
                  // La cellule suivante est également cachée, masquez le bord droit
                  cell.style.borderRight = '0';
                  nextCell.style.borderLeft = '0';
              }
              if (prevCell && prevCell.style.visibility === 'hidden') {
                  // La cellule précédente est également cachée, masquez le bord gauche
                  cell.style.borderLeft = '0';
                  prevCell.style.borderRight = '0';
              }
          }
      });
  });
}

document.addEventListener('DOMContentLoaded', attachClickHandlers);
attachClickHandlers(); // Assurez-vous que cette fonction est appelée une fois que tous vos tableaux sont créés


// Fonction pour créer des champs de texte avec gestion des événements de navigation
function createTextInputs(count, dentNumber, type, rowIndex, tableIndex) {
  const textInputs = [];
  for (let i = 0; i < count; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = `input-${type}-${dentNumber}-${i}`; // Un ID unique pour chaque champ
      input.classList.add('small-input', 'direct-input'); // Ajouter des classes spéciales

      // Ajouter un gestionnaire d'événements de clic pour sélectionner tout le texte au clic
      input.addEventListener('click', function () {
          this.select();
      });

      // Ajouter un gestionnaire d'événements pour la touche "Entrée"
      input.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
              // Passez au champ suivant s'il y en a un dans la même cellule
              if (i < count - 1) {
                  textInputs[i + 1].focus();
                  textInputs[i + 1].select(); // Sélectionnez automatiquement la valeur prédéfinie suivante
              } else {
                  // Essayez de passer à la cellule suivante dans la même ligne
                  let nextCellInput = findNextVisibleInput(input.parentNode);
                  if (nextCellInput) {
                      nextCellInput.focus();
                      nextCellInput.select();
                  } else {
                      // Si c'est la dernière cellule, passer au tableau suivant en tenant compte des lignes spéciales
                      let targetRowIndex = rowIndex;
                      const currentTableIndex = tableIndex;

            // Cas spécifique pour le quatrième tableau
            if (currentTableIndex === 3 && rowIndex === 2) { // Dernier champ de Profondeur Sondage du quatrième tableau
              targetRowIndex = 1; // Aller à la ligne Niveau Gingival du premier tableau
            } else if (currentTableIndex === 3 && rowIndex === 1) { // Dernier champ de Niveau Gingival du quatrième tableau
              targetRowIndex = 2; // Aller à la ligne Profondeur Sondage du premier tableau
            }


                      const nextInput = findFirstVisibleInputInNextTable(currentTableIndex, targetRowIndex);
                      if (nextInput) {
                          nextInput.focus();
                          nextInput.select();
                      } else {
                          // Si le champ suivant n'est pas trouvé dans la ligne cible, passer à la première cellule visible du tableau suivant
                          const firstInputNextTable = document.getElementById(tableContainers[getNextTableIndex(currentTableIndex)]).querySelector('tr td input[type="text"]:not([style*="visibility: hidden"])');
                          if (firstInputNextTable) {
                              firstInputNextTable.focus();
                              firstInputNextTable.select();
                          }
                      }
                  }
              }
          }
      });

      textInputs.push(input);
  }
  return textInputs;
}



// Fonction pour trouver le prochain champ de saisie visible
function findNextVisibleInput(startCell) {
  let nextCell = startCell;
  while (nextCell) {
      nextCell = nextCell.nextElementSibling;
      if (nextCell && nextCell.querySelector('input[type="text"]') && getComputedStyle(nextCell.querySelector('input[type="text"]')).visibility !== 'hidden') {
          return nextCell.querySelector('input[type="text"]');
      }
  }
  return null;
}

// Fonction pour trouver le premier champ de saisie visible dans le tableau suivant
function findFirstVisibleInputInNextTable(currentTableIndex, targetRowIndex) {
  const nextTableIndex = getNextTableIndex(currentTableIndex);
  const nextTableContainer = document.getElementById(tableContainers[nextTableIndex]);
  let nextInput = nextTableContainer.querySelector(`tr:nth-child(${targetRowIndex + 1}) td input[type="text"]:not([style*="visibility: hidden"])`);
  if (!nextInput) {
      nextInput = nextTableContainer.querySelector('tr td input[type="text"]:not([style*="visibility: hidden"])');
  }
  return nextInput;
}

// Fonction pour obtenir l'index du conteneur suivant dans le cycle
function getNextTableIndex(currentTableIndex) {
  return (currentTableIndex + 1) % tableContainers.length;
}

const tableContainers = ['table-container', 'second-table-container', 'third-table-container', 'quatre-table-container'];

// Ajout des gestionnaires d'événements aux champs de saisie existants
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type="text"]').forEach((input, index) => {
      input.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
              // Passez au champ suivant s'il y en a un dans la même cellule
              let nextInput = findNextVisibleInput(input.parentNode);
              if (nextInput) {
                  nextInput.focus();
                  nextInput.select();
              } else {
                  // Si c'est la dernière cellule, passer au tableau suivant en tenant compte des lignes spéciales
                  let targetRowIndex = input.closest('tr').rowIndex;
                  const currentTableIndex = tableContainers.indexOf(input.closest('table').parentNode.id);
                  const nextInput = findFirstVisibleInputInNextTable(currentTableIndex, targetRowIndex);
                  if (nextInput) {
                      nextInput.focus();
                      nextInput.select();
                  } else {
                      // Si le champ suivant n'est pas trouvé dans la ligne cible, passer à la première cellule visible du tableau suivant
                      const firstInputNextTable = document.getElementById(tableContainers[getNextTableIndex(currentTableIndex)]).querySelector('tr td input[type="text"]:not([style*="visibility: hidden"])');
                      if (firstInputNextTable) {
                          firstInputNextTable.focus();
                          firstInputNextTable.select();
                      }
                  }
              }
          }
      });
  });
});





// Fonction d'aide pour créer une case à cocher (afin de pouvoir en avoir 3 par cellule)
function createCheckbox(classname, updateFunction) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add(classname); // Utilisez la classe spécifiée en argument
  // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la case à cocher est modifiée
  checkbox.addEventListener('change', updateFunction);
  return checkbox;
}

// Fonctions pour créer des boutons et des Menus déroulants modifiée pour inclure 3 checkboxs
function createTableWithCheckboxesAndDropdowns(containerId, tableData, tableType, tableIndex) {
const tableContainer = document.getElementById(containerId);
const table = document.createElement('table');

for (let i = 0; i < tableData.length; i++) {
  const rowData = tableData[i];
  const row = document.createElement('tr');

  for (let j = 0; j < rowData.length; j++) {
    const cell = document.createElement(i === 0 ? 'th' : 'td');
    // Déterminez le numéro de la dent ici
    let dentNumber;
    switch(tableType) {
      case 'maxillaireVestibulaire':
        dentNumber = j < 8 ? 11 + j : 21 + (j - 8);
        break;
      case 'mandibuleVestibulaire':
        dentNumber = j < 8 ? 31 + j : 41 + (j - 8);
        break;
    }

    // Fonction pour gérer le changement de la case à cocher
    const handleCheckboxChange = function() {
      updateData(i, j, this.checked);
    };

    // Ajoutez trois cases à cocher pour chaque cellule de la ligne contenant "Plaque"
    if (rowData.includes('Plaque') && rowData[j] !== 'Plaque') {
      for (let k = 0; k < 2; k++) {
        const checkbox = createCheckbox('custom-checkbox2', handleCheckboxChange);
        cell.appendChild(checkbox);
      }
    }
    // Ajoutez trois cases à cocher pour chaque cellule de la ligne contenant "Saignement"
    else if (rowData.includes('Saignement') && rowData[j] !== 'Saignement') {
      for (let k = 0; k < 2; k++) {
        const checkbox = createCheckbox('custom-checkbox3', handleCheckboxChange);
        cell.appendChild(checkbox);
      }
    }
    
          // Ajoutez une case à cocher pour chaque cellule de la ligne contenant "Implant"
          if (rowData.includes('Implant') && rowData[j] !== 'Implant') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('custom-checkbox1'); // = classe des cases à cocher ligne Implant (pour le CSS)
            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la case à cocher est modifiée
            checkbox.addEventListener('change', function () {
              updateData(i, j, checkbox.checked);
            });
            cell.appendChild(checkbox);
          }
          // Ajoutez une case à cocher pour chaque cellule de la ligne contenant "Plaque"
          else if (rowData.includes('Plaque') && rowData[j] !== 'Plaque') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('custom-checkbox2'); // = classe des cases à cocher ligne Plaque (pour le CSS)
            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la case à cocher est modifiée
            checkbox.addEventListener('change', function () {
              updateData(i, j, checkbox.checked);
            });
            cell.appendChild(checkbox);
          }
          // Ajoutez une case à cocher pour chaque cellule de la ligne contenant "Saignement"
          else if (rowData.includes('Saignement') && rowData[j] !== 'Saignement') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('custom-checkbox3'); // = classe des cases à cocher ligne Saignement (pour le CSS)
            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la case à cocher est modifiée
            checkbox.addEventListener('change', function () {
              updateData(i, j, checkbox.checked);
            });
            cell.appendChild(checkbox);
          }
    
          // Ajoutez une liste déroulante pour chaque cellule de la ligne contenant "Furcation"
          else if (rowData.includes('Furcation') && rowData[j] !== 'Furcation') {
            const dropdown = createDropdown(['1', '2', '3']);
            dropdown.classList.add('custom-dropdown'); // classe des menus déroulants all (pour le CSS)
            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la valeur de la liste déroulante est modifiée
            dropdown.addEventListener('change', function () {
              updateData(i, j, dropdown.value);
            });
            cell.appendChild(dropdown);
          }
          // Ajoutez une liste déroulante pour chaque cellule de la ligne contenant "Mobilité"
          else if (rowData.includes('Mobilité') && rowData[j] !== 'Mobilité') {
            const dropdown = createDropdown(['0', '1', '2', '3']);
            dropdown.classList.add('custom-dropdown'); // classe des menus déroulants all (pour le CSS)
            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la valeur de la liste déroulante est modifiée
            dropdown.addEventListener('change', function () {
              updateData(i, j, dropdown.value);
            });
            cell.appendChild(dropdown);
          }
    
    
    
          // Ajoutez des plages de valeurs pour chaque cellule de la ligne contenant "Niveau Gingival"
          else if (rowData.includes('Niveau Gingival') && rowData[j] !== 'Niveau Gingival') {
            const textInputs = createTextInputs(3, dentNumber, 'niveau', i, tableIndex);
          
            for (let k = 0; k < 3; k++) {
              textInputs[k].value = '0';
              let hasMinus = false; // Ajout d'une variable pour suivre la présence du signe "-"
          
              textInputs[k].addEventListener('input', function () {
                let enteredValue = textInputs[k].value.trim();
          
                // Ajoutez automatiquement le signe "-" après que l'utilisateur est entrée une valeur avec possibilité de l'enlever avant d'entrer la valeur
                if (!hasMinus && enteredValue !== '' && enteredValue !== '-' && !/^-/.test(enteredValue)) {
                  enteredValue = '-' + enteredValue;
                  textInputs[k].value = enteredValue;
                  hasMinus = true;
                }
          
                // Vérifiez si la valeur entrée est un nombre (positif, négatif ou zéro)
                if (/^-?\d*\.?\d*$/.test(textInputs[k].value) || textInputs[k].value === '-') {
                  updateData(i, j + k, textInputs[k].value);
                } else {
                  // Si la valeur n'est pas un nombre, rétablissez la valeur par défaut (0)
                  textInputs[k].value = '0';
                  updateData(i, j + k, '0');
                }
              });
          
              cell.appendChild(textInputs[k]);
            }
            cell.classList.add('full-width-cell'); // Ajoutez la classe à la cellule
            cell.classList.add('full-width-cell', 'text-center'); // Ajoutez la classe à la cellule
          }
          
          
          // Ajoutez des plages de valeurs pour chaque cellule de la ligne contenant "Profondeur Sondage"
          else if (rowData.includes('Profondeur Sondage') && rowData[j] !== 'Profondeur Sondage') {
            const textInputs = createTextInputs(3, dentNumber, 'profondeur', i, tableIndex);
          
            for (let k = 0; k < 3; k++) {
              textInputs[k].value = '0';
              textInputs[k].addEventListener('input', function () {
                const enteredValue = textInputs[k].value.trim();
          
                // Vérifiez si la valeur entrée est un nombre (positif, négatif ou zéro)
                if (/^-?\d*\.?\d*$/.test(textInputs[k].value) || textInputs[k].value === '-') {
                  updateData(i, j + k, textInputs[k].value);

                  // Ajoutez ici la condition pour changer la couleur si la valeur est supérieure ou égale à 4
                  if (parseFloat(textInputs[k].value) >= 4) {
                    textInputs[k].style.color = 'red';
                  } else {
                    textInputs[k].style.color = ''; // Remettre la couleur par défaut
                  }

                } else {
                  // Si la valeur n'est pas un nombre, rétablissez la valeur par défaut
                  textInputs[k].value = '0';
                  updateData(i, j + k, '0');
                }
              });
          
              cell.appendChild(textInputs[k]);
            }
            cell.classList.add('full-width-cell'); // Ajoutez la classe à la cellule
            cell.classList.add('full-width-cell', 'text-center'); // Ajoutez la classe à la cellule
          } else {
            cell.textContent = rowData[j];
          }
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
    
      tableContainer.innerHTML = ''; // Effacez le contenu actuel du conteneur
      tableContainer.appendChild(table);
    
      // Fonction pour créer une liste déroulante avec des options spécifiées
      function createDropdown(options) {
        const dropdown = document.createElement('select');
        options.forEach(optionValue => {
          const option = document.createElement('option');
          option.value = optionValue;
          option.text = optionValue;
          dropdown.add(option);
        });
        return dropdown;
      }
    
      // Fonction pour mettre à jour les données lorsque l'état de la case à cocher change ou la valeur de la liste déroulante
      function updateData(rowIndex, columnIndex, value) {
        // Récupérez la ligne actuelle du tableau
        const rowData = tableData[rowIndex];

        // Ignorez la cellule qui a la donnée "Implant", "Plaque", "Saignement", "Furcation" ou "Mobilité"
        if (
          rowData[columnIndex] !== 'Implant' &&
          rowData[columnIndex] !== 'Plaque' &&
          rowData[columnIndex] !== 'Saignement' &&
          rowData[columnIndex] !== 'Furcation' &&
          rowData[columnIndex] !== 'Mobilité'
        ) {
          tableData[rowIndex][columnIndex] = value;
        }
      }
    }
    
// Appelez la fonction avec le type de tableau approprié
createTableWithCheckboxesAndDropdowns('table-container', data, 'maxillaireVestibulaire', 0);
createTableWithCheckboxesAndDropdowns('second-table-container', data2, 'mandibuleVestibulaire', 1);
createTableWithCheckboxesAndDropdowns('third-table-container', data3, 'maxillairePalatin', 2);
createTableWithCheckboxesAndDropdowns('quatre-table-container', data4, 'mandibuleLingual', 3);

function getChartDataWithSpacing(tableContainer, type, spacings) {
  const profondeurValues = [];
  const niveauValues = [];

  // Récupérer toutes les valeurs des inputs pour les deux types
  const tableInputs = document.querySelectorAll(`#${tableContainer} input[type='text']`);
  tableInputs.forEach(input => {
    if (input.id.includes('profondeur')) {
      profondeurValues.push(parseFloat(input.value) || 0);
    }
    if (input.id.includes('niveau')) {
      let niveauValue = parseFloat(input.value) || 0;
      niveauValue *= -1; // Inverser la valeur pour Niveau Gingival
      niveauValues.push(niveauValue);
    }
  });

  const chartData = spacings.map((spacing, index) => [spacing, type === 'profondeur' ? profondeurValues[index] + niveauValues[index] : niveauValues[index]]);
  return chartData;
}

// Fonction pour générer les labels et espacements
function generateLabelsAndSpacings(espacement) {
  let labels = [];
  let spacings = [];
  let currentSpacing = 0;

  for (let i = 0; i < 16; i++) {
    for (let j = 1; j <= 3; j++) {
      labels.push(`Dent ${i + 1}-${j}`);
      spacings.push(currentSpacing);
      currentSpacing += espacement[(i * 3 + j - 1) % espacement.length];
    }
  }
  return { labels, spacings };
}



// Fonction mise à jour pour les graphiques
function updateChartC3(chartId, tableContainer, espacement) {
  const { labels, spacings } = generateLabelsAndSpacings(espacement);
  const dataProfondeur = getChartDataWithSpacing(tableContainer, 'profondeur', spacings);
  const dataNiveau = getChartDataWithSpacing(tableContainer, 'niveau', spacings);

  var chart = c3.generate({
    bindto: chartId,
    data: {
      xs: {
        'Profondeur Sondage area': 'x1',
        'Profondeur Sondage line': 'x1',
        'Niveau Gingival': 'x2'
      },
      columns: [
        ['x1', ...spacings],
        ['x2', ...spacings],
        ['Profondeur Sondage area', ...dataProfondeur.map(d => d[1])],
        ['Profondeur Sondage line', ...dataProfondeur.map(d => d[1])],
        ['Niveau Gingival', ...dataNiveau.map(d => d[1])]
      ],
      types: {
        'Profondeur Sondage area': 'area',
        'Profondeur Sondage line': 'line',
        'Niveau Gingival': 'line'
      }
    },
    tooltip: {
      show: false
    },
    point: {
      show: false
    },
    axis: {
      y: {
        show: false,
        max: 20,
        min: -8,
        padding: { top: 0, bottom: 0 }
      },
      x: {
        show: false // Cache l'axe des x
      }
    },
    grid: {
      y: {
        lines: Array.from({ length: 21 }, (_, i) => ({ value: i, text: '' }))
      },
      x: {
        lines: [] // (à mettre pour afficher grilles verticales) spacings.map((value, index) => ({ value: value, text: '' })) // Ajoutez les lignes verticales
      }
    },
    legend: {
      show: false
    },
    color: {
      pattern: ['rgba(0, 8, 176, 1)', 'red', 'blue']
    }
  });

  // Appliquer la transformation scaleY(-1) aux graphiques 2 et 4
  if (chartId === '#graph2' || chartId === '#graph4') {
    document.querySelector(chartId).style.transform = 'scaleY(-1)';
  }

  return chart;
}




// Retourne verticalement les graphiques
function invertGraphContainer(chartId) {
  const graphContainer = document.querySelector(chartId);
  graphContainer.style.transform = 'scaleY(-1)';
}

// Appliquer la fonction aux graphiques 2 et 4
document.addEventListener('DOMContentLoaded', function() {
  invertGraphContainer('#graph2');
  invertGraphContainer('#graph4');
});

// Écouteurs d'événements pour la mise à jour des graphiques
document.querySelectorAll('#table-container input[type="text"]').forEach(input => {
  input.addEventListener('input', () => {
    chart1 = updateChartC3("#graph1", 'table-container', espacementData1);
  });
});
document.querySelectorAll('#second-table-container input[type="text"]').forEach(input => {
  input.addEventListener('input', () => {
    chart2 = updateChartC3("#graph2", 'second-table-container', espacementData2);
  });
});
document.querySelectorAll('#third-table-container input[type="text"]').forEach(input => {
  input.addEventListener('input', () => {
    chart3 = updateChartC3("#graph3", 'third-table-container', espacementData3);
  });
});
document.querySelectorAll('#quatre-table-container input[type="text"]').forEach(input => {
  input.addEventListener('input', () => {
    chart4 = updateChartC3("#graph4", 'quatre-table-container', espacementData4);
  });
});




// Déclarez les variables globales pour les graphiques
let chart1, chart2, chart3, chart4;

// Initialiser les graphiques avec des espacements différents
chart1 = updateChartC3('#graph1', 'table-container', espacementData1);
chart2 = updateChartC3('#graph2', 'second-table-container', espacementData2);
chart3 = updateChartC3('#graph3', 'third-table-container', espacementData3);
chart4 = updateChartC3('#graph4', 'quatre-table-container', espacementData4);




// Ajouter des écouteurs d'événements pour les boutons Télécharger et Imprimer
document.querySelector('.telechargement-btn').addEventListener('click', function () {
  generateAndSavePDF(false); // Télécharger sans imprimer
});

document.querySelector('.imprimante-btn').addEventListener('click', function () {
  generateAndSavePDF(true); // Télécharger et imprimer
});

// Fonction pour générer et sauvegarder le PDF
async function generateAndSavePDF(autoPrint) {
  const chartingSection = document.querySelector('#Charting');
  const fondElement = chartingSection.querySelector('.fond');
  
  if (!chartingSection) {
      console.error("La section #Charting n'a pas été trouvée.");
      return;
  }

  const { jsPDF } = window.jspdf;

  try {
      // Sauvegarder les styles originaux
      const originalFondBackgroundColor = fondElement.style.backgroundColor;
      const originalFondBorder = fondElement.style.border;
      
      // Supprimer le fond et la bordure temporairement
      fondElement.style.backgroundColor = 'transparent';
      fondElement.style.border = 'none';

      // Décaler la section légèrement vers le bas pour capturer entièrement le contenu
      chartingSection.style.paddingTop = '20px';

      // Utiliser html2canvas pour capturer la section entière
      const canvas = await html2canvas(chartingSection, {
          scale: 2, // Augmente la qualité de l'image
          useCORS: true, // Pour éviter les problèmes liés aux images provenant de domaines différents
          scrollX: 0, // Capturer la section entière en tenant compte du défilement horizontal
          scrollY: 0, // Capturer la section entière en tenant compte du défilement vertical
          width: chartingSection.scrollWidth, // Largeur totale de la section
          height: chartingSection.scrollHeight + 20, // Hauteur totale de la section plus padding
          x: chartingSection.getBoundingClientRect().left,
          y: chartingSection.getBoundingClientRect().top - 20
      });

      // Restaurer les styles originaux
      chartingSection.style.paddingTop = '';
      fondElement.style.backgroundColor = originalFondBackgroundColor;
      fondElement.style.border = originalFondBorder;

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Ajuster la hauteur de l'image pour qu'elle tienne sur une page
      const imgProps = pdf.getImageProperties(imgData);
      const imageHeight = (imgProps.height * pdfWidth) / imgProps.width;

      const yOffset = 2; // Décalage vers le bas en millimètres

      if (imageHeight <= pdfHeight) {
          // Si l'image tient sur une seule page, l'ajouter directement
          const xOffset = (pdfWidth - pdfWidth) / 2;
          pdf.addImage(imgData, 'PNG', xOffset, yOffset, pdfWidth, imageHeight);
      } else {
          // Sinon, ajuster l'image pour qu'elle tienne sur une page
          const scale = pdfHeight / imageHeight;
          const scaledWidth = pdfWidth * scale;
          const scaledHeight = imageHeight * scale;
          const xOffset = (pdfWidth - scaledWidth) / 2;

          pdf.addImage(imgData, 'PNG', xOffset, yOffset, scaledWidth, scaledHeight);
      }

      const pdfBlob = pdf.output('blob');

      // Si autoPrint est vrai, ouvrir la boîte de dialogue d'impression
      if (autoPrint) {
          const printWindow = window.open(URL.createObjectURL(pdfBlob));
          printWindow.onload = function () {
              printWindow.print();
          };
      } else {
          pdf.save('charting.pdf');
      }
  } catch (error) {
      console.error("Erreur lors de la capture de la section:", error);
  }
}
