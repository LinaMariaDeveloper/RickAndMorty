import React from "react";
import Card from "./Card";
import { useDispatch, useSelector} from "react-redux";
import { removeFavorite } from "../redux/actions";
import { filterFavorite, orderCards } from "../redux/actions";
import { useState } from "react";
import style from '../style.module.css'

const Favorites = () => {

  const filtered = useSelector((state) => state.filtered)
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false);
  const [auxFiltros, setAuxFiltros] = useState(false);

  
  function handleOrder(event) {
    setAux(!aux);
    dispatch(orderCards(event.target.value));
  }

  function handleFilter(event) {
    if (event.target.value !== "AllGender") {
      setAuxFiltros(true);
    } else {
      setAuxFiltros(false);
    }
    dispatch(filterFavorite(event.target.value));
  }

  const favs = filtered.map((character) => <Card
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
    <div>
      <select className={style['filtro']} onChange={handleOrder}>
        <option value="A">Ascendant</option>
        <option value="D">Descendent</option>
      </select>
      <select className={style['filtro']} onChange={handleFilter}>
        <option value="All">All genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <div>{favs}</div>
    </div>
  );
}

export default Favorites;
