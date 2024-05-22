const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/"

for (let i = 1; i <= 151; i++) {
    const img = document.createElement("img");
    img.src = `${baseUrl}${i}.png`;
    document.getElementById("container").appendChild(img);
}
