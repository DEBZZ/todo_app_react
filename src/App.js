import './App.css';
import Todo from './Todo';
import React,{ useState,useEffect } from "react";
import { button,FormControl, InputLabel,Input } from '@material-ui/core';
import { db } from './firebase';
import firebase from 'firebase';
// import 'firebase' from firebase;
function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');

  useEffect(() => {
    // This code here... fires whenever App.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc=>doc.data().todo))
    })
  }, [])

  const addTodo = (event)=>{
    //This function will get triggered when todo button is clicked
    event.preventDefault();  //Will stop the Refresh
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    // setTodos([...todos,input]);
    setInput('');   //Clear the input box after setting
    console.log("Added a new item to ToDo list")
  }

  return (
    <div className="App">
      <h1>Welcome Clever Programmers 🚀!!</h1>
      <form>
        <FormControl>
          <InputLabel >✅ToDo Task</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>Add Todo</button>
        </form>
      <ul>
        {todos.map(todo=>(
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
