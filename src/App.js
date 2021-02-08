import React from "react";

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import axios from 'axios';
import { connect } from "react-redux";
import { fetchApi } from './actions'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props) => {
  console.log("app props", props)

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm/>
          <SmurfDisplay smurfs={props.smurfs}/>
        </main>
      </div>
    );
  }

const mapStateToProps = (state) => {
  console.log("app state", state)
  
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
    
  }

}

export default connect(mapStateToProps, { fetchApi })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.