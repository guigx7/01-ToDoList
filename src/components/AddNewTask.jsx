import { PlusCircle } from 'phosphor-react'
import { useEffect, useState } from 'react';
import styles from './AddNewTask.module.css'

export function AddNewTask({ handleCreateNewTask }) {
  const [newTask, setNewTask] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    handleCreateNewTask(newTask);
    setNewTask('');
  }

  // useEffect(() => {
  //   console.log(newTask);
  // }, [newTask])

  function handleNewTaskChange() {
    setNewTask(event.target.value);
    event.target.setCustomValidity('');
  }

  function handleTaskInvalid() {
    event.target.setCustomValidity('Impossível criar uma tarefa vazia, preencha o campo e clique em criar.');
  }

  // function handleTouchStart() {
  //   event.preventDefault();
  // };

  return (
    <form onSubmit={handleSubmit} className={styles.newTaskForm}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        name="task"
        value={newTask}
        onChange={handleNewTaskChange}
        onInvalid={handleTaskInvalid}
        // onTouchStart={handleTouchStart}
        required
      />
      <button type='submit' >
        <span>Criar</span> <PlusCircle size={18} weight="bold" />
      </button>
    </form>
  )
}