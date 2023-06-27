// ----------------
// Fonctions / variables globales (utilisées dans tous les composants)
// ----------------

// permet de cibler la div avec l'id root créée en HTML
const divRoot = document.querySelector("#root");

// fonction générique permettant de créer un tag HTML (un node du DOM)
// en précisant son type (div, p, h2 etc), ses attributs et son texte
const createNodeElement = (tagType, attributes, text = "") => {
  const nodeElement = document.createElement(tagType);

  for (const property in attributes) {
    nodeElement.setAttribute(property, attributes[property]);
  }

  nodeElement.textContent = text;

  return nodeElement;
};

// ----------------
// Composants permettant de créer le contenu de notre site
// ----------------

// fonction qui permet de créer le formulaire de contact
// et de gérer sa logique (envoie des données au submit si besoin etc)
const contactFormComponent = () => {
  const formElement = createNodeElement("form");

  const inputTextElement = createNodeElement("input", {
    type: "text",
    class: "contact-text",
  });
  formElement.appendChild(inputTextElement);

  const submitBtnElement = createNodeElement(
    "button",
    {
      type: "submit",
      class: "contact-submit",
    },
    "Valider"
  );
  formElement.appendChild(submitBtnElement);

  divRoot.appendChild(formElement);
};

// appel de la fonction permettant de créer le formulaire de contact
contactFormComponent();

// création de la fonction pour afficher la liste de recettes
// fait un appel vers l'api pour récupérer les données
// créer le HTML pour afficher les données (recettes de cuisines)
const mealsListComponent = async () => {
  const responseJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
  const responseJavascript = await responseJson.json();

  responseJavascript.meals.forEach((meal) => {
    const mealTitleElement = createNodeElement(
      "h2",
      {
        class: "meal-title",
      },
      meal.strMeal
    );
    divRoot.appendChild(mealTitleElement);

    const mealImgElement = createNodeElement("img", {
      src: meal.strMealThumb,
    });
    divRoot.appendChild(mealImgElement);
  });
};

// appel de la fonction qui permet de créer la liste des recettes de cuisine
mealsListComponent();