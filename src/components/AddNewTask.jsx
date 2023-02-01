import { PlusCircle } from 'phosphor-react'
import styles from './AddNewTask.module.css'

export function AddNewTask() {
    return(
        <section className={styles.newTaskForm}>
            <input type='text' placeholder='Adicione uma nova tarefa'/>
            <button>
              <span>Criar</span> <PlusCircle size={18} weight="bold" />
            </button>
        </section>
    )
}