window.onload = async () => {
  getCrime()
  getHorror()
  getAction()
}

async function getCrime() {
  try {
    const options = {
      method: "Get",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVlMGQ0YmUzZDAwMTU4NDYwMGEiLCJpYXQiOjE2NjgwODUyMTYsImV4cCI6MTY2OTI5NDgxNn0.wl5hBkD9sae_lwtheSJ5I9P5auDNRVFkknd2dmDiMsI"
      }
    }
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/crime",
      options
    )

    const crime = await response.json()
    console.log(crime)
    renderCrimeMovies(crime)
  } catch (error) {
    console.error(error)
  }
}

function renderCrimeMovies(crimeMovies) {
  crimeMovies.forEach((crime) => {
    console.log(crime)
    const movieCard = document.querySelector("#crimeMovies")
    movieCard.innerHTML += `<div class="col-sm-6 col-md-6 col-xl-3 mt-2">
    <div class="card bg-dark text-white">
    <a href="details.html?movieId=${crime._id}"><img src=${crime.imageUrl} class="card-img" alt="..."></a>
  </div>
</div>`
  })
}

async function getHorror() {
  try {
    const options = {
      method: "Get",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVlMGQ0YmUzZDAwMTU4NDYwMGEiLCJpYXQiOjE2NjgwODUyMTYsImV4cCI6MTY2OTI5NDgxNn0.wl5hBkD9sae_lwtheSJ5I9P5auDNRVFkknd2dmDiMsI"
      }
    }
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/horror",
      options
    )

    const horror = await response.json()
    console.log(horror)
    renderHorrorMovies(horror)
  } catch (error) {
    console.error(error)
  }
}

function renderHorrorMovies(horrorMovies) {
  horrorMovies.forEach((horror) => {
    console.log(horror)
    const movieCard = document.querySelector("#horrorMovies")
    movieCard.innerHTML += ` <div class="col-sm-6 col-md-6 col-xl-3 mt-2">
    <div class="card bg-dark text-white">
    <a href="details.html?movieId=${horror._id}"><img src=${horror.imageUrl} class="card-img" alt="..."></a>
  </div>
</div>`
  })
}

async function getAction() {
  try {
    const options = {
      method: "Get",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVlMGQ0YmUzZDAwMTU4NDYwMGEiLCJpYXQiOjE2NjgwODUyMTYsImV4cCI6MTY2OTI5NDgxNn0.wl5hBkD9sae_lwtheSJ5I9P5auDNRVFkknd2dmDiMsI"
      }
    }

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/action",
      options
    )

    const action = await response.json()
    console.log(action)
    renderActionMovie(action)
  } catch (error) {
    console.error(error)
  }
}
function renderActionMovie(actionMovies) {
  actionMovies.forEach((action) => {
    console.log(action)
    const movieCard = document.querySelector("#actionMovies")
    movieCard.innerHTML += ` <div class="col-sm-6 col-md-6 col-xl-3 mt-2">
    <div class="card bg-dark text-white">
    <img src=${action.imageUrl} class="card-img" alt="..." />
    <a href="details.html?movieId=${action._id}"></a>
  </div>
</div>`
  })
}
