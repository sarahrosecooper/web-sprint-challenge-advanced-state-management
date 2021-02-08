
import * as actions from "../actions"

export const initialState = {
    smurfs: [],
    isLoading: true,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_API:
            return {
                isLoading: true
            };
        case FETCH_API_SUCCESS:
            return {
                ...state,
            };
        case ADD_SMURF:
            return {
                ...state,
            }
        case SET_ERROR: 
            return {
                ...state
            };
        default:
            return state;
        }

    }


export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as parameters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary