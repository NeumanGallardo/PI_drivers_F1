import axios from 'axios';
export const GET_DRIVERS='GET_DRIVERS';
export const GET_BY_NAME='GET_BY_NAME';
export const getDrivers = () => {
    const endpoint = 'http://localhost:3001/drivers_F1';
    return async function (dispatch) {
      const response =await axios(endpoint);
          return dispatch({
             type: GET_DRIVERS,
             payload: response.data,
          });
    };
 };

 export const getByName = (name) => {
   return async function (dispatch) {
     const response =await axios(`http://localhost:3001/drivers_F1_name?name=${name}`);
         return dispatch({
            type: GET_BY_NAME,
            payload: response.data,
         });
   };
};