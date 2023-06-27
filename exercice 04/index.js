// récupérer mon js / html dans vos projets
// afficher sur votre page la liste des catégories de recettes de cuisines
// -- créer un composant mealCategoriesListComponent (avec la même structure que mealsListComponent) : 
// --- ce composant doit faire un appel fetch vers https://www.themealdb.com/api/json/v1/1/categories.php)
// --- avec les données récupérées : faire un boucle et pour chaque catégorie, créer une balise h2 avec le nom de la catégorie
// --- une fois le composant (la fonction) créé, exécutez le pour afficher la liste des catégories dans votre page (en dessous de la liste des recettes)



// cibler la div avec l'id root créée en HTML
const divRoot = document.querySelector("#root")

// fonction générique permettant de créer un tag HTML (un node du DOM)
const createNodeElement = (tagType, attributes, text = "") => {
    const nodeElement = document.createElement(tagType);
  
    for (const property in attributes) {
      nodeElement.setAttribute(property, attributes[property]);
    }
  
    nodeElement.textContent = text;
  
    return nodeElement;
  };



  // fonction qui permet de créer le formulaire de contact et de gérer sa logique 
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

  // création de la fonction pour afficher les catégories
  // créer un composant mealCategoriesListComponent
  // fait un appel vers l'api pour récupérer les données
  // afficher la liste des catégories dans la  page 
const mealCategoriesListComponent  = async () => {
  const responseJson = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  const responseJavascript = await responseJson.json();

  responseJavascript.categories.forEach((category) => {
    const mealCategoriesElement = createNodeElement(
      "h2",
      {
        class: "meal-categories",
      },
      category.strCategory
    );
    divRoot.appendChild(mealCategoriesElement);

    const mealImgElement = createNodeElement("img", {
      src: category.strCategoryThumb,
    });
    divRoot.appendChild(mealImgElement);
  });
};

mealCategoriesListComponent();