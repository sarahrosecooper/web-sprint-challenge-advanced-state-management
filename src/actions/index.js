import axios from 'axios';

export const FETCH_API = "FETCH_API";
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";
export const SMURF_ERROR = "SMURF_ERROR"

const data = "http://localhost:3333/smurfs"

export const fetchApi = () => (dispatch) => {
    dispatch({
        type: FETCH_API 
    });
    axios.get(data)
    .then((response) => {
        dispatch({
            type: FETCH_API_SUCCESS,
            payload: response.data
        })
        .catch((error) => {
            dispatch({
                type: SET_ERROR,
                payload: `There has been an error: ${error.message}`
            });
        });
    });
}

export const addSmurf = (newSmurf) => (dispatch) => {
    axios
    .post(data, newSmurf)
    .then((response) => {
        dispatch({
            type: ADD_SMURF,
            payload: response.data
        });
    })
        .catch((error) => {
            dispatch({
                type: SMURF_ERROR,
                payload: `There has been an error: ${error.message}`
            });
        });
    };


//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.