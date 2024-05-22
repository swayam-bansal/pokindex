const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/"



for (let i = 1; i <= 100; i++) {
    const div = document.createElement("div");
    div.setAttribute('class', 'pokeCard')
    const img = document.createElement("img");
    img.setAttribute('class', 'pokeImg')
    img.src = `${baseUrl}${i}.png`;
    const label = document.createElement('span')
    label.innerText = `#${i}`
    div.appendChild(img);
    div.appendChild(label);
    document.querySelector('#container').appendChild(div)
}
