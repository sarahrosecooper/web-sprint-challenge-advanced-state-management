import React, { useState } from 'react';
import { connect } from "react-redux";
import { addSmurf } from '../actions/';

const AddForm = (props) => {
    console.log("Addform props", props)
    const [newSmurf, setNewSmurf] = useState([{
        name: "",
        position: "",
        nickname: "",
        description: ""
    }])

    const handleChange = (e) => {
        setNewSmurf({
            ...newSmurf, [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({
            name: "",
            position: "",
            nickname: "",
            description: ""
        })
    }
    
        return (
        
        <section>
            <h2>Add Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input 
                    onChange={handleChange} 
                    name="name" 
                    id="name" 
                    placeholder="Name here"
                    value={newSmurf.name}/>

<label htmlFor="position">position:</label><br/>
                    <input 
                    onChange={handleChange} 
                    name="position" 
                    id="position" 
                    placeholder="position here"
                    value={newSmurf.position}/>

<label htmlFor="name">nickname:</label><br/>
                    <input 
                    onChange={handleChange} 
                    name="nickname" 
                    id="nickname" 
                    placeholder="nickname here"
                    value={newSmurf.nickname}/>

<label htmlFor="name">description:</label><br/>
                    <input 
                    onChange={handleChange} 
                    name="description" 
                    id="description" 
                    placeholder="description here"
                    value={newSmurf.description}/>
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.error}</div>
                <button>Submit Smurf</button>
            </form>
        </section>
        );
    }


const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {addSmurf})(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.