import React from 'react';
import './Tarefa.css'
import {CgClose, CgInfo} from 'react-icons/cg'
import {useHistory} from 'react-router-dom'

const Tarefa = ( {tarefa, handleTarefaClick, handleTarefaDelete} ) => {
    const history = useHistory()

    const handleTarefaDetailsClick = () => {
        history.push(`/${tarefa.title}`)
    }

    return ( 
        <div 
            className="tarefa-container" 
            style={tarefa.feito ? {borderLeft: '6px solid chartreuse'} : {}}>

            <div 
                className="tarefa-title" 
                onClick={() => handleTarefaClick(tarefa.id)}>
                <h1>{tarefa.title}</h1>
            </div>

            <div className="buttons-container">
                <button 
                    className="see-tarefa-details-button" 
                    onClick={handleTarefaDetailsClick}>
                    <CgInfo />
                </button>
                <button 
                    className="remove-tarefa-button" 
                    onClick={() => handleTarefaDelete(tarefa.id)}>
                    <CgClose />
                </button>
            </div> 
        </div>
    );
}
 
export default Tarefa;