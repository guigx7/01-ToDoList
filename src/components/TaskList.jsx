import styles from './TaskList.module.css'
import { NoTasks } from './NoTasks'
import { Task } from './Task'

export function TaskList({ tasks, deleteTask, handleTaskDone }) {
  return (
    <div className={styles.listContainer}>
      <section>
        {(tasks.length == 0) ? <NoTasks /> : tasks.map(task => <Task key={task.id} task={task} onDeleteTask={deleteTask} handleTaskDone={handleTaskDone}/>)}
      </section>
    </div>
  )
} 