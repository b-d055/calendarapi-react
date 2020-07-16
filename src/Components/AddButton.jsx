import React from 'react'
import {useInput} from '../Hook/useInputHook'

export default function AddButton(props) {
    const { value:nameValue, bind:nameBind, reset:nameReset } = useInput('');
    const { value:attendeesValue, bind:attendeesBind, reset:attendeesReset } = useInput('');
    const { value:startValue, bind:startBind, reset:startReset } = useInput('');
    const { value:endValue, bind:endBind, reset:endReset } = useInput('');
    const { value:notesValue, bind:notesBind, reset:notesReset } = useInput('');
    const { value:createdByValue, bind:createdByBind, reset:createdByReset } = useInput('');
    const { value:uuidValue, bind:uuidBind, reset:uuidReset } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            attendees:attendeesValue,
            name:nameValue,
            start_date_time:startValue,
            end_date_time:endValue,
            notes:notesValue,
            createdBy: createdByValue,
            uuid:uuidValue,
        }
        nameReset();
        attendeesReset();
        startReset();
        endReset();
        notesReset();
        createdByReset();
        uuidReset();
        props.handleAddSubmit(newEvent)
    }
    return (
        <>
        <button type='button' onClick={() => props.setIsAddShown(props.isAddShown)}>Add Event</button>
            {props.isAddShown && <div>
            <form onSubmit={handleSubmit}>
            <input type="text" id='name' {...nameBind} placeholder="Event Name" /><br></br>
            <input type="text"id='attendees' {...attendeesBind} placeholder="Attendees" /><br></br>
            <input type="text" id='start_date_time' {...startBind} placeholder="Start Date and Time" /><br></br>
            <input type="text" id='end_date_time' {...endBind} placeholder="End Date and Time" /><br></br>
            <input type="text" id='notes' {...notesBind} placeholder="Notes" /><br></br>
            <input type="text" id='createdBy' {...createdByBind} placeholder="Created By" /><br></br>
            <input type="text" id='uuid' {...uuidBind} placeholder="uuid" /><br></br>
            <input type="submit" value="Submit" />
            </form>
            </div>}
        </>
    )
}
