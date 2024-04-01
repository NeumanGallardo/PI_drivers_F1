import { GET_DRIVERS} from "./actions"; 
const initialState={myFavorites:[]}
const rootReducer=(state=initialState,action)=>{
const {type,payload}=action;
switch (type) {
    case GET_DRIVERS:
      return { ...state, drivers: payload, allCharacters: payload };
    default: return {...state};
}
}
export default rootReducer;