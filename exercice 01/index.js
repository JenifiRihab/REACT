 // Consigne : 

// - en html, crééez un bouton et une div vide
// - en Js, au click sur le bouton, créez : 
// -- une balise article avec à l'intérieur :
// --- un titre
// --- une image
// --- un texte 


//     const button = document.querySelector("button");

//     button.addEventListener("click",() =>{

//     const divTravel = document.querySelector("#travel")

//     const articleElement = document.createElement("article");
//     articleElement.setAttribute("class", "article-travel");
//     divTravel.appendChild (articleElement);

    
//     const titleElement = document.createElement("h1");
//     titleElement.textContent = "COME SEE THE WORLD ";
//     titleElement.setAttribute("class", "title-travel");
//     articleElement.appendChild (titleElement);
 
    
//     const imgElement = document.createElement("img");
//     imgElement.setAttribute ("src", "../exercice/img/photos-de-voyage-piscine-debordement-hotel-reve.jpg");
//     imgElement.setAttribute("class", "img-travel");
//     articleElement.appendChild (imgElement);
 

//    const  textElement = document.createElement("p");
//     textElement.textContent = `Imaginez un peignoir jeté sur une chaise longue savamment placée aux abords de la piscine d’un hôtel chic, dont la terrasse surplombe la mer… D’ailleurs, n’hésitez pas à jeter un oeil à ces piscines de rêve autour du monde.`;
//     textElement.setAttribute("class", "text-travel");
//     articleElement.appendChild(textElement);

// });


// _____________________________


// EXERCICES :
// en utilisant le code de l'exo précédent, refactorisez votre javascript :
// -- créez une fonction réutilisable "createNodeElement" qui permettra de créer n'importe quel élément lorsqu'elle est appelée. 
// Pour cela vous devez passez des parametres à votre fonction (tagType, className, text et imgSrc). Certains parametres doivent être optionnels pour que votre fonction marche dans n'importe quel cas. Pensez à utiliser le return dans votre fonction pour pouvoir récupérer l'élément créé quand la fonction est appelée. L'élément récupérée pourra ainsi être inséré dans votre dom.




// // SOLUTION:
// const button = document.querySelector("button");

// // au clicksur le button:
//     button.addEventListener("click", () => {

// // je sible l'element dans le DOM quI a l'ID travel:    
//     const divRoot = document.querySelector("#travel");

//  // je créé une bolise article:   
//     const articleElement = createNodeElement("article", "article-travel");
//     divRoot.appendChild(articleElement);

//   // créer un titre :  
//     const titleElement = createNodeElement("h1", "title-travel", "COME SEE THE WORLD ");
//     articleElement.appendChild(titleElement);

//  // créer une image:
//     const imgElement = createNodeElement( "img", "img-travel", "", "../exercice/img/photos-de-voyage-piscine-debordement-hotel-reve.jpg");
//     articleElement.appendChild(imgElement);

 
//  // créer un text:
//     const textElement = createNodeElement("p", "text-travel", "Imaginez un peignoir jeté sur une chaise longue savamment placée aux abords de la piscine d’un hôtel chic, dont la terrasse surplombe la mer… D’ailleurs, n’hésitez pas à jeter un oeil à ces piscines de rêve autour du monde.");
//     articleElement.appendChild(textElement);
// });



// //fonction "(tagType, className, text et imgSrc)" de création d'élément sur le DOM avec différents paramètre et j'ai utilisée le return dans ma fonction pour pouvoir récupérer l'élément créé  et je ferai appel à la fonction plus tard pour créer mes élément selon ou je souhaite. L'élément récupérée pourra ainsi être inséré dans le dom:
// const createNodeElement = (tagType, className, text = "", imgSrc = "") => {

// //créer un élément appelé selon le paramètre:
//     const nodeElement = document.createElement(tagType);
// // class:
//     nodeElement.setAttribute("class", className);
// // image:
//     nodeElement.setAttribute("src", imgSrc);
// // text:
//     nodeElement.textContent = text;

//     return nodeElement;
// };





// ____________________

// SOLUTION:


const button = document.querySelector("button");
 // au click sur le button:
button.addEventListener("click", () => {

    const divRoot = document.querySelector("#travel");
 // créer une bolise article:
    const articleElement = createNodeElement("article", {class: "article-travel",});
    divRoot.appendChild(articleElement);

 // créer un titre :
    const titleElement = createNodeElement("h1",{class: "title-travel",},"COME SEE THE WORLD");
    articleElement.appendChild(titleElement);

 // créer une image:
    const imgElement = createNodeElement("img",{class: "img-travel",
    src : "../exercice 01/img/photos-de-voyage-piscine-debordement-hotel-reve.jpg",
   },"");
    articleElement.appendChild(imgElement);

 // créer un text:

    const textElement = createNodeElement("p",{class: "text-travel",},"Imaginez un peignoir jeté sur une chaise longue savamment placée aux abords de la piscine d’un hôtel chic, dont la terrasse surplombe la mer… D’ailleurs, n’hésitez pas à jeter un oeil à ces piscines de rêve autour du monde.");
    articleElement.appendChild(textElement);

});



 //fonction "(tagType, className, text et imgSrc)" de création d'élément sur le DOM avec différents paramètre et j'ai utilisée le return dans ma fonction pour pouvoir récupérer l'élément créé  et je ferai appel à la fonction plus tard pour créer mes élément selon ou je souhaite. L'élément récupérée pourra ainsi être inséré dans le dom:

const createNodeElement = (tagType, attributes, text = "") => {
  const nodeElement = document.createElement(tagType);

  // on fait une boucle sur l'objet attributes
  // et pour chaque propriété trouvée (class, src etc)
  // on ajoute un attribut avec en type le nom de la propriété et en valeur sa valeur
  for (const property in attributes) {
    nodeElement.setAttribute(property, attributes[property]);
  }

  nodeElement.textContent = text;

  return nodeElement;
};