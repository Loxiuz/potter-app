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
  const html = /*html*/ `
     <tr>
        <td><image src="${image}"></td>
        <td>${name}</td>
        <td>${house}</td>
        <td>${gender}</td>
        <td>${yearOfBirth}</td>
     </tr>
     `;

  document.querySelector("tbody").insertAdjacentHTML("beforeend", html);
}

//           <tr>
//             <td><img src="http://hp-api.herokuapp.com/images/harry.jpg" /></td>
//             <td>Harry Potter</td>
//             <td>Gryffindor</td>
//             <td>male</td>
//             <td>1980</td>
//           </tr>
//           <tr>
//             <td><img src="http://hp-api.herokuapp.com/images/ron.jpg" /></td>
//             <td>Ron Weasley</td>
//             <td>Gryffindor</td>
//             <td>male</td>
//             <td>1980</td>
//           </tr>
