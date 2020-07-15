import React, { useState } from 'react'
import { render } from 'react-dom';
import BuildItem from './BuildItem'

    const Item = (props) => {
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
        return (
                <BuildItem 
                targetedEvent={props.targetedEvent}
                handleDetailClick={props.handleDetailClick} 
                isDetailShown={props.isDetailShown} 
                months={props.months} 
                eventObj={totalDict} 
                isEditShown={props.isEditShown} />
        )
    }
function splitDate (sortEvents, uuid) {
            // start date time
            var sdatetime = sortEvents[uuid]['start_date_time']
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
export default Item;