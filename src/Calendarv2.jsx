import React from 'react';
import { render } from 'react-dom';
import ItemList from './Components/ItemList';
import AddButton from './Components/AddButton';
import EditButton from './Components/EditButton';
import AddEditButton from './Components/AddEditForm';
import { Dialog } from '@material-ui/core';
import FormDialog from './Components/Dialog';

//make edit button a dialogue for material instead of button at top, add to each item
//Edit and add control same component, have value for extra fields depending on button


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
          targetedEvent:"",
          isDetailShown:false,
          isAddShown: false,
          isEditShown: false,
          isFormShown: false,
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
    this.setState({emptyEvent:this.state.events[id]})
}
setIsAddShown = (value) => {
    this.setState({isAddShown:!value})
}
setIsFormShown = (value) => {
    this.setState({isFormShown:!value})
}
setIsEditShown = (value) => {
    this.setState({isEditShown:!value})
}
 handleEditSubmit = (newEvent) => {
    let events = {...this.state.events}
    const uuid = newEvent["uuid"]
    events[uuid] = newEvent
    this.setState({events:events})
    this.setState({isEditShown:!this.state.isEditShown})
  }
handleAddSubmit = (newEvent) => {
    let events = this.state.events
    const uuid = newEvent["uuid"]
    events[uuid] = newEvent
    this.setState({events:events})
    this.setState({isAddShown:false})
    this.setState({isFormShown: false})

  }
render() {
    return (
        <>
        <FormDialog 
            emptyEvent={this.state.emptyEvent}
            setIsEditShown={this.setIsEditShown}
            handleEditSubmit={this.handleEditSubmit}
            isEditShown={this.state.isEditShown}
            targetedEvent={this.state.targetedEvent}
            isFormShown={this.state.isFormShown}
            setIsFormShown={this.setIsFormShown}
            setIsAddShown={this.setIsAddShown}
        />
    <AddButton
    handleAddSubmit={this.handleAddSubmit}
    setIsAddShown={this.setIsAddShown} 
    isAddShown={this.state.isAddShown}
    isFormShown={this.state.isFormShown}
    setIsFormShown={this.setIsFormShown}
    />
    <EditButton
    emptyEvent={this.state.emptyEvent}
    setIsEditShown={this.setIsEditShown}
    handleEditSubmit={this.handleEditSubmit}
    isEditShown={this.state.isEditShown}
    targetedEvent={this.state.targetedEvent}
    isFormShown={this.state.isFormShown}
    setIsFormShown={this.setIsFormShown}
    setIsAddShown={this.setIsAddShown}
    /> 
    <ItemList 
    targetedEvent={this.state.targetedEvent}
    isDetailShown={this.state.isDetailShown} 
    handleDetailClick={this.handleDetailClick}
    months={this.state.months} 
    isEditShown={this.state.isEditShown} 
    events={this.state.events}
    />
    </>
    )
}
}