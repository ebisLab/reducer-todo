import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import {todoReducer, initialState} from './reducers/todoReducer'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

export const taskItem = [
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
//dispatch takes in an action object, and calls the reducer function with state and that action.

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // console.log('console state dispatch', state, dispatch)
  //determine what our state looks like 

  const [todoItemList, setTodoItemList] =useState(taskItem);
  const [dataText, setDataText] = useState('')

 console.log(todoItemList, 'todo item list')
  const toggleItem = clickedId =>{
    console.log('clicked the outside map')
    const newTaskList = todoItemList.map(item => { 
      console.log('clicked this inside map', item)

    if (item.id === clickedId){
console.log(clickedId ? `yes clicked ${item.task}`: 'not clicked')
      return {...item, completed: !item.completed}

    }
     else{
      console.log('item is untouched')
      return item;
    }
  
  })
  setTodoItemList(newTaskList)

  }
 

  const addNewItem = itemText =>{
    console.log('adding new item', itemText)
    const newTaskItem ={
      task: itemText,
      id: Date.now(),
      completed: false
    }
    setTodoItemList([...todoItemList, newTaskItem])
  }

  const removeList = itemTask =>{
    console.log('it should be removed now')
    setTodoItemList(todoItemList.filter(item=>{
      return !item.completed
    }))
  }

  return (
    <div className="App">
      hello
<TodoForm addNewItem={addNewItem} removeList ={removeList} />
<TodoList taskItem={todoItemList} toggleItem={toggleItem}/>


    </div>
  );
}

export default App;
