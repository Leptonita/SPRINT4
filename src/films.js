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

const moviesAverage = (array) => {
  let scoresSum = array.reduce((accumulator, current) => accumulator + current.score , 0);
  let averageScoreMovies = parseFloat((scoresSum / array.length).toFixed(2));
  return averageScoreMovies;
}


function moviesAverageOfDirector(array, director) {
  const arrayMoviesDirector = getMoviesFromDirector(array, director);
  let averageScoreMoviesDirector = moviesAverage(arrayMoviesDirector);
  console.log("EXERCICE 3 ->", averageScoreMoviesDirector);
  return averageScoreMoviesDirector;
}
//moviesAverageOfDirector(movies, 'Quentin Tarantino');


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const titlesArray = array.map(movie => movie["title"].toString()); 

  const titlesOrdered = titlesArray.sort();
  const twentyTitlesOrdered = titlesOrdered.splice(0,20);
  let result = twentyTitlesOrdered;
  console.log("EXERCICE 4 ->", result);
  return result;  
}
//ex4 - array of only titles ordered alphabetically
//orderAlphabetically(movies);

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const copyArr = [...array];
  const orderedByYear = (copyArr.sort((a, b) => {
    if ((a.year - b.year === 0) && (a.title !== b.title)) {
      if (a.title < b.title) {
         return -1;
      } else if (a.title > b.title) {
        return 1;
     }
    }
    return a.year - b.year;
  }
  ));
  let result = orderedByYear;
  console.log('original', array);
  console.log("EXERCICE 5 ->", result);
  return result;  
}
//orderByYear(movies)

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const arrayCategoryMoviesWithScore = array.filter(movie => (movie.genre.includes(category)) && (movie.score !== ""));
  console.log(arrayCategoryMoviesWithScore);
  console.log("EXERCICE 6 ->", moviesAverage(arrayCategoryMoviesWithScore));
  return moviesAverage(arrayCategoryMoviesWithScore);
}

//moviesAverageByCategory(movies, 'Film-Noir');

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  //a new array as a deep copy of the original array so we will not modify the original one.
  const copyArray = JSON.parse(JSON.stringify(array));

  copyArray.forEach(movie => {
    const durationSplit = movie.duration.split('h');
    let hoursInMinPart = Number(durationSplit[0]) * 60;
    let minutesPart = Number(durationSplit[1].replace('min',''));
    movie['duration'] = hoursInMinPart + minutesPart
    //console.log("movie duration", movie.duration);  
  });
    console.log('original', array)
    console.log("EXERCICE 7 ->", copyArray);
    return copyArray;
}
//ex7
//hoursToMinutes(movies);

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, yearPick) {
  
  const moviesOfYearArr = array.filter(movie => movie.year === yearPick);
  console.log("moviesOfYearArr ->", moviesOfYearArr);
  //const bestMovieOfYear = moviesOfYearArr.sort((a, b) => b.score - a.score)[0];
  const maxScoreOfYear = moviesOfYearArr.reduce((maxScore, movie) => {    
    if (movie.score > maxScore){ 
      maxScore = movie.score;
    }
    return maxScore;
  }, 0);
  const bestMovieOfYear = moviesOfYearArr.filter(movie => movie.score === maxScoreOfYear)
  console.log("EXERCICE 8 ->", bestMovieOfYear);
  return bestMovieOfYear;
  
}
//bestFilmOfYear(movies, 1994);


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
