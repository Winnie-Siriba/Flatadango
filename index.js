const movies = document.getElementById("movie-list")

async function getData(){
    try {
        const response = await fetch('http://localhost:3000/films')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error: ', error)
    }
}

async function displayMovies() {
    const data = await getData()
    console.log(data)

    data.forEach(film => {
        const li = document.createElement("li")
        li.textContent = film.title
        movies.appendChild(li)
    });    
}

displayMovies()
