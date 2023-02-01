import styles from './AddNewTask.module.css'

export function AddNewTask() {
    return(
        <section>
            <input type='text' placeholder='Adicione uma nova tarefa'/>
            <button>Criar</button>
        </section>
    )
}