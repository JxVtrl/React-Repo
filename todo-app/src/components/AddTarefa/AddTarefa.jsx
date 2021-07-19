import React, { useState } from 'react';
import Button from '../Button/Button'
import './AddTarefa.css'

const AddTarefa = ({ handleTarefaAddition }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (event) => {
        
        setInputData(event.target.value)
    }

    const handleAddTarefaClick = () => {
        handleTarefaAddition(inputData)
        setInputData('')
    }

    return ( 
        <div className="add-tarefa-container">
            <input 
                className="add-tarefa-input" 
                type="text"
                onChange={handleInputChange}
                value={inputData} 
            />
            <div className="add-taks-button-container">
                <Button onClick={handleAddTarefaClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 

    
export default AddTarefa;