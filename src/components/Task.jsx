import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task({task, onDeleteTask, handleTaskDone}) {

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.task}>
      <section>
        <div className={styles.customCheckbox}>
          <input id={task.id} type="checkbox" onClick={()=>handleTaskDone(task.id)}/>
          <label htmlFor={task.id}></label>
        </div>
        <p>{task.content}</p>
      </section>
      <button onClick={handleDeleteTask}><Trash size={18} /></button>
    </div>
  )
} 