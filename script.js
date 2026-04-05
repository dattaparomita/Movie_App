let input = document.getElementById("search");
let button = document.getElementById("btn");
let container = document.getElementById("movie");

const api = "7b3242cf";

async function getData(movieName){
    const url = `https://www.omdbapi.com/?apikey=${api}&s=${movieName}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if(data.Response === "False"){
        container.innerHTML="<h2>no movies found</h2>";
        return;
    }
    else{
        container.innerHTML="";
    }
    

    data.Search.forEach(movie => {
        let div = document.createElement("div");
        div.classList.add("movie");

        div.innerHTML = `
            <img src="${movie.Poster}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;

        container.appendChild(div);
    });

    window.addEventListener("load", () => {
    getData("avengers");
});

}



button.addEventListener("click", () => {
    let movie = input.value;

    if(movie === "") {
        alert("Enter a movie name");
        return;
    }

    getData(movie);
});

