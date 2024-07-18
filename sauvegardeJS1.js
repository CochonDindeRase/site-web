// Images Dents Maxillaires/Vestibulaire
    // récupération dans le fichier JSON
const maxillovestibulaire = await fetch('./maxillairevestibulaire.json');
const denture1 = await maxillovestibulaire.json();

for (let i = 0; i < denture1.length; i++) {
    const article = denture1[i];

    // Création de la div contenant l'image et le nom
    const ficheElement = document.createElement("div");
    ficheElement.classList.add("liste1");

    // Création de l'image
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
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

    // Création du nom
    const nomElement = document.createElement("h2");
    nomElement.innerText = journal.nom;
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

    // Création de l'image
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
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

    // Création du nom
    const nomElement = document.createElement("h2");
    nomElement.innerText = journal.nom;
    ficheElement.appendChild(nomElement);

    // Création de l'image
    const imageElement = document.createElement("img");
    imageElement.src = journal.image;
    ficheElement.appendChild(imageElement);

    // Rattachement de la fiche au DOM
    const sectionFiches4 = document.querySelector(".dents4");
    sectionFiches4.appendChild(ficheElement);
  }







// Création tableau pour les dents maxillaires
    // données pour le tableau
const data = [
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
  ["18", "17", "16", "15", "14", "13", "12", "11", "21", "22", "23", "24", "25", "26", "27", "28"],
];

// Tableau dents maxillaire vestibulaire
createTable('table-container', data);
// Tableau dents maxillaire palatin
createTable('third-table-container', data);

