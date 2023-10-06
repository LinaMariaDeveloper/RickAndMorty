import { ADD_FAVORITE, REMOVE_FAVORITE} from "./actions-type";

let initialState = { myFavorites: []};

export default function rootReducer(state = initialState, action) {
  console.log(state.myFavorites, action)
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((item) => item.id !== action.payload)
      };
    default:
      return state
  }
}