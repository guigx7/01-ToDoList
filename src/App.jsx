import './global.css'
import { Header } from './components/Header'
import { AddNewTask } from './components/AddNewTask'
import { TaskStatus } from './components/TaskStatus'

export function App() {
  return (
    <>
      <Header/>
      <AddNewTask />
      <TaskStatus />
    </>
  )
}
