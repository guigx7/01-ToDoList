import { ClipboardText } from 'phosphor-react'
import styles from './NoTasks.module.css'

export function NoTasks() {
  return (
    <div className={styles.noTasks}>
      <ClipboardText size={72} weight='light' />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <h3>Crie tarefas e organize seus itens a fazer</h3>
    </div>
  )
} 