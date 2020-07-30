import React from 'react'
import {useInput} from '../Hook/useInputHook'
import FormDialog from './Dialog'

export default function EditButton(props) {
    return (
        <>
        <button type='button' onClick={() => {
            props.handleClickOpen()
            props.setIsFormShown(false)
            props.setIsAddShown(true)
        }
        }>Edit Event</button>
        </>
    )
}