// Fonction générique pour créer un tableau
function createTable(containerId, tableData) {
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
const data3 = [
  ["48", "47", "46", "45", "44", "43", "42", "41", "31", "32", "33", "34", "35", "36", "37", "38"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
];

// Tableau dents mandibule vestibulaire
createsecondTable('second-table-container', data3);

// Tableau dents mandibule linguale
createsecondTable('quatre-table-container', data3);

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







// Fonction pour inverser les colonnes des tableaux des dents linguales/palatins (pour replacer les dents dans le bon ordre)
function invertRows() {
  // Inversion pour le troisième tableau
  invertRowsForTable('third-table-container');
  // Inversion pour le quatrième tableau
  invertRowsForTable('quatre-table-container');
}
// Fonction générique pour inverser les lignes d'un tableau (*en excluant la dernière colonne)
function invertRowsForTable(containerId) {
  const tableContainer = document.getElementById(containerId);
  // Récupérer le tableau
  const table = tableContainer.querySelector('table');
  // Récupérer le nombre de lignes dans le tableau
  const numRows = table.rows.length;
  // Inverser les lignes
  for (let i = 0; i < numRows; i++) {
    // Récupérer la ligne actuelle
    const row = table.rows[i];
    // Récupérer le nombre de cellules dans la ligne
    const numCells = row.cells.length;
    // Inverser les cellules (en excluant la dernière colonne*)
    for (let j = 0; j < Math.floor(numCells / 2); j++) {
      const temp = row.cells[j].textContent;
      row.cells[j].textContent = row.cells[numCells - 2 - j].textContent;
      row.cells[numCells - 2 - j].textContent = temp;
    }
  }
}
// Appeler la fonction pour inverser les lignes des tableaux third et fourth
invertRows();







// Fonction pour ajouter boutons et menus déroulants pour certaines lignes
  // Fonction pour créer des champs de texte
function createTextInputs(count) {
  const textInputs = [];
  for (let i = 0; i < count; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('small-input', 'direct-input'); // Ajoutez des classes spéciales pour styliser et distinguer ces éléments

    // Ajoutez un gestionnaire d'événements de clic pour sélectionner tout le texte au clic (lorsque l'on clic sur un champ la valeur est automatiquement selectionnée)
    input.addEventListener('click', function () {
      this.select();
    });

    textInputs.push(input);
  }
  return textInputs;
}
  // Fonctions pour créer des boutons et des Menus déroulants
function createTableWithCheckboxesAndDropdowns(containerId, tableData) {
  const tableContainer = document.getElementById(containerId);
  const table = document.createElement('table');

  for (let i = 0; i < tableData.length; i++) {
    const rowData = tableData[i];
    const row = document.createElement('tr');

    for (let j = 0; j < rowData.length; j++) {
      const cell = document.createElement(i === 0 ? 'th' : 'td');

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
        const textInputs = createTextInputs(3);
      
        for (let k = 0; k < 3; k++) {
          textInputs[k].value = '0';
          let hasMinus = false; // Ajout d'une variable pour suivre la présence du signe "-"
      
          textInputs[k].addEventListener('input', function () {
            let enteredValue = textInputs[k].value.trim();
      
            // Ajoutez automatiquement le signe "-" après que l'utilisateur est entrée une valeur avec posibilité de l'enlever avant d'entrer la valeur
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
      
          // Ajoutez un gestionnaire d'événements pour la touche "Entrée"
          textInputs[k].addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
              // Passez au champ suivant s'il y en a un dans la même cellule
              if (k < 2) {
                textInputs[k + 1].focus();
                textInputs[k + 1].select(); // Sélectionnez automatiquement la valeur prédéfinie suivante
              }
              // et passez au champ dans la cellule suivante sur la même ligne si on est au dernier champs de la cellule
              else if (j < rowData.length - 1) {
                textInputs[0].blur(); // Perdez le focus sur le dernier champ
                textInputs[0].parentNode.nextSibling.firstChild.focus(); // Passez au premier champ de la cellule suivante
                textInputs[0].parentNode.nextSibling.firstChild.select(); // Sélectionnez automatiquement la valeur prédéfinie suivante
              }
            }
          });
      
          cell.appendChild(textInputs[k]);
        }
        cell.classList.add('full-width-cell'); // Ajoutez la classe à la cellule
        cell.classList.add('full-width-cell', 'text-center'); // Ajoutez la classe à la cellule
      }
      
      
      // Ajoutez des plages de valeurs pour chaque cellule de la ligne contenant "Profondeur Sondage"
      else if ( (rowData.includes('Profondeur Sondage') && rowData[j] !== 'Profondeur Sondage')
      ) {
        const textInputs = createTextInputs(3);
      
        for (let k = 0; k < 3; k++) {
          textInputs[k].value = '0';
          textInputs[k].addEventListener('input', function () {
            const enteredValue = textInputs[k].value.trim();
      
            // Vérifiez si la valeur entrée est un nombre (positif, négatif ou zéro)
            if (/^-?\d*\.?\d*$/.test(textInputs[k].value) || textInputs[k].value === '-') {
              updateData(i, j + k, textInputs[k].value);
            } else {
              // Si la valeur n'est pas un nombre, rétablissez la valeur par défaut
              textInputs[k].value = '0';
              updateData(i, j + k, '0');
            }
          });
      
          // Ajoutez un gestionnaire d'événements pour la touche "Entrée"
          textInputs[k].addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
              // Passez au champ suivant s'il y en a un dans la même cellule
              if (k < 2) {
                textInputs[k + 1].focus();
                textInputs[k + 1].select(); // Sélectionnez automatiquement la valeur prédéfinie suivante
              }
              // Sinon, passez au champ suivant dans la cellule suivante sur la même ligne
              else if (j < rowData.length - 1) {
                textInputs[0].blur(); // Perdez le focus sur le dernier champ
                textInputs[0].parentNode.nextSibling.firstChild.focus(); // Passez au premier champ de la cellule suivante
                textInputs[0].parentNode.nextSibling.firstChild.select(); // Sélectionnez automatiquement la valeur prédéfinie suivante
              }
            }
          });
      
          cell.appendChild(textInputs[k]);
        }
        cell.classList.add('full-width-cell'); // Ajoutez la classe à la cellule
        cell.classList.add('full-width-cell', 'text-center'); // Ajoutez la classe à la cellule
      }
      
      

      else {
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
    // Mettez à jour les données uniquement pour la ligne correspondante
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
// Utilisez la fonction pour créer le premier tableau avec des cases à cocher et des menus déroulants pour la ligne contenant "Implant"
createTableWithCheckboxesAndDropdowns('table-container', data);
// Utilisez la fonction pour créer le troisième tableau avec des cases à cocher et des menus déroulants pour la ligne contenant "Implant"
createTableWithCheckboxesAndDropdowns('second-table-container', data3);
// Utilisez la fonction pour créer le deuxième tableau avec des cases à cocher et des menus déroulants pour la ligne contenant "Implant"
createTableWithCheckboxesAndDropdowns('third-table-container', data);
// Utilisez la fonction pour créer le quatrième tableau avec des cases à cocher et des menus déroulants pour la ligne contenant "Implant"
createTableWithCheckboxesAndDropdowns('quatre-table-container', data3);
