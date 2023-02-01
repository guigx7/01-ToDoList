import styles from './TaskList.module.css'
import { NoTasks } from './NoTasks'
import { Task } from './Task'

export function TaskList() {
  return (
    <div className={styles.listContainer}>
      <section>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        {/* <NoTasks /> */}
      </section>
    </div>
  )
} 