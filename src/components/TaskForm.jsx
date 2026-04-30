function TaskForm({ input, setInput, adicionarTarefa }) {
  return (
    <div className="input-area">
      <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Digite uma tarefa..."
      />

      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  )
}

export default TaskForm