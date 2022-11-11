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
    renderCrimeMovie(crime)
  } catch (error) {
    console.error(error)
  }
}
function renderCrimeMovies(crimeMovies) {
  crimeMovies.forEach((crime) => {
    console.log(crime)
    const movieCover = document.querySelector("#crimeMovies")
    movieCover.innerHTML += ` <div class="col-md-2">
    <img class="movie-cover" src="${crime.imageUrl}">
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
    const movieCover = document.querySelector("#horrorMovies")
    movieCover.innerHTML += ` <div class="col-md-2">
    <img class="movie-cover" src="${horror.imageUrl}">
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
    const movieCover = document.querySelector("#actionMovies")
    movieCover.innerHTML += ` <div class="col-md-2">
    <img class="movie-cover" src="${action.imageUrl}">
</div>
</div>`
  })
}

window.onload = async () => {
  getCrime()
  getHorror()
  getAction()
}

// const getAllGenres = async () => {
//   try {
//     const response = await fetch(
//       "https://striveschool-api.herokuapp.com/api/movies",
//       {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVlMGQ0YmUzZDAwMTU4NDYwMGEiLCJpYXQiOjE2NjgwODUyMTYsImV4cCI6MTY2OTI5NDgxNn0.wl5hBkD9sae_lwtheSJ5I9P5auDNRVFkknd2dmDiMsI"
//         }
//       }
//     )
//     let genres = await response.json()
//     console.log(genres)
//   } catch (error) {}
// }
// getAllGenres()
// const getCrime = async () => {
//   try {
//     let response = await fetch(
//       "https://striveschool-api.herokuapp.com/api/movies/crime",
//       {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVlMGQ0YmUzZDAwMTU4NDYwMGEiLCJpYXQiOjE2NjgwODUyMTYsImV4cCI6MTY2OTI5NDgxNn0.wl5hBkD9sae_lwtheSJ5I9P5auDNRVFkknd2dmDiMsI"
//         }
//       }
//     )
//     const crimes = await response.json()
//     console.log(crimes)
//     return crimes
//   } catch (error) {
//     console.error(error)
//   }

//   function renderCrimeMovies(crimeMovies) {
//     const carousel = document.getElementById("crime")

//     crimeMovies.forEach((crime) => {
//       const crimeSlide = document.createElement("div")
//       crimeSlide.classList.add("col-md-2", "m-0")
//       crimeSlide.innerHTML = `<img class="movie-cover img-fluid m-0" style="width:100%; height:100px; object-fit:cover;" src="${crime.imageUrl}" />`
//       carousel.appendChild(crimeSlide)
//       console.log(crime.imageUrl)
//     })
//   }
// }

// const getHorror = async () => {
//   try {
//     let response = await fetch(
//       "https://striveschool-api.herokuapp.com/api/movies/horror",
//       {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVlMGQ0YmUzZDAwMTU4NDYwMGEiLCJpYXQiOjE2NjgwODUyMTYsImV4cCI6MTY2OTI5NDgxNn0.wl5hBkD9sae_lwtheSJ5I9P5auDNRVFkknd2dmDiMsI"
//         }
//       }
//     )
//     let horrorMovies = await response.json()
//     console.log(horrorMovies)
//     renderHorrorMovies(horrorMovies)
//   } catch (error) {}
// }

// const getAction = async () => {
//   try {
//     let response = await fetch(
//       "https://striveschool-api.herokuapp.com/api/movies/action",
//       {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjVlMGQ0YmUzZDAwMTU4NDYwMGEiLCJpYXQiOjE2NjgwODUyMTYsImV4cCI6MTY2OTI5NDgxNn0.wl5hBkD9sae_lwtheSJ5I9P5auDNRVFkknd2dmDiMsI"
//         }
//       }
//     )
//     let actionMovies = await response.json()
//     console.log(actionMovies)
//     renderActionMovies(actionMovies)
//   } catch (error) {}
// }

// function renderCrimeMovies(crimeMovies) {
//   let container = document.querySelector(".crimeRow")

//   const div = document.createElement("div")
//   div.className = "row"
//   crimeMovies.forEach((crime) => {
//     container.innerHTML += `<div class="movie-row">
//     <div class="col-md-2"><img class="movie-cover" src=${crime.imageUrl} alt="..."/></div>
//         </div>
//       </div>`
//   })
//   container.appendChild(div)
// }
