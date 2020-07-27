import React from 'react'
import AddEditButton from './AddEditForm';

export default function AddButton(props) {
    return (
        <React.Fragment>
        <button type='button' onClick={() => {
            props.setIsAddShown(false)
            props.setIsFormShown(false)
            }}>Add Event</button>
        </React.Fragment>
    )
}
