import React, { useState, useReducer } from 'react';
import { initialState, Reducer } from '../reducers/Reducer';

const Todo = () => {
    const [state, dispatch] = useReducer(Reducer, initialState) //reducer hook


  return (
    <div>
      <h2>Inside The Todo Component</h2>
      {/* {dispatch({type:})} */}
    </div>
  );
};

export default Todo;
