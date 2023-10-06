import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../redux/actions";


const Favorites = () => {

  const favorites = useSelector(state => state.myFavorites)
  const dispatch = useDispatch()

  const favs = favorites.map((character) => <Card
    key={character.id}
    id={character.id}
    name={character.name}
    status={character.status}
    species={character.species}
    origin={character.origin}
    gender={character.gender}
    image={character.image}
    onClose={() => dispatch(removeFavorite(character.id))}
  />)

  return (
    <div>{favs}</div>
  );
}

export default Favorites;
