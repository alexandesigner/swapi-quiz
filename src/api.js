import axios from 'axios'

/*
* Get Planets
*/
export const getPlanets = (url, planets, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedPlanets = planets.concat(response.data.results)
      if (response.data.next !== null) {
        getPlanets(response.data.next, retrivedPlanets, resolve, reject)
      } else {
        resolve(retrivedPlanets)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })
}

/*
* Get People
*/
export const getPeoples = (url, people, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedPeople = people.concat(response.data.results)
      if (response.data.next !== null) {
        getPeoples(response.data.next, retrivedPeople, resolve, reject)
      } else {
        resolve(retrivedPeople)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })
}

/*
* Get Species
*/
export const getSpecies = (url, species, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedSpecies = species.concat(response.data.results)
      if (response.data.next !== null) {
        getSpecies(response.data.next, retrivedSpecies, resolve, reject)
      } else {
        resolve(retrivedSpecies)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })
}

/*
* Get Films
*/
export const getFilms = (url, films, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedFilms = films.concat(response.data.results)
      if (response.data.next !== null) {
        getFilms(response.data.next, retrivedFilms, resolve, reject)
      } else {
        resolve(retrivedFilms)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })
}

/*
* Get Vehicles
*/
export const getVehicles = (url, vehicles, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedVehicles = vehicles.concat(response.data.results)
      if (response.data.next !== null) {
        getVehicles(response.data.next, retrivedVehicles, resolve, reject)
      } else {
        resolve(retrivedVehicles)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })
}