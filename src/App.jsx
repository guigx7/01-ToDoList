import './global.css'
import { Header } from './components/Header'
import { AddNewTask } from './components/AddNewTask'
import { TaskStatus } from './components/TaskStatus'
import { TaskList } from './components/TaskList'

export function App() {
  return (
    <>
      <Header/>
      <AddNewTask />
      <TaskStatus />
      <TaskList />
    </>
  )
}
