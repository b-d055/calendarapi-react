import React from 'react'

export default function AddButton(props) {
    return (
        <>
        <button onClick={() => props.setIsAddShown(props.isAddShown)}>Add Event</button>
            {props.isAddShown && <div>
            <form onSubmit={props.setIsAddShown}>
            <input type="text" id='name' value={props.name} onChange={props.handleChange} placeholder="Event Name" />
            <input type="text"id='attendees' value={props.attendees} onChange={props.handleChange} placeholder="Attendees" />
            <input type="text" id='start_date_time' value={props.start_date_time} onChange={props.handleChange} placeholder="Start Date and Time" />
            <input type="text" id='end_date_time' value={props.end_date_time} onChange={props.handleChange} placeholder="End Date and Time" />
            <input type="text" id='notes' value={props.notes} onChange={props.handleChange} placeholder="Notes" />
            <input type="text" id='createdBy' value={props.createdBy} onChange={props.handleChange} placeholder="Created By" />
            <input type="text" id='uuid' value={props.uuid} onChange={props.handleChange} placeholder="uuid" />
            <input type="submit" value="Submit" />
            </form>
            </div>}
        </>
    )
}
