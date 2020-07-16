import React from 'react'
import {useInput} from '../Hook/useInputHook'

export default function EditButton(props) {
    const { setValue:nameSetValue, value:nameValue, bind:nameBind, reset:nameReset } = useInput('');
    const { setValue:attendeesSetValue, value:attendeesValue, bind:attendeesBind, reset:attendeesReset } = useInput('');
    const { setValue:startSetValue, value:startValue, bind:startBind, reset:startReset } = useInput('');
    const { setValue:endSetValue, value:endValue, bind:endBind, reset:endReset } = useInput('');
    const { setValue:notesSetValue, value:notesValue, bind:notesBind, reset:notesReset } = useInput('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            attendees:attendeesValue,
            name:nameValue,
            start_date_time:startValue,
            end_date_time:endValue,
            notes:notesValue,   
            createdBy:props.emptyEvent['createdBy'],
            uuid:props.emptyEvent['uuid']
        }
        nameReset();
        attendeesReset();
        startReset();
        endReset();
        notesReset();
        props.handleEditSubmit(newEvent)
    }
    return (
        <>
        <button type='button' onClick={() => {
            props.setIsEditShown(props.isEditShown)
            nameSetValue(props.emptyEvent['name'])
            attendeesSetValue(props.emptyEvent['attendees'])
            startSetValue(props.emptyEvent['start_date_time'])
            endSetValue(props.emptyEvent['end_date_time'])
            notesSetValue(props.emptyEvent['notes'])
        }
        }>Edit Event</button>
            {props.isEditShown && <div>
            <form onSubmit={handleSubmit}>
            <input type="text" id='name' {...nameBind} placeholder="Event Name" /><br></br>
            <input type="text"id='attendees' {...attendeesBind} placeholder="Attendees" /><br></br>
            <input type="text" id='start_date_time' {...startBind} placeholder="Start Date and Time" /><br></br>
            <input type="text" id='end_date_time' {...endBind} placeholder="End Date and Time" /><br></br>
            <input type="text" id='notes' {...notesBind} placeholder="Notes" /><br></br>
            <input type="submit" value="Submit" />
            </form>
            </div>}
        </>
    )
}






// import React from 'react'

// export default function EditButton(props) {
//     const id = props.targetedEvent
//     const name = props.emptyEvent['name']
//     const attendees = props.emptyEvent['attendees']
//     const end_date_time = props.emptyEvent['end_date_time']
//     const notes = props.emptyEvent['notes']
//     const start_date_time = props.emptyEvent['start_date_time']
//     const tmpEvent = {[id]:props.empty}

//     return (
//         <>
//         <button type="button" onClick={() => props.setIsEditShown(props.isEditShown)}>Edit Event</button>
//             {props.isEditShown && <div>
//             <form onSubmit={() => props.handleEditSubmit(tmpEvent)}>
//             <input type="text" id='name' value={props.emptyEvent['name']} onChange={props.handleEditChange} placeholder="Event Name" />
//             <input type="text"id='attendees' value={props.emptyEvent['attendees']} onChange={props.handleEditChange} placeholder="Attendees" />
//             <input type="text" id='start_date_time' value={props.emptyEvent['start_date_time']} onChange={props.handleEditChange} placeholder="Start Date and Time" />
//             <input type="text" id='end_date_time' value={props.emptyEvent['end_date_time']} onChange={props.handleEditChange} placeholder="End Date and Time" />
//             <input type="text" id='notes' value={props.emptyEvent['notes']} onChange={props.handleEditChange} placeholder="Notes" />
//             <input type="submit" value="Submit" />
//             </form>
//             </div>}
//         </>
//     )
// }
