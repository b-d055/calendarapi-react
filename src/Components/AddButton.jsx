import React from 'react'
import AddEditButton from './AddEditForm';
import { render } from 'react-dom';

export default function AddButton(props) {
    const addEditfunction = () => {
        console.log(props.isAddShown, props.isFormShown)
            return(
            <AddEditButton 
            isAddShown={props.isAddShown}
            handleAddSubmit={props.handleAddSubmit}
            emptyEvent={props.emptyEvent}
            isFormShown={props.isFormShown}
            setIsFormShown={props.setIsFormShown}
            setIsAddShown={props.setIsAddShown} />
            )
        }

    return (
        <React.Fragment>
        <button type='button' onClick={() => {
            props.setIsAddShown(false)
            props.setIsFormShown(false)
            addEditfunction()
            }}>Add Event</button>
            
        </React.Fragment>
    )
}
