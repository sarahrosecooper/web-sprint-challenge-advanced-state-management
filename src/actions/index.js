import axios from 'axios';
export const FETCH_API = "FETCH_API";
export const SMURFS_CAUGHT = "SMURFS_CAUGHT";
export const ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const data = "http://localhost:3333/smurfs";

export const fetchSmurfs = () => (dispatch) => {
    dispatch({
        type: FETCH_API
    });
    axios
    .get(data)
    .then((response) => {
        console.log("actions response data", response);
        dispatch({
            type: SMURFS_CAUGHT,
            payload: response.data,
        });
    })
    .catch((error) => {
        console.log("actions data error", error);
        dispatch({
            type: ERROR,
            payload: error.message,
        })
    })
}

export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch({
        type: FETCH_API
    });
    axios
    .post(data, newSmurf)
    .then((response) => {
        console.log(response, "addSmurf response actions");
        dispatch({
            type: ADD_SMURF,
            payload: response.data,
        });
    })
    .catch((error) => {
        console.log("error addSmurf actions", error);
        dispatch({
            type: ERROR,
            payload: error.message,
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