import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <section>
        <div className={styles.customCheckbox}>
          <input id="checkbox-1" type="checkbox" />
          <label htmlFor="checkbox-1"></label>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </section>
      <button><Trash size={18} /></button>
    </div>
  )
} 