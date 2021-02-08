import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers"
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.css";
import App from "./App";

const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    rootElement
);
//Task List:
//1. Add in all necessary components and library methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.

// READ ME QUESTIONS:

// What problem does the context API help solve?
// Context API helps to make prop drilling less necessary by helping the state to be more globally accesible. 
// In your own words, describe actions, reducers and the store and their role in Redux.
// Actions are the ACTION that is dispatched after an event and are stored in a reducer. They allow predictability for state.
// What does each piece do? Why is the store known as a 'single source of truth' in a redux application? A store is known as a single source of truth because it holds all of the state and it is ummuttable, only changed by actions.
// What is the difference between Application state and Component state? When would be a good time to use one over the other?
//Application state is available to the entire application, for instance the need for Login and Password or UI would be a good use case, whereas component is only available to a specific component.
// Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
// Redux thunk allows us to run our code asychronously in Redux, whereas usually you cannot. It is like a the middleman talking to the actions through thunk.
// What is your favorite state management system you've learned and this sprint? Please explain why!
// I like being able to hold all of the state in a reducer and using actions with redux.