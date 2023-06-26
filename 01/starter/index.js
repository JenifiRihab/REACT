// // cibler le bouton
// const button = document.querySelector("button");

// // au click sur le bouton
// button.addEventListener("click", () => {

//     // cibler le texte
//     const text = document.querySelector("p");

//     // masquer le texte
//     text.style.display = "none"
// });

// __________



const button = document.querySelector("button");

// au clicksur le button

button.addEventListener("click",() =>{

    // je sible l'element dans le DOM quI a l'ID root
    const divRoot = document.querySelector("#root")

    // je créé une bolise article
    const articleElement = document.creatElement("article");
    divRoot.appendChild(articleElement);

    // créer un titre
    const titleElemet = document.createElement("h1");
    titleElemet.textContent = "hello la piscine";
    articleElement.appendChild(titleElemet);

     // créer une image
    const imgElement = document.createElement("img");
    imgElement.setAttribute(
        "src"
        "lien de image"
    );

     // créer un text
    articleElement = document.cretElement("p");
    textElement.textContent = "lorem ipsum";
    articleElement.appendChild(textElement);

})