import axios from 'axios';
export const GET_DRIVERS='GET_DRIVERS';
export const GET_BY_NAME='GET_BY_NAME';
export const GET_BY_ID='GET_BY_ID';
export const GET_TEAMS='GET_TEAMS';

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
   const endpoint = 'http://localhost:3001/drivers_F1_name';
   return async function (dispatch) {
     const response =await axios(endpoint + `?name=${name}`);
         return dispatch({
            type: GET_BY_NAME,
            payload: response.data,
         });
   };
};


export const getById = (id) => {
   const endpoint = 'http://localhost:3001/drivers_F1/';
   return async function (dispatch) {
     const response =await axios(endpoint + `${id}`);
         return dispatch({
            type: GET_BY_ID,
            payload: response.data,
         });
   };
};

export const getTeams = () => {
   const endpoint = 'http://localhost:3001/drivers_F1_teams';
   return async function (dispatch) {
     const response =await axios(endpoint);
         return dispatch({
            type: GET_TEAMS,
            payload: response.data,
         });
   };
};