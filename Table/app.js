"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const potterName = "Harry Potter";
  const potterGender = "male";
  const potterHouse = "Gryffindor";
  const potterDateOfBirth = "31-07-1980";
  const potterAncestry = "half-blood";
  const potterEyeColour = "green";
  const potterHairColour = "black";
  const potterActor = "Daniel Radcliffe";
  const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  showCharacter(
    potterImage,
    potterName,
    potterHouse,
    potterDateOfBirth,
    potterActor
  );
  showCharacter(
    "http://hp-api.herokuapp.com/images/ron.jpg",
    "Ron Weasley",
    "Gryffindor",
    "01-03-1980",
    "Rupert Grint"
  );
}

function showCharacter(image, name, house, dateOfBirth, actor) {
  console.log(image, name, house, dateOfBirth, actor);
  const html = /*html*/ `
     <article>
        <image src="${image}">
        <h2>${name}</h2>
        <p>House: ${house}</p>
        <p>Date of birth: ${dateOfBirth}</p>
        <p>Played by: ${actor}</p>
     </article>
     `;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
}

// function showCharacter(image, name, house, dateOfBirth, actor) {
//   console.log(image, name, house, dateOfBirth, actor);

//   const articleElement = document.createElement("article");
//   const imageElement = document.createElement("image");
//   const nameElement = document.createElement("h2");
//   const houseElement = document.createElement("p");
//   const dateOfBirthElement = document.createElement("p");
//   const actorElement = document.createElement("p");

//   imageElement.src = image;
//   nameElement.textContent = name;
//   houseElement.textContent = house;
//   dateOfBirthElement.textContent = dateOfBirth;
//   actorElement.textContent = actor;

//   articleElement.append(
//     imageElement,
//     nameElement,
//     houseElement,
//     dateOfBirthElement,
//     actorElement
//   );

//   document.querySelector("#characters").appendChild(articleElement);
// }
