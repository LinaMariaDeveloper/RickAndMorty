import { ADD_FAVORITE, REMOVE_FAVORITE, FIlTER_FAVORITE, ORDER_CARDS} from './actions-type'
import axios from "axios";

// FORMA ANTES DE EXPRESS
// const addFavorite = (payload) => ({ type: ADD_FAVORITE, payload})

const addFavorite = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAVORITE,
           payload: data,
        });
     });
  };
};

// FORMA ANTES DE EXPRESS
// const removeFavorite = (payload) => ({ type: REMOVE_FAVORITE, payload})

const removeFavorite = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: REMOVE_FAVORITE,
           payload: data,
     });
     });
  };
};

const filterFavorite = (gender) => ({ type: FIlTER_FAVORITE, payload: gender})

const orderCards = (order) => ({ type: ORDER_CARDS, payload: order})

export {addFavorite, removeFavorite, filterFavorite, orderCards}

