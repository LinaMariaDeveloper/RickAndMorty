const { Favorite } = require('../DB_connection')

const postFav = async(request, response) => {
  try {
    const { id, name, image, species, gender} = request.body

    if(!id || !name || !image || !species || !gender) return response.status(401).send('Faltan datos')

    await Favorite.findOrCreate({
      where: {
        id
      },
      defaults: {
        name,
        image, 
        species, 
        gender

      }
    })

    const allFavorite = await Favorite.findAll()
    return response.status(200).json(allFavorite)
  } 
  catch (error) {
    return response.status(500).json({ error: error.message})
  }
}

module.exports = postFav