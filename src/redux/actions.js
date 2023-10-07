import { ADD_FAVORITE, REMOVE_FAVORITE, FIlTER_FAVORITE, ORDER_CARDS} from './actions-type'

const addFavorite = (payload) => ({ type: ADD_FAVORITE, payload})

const removeFavorite = (payload) => ({ type: REMOVE_FAVORITE, payload})

const filterFavorite = (gender) => ({ type: FIlTER_FAVORITE, payload: gender})

const orderCards = (order) => ({ type: ORDER_CARDS, payload: order})

export {addFavorite, removeFavorite, filterFavorite, orderCards}

