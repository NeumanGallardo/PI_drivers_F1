import { GET_DRIVERS, GET_BY_NAME, GET_BY_ID} from "./actions"; 
const initialState={allDrivers:[], copyDrivers:[]}
const rootReducer=(state=initialState,action)=>{
const {type,payload}=action;
switch (type) {
    case GET_DRIVERS:
      return { ...state, allDrivers: payload, copyDrivers:payload};
    case GET_BY_NAME:
      return { ...state, allDrivers: payload};
    case GET_BY_ID:
      return { ...state, allDrivers: payload};
    default: return {...state};
}
}
export default rootReducer;