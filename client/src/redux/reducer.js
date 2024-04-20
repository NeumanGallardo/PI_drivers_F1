import { GET_DRIVERS, GET_BY_NAME, GET_BY_ID, GET_TEAMS} from "./actions"; 
const initialState={allDrivers:[], copyDrivers:[], teams:[]}
const rootReducer=(state=initialState,action)=>{
const {type,payload}=action;
switch (type) {
    case GET_DRIVERS:
      return { ...state, allDrivers: payload, copyDrivers:payload};
    case GET_BY_NAME:
      return { ...state, allDrivers: payload};
    case GET_BY_ID:
      return { ...state, allDrivers: payload};
    case GET_TEAMS:
      return {...state, teams:payload};
    default: return {...state};
}
}
export default rootReducer;