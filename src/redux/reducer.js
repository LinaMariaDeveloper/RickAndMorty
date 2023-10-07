import { ADD_FAVORITE, FIlTER_FAVORITE, ORDER_CARDS, REMOVE_FAVORITE} from "./actions-type";

let initialState = { myFavorites: [], allCharacter: []};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacter: [...state.allCharacter, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((item) => item.id !== action.payload)
      };
    case FIlTER_FAVORITE:
      return {
        ...state,
        myFavorites: state.allCharacter.filter(
          (element) => element.gender === action.payload || action.payload === 'All'
        ),
      };
    case ORDER_CARDS:
      let favoritesOrd = [...state.allCharacter]
      return {
        ...state,
        myFavorites:
        action.payload === "A"
        ? favoritesOrd.sort((a, b)=> a.id - b.id)
        : favoritesOrd.sort((a, b)=> b.id - a.id)
    }
    default:
      return state
  }
}