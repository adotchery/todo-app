import React from 'react'
import { FaTimes } from 'react-icons/fa';
import classes from './Task.module.css';

const Task = ({ task, onDelete, onToggle }) => {
    // need some logic for this remainder toggle

    return (
        <div 
            className={classes.task} 
            onDoubleClick={() => onToggle(task.id) }>
                <h3>{task.text} 
                <FaTimes 
                style={{color:'red', cursor:'pointer'}}
                onClick={() => onDelete(task.id)}
                /></h3>
                <p>{task.day}</p>
        </div>
    )
}

export default Task
