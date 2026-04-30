function TaskItem({ tarefa, index, alternarTarefa, removerTarefa }) {
  return (
    <li>
      <input 
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => alternarTarefa(index)}
      />
      
      <span
        className="tarefa-texto"
        style={{
          textDecoration: tarefa.concluida ? "line-through" : "none",
        }}
      >
        {tarefa.texto}
      </span>

      <button 
        className="remover"
        onClick={() => removerTarefa(index)}
      >
        ❌
      </button>
    </li>
  )
}

export default TaskItem