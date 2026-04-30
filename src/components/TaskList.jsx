import TaskItem from "./TaskItem";

function TaskList({ tarefas, alternarTarefa, removerTarefa }) {
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <TaskItem
          key={index}
          tarefa={tarefa}
          index={index}
          alternarTarefa={alternarTarefa}
          removerTarefa={removerTarefa}
        />
      ))}
    </ul>
  )
}

export default TaskList