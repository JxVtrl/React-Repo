import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Tarefas from './components/Tarefas'
import AddTarefa from './components/AddTarefa/AddTarefa'
import TarefaDetails from './components/TarefaDetails/TarefaDetails'

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

  useEffect(() => {
    const fetchTarefas = async () => {
      const {data} = await axios.get(
      'https://jsonplaceholder.cypress.io/todos?_limit=10'
      )
      setTarefas(data)
    }
    fetchTarefas()
  }, [])

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
    <Router>
      <div className="container">
        <Header />
        <Route 
          path="/" 
          exact 
          render={() => (
            <>
              <AddTarefa 
                handleTarefaAddition={handleTarefaAddition}
              />
              <Tarefas 
                tarefas={tarefas} 
                handleTarefaClick={handleTarefaClick} 
                handleTarefaDelete={handleTarefaDelete}
              />
            </>
        )}/>
        <Route 
          path="/:tarefaTitle"
          exact
          component={TarefaDetails}
        />
      </div>
 </Router>
  );
}

export default App;
