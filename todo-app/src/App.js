import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

import Header from './components/Header/Header'
import Tarefas from './components/Tarefas'
import AddTarefa from './components/AddTarefa/AddTarefa'

import './app.css'

const App = () =>{
  const [tarefas, setTarefas] = useState([
    {
      id: '1',
      title: 'Estudar JSX',
      feito: false
    },
    {
      id: '2',
      title: 'Ler Livros',
      feito: true
    }
    
  ])

  const handleTarefaClick = (tarefaId) => {
    const newTarefa =  tarefas.map((tarefa) => {
      if(tarefa.id === tarefaId) return { ...tarefa, feito: !tarefa.feito}

      return tarefa 
    })

    setTarefas(newTarefa)
  }

  const handleTarefaAddition = (tarefaTitulo) => {
    const newTarefa = [
      ...tarefas, 
      {
        title: tarefaTitulo,
        id: uuidv4(),
        feito: false
      } 
    ]

    setTarefas(newTarefa)
  }

  const handleTarefaDelete = (tarefaId) => {
    const newTarefa = tarefas.filter(tarefa => tarefa.id !== tarefaId)

    setTarefas(newTarefa)
  }


  return (
    <>
      
      <div className="container">
        <Header />
        <AddTarefa 
          handleTarefaAddition={handleTarefaAddition}
        /><Tarefas 
          tarefas={tarefas} 
          handleTarefaClick={handleTarefaClick} 
          handleTarefaDelete={handleTarefaDelete}
        />
      </div>
    </>
  );
}

export default App;
