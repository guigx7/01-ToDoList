import styles from './TaskStatus.module.css'

export function TaskStatus() {
    return(
      <div className={styles.statusBar}>
        <section>
          <p>Tarefas criadas</p> <span>0</span>
        </section>
        <section>
          <p>Concluídas</p> <span>0 de 0</span>
        </section>
      </div>
    )
} 