import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <List>
            <ListItem class="list_item">
        <ListItemAvatar>
          {/* <Avatar>
            {/* <ImageIcon /> }
          </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Deadline ⏰" />
      </ListItem>
        </List>
    )
}

export default Todo
