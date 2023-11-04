let myFavorites = []

const postFav = (req, res) => {
  const character = req.body;
  myFavorites = [...myFavorites, character];
  return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
  const { id } = req.params

  myFavorites = myFavorites.filter((char) => char.id !== Number(id))
  
  res.status(200).json(myFavorites)
}

module.exports = { postFav, deleteFav }