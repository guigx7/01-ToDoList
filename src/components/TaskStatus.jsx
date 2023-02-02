import styles from './TaskStatus.module.css'

export function TaskStatus({tasks}) {

  function taskCounter() {
    return tasks.length;
  }

    return(
      <div className={styles.statusBar}>
        <section>
          <p>Tarefas criadas</p> <span>{taskCounter()}</span>
        </section>
        <section>
          <p>Concluídas</p> <span>0 de {taskCounter()}</span>
        </section>
      </div>
    )
} 