import React, { useState } from 'react'
import { render } from 'react-dom';

 
// material ui library (google)
export class Calendar extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        events: {
            "c8ba0bb7-8a26-4646-a563-1e3f5363443e":
            {
                attendees: "Hendy, I the piglin slayer",
                end_date_time: "2020-10-28T8:03",
                name: "Minecraft party",
                notes: "fun with the bois",
                start_date_time: "2020-10-28T8:02",
                createdBy: "isaac234",
            },
            "c8653316-4850-4402-ae74-6ace0f6e634e":
            {
                attendees: "zach, aj, Spencer",
                end_date_time: "2020-07-20T8:04",
                name: "Destiny 2 Fun",
                notes: "Raids are cool",
                start_date_time: "2020-07-20T8:03",
                createdBy: "Dad",
            },

          }, 
          months: [
            "January",
            "Febuary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          isShown: false,
          // keys: []
          arrEvents: [],
          sortedEvents: {},
    }
    }
    // setKeys = (events) => {
    //     const keys = Object.keys(events)
    //     this.setState({keys: keys})
    // }
    
     
     splitDate = (uuid) => {
        // start date time
        var sdatetime = this.state.events[uuid]['start_date_time']
        var sall = sdatetime.split("-");
        var syear = sall[0]
        var smonth = sall[1]
        var sdayextra = sall[2]
        var stimall = sdayextra.toString().split("T");
        var sday = stimall[0]
        var stime = stimall[1]
        // end date time
        var edatetime = this.state.events[uuid]['end_date_time']
        var eall = edatetime.split('-');
        var eyear = eall[0]
        var emonth = eall[1]
        var edayextra = eall[2]
        var etimeall = edayextra.toString().split('T');
        var eday = etimeall[0]
        var etime = etimeall [1]

        var eventsinfo = [syear, smonth, sday, stime, eyear, emonth, eday, etime]
        return eventsinfo
    }
    // Year Day and time all are in proper form and don't need a function
    getSMonth = (value) => {
        var month = this.state.months[parseInt(value[1]) - 1]
        return month
    }
    getEMonth = (value) => {
        var month = this.state.months[parseInt(value[5]) - 1]
        return month
    }
    // Find the lowest year
    // Compare and place years in order
    // then get matching events with the same year
    // order them in terms of their months
    // 
    sortEvents = (uuid) => {
        const date = this.splitDate(uuid)
        let objSortEvents = {}
        const sortedEvents = this.state.sortedEvents
        // const event = this.state.events[uuid]
        // const uuidEvent = {[uuid]:event}
        // console.log(uuidEvent)
        objSortEvents = {...objSortEvents, ...{[date[0]]: {[date[1]]:{[date[2]]:{[uuid]:this.state.events[uuid]}}}}}
        var keysobjSortEvents = Object.keys(objSortEvents)
        var arrStateEvents = this.state.arrEvents
        var arrsortevent = {...arrStateEvents, ...objSortEvents}
        this.setState({arrEvents:arrStateEvents})
        console.log(arrsortevent)
        return objSortEvents
    }

    render() {
        return (
            <>
            <button onClick={() => this.CreateArrEvents()}>click here</button>
            <p>Events:</p>
            <ul>{Object.keys(this.state.events).map(uuid => {
                this.sortEvents(uuid)
                const event = this.state.events[uuid]
                return (
                    <> 
                    
                <BuildEvents 
                    isShown={this.state.isShown} 
                    months={this.state.months} 
                    event={event} 
                    sdate={this.splitDate(uuid)}/>
                </>
                )
                
            })}</ul>
            </>
        );
    } 
}

function BuildEvents(props) {
    const [ isShown, setisShown] = useState(false)
    return (
    <li
    onMouseEnter={() => setisShown(true)}
    onMouseLeave={() => setisShown(false)}
    >
        {props.event.name} - {props.sdate[3]} <br></br> 
        {/* <button onClick={() => setisShown(!isShown)}>toggle</button> */}
        {isShown && (
        <div>
          attendees: {props.event.attendees}<br></br>
          start time and date: {props.sdate[2]} {props.months[parseInt(props.sdate[1])-1]}, {props.sdate[0]}<br></br>
          end time and date: {props.sdate[6]} {props.months[parseInt(props.sdate[5])-1]}, {props.sdate[4]}<br></br>
          notes: {props.event.notes}<br></br>
          created by: {props.event.createdBy}<br></br><br></br>
        </div>
        )}
        <br></br>
    </li>
    )
        }
