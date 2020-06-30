import React from 'react'
import { render } from 'react-dom';

export class Calendar extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        events: {
            "attendees": "Hendy, I the piglin slayer",
            "end_date_time": "2020-10-28T8:03",
            "name": "Minecraft party",
            "notes": "fun with the bois",
            "start_date_time": "2020-10-28T8:02",
            "uuid": "c8ba0bb7-8a26-4646-a563-1e3f5363443e",
            "createdBy": "isaac234",
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
          ]
    }
    }
    splitDate = value => {
        // start date time
        var sdatetime = this.state.events['start_date_time']
        var sall = sdatetime.split("-");
        var syear = sall[0]
        var smonth = sall[1]
        var sdayextra = sall[2]
        var stimall = sdayextra.toString().split("T");
        var sday = stimall[0]
        var stime = stimall[1]
        // end date time
        var edatetime = this.state.events['end_date_time']
        var eall = edatetime.split('-');
        var eyear = eall[0]
        var emonth = eall[1]
        var edayextra = eall[2]
        var etimeall = edayextra.toString().split('T');
        var eday = etimeall[0]
        var etime = etimeall [1]
        var eventsinfo = [syear, smonth, sday, stime, eyear, emonth, eday, etime]
        console.log(eventsinfo)
    }
    render() {
        return (
            <>
            <p onClick={this.splitDate}>Events:</p>
            <ul>
            {this.state.months.map(item => {
                return (<TestMonth month={item} />)
            })}
            </ul>
            </>
        );
    } 
}
function TestMonth (props) {
    return (<li class="month">{props.month}</li>)
}