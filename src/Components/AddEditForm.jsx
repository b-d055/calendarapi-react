import React from 'react'
import {useInput} from '../Hook/useInputHook'
import DateAndTimePickers from './DatePicker';

export default function AddEditButton(props) {
    const { setValue:nameSetValue, value:nameValue, bind:nameBind, reset:nameReset } = useInput('');
    const { setValue:attendeesSetValue, value:attendeesValue, bind:attendeesBind, reset:attendeesReset } = useInput('');
    const { setValue:startSetValue, value:startValue, bind:startBind, reset:startReset } = useInput('');
    const { setValue:endSetValue, value:endValue, bind:endBind, reset:endReset } = useInput('');
    const { setValue:notesSetValue, value:notesValue, bind:notesBind, reset:notesReset } = useInput('');
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
    const addForm =
            <>
            {props.isFormShown && <div>
                <form onSubmit={handleSubmit}>
                <input type="text" id='name' {...nameBind} placeholder="Event Name" /><br></br>
                <input type="text"id='attendees' {...attendeesBind} placeholder="Attendees" /><br></br>
                <DateAndTimePickers label="Start Date and Time" bind = {startBind} /><br></br>
                <DateAndTimePickers label="End Date and Time" bind = {endBind} /><br></br>
                <input type="text" id='notes' {...notesBind} placeholder="Notes" /><br></br>
                {props.isAddShown && <div>
                    <input type="text" id='createdBy' {...createdByBind} placeholder="Created By" /><br></br>
                    <input type="text" id='uuid' {...uuidBind} placeholder="uuid" /><br></br>
                </div>
                }
                <button type='button' onClick={() => {
            props.setIsAddShown(true)
            props.setIsFormShown(true)
            }}>Close</button>
                <input type="submit" value="Submit" />
                </form>
            </div>}
        </>
        const tempEvent = {...props.emptyEvent}
        // nameSetValue(props.emptyEvent['name'])
            // attendeesSetValue(props.emptyEvent['attendees'])
            // startSetValue(props.emptyEvent['start_date_time'])
            // endSetValue(props.emptyEvent['end_date_time'])
            // notesSetValue(props.emptyEvent['notes'])
    const editForm =
        <>
            {props.isFormShown && <div>
                <form onSubmit={handleSubmit}>
                <input type="text" id='name' {...nameBind} placeholder="Event Name" /><br></br>
                <input type="text"id='attendees' {...attendeesBind} placeholder="Attendees" /><br></br>
                <DateAndTimePickers label="Start Date and Time" bind = {startBind} /><br></br>
                <DateAndTimePickers label="End Date and Time" bind = {endBind} /><br></br>
                <input type="text" id='notes' {...notesBind} placeholder="Notes" /><br></br>
                {props.isAddShown && <div>
                    <input type="text" id='createdBy' {...createdByBind} placeholder="Created By" /><br></br>
                    <input type="text" id='uuid' {...uuidBind} placeholder="uuid" /><br></br>
                </div>
                }
                <button type='button' onClick={() => {
            props.setIsAddShown(true)
            props.setIsFormShown(true)
            }}>Close</button>
                <input type="submit" value="Submit" />
                </form>
            </div>}
        </>

    if (props.isAddShown) {
        return(addForm)
    }else{
        return(editForm)
    }
}
