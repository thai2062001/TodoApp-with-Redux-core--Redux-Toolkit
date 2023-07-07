// REDUX CORE

// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import {composeWithDevTools} from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools();

// const stote = createStore(rootReducer,composedEnhancers);

// export default stote;

//REDUX TOOLKIT

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoSlice from "../components/Todo/todoSlice";
const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoSlice.reducer,
  },
});

export default store;
