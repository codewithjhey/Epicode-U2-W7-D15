let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVlMGQ0YmUzZDAwMTU4NDYwMGEiLCJpYXQiOjE2NjgwODUyMTYsImV4cCI6MTY2OTI5NDgxNn0.wl5hBkD9sae_lwtheSJ5I9P5auDNRVFkknd2dmDiMsI"

const params = new URLSearchParams(window.location.search)
const movieId = params.get("movieId")

const options = {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` }
}

// async function getMovies() {
//   const response = await fetch(
//     "https://striveschool-api.herokuapp.com/api/movies",
//     options
//   )
//   const dataCategories = await response.json()
//   for (let dataCategory of dataCategories) {
//     const response = await fetch(
//       "https://striveschool-api.herokuapp.com/api/movies/" + dataCategory,
//       options
//     )
//     const data = await response.json()
//     return data
//   }
// }

async function getCrime() {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/crime",
      options
    )

    const crimeMovies = await response.json()
    return crimeMovies
  } catch (error) {
    console.error(error)
  }
}

function renderCrimeMovie(crimeMovies) {
  crimeMovies.forEach((crime) => {
    document.querySelector("#movie-details").innerHTML = `
    <img src="${crime.imageUrl}" alt="Image of the product" style="width: 100%; object-fit:cover"/>
    <h1 class="display-4">${crime.name}</h1>
  <p class="mt-0">${crime.description}</p>
  <h6 class="pl-2 py-3 bg-dark text-white">Server Details</h6>
  <ul class="list-group list-group-flush mb-4">
    <li class="list-group-item pl-2"><b>id: </b>${crime._id}</li>
    <li class="list-group-item pl-2"><b>createdAt: </b>${crime.createdAt}</li>
    <li class="list-group-item pl-2"><b>updatedAt: </b>${crime.updatedAt}</li>
  </ul>`
  })
}

window.onload = async () => {
  if (movieId !== null) {
    await getCrime()
  }
}
