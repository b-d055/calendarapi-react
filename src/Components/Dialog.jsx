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

export default function FormDialog(props) {
    const { value:nameValue, bind:nameBind, reset:nameReset } = useInput('');
    const { value:attendeesValue, bind:attendeesBind, reset:attendeesReset } = useInput('');
    const { value:startValue, bind:startBind, reset:startReset } = useInput('');
    const { value:endValue, bind:endBind, reset:endReset } = useInput('');
    const { value:notesValue, bind:notesBind, reset:notesReset } = useInput('');
    const { value:createdByValue, bind:createdByBind, reset:createdByReset } = useInput('');
    const { value:uuidValue, bind:uuidBind, reset:uuidReset } = useInput('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Event
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Event</DialogTitle>
        <DialogContent>
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
            <DateAndTimePickers bind={startBind} label="Start Date and Time" /><br></br>
            <DateAndTimePickers bind={endBind} label="End Date and Time" /><br></br>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
