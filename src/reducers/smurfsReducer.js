import * as actions from "../actions";

 const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",

};

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_API:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case actions.SMURFS_CAUGHT:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: "",
            };
        case actions.ADD_SMURF:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
            };
        case actions.ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
            default: 
            return state;
    }


};
