import React from 'react';
import './Tarefa.css'
import {CgClose} from 'react-icons/cg'

const Tarefa = ( {tarefa, handleTarefaClick, handleTarefaDelete} ) => {
    return ( 
    <div className="tarefa-container" style={tarefa.feito ? {borderLeft: '6px solid chartreuse'} : {}}>
        <div className="tarefa-title" onClick={() => handleTarefaClick(tarefa.id)}>
            <h1>{tarefa.title}</h1>
        </div>

        <div className="buttons-container">
            <button className="remove-tarefa-button" onClick={() => handleTarefaDelete(tarefa.id)}><CgClose /></button>
        </div> 
    </div>
    );
}
 
export default Tarefa;