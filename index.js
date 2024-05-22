const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/"

const container = document.querySelector('#container')

const gen1label = document.createElement('h2')
gen1label.innerText = "Generation-1"
container.appendChild(gen1label)

for (let i = 1; i <= 151; i++) {
    const div = document.createElement("div");
    div.setAttribute('class', 'pokeCard')
    const img = document.createElement("img");
    img.setAttribute('class', 'pokeImg')
    img.src = `${baseUrl}${i}.png`;
    const label = document.createElement('span')
    label.innerText = `#${i}`
    div.appendChild(img);
    div.appendChild(label);
    container.appendChild(div)
}

const gen2label = document.createElement('h2')
gen2label.innerText = "Generation-2"
container.appendChild(gen2label)

for (let i = 152; i <= 251; i++) {
    const div = document.createElement("div");
    div.setAttribute('class', 'pokeCard')
    const img = document.createElement("img");
    img.setAttribute('class', 'pokeImg')
    img.src = `${baseUrl}${i}.png`;
    const label = document.createElement('span')
    label.innerText = `#${i}`
    div.appendChild(img);
    div.appendChild(label);
    container.appendChild(div)
}