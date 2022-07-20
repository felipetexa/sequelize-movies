module.exports = (sequelize, DataType) => {
  const Actor = sequelize.define(
    'Actor',
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      created_at: DataType.DATE,
      updated_at: DataType.DATE,
      first_name: DataType.STRING,
      last_name: DataType.STRING,
      rating: DataType.FLOAT,
      favorite_movie_id: {
        type: DataType.INTEGER,
        foreignKey: true,
        allowNull: true
      }
    },
    {
      tableName: 'actors',
      timeStamps: true,
      underscored: true // Aceitar snake_case
    }
  );

  Actor.associate = (Models) => {
    Actor.hasOne(Models.Movie, {
      as: 'favoriteMovie',
      foreignKey: 'id',
      sourceKey: 'favorite_movie_id'
    })

    Actor.belongsToMany(Models.Movie, {
      as: 'movies',
      through: 'actor_movie',
      foreignKey: 'actor_id',
      otherKey: 'movie_id'
    })
  }

  

  return Actor
}
