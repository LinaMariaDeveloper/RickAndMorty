import { ADD_FAVORITE, REMOVE_FAVORITE} from './actions-type'

const addFavorite = (payload) => ({ type: ADD_FAVORITE, payload})

const removeFavorite = (payload) => ({ type: REMOVE_FAVORITE, payload})

export {addFavorite, removeFavorite}

