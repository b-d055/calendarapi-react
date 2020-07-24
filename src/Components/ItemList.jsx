import React, { useState } from 'react'
import { render } from 'react-dom';

    const ItemList = (props) => {
        const sortEvents = props.events
        let totalSeperateArray = []
        Object.keys(sortEvents).map(uuid => {
            let tempArray = splitDate(sortEvents, uuid)
            let objEvent = props.events[uuid]
            objEvent['uuid'] = uuid
            tempArray.push(objEvent)
            totalSeperateArray.push(tempArray)
        })
        let totalDict = {}  
        totalSeperateArray.forEach(event => {
            const year = event[0]
            const month = event[1]
            const day = event[2]
            const objEvent = event[8]
            const uuid = objEvent['uuid']
            const eventObj = event[8]
            if (!totalDict[year]) totalDict[year] = {};
            if (!totalDict[year][month]) totalDict[year][month] = {};
            if (!totalDict[year][month][day]) totalDict[year][month][day] = {};
            if (!totalDict[year][month][day][uuid]) totalDict[year][month][day][uuid] = eventObj;
            }
        )
        const years = Object.keys(totalDict).sort()
        console.log(totalDict)
        return (
            years.map(year => {
                const monthsDict = totalDict[year]
                const months = Object.keys(monthsDict).sort()
                return(
                    
                    <>
                    <h1>{year}</h1>
                    {
                        months.map(month => {
                            const dayDict = monthsDict[month]
                            const day = Object.keys(dayDict).sort()
                            return(
                                <>
                                <h2>{month}</h2>
                                {
                                    day.map(day => {
                                        const idDict = dayDict[day]
                                        const id = Object.keys(idDict)
                                        let stimeArr = []
                                        id.map(id => {
                                            stimeArr.push(idDict[id]['start_date_time'])
                                        })
                                        
                                        console.log(id)
                                        stimeArr.sort()
                                        const distSTimeArr = [...new Set(stimeArr)]
                                        return(
                                            <>
                                            <h3>{day}</h3>
                                            <ul>
                                            {
                                                distSTimeArr.map(stime => {
                                                    return(
                                                    <>
                                                    {id.map(ids => {
                                                    if (idDict[ids]['start_date_time'] === stime){
                                                        const [waste, stime] = idDict[ids]['start_date_time'].split('T')
                                                        const name = idDict[ids]['name']
                                                        const attendees = idDict[ids]['attendees']
                                                        const notes = idDict[ids]['notes']
                                                        const start_date_time = idDict[ids]['start_date_time']
                                                        const end_date_time = idDict[ids]['end_date_time']
                                                        let idd = ids
                                                        return(
                                                            <li 
                                                            onClick={()=> {props.handleDetailClick(idd)
                                                            }}>
                                                                {name} - {stime}
                                                                {props.targetedEvent === idd && 
                                                                <div>
                                                                <p>Attendees: {attendees}</p>
                                                                <p>Notes: {notes}</p>
                                                                <p>Start date and time: {start_date_time}</p>
                                                                <p>End date and time: {end_date_time}</p>
                                                                <button 
                                                                onClick={()=> {
                                                                    idd = null
                                                                    props.handleDetailClick(idd)}}>Close</button>
                                                                </div>}
                                                            </li>
                                                            
                                                        )
                                                    }
                                                }
                                                )}

                                                    </>
                                                    )
                                                }
                                                )
                                            }
                                                    </ul>
                                            {/* </ul> */}
                                            </>
                                        )
                                    })
                                }
                                </>
                            )
                        })
                    }
                </>
                )

// helper func for sort, once we are down to day sorts by start time

            })
        )       
    }
function splitDate (sortEvents, uuid) {
            // start date time
            
            var sdatetime = sortEvents[uuid]['start_date_time']
            console.log(sdatetime)
            var sall = sdatetime.split("-")
            var syear = sall[0]
            var smonth = sall[1]
            var sdayextra = sall[2]
            var stimall = sdayextra.toString().split("T");
            var sday = stimall[0]
            var stime = stimall[1]
            // end date time
            var edatetime = sortEvents[uuid]['end_date_time']
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
export default ItemList;