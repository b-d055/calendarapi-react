import React from 'react'
import { render } from 'react-dom';

//object.sort()


const BuildEvents = (props) => {
    const eventObj = props.eventObj
    console.log(eventObj)
    const sortyears = Object.keys(eventObj).sort((a,b) => a-b)
    sortyears.forEach(year => {
        const sortmonths = Object.keys(eventObj[year]).sort((a,b) => a-b)
        sortmonths.forEach(month => {
            const sortdays = Object.keys(eventObj[year][month]).sort((a,b) => a-b)
            sortdays.forEach(day => {
                let eventArr = []
                const sortuuids = Object.keys(eventObj[year][month][day]).sort((a,b) => a-b)
                sortuuids.forEach(id => {
                    const [waste, stime] = eventObj[year][month][day][id]['start_date_time'].split('T')
                    const name = eventObj[year][month][day][id]['name']
                    const attendees = eventObj[year][month][day][id]['attendees']
                    const notes = eventObj[year][month][day][id]['notes']
                    const start_date_time = eventObj[year][month][day][id]['start_date_time']
                    const end_date_time = eventObj[year][month][day][id]['end_date_time']
                    const time = splitDate(start_date_time, end_date_time)
                    let timeToShow = 
                        <li 
                        onClick={()=> {props.handleDetailClick(id)
                        }}>
                            {name} - {stime}
                            {props.targetedEvent === id && 
                            <div>
                            <p>Attendees: {attendees}</p>
                            <p>Notes: {notes}</p>
                            <p>Start date and time: {start_date_time}</p>
                            <p>End date and time: {end_date_time}</p>
                            <button 
                            onClick={()=> {
                                id = null
                                props.handleDetailClick(id)}}>Close</button>
                            </div>}
                        </li>
                    eventArr.push({[id]:{
                        name:name,
                        attendees:attendees,
                        notes:notes,
                        time:time, 
                        timeToShow:timeToShow,                 
                    }})
                    console.log(day)
                    console.log(eventArr)
                    
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
         //<p>{visit(eventArr, print)}</p>
         null
    
    )
}
function splitDate (start_date_time, end_date_time) {
    // start date time
    var sdatetime = start_date_time
    var sall = sdatetime.split("-")
    var syear = sall[0]
    var smonth = sall[1]
    var sdayextra = sall[2]
    var stimall = sdayextra.toString().split("T");
    var sday = stimall[0]
    var stime = stimall[1]
    // end date time
    var edatetime = end_date_time
    var eall = edatetime.split('-');
    var eyear = eall[0]
    var emonth = eall[1]
    var edayextra = eall[2]
    var etimeall = edayextra.toString().split('T')
    var eday = etimeall[0]
    var etime = etimeall [1]
    var eventsinfo = [syear, smonth, sday, stime, eyear, emonth, eday, etime]
    return eventsinfo
}


const visit = (obj, fn) => {
    const values = Object.values(obj)

    values.forEach(val => 
        val && typeof val === "object" ? visit(val, fn) : fn(val))
}

const print = (val) => console.log(val)


export default BuildEvents;