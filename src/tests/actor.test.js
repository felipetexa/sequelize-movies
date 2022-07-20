const { Actor } = require('../database/models');

async function getActor(id) {
  const actor = await Actor.findByPk(id, {
    include: ['favoriteMovie', 'movies']
  });
  console.log(`
  ID: ${actor.id}
  Nome: ${actor.first_name} ${actor.last_name}
  FavoriteMovieId: ${actor.favorite_movie_id}
  MovieTitle: ${actor.favoriteMovie ? actor.favoriteMovie.title : 'Filme não encontrado'}
`)

if(actor.movies.length == 0) {
  console.log('No movies found')}
  else {
    actor.movies.forEach(movie => console.log(movie.title))
  };

};

getActor(5);