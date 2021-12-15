/*
Partendo da questo array e aggiungiamo a  tutti gli elementi la proprieta age aggiungendo un numero casuale da 3 a 50.
const arrayObj = [
  {name: ‘Poppy’, type: ‘tshirt’, color: ‘red’},
  {name: ‘Jumping’, type: ‘occhiali’, color: ‘blue’},
  {name: ‘CrissCross’, type: ‘scarpe’, color: ‘black’},
  {name: ‘Jenny’, type: ‘borsa’, color: ‘pink’},
];
Poi stampiamo in pagina
*/

const arrayObj = [
    { name: 'Poppy', type: 'tshirt', color: 'red' },
    { name: 'Jumping', type: 'occhiali', color: 'blue' },
    { name: 'CrissCross', type: 'scarpe', color: 'black' },
    { name: 'Jenny', type: 'borsa', color: 'pink' },
];

let ul = document.getElementById('obj');

arrayObj.forEach((element) => {
    element.age = Math.floor(Math.random() * 50) + 3;
    ul.innerHTML += `<li>name: ${element.name}, type: ${element.type}, color: ${element.color}, age: ${element.age}</li>`;
});

console.log(arrayObj);