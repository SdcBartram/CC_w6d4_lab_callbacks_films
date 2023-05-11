const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfFilms = function (films) {
  const listOfFilms = this.films.map((film) => {
    return film.title
  })
  return listOfFilms
}

Cinema.prototype.add = function (film) {
  this.films.push(film)
}

Cinema.prototype.findFilmByTitle = function (title) {
  const chosenFilm = this.films.filter((film) => {
    return film.title === title
  })
  return chosenFilm
}


module.exports = Cinema;
