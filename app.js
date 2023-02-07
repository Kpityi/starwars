const peopleContainer = document.getElementById('peoples');

let peopleTemplate = "";

const createTemplate = (data, i) => {
  const person = document.createElement('div');

  person.classList.add('card');
  person.innerHTML = `
    <h2>Név: ${data.name}</h2>
    <img src="./img/people${i}.webp" alt="${data.name}"/>
    <p>Születési év: ${data.birth_year}</p>
    <p>Nem: ${data.gender}</p>
    <p>Magasság: ${data.height}</p>
    <p>Súly: ${data.mass}</p>
    <p>Szemszín: ${data.eye_color}</p>
    <p>Hajszín: ${data.hair_color}</p>
    <p>Bőrszín: ${data.skin_color}</p>
  `;

  return person;
};

const getData = async (i) => {
  await fetch(`https://swapi.dev/api/people/${i}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.detail) {

      } else {
        const person = createTemplate(data, i);
        peopleContainer.appendChild(person);
      }

    })
    .catch((err) => console.log("error"));
};

(async function() {
  for (let i = 1; i < 83; i++) {
    await getData(i);
  }
}())

