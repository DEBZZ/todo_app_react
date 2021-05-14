import {  List, ListItem, ListItemAvatar, ListItemText,Button, Modal, InputLabel, Input } from '@material-ui/core'
import React, { useState } from 'react';
import { db } from './firebase';
import firebase from 'firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Todo.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [input,setInput] = useState('');
    const [open,setOpen]= useState(false);

    const updateTodo = () =>{
        //Update Todo
        db.collection("todos").doc(props.todo.id).set({
            todo:input, timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },{merge:true});
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
        <Modal
            open={open}
            onClose={handleClose}
            >
            <div className={classes.paper}>
                <form>
                <InputLabel >✅ToDo Task</InputLabel>
                <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update</Button>
                </form>
            </div>
            </Modal>
        <List>
            <ListItem class="list_item">
        <ListItemAvatar>
          {/* <Avatar>
            {/* <ImageIcon /> }
          </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Deadline ⏰" />
      </ListItem>
      <Button onClick={handleOpen}>👉Edit Me</Button>
      <DeleteForeverIcon onClick={event=> db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}

export default Todo;
