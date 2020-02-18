
//reducers are functions that take in 2 objects :
                //-current state
                //action-objecs
  
                //reduces the down to a single object, which is the new state and return that new object.

    //action objects are pieces of data that describe an event that just occured in the UI.

    // EVENT: click on edit icon to toggle editing state
    //{type: 'banana string'-> 'TOGGLE_EDITING'}

    //**example STATE: {editing: false} ~~~>   newState: {editing: true}

    //EXPECTED RESULT: {editing: true}

     const taskItem = [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ];

export const initialState ={
    todoItemList: taskItem
}

export const todoReducer = (state, action) =>{

    
    let newState;
    if (action.type === 'ADD_ITEM'){
        newState = {...state, todoItemList: !state.todoItemList};
    }

    return newState;
}

console.log(todoReducer({todoItemList: false}, {type: 'ADD_ITEM'}))