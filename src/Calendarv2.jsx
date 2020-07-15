import React from 'react'
import { render } from 'react-dom';
import Item from './Components/Item'
import AddButton from './Components/AddButton';
import EditButton from './Components/EditButton'

export default class Calendar extends React.Component {
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
          targetedEvent:"c8ba0bb7-8a26-4646-a563-1e3f5363443e",
          isDetailShown:false,
          isAddShown: false,
          isEditShown: false,
        emptyEvent:{},

        sortedEvents:{},
        attendees: "Zach, Toby, the gang",
        end_date_time: "2021-01-02T8:12",
        name: "The official test of add event",
        notes: "I really hope that this all comes together",
        start_date_time: "2021-01-01T8:06",
        createdBy: "Zach",
        uuid:"101010101010101010101010101",
    }
}
handleDetailClick = (id) => {
    this.setState({targetedEvent: id})
    this.setEmptyEvent(this.state.events[id])
}
setIsAddShown = (value) => {
    this.setState({isAddShown:!value})
}
setIsEditShown = (value) => {
    this.setState({isEditShown:!value})
}
setEmptyEvent = (value) => {
    this.setState({emptyEvent:value})
}
handleChange = (event) => {
    const id = event.target.id
    this.setState({[id]: event.target.value});
 }
 handleEditChange = (event) => {
    const id = event.target.id
    const emptyEvent = {...this.state.emptyEvent}
    emptyEvent[id] = event.target.value
    console.log(emptyEvent[id])
    this.setState({emptyEvent: emptyEvent});
 }
 handleEditSubmit = (event) => (newEvent) => {
    event.preventDefault();
    let newerEvent = {...this.state.events}
    newerEvent = {[newEvent['uuid']]:newEvent}
    this.setState({events:newerEvent})
    console.log(newerEvent)
    this.setIsEditShown(this.state.isEditShown)
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
    this.setState({isAddShown:!this.state.isAddShown})
  }
render() {
    return (
    <>
    <AddButton
    handleChange={this.handleChange} 
    handleSubmit={this.handleSubmit}
    setIsAddShown={this.setIsAddShown} 
    isAddShown={this.state.isAddShown}
    name={this.state.name}
    notes={this.state.notes}
    start_date_time={this.state.start_date_time}
    attendees={this.state.attendees}
    createdBy={this.state.createdBy}
    uuid={this.state.uuid}
    end_date_time={this.state.end_date_time} 
    />
    <EditButton
    setEmptyEvent={this.setEmptyEvent}
    emptyEvent={this.state.emptyEvent}
    handleEditChange={this.handleEditChange}
    setIsEditShown={this.setIsEditShown}
    events={this.state.events}
    handleEditSubmit={this.handleEditChange}
    isEditShown={this.state.isEditShown}
    targetedEvent={this.state.targetedEvent}
    /> 
    <ul>
    <Item 
    targetedEvent={this.state.targetedEvent}
    isDetailShown={this.state.isDetailShown} 
    handleDetailClick={this.handleDetailClick}
    months={this.state.months} 
    isEditShown={this.state.isEditShown} 
    events={this.state.events}
    />
    </ul>
    </>
    )
}
}