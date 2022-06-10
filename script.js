let randomGenerate_btn = document.querySelector(".randomGenerate_btn");

randomGenerate_btn.addEventListener('click', fetchRandomCats);



function fetchRandomCats(){
    fetch('https://api.thecatapi.com/v1/images/search') 
    .then(response => response.json())
    .then((data) => {
        let catImageUrl = data[0].url

        let catElement = document.createElement("img")
        catElement.setAttribute('src',`${catImageUrl}`)
        let catGenerate = document.querySelector(".catGenerate")
        catGenerate.appendChild(catElement)
    });
}