import styles from './TaskList.module.css'
import { NoTasks } from './NoTasks'
import { Task } from './Task'

export function TaskList({ tasks, deleteTask }) {
  return (
    <div className={styles.listContainer}>
      <section>
        {tasks.map(task => <Task key={task.id} task={task} onDeleteTask={deleteTask}/>)}
          
        {/* <NoTasks /> */}
      </section>
    </div>
  )
} 