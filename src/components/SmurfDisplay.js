import React from 'react';
import { connect } from "react-redux";
import { fetchApi } from '../actions'
import Smurf from "./Smurf";

export const SmurfDisplay = (props) => {
    console.log("Smurfs display props", props)

    const handleClick = (e) => {
        e.preventDefault();
        props.fetchApi();
    }
    return(<div>
        <button onClick={handleClick}>
            loading smurfs
        </button>
        
           {props.smurfs.map((smurf) => (
               <Smurf key={smurf.id} smurf={smurf} />
           ))} 
        </div>)
    }


const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}
export default connect(mapStateToProps, { fetchApi })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.