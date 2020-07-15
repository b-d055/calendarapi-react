import React from 'react'

export default function EditButton(props) {
    const id = props.targetedEvent
    const name = props.emptyEvent['name']
    const attendees = props.emptyEvent['attendees']
    const end_date_time = props.emptyEvent['end_date_time']
    const notes = props.emptyEvent['notes']
    const start_date_time = props.emptyEvent['start_date_time']
    const tmpEvent = {[id]:props.empty}

    return (
        <>
        <button onClick={() => props.setIsEditShown(props.isEditShown)}>Edit Event</button>
            {props.isEditShown && <div>
            <form onSubmit={props.handleEditSubmit(tmpEvent)}>
            <input type="text" id='name' value={name} onChange={props.handleEditChange} placeholder="Event Name" />
            <input type="text"id='attendees' value={attendees} onChange={props.handleEditChange} placeholder="Attendees" />
            <input type="text" id='start_date_time' value={start_date_time} onChange={props.handleEditChange} placeholder="Start Date and Time" />
            <input type="text" id='end_date_time' value={end_date_time} onChange={props.handleEditChange} placeholder="End Date and Time" />
            <input type="text" id='notes' value={notes} onChange={props.handleEditChange} placeholder="Notes" />
            <input type="submit" value="Submit" />
            </form>
            </div>}
        </>
    )
}
