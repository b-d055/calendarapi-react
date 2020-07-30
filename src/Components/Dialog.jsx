import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateAndTimePickers from './DatePicker';
import {useInput} from '../Hook/useInputHook';
import militaryToStandard from './Helper'

export default function FormDialog(props) {

    const { setValue:nameSetValue, value:nameValue, bind:nameBind, reset:nameReset } = useInput('');
    const { setValue:attendeesSetValue, value:attendeesValue, bind:attendeesBind, reset:attendeesReset } = useInput('');
    const { setValue:startSetValue, value:startValue, bind:startBind, reset:startReset } = useInput('');
    const { setValue:endSetValue, value:endValue, bind:endBind, reset:endReset } = useInput('');
    const { setValue:notesSetValue, value:notesValue, bind:notesBind, reset:notesReset } = useInput('');
    const { value:createdByValue, bind:createdByBind, reset:createdByReset } = useInput('');
    const { value:uuidValue, bind:uuidBind, reset:uuidReset } = useInput('');
    const handleClickOpen = props.handleClickOpen
    const handleClose = props.handleClose

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('hellos')
      const newEvent = {
          attendees:attendeesValue,
          name:nameValue,
          start_date_time:startValue,
          end_date_time:endValue,
          notes:notesValue,
          createdBy: createdByValue,
          uuid:uuidValue,
      }
      nameReset();
      attendeesReset();
      startReset();
      endReset();
      notesReset();
      createdByReset();
      uuidReset();
      props.handleAddSubmit(newEvent)
  }
  const setValue = () => {
    nameSetValue(props.emptyEvent['name'])
    attendeesSetValue(props.emptyEvent['attendees'])
    startSetValue(militaryToStandard(props.emptyEvent['start_date_time']))
    endSetValue(militaryToStandard(props.emptyEvent['end_date_time']))
    notesSetValue(props.emptyEvent['notes'])
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => {
        handleClickOpen()
        props.setIsAddShown(false)
        }}>
        Add Event
      </Button>
      <Dialog 
      open={props.Open} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title">
        <DialogContent>
      <DialogTitle id="form-dialog-title">{props.isAddShown ? 'Add Event':'Edit Event'}</DialogTitle>
          <button hidden={props.isAddShown ? true:false} onClick={setValue}>Load Event</button>
          <form onSubmit={handleSubmit} id='DialogForm' >
          <TextField
            {...nameBind}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            {...attendeesBind}
            autoFocus
            margin="dense"
            id="attendees"
            label="Attendees"
            type="text"
            fullWidth
          />
          <DateAndTimePickers 
              emptyEvent={props.emptyEvent} 
              bind={startBind} 
              label="Start Date and Time" /><br></br>
          <DateAndTimePickers 
              emptyEvent={props.emptyEvent} 
              bind={endBind} 
              label="End Date and Time" /><br></br>
          <TextField
            {...notesBind}
            autoFocus
            margin="dense"
            id="notes"
            label="Notes"
            type="text"
            fullWidth
          />
          {props.isAddShown && <div>
            <TextField 
              autoFocus
              margin="dense"
              id="createdBy"
              label="Created By"
              type="text"
              fullWidth
            />
            <TextField 
              autoFocus
              margin="dense"
              id="uuid"
              label="uuid"
              type="text"
              fullWidth
            />
                </div>
                }
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <input type="submit" form="DialogForm" onClick={handleClose} value="Submit" color="primary"/>
        </DialogActions>
      </Dialog>
    </div>
  );
}
