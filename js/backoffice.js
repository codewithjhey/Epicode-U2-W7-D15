window.onload = () => {
  fetchMovies()
}

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVlMGQ0YmUzZDAwMTU4NDYwMGEiLCJpYXQiOjE2NjgwODUyMTYsImV4cCI6MTY2OTI5NDgxNn0.wl5hBkD9sae_lwtheSJ5I9P5auDNRVFkknd2dmDiMsI"
  }
}

const dataArray = []

const fetchMovies = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies",
    options
  )
  const dataCategories = await response.json()
  for (let dataCategory of dataCategories) {
    const container = document.querySelector(".movies-container")
    const newRow = document.createElement("div")
    newRow.classList.add("row")
    newRow.classList.add("m-2")
    newRow.innerHTML += `
        <h5 class="text-light mt-2 mb-2">${dataCategory}</h5>
    
        `
    container.appendChild(newRow)
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/" + dataCategory,
      options
    )
    const data = await response.json()
    data.forEach((movie, index) => {
      createMoviesList(movie, newRow, index)
    })
  }
}

let method = "POST"
let endpoint = "https://striveschool-api.herokuapp.com/api/movies"

const createMoviesList = (movie, newRow, index) => {
  newRow.innerHTML += `
  <ul>
  <li class="movies-li">${index + 1}. ${movie.name}
  <div>
  <a href=#top><button class="btn btn-secondary edit-button" onclick=handleEdit('${String(
    movie._id
  )}')>Edit</button></a>
  <button class="btn btn-danger delete-button" onclick="handleDelete('${String(
    movie._id
  )}')">Delete</button>
  </div>
  </li>
  </ul>
  `
}
