import { useState } from 'react';
import Header from '../components/header/Header';
import Tasks from '../tasks/Tasks';

import classes from './App.module.css';


function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Doctors',
      day: 'Jun 25 at 9:30am',
      reminder:true,
    },
    {
      id:2,
      text: 'School',
      day: 'Feb 25 at 07:43pm',
      reminder:false,
    },
    {
      id:3,
      text: 'Vacation',
      day: 'April 15 at 04:43am',
      reminder:true,
    },
  ])

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  } 

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task
      )
    )
  }
  return (
    <div className={classes.App}>
      <Header />
     { tasks.length > 0 ? (
     <Tasks 
      tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> ) : ('No Task Shown')}
    </div>
  );
}

export default App;
