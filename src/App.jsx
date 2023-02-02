import './global.css'
import { Header } from './components/Header'
import { AddNewTask } from './components/AddNewTask'
import { TaskStatus } from './components/TaskStatus'
import { TaskList } from './components/TaskList'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export function App() {

  const [tasks, setTasks] = useState([]);

  function handleCreateNewTask(task) {
    const newTask = {
      checked: false,
      content: task,
      id: uuidv4()
    }
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      console.log(id);
      console.log(task.id);
      return task.id !== id;
    })

    setTasks(tasksWithoutDeletedOne);
    console.log(tasksWithoutDeletedOne);
  }

  return (
    <>
      <Header/>
      <AddNewTask handleCreateNewTask={handleCreateNewTask}/>
      <TaskStatus tasks={tasks}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  )
}
