const { Genre } = require('../database/models');

async function getGenre(id) {
  const genre = await Genre.findByPk(id, {
    include: ['movies']
  });
  console.log(genre.name);
  console.log('-----------------------------')
  if(genre.movies.length > 0) {
  genre.movies.forEach(movie => console.log(movie.title))}
  else {
    console.log('No movies found')
  };
  
}

getGenre(2)