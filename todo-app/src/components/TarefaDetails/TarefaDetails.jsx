import React from 'react';
import { useParams, useHistory } from 'react-router-dom'

import Button from '../Button/Button'
import './TarefaDetails.css'

const TarefaDetails = () => {
    const params = useParams()
    const history = useHistory()

    const handleBackButtonClick = () => {
        history.goBack()
    }
    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="tarefa-details-container">
                <h3>{params.tarefaTitle.toUpperCase()}</h3>
                <p>
                    Lorem idwanhdiawbdkianwdawdaw
                </p>
            </div>
            
        </>
     );
}
 
export default TarefaDetails;