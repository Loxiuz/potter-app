"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const harry = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: "holly,phoenix feather,11",
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  };
  // Hermione Granger
  const hermione = {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: "vine,dragon heartstring",
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  };
  // Ron Weasley
  const ron = {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: "willow,unicorn tail-hair,14",
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  };
  //Draco Malfoy
  const draco = {
    name: "Draco Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: "hawthorn,unicorn tail-hair,10",
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
  };
  //Minerva McGonagall
  const minerva = {
    name: "Minerva McGonagall",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "04-10-1925",
    yearOfBirth: 1925,
    ancestry: "",
    eyeColour: "",
    hairColour: "black",
    wand: "",
    patronus: "tabby cat",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Dame Maggie Smith",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/mcgonagall.jpg",
  };
  const cedric = {
    name: "Cedric Diggory",
    species: "human",
    gender: "male",
    house: "Hufflepuff",
    dateOfBirth: "",
    yearOfBirth: 1977,
    ancestry: "",
    eyeColour: "grey",
    hairColour: "brown",
    wand: "ash,unicorn hair,12.25",
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Robert Pattinson",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/cedric.png",
  };

  console.log(harry);
  console.log(hermione);
  console.log(ron);
  console.log(draco);
  console.log(minerva);
  console.log(cedric);

  showCharacter(harry);
  showCharacter(hermione);
  showCharacter(ron);
  showCharacter(draco);
  showCharacter(minerva);
  showCharacter(cedric);
}

function showCharacter(character) {
  //Stort forbogstav på køn
  const gender = character.gender;
  const genderCap =
    gender.charAt(0).toUpperCase() +
    gender.substring(1, gender.length).toLowerCase();
  //Billede med relevante hus
  let houseImgLink = "";
  if (character.house === "Gryffindor") {
    houseImgLink =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-gryffindor.png";
  } else if (character.house === "Slytherin") {
    houseImgLink =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-slytherin.png";
  } else if (character.house === "Ravenclaw") {
    houseImgLink =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-ravenclaw.png";
  } else if (character.house === "Hufflepuff") {
    houseImgLink =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-ravenclaw.png";
  }
  const html = /*html*/ `
     <article>
      <h2>${character.name}</h2>
      <p>Gender: ${genderCap}</p>
      <image src="${houseImgLink}">
      <p>Year of birth: ${character.yearOfBirth}</p>
      <image src="${character.image}">
     </article>
     `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    console.log(character);
    const dialogHtml = /* html */ `
      <h2>${character.name}</h2>
      <p>Species: ${character.species}</p>
      <p>Gender: ${genderCap}</p>
      <image src="${houseImgLink}">
      <p>Date of birth: ${character.dateOfBirth}</p>
      <p>Year of birth: ${character.yearOfBirth}</p>
      <p>Ancestry: ${character.ancestry}</p>
      <p>Eye colour: ${character.eyeColour}</p>        
      <p>Hair colour: ${character.hairColour}</p>
      <p>Wand: ${character.wand}</p>
      <p>Patronus: ${character.patronus}</p>
      <p>Hogwarts student: ${character.hogwartsStudent}</p>
      <p>Hogwarts staff: ${character.hogwartsStaff}</p>
      <p>Played by: ${character.actor}</p>
      <p>Alive: ${character.alive}</p>
      <image src="${character.image}">
      <form method="dialog">
		    <button>Close</button>
      </form>
    `;
    const dialog = document.querySelector("dialog");
    dialog.innerHTML = "";
    dialog.insertAdjacentHTML("beforeend", dialogHtml);
    dialog.showModal();
  }
}
