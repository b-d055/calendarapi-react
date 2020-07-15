import React, { useState } from 'react'
import { render } from 'react-dom';

// full library
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
            "1000000-4850-4402-ae74-6ace0f6e634e":
            {
                attendees: "the winners",
                end_date_time: "2021-01-01T8:04",
                name: "Did I finally beat the sorting",
                notes: "Did I actually do it?",
                start_date_time: "2021-01-02T8:03",
                createdBy: "Zach",
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
          targetedEvent:null,
          isAddShown: false,
          isEditShown: false,
          
          // keys: []
        sortedEvents:{},
        addIsShow: false,
        attendees: "Zach, Toby, the gang",
        end_date_time: "2021-01-02T8:12",
        name: "The official test of add event",
        notes: "I really hope that this all comes together",
        start_date_time: "2021-01-01T8:06",
        createdBy: "Zach",
        uuid:"101010101010101010101010101",
    }
    this.sortEvents()
    }
    // setKeys = (events) => {
    //     const keys = Object.keys(events)
    //     this.setState({keys: keys})
    // }
    
     componentDidMount = () => {
       this.setState({sortedEvents:this.sortEvents(this.state.events)})

     }
     splitDate = (uuid) => {
        // start date time
        var sdatetime = this.state.events[uuid]['start_date_time']
        var sall = sdatetime.split("-")
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
        var etimeall = edayextra.toString().split('T')
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

//  loop over all events this.state.events -> get year month day
//  Loop over sorted events to see if year exists if not make it
//  sub array of year for months -> sub array of days -> populate event and make sure it doesn't exist

    isArrayItemUnique = (array) => {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
                }
            }
            return a;
    }
    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
      }
    sortEvents = (events) => {

        const sortEvents = this.state.sortedEvents
        let totalSeperateArray = []
        Object.keys(this.state.events).map(uuid => {
            let tempArray = this.splitDate(uuid)
            let objEvent = this.state.events[uuid]
            objEvent['uuid'] = uuid
            tempArray.push(objEvent)
            totalSeperateArray.push(tempArray)
        })
        let totalDict = {}  
        totalSeperateArray.forEach(event => {
            if (this.isEmpty){
                console.log(event)
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
        })
        return totalDict

        // loop and sort years
        

     } 
     isAddShown = () => {
        let value = this.state.isAddShown
        value = !value
        this.setState({isAddShown:value})
     }
     handleChange = (event) => {
        const id = event.target.id
        this.setState({[id]: event.target.value});
     }
     handleSubmit = (event) => {
        event.preventDefault(); 
        const newEvent = {
            attendees: this.state.attendees,
            end_date_time: this.state.end_date_time,
            name: this.state.name,
            notes: this.state.notes,
            start_date_time: this.state.start_date_time,
            createdBy: this.state.createdBy,
        }
        let events = this.state.events
        const uuid = this.state.uuid
        events[uuid] = newEvent
        this.setState({events:events})
      }


    render() {
        return (
            <>
            <button onClick={() => this.isAddShown()}>Add Event</button>
            {this.state.isAddShown && <div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" id='name' value={this.state.name} onChange={this.handleChange} placeholder="Event Name" />
            <input type="text"id='attendees' value={this.state.attendees} onChange={this.handleChange} placeholder="Attendees" />
            <input type="text" id='start_date_time' value={this.state.start_date_time} onChange={this.handleChange} placeholder="Start Date and Time" />
            <input type="text" id='end_date_time' value={this.state.end_date_time} onChange={this.handleChange} placeholder="End Date and Time" />
            <input type="text" id='notes' value={this.state.notes} onChange={this.handleChange} placeholder="Notes" />
            <input type="text" id='createdBy' value={this.state.createdBy} onChange={this.handleChange} placeholder="Created By" />
            <input type="text" id='uuid' value={this.state.uuid} onChange={this.handleChange} placeholder="uuid" />
            <input type="submit" value="Submit" />
            </form>
                </div>}
            <p>Events:</p>
            <ul>{
                    <>  
                    {/* <EditEvent targetEvent={this.state.targetedEvent} />  */}
                <BuildEvents 
                    isEditShown={this.state.isEditShown}
                    isAddShown={this.state.isAddShown} 
                    months={this.state.months} 
                    eventObj={this.sortEvents()} 
                    event={this.state.events}/>
                </>
                
                
            }</ul>
            </>
        );
    } 
}
function BuildEvents(props) {
    const [ isEditShown, setIsEditShown] = useState(false)
    const [ isAddShown, setisAddShown] = useState(false)
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
                let starttimesort = []
                sortuuids.forEach(id => {
                    const [waste, stime] = eventObj[year][month][day][sortuuids]['start_date_time'].split('T')
                    const name = eventObj[year][month][day][sortuuids]['name']
                    const attendees = eventObj[year][month][day][sortuuids]['attendees']
                    const notes = eventObj[year][month][day][sortuuids]['notes']
                    const start_date_time = eventObj[year][month][day][sortuuids]['start_date_time']
                    const end_date_time = eventObj[year][month][day][sortuuids]['end_date_time']
                    starttimesort.push(stime)
                    starttimesort = starttimesort.sort((a,b) => a-b)
                    starttimesort.forEach(time => {
                        let timeToShow = 
                        <>
                        <li 
                        onMouseEnter={() => setIsEditShown(id)} 
                        // onClick={() => <EditEvent id={id} />}
                        onMouseLeave={() => setIsEditShown(false)}
                        >
                            {name} - {time}
                            {isEditShown === id && 
                            <div>
                            <p>attendees: {attendees}</p>
                            <p>notes: {notes}</p>
                            <p>start date and time: {start_date_time}</p>
                            <p>end date and time: {end_date_time}</p>
                            </div>}
                        </li>
                        </>
                        toShow.push(timeToShow)
                    })     
                })
            })
        })
    })
    return toShow
}