import styles from './TaskStatus.module.css'

export function TaskStatus({tasks, handleTaskCounter}) {

  function taskCounter() {
    return tasks.length;
  }

    return(
      <div className={styles.statusBar}>
        <section>
          <p>Tarefas criadas</p> <span>{taskCounter()}</span>
        </section>
        <section>
          <p>Concluídas</p> <span>{handleTaskCounter()} de {taskCounter()}</span>
        </section>
      </div>
    )
} 