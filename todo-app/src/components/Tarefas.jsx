import React from 'react'
import Tarefa from './Tarefa/Tarefa'

const Tarefas = ({tarefas, handleTarefaClick, handleTarefaDelete}) => {
     
    return (
        <>
            {tarefas.map(tarefa => 
                <Tarefa 
                    key={tarefa.id}
                    tarefa={tarefa} 
                    handleTarefaClick={handleTarefaClick}
                    handleTarefaDelete={handleTarefaDelete}
                />
            )}
        </>
    )
}


export default Tarefas