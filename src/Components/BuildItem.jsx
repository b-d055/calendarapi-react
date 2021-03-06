import React from 'react'
import { render } from 'react-dom';

//object.sort()


const BuildEvents = (props) => {
    let toShow = []
    const eventObj = props.eventObj
    const sortyears = Object.keys(eventObj).sort((a,b) => a-b)
    sortyears.forEach(year => {
    const yearToShow = <h1>{year}</h1>
        toShow.push(yearToShow)
        const sortmonths = Object.keys(eventObj[year]).sort((a,b) => a-b)
        sortmonths.forEach(month => {
            const monthToShow = <h2>{props.months[parseInt(month)-1]}</h2>
            toShow.push(monthToShow)
            const sortdays = Object.keys(eventObj[year][month]).sort((a,b) => a-b)
            sortdays.forEach(day => {
                const dayToShow = <h3>{day}</h3>
                toShow.push(dayToShow)
                const sortuuids = Object.keys(eventObj[year][month][day]).sort((a,b) => a-b)
                console.log('sortuuids')
                console.log(sortuuids)
                let starttimesort = []
                sortuuids.forEach(id => {
                    console.log('id')
                    console.log(id)
                    const [waste, stime] = eventObj[year][month][day][id]['start_date_time'].split('T')
                    const name = eventObj[year][month][day][id]['name']
                    const attendees = eventObj[year][month][day][id]['attendees']
                    const notes = eventObj[year][month][day][id]['notes']
                    const start_date_time = eventObj[year][month][day][id]['start_date_time']
                    const end_date_time = eventObj[year][month][day][id]['end_date_time']
                    let timeToShow = 
                    <li onClick={()=> {props.handleDetailClick(id)
                    console.log(id)
                    console.log(props.targetedEvent)}}>
                        {name} - {stime}
                        {props.targetedEvent === id && 
                        <div>
                        <p>Attendees: {attendees}</p>
                        <p>Notes: {notes}</p>
                        <p>Start date and time: {start_date_time}</p>
                        <p>End date and time: {end_date_time}</p>
                        <button onClick={()=> {
                            id = null
                            props.handleDetailClick(id)}}>Close</button>
                        </div>}
                    </li>
                    toShow.push(timeToShow) 
                    // starttimesort.push(stime)
                    // starttimesort = starttimesort.sort((a,b) => a-b)
                    // starttimesort.forEach(time => {
                    //     console.log("time")
                        // let timeToShow = 
                        // <li onClick={()=> {props.handleDetailClick(id)
                        // console.log(id)
                        // console.log(props.targetedEvent)}}>
                        //     {name} - {time}
                        //     {props.targetedEvent === id && 
                        //     <div>
                        //     <p>Attendees: {attendees}</p>
                        //     <p>Notes: {notes}</p>
                        //     <p>Start date and time: {start_date_time}</p>
                        //     <p>End date and time: {end_date_time}</p>
                        //     <button onClick={()=> {
                        //         id = null
                        //         props.handleDetailClick(id)}}>Close</button>
                        //     </div>}
                        // </li>
                        // toShow.push(timeToShow)
                    // })     
                })
            })
        })
    })
    return (
        toShow.map(x => {
            console.log(toShow)
            return(
                <>
                {x}
                </>
            )
        })
    
    )
}
export default BuildEvents;