"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  showCharacter(
    "https://ik.imagekit.io/hpapi/harry.jpg",
    "Harry Potter",
    "Gryffindor",
    "male",
    "1980"
  );
  showCharacter(
    "https://ik.imagekit.io/hpapi/ron.jpg",
    "Ron Weasley",
    "Gryffindor",
    "male",
    "1980"
  );
  showCharacter(
    "https://ik.imagekit.io/hpapi/hermione.jpeg",
    "Hermione Granger",
    "Gryffindor",
    "female",
    "1979"
  );
  showCharacter(
    "https://ik.imagekit.io/hpapi/draco.jpg",
    "Draco Malfoy",
    "Slytherin",
    "male",
    "1980"
  );
  showCharacter(
    "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
    "Minerva McGonagall",
    "Gryffindor",
    "female",
    "1925"
  );
}

function showCharacter(image, name, house, gender, yearOfBirth) {
  console.log(image, name, house, gender, yearOfBirth);

  //Stort forbogstav på køn
  const genderCap =
    gender.charAt(0).toUpperCase() +
    gender.substring(1, gender.length).toLowerCase();
  //Billede med relevante hus
  let houseImgLink = "";
  if (house === "Gryffindor") {
    houseImgLink =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-gryffindor.png";
  } else if (house === "Slytherin") {
    houseImgLink =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-slytherin.png";
  } else if (house === "Ravenclaw") {
    houseImgLink =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-ravenclaw.png";
  } else if (house === "Hufflepuff") {
    houseImgLink =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-ravenclaw.png";
  }

  const html = /*html*/ `
     <tr>
        <td><image src="${image}"></td>
        <td>${name}</td>
        <td><image src="${houseImgLink}"></td>
        <td>${genderCap}</td>
        <td>${yearOfBirth}</td>
     </tr>
     `;

  document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}
