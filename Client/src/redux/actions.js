import { ADD_FAVORITE, REMOVE_FAVORITE, FIlTER_FAVORITE, ORDER_CARDS } from './actions-type'
import axios from "axios";

// FORMA DE ASYNC - AWAIT
// const addFavorite = (character) => {
//    const endpoint = 'http://localhost:3001/rickandmorty/fav';
//    try {
//       return async (dispatch) => {
//          const { data } = await axios.post(endpoint, character)
//          return dispatch({
//             type: ADD_FAVORITE,
//             payload: data
//          })
//       }
//    }
//    catch (error) {
//       console.log(error)
//    }
// }

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

// FORMA ASYNC - AWAIT
// const removeFavorite = (id) => {
//    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//    try{
//       return async (dispatch) => {
//          const { data } = await axios.delete(endpoint)

//          return dispatch({
//             type: REMOVE_FAVORITE,
//             payload: data
//          })
//       }
//    }
//    catch(error){
//       console.log(error)
//    }
// }

const filterFavorite = (gender) => ({ type: FIlTER_FAVORITE, payload: gender })

const orderCards = (order) => ({ type: ORDER_CARDS, payload: order })

export { addFavorite, removeFavorite, filterFavorite, orderCards }

