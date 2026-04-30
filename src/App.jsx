import { useState, useEffect } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState("")
  const [filtro, setFiltro] = useState("todas")

  // carregar tarefas salvas ao iniciar
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas")
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas))
    }
  }, [])

  // salvar tarefas automaticamente
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }, [tarefas])

  function adicionarTarefa() {
    if (input.trim() === "") return

    const novaTarefa = {
      texto: input,
      concluida: false
    }

    setTarefas([...tarefas, novaTarefa])
    setInput("")
  }

  function alternarTarefa(index) {
    const novasTarefas = [...tarefas]
    novasTarefas[index].concluida = !novasTarefas[index].concluida
    setTarefas(novasTarefas)
  }

  function removerTarefa(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index)
    setTarefas(novasTarefas)
  }

  function limparConcluidas(){
    const tarefasAtivas = tarefas.filter(tarefa => !tarefa.concluida)
    setTarefas(tarefasAtivas)
  }

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluida
    if (filtro === "concluidas") return tarefa.concluida
    return true
  })

  return (
    <div className="container">
      <h1>ToDo List 📝</h1>

      <TaskForm
        input={input}
        setInput={setInput}
        adicionarTarefa={adicionarTarefa}
      />
      <div style={{marginTop: 20}}>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
        <button onClick={() => setFiltro("concluidas")}>Concluidas</button>

        <p>
          {tarefas.filter(t => !t.concluida).length} pendentes de {tarefas.length}
        </p>

        <button onClick={limparConcluidas} style={{marginTop: 10}}>
          Limpar Concluidas 🧹
        </button>
      </div>
      <TaskList
        tarefas={tarefasFiltradas}
        alternarTarefa={alternarTarefa}
        removerTarefa={removerTarefa}
      />
    </div>
  )
}

export default App
