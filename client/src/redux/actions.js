import axios from 'axios';
export const GET_DRIVERS='GET_DRIVERS';
export const getDrivers = (character) => {
    const endpoint = 'http://localhost:3001/drivers_F1';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: GET_DRIVERS,
             payload: data,
          });
       });
    };
 };