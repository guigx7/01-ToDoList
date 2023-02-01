import { Trash } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';
import styles from './Task.module.css'

export function Task() {
  const id = uuidv4();

  return (
    <div className={styles.task}>
      <section>
        <div className={styles.customCheckbox}>
          <input id={id} type="checkbox" />
          <label htmlFor={id}></label>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </section>
      <button><Trash size={18} /></button>
    </div>
  )
} 