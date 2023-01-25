'use strict'
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

//getAllDirectors(movies);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter(movie => movie.director === director);
 console.log("EXERCICE 2 ->", result);
 return result;
}
//getMoviesFromDirector(movies, 'Quentin Tarantino');

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const arrayMoviesDirector = getMoviesFromDirector(array, director);
  console.log('arrayMoviesDirector.length', arrayMoviesDirector.length);
  let scoresSumDirector = arrayMoviesDirector.reduce((accumulator, current) => accumulator + current.score , 0);
  let result = parseFloat((scoresSumDirector / arrayMoviesDirector.length).toFixed(2));
  console.log("EXERCICE 3 ->", result);
  return result;
}
//moviesAverageOfDirector(movies, 'Quentin Tarantino');

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
