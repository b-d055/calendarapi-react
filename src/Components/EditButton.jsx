import React from 'react'
import {useInput} from '../Hook/useInputHook'

export default function EditButton(props) {
    return (
        <>
        <button type='button' onClick={() => {
            props.setIsFormShown(false)
            props.setIsAddShown(true)
        }
        }>Edit Event</button>
        </>
    )
}
