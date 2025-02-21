import axios from 'axios';
import Swal from 'sweetalert2';
export const GET_DRIVERS='GET_DRIVERS';
export const GET_BY_NAME='GET_BY_NAME';
export const GET_BY_ID='GET_BY_ID';
export const GET_TEAMS='GET_TEAMS';
export const POST_DRIVER='POST_DRIVER';

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

//post del nuevo driver

export const postNewDriver = async (newDriver, opSelecTeams) => {
   const URL = 'http://localhost:3001/drivers_F1/'
    try {
      const datos = {
        newDriver: newDriver,
        opSelecTeams: opSelecTeams
      };
  
      const response = await axios.post(URL, datos);
  console.log('Respuesta del servidor:', response.data);
  Swal.fire({
    icon: "success",
    title: response.data,
    text: "",
    timer: 5000,
  });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.message,
        text: "",
        timer: 5000,
      });
    }
  };