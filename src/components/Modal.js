
import React , { useState } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
      },
  }));
  

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function Modal({addNote}) {
    const classes = useStyles();
    // const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [note , setNote] = useState({
      title: '',
      desc: ''
    });
  

    const { title , desc } = note

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setNote({...note , [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    if(title === '' || desc === '') {
      alert('Enter title and description')
  }else{
      console.log('Register submit');
      console.log(note);
      addNote(note);
  }  
  };



  return (
    <div className={classes.root}>
      <Fab color="primary" 
      aria-label="add" 
      size = "medium" 
      onClick={handleClickOpen}
      className ={classes.fab}>
        <AddIcon />
        </Fab> 

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Notes
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add Notes for better management
          </DialogContentText>
          <form noValidate autoComplete="off">
              <TextField 
              id="standard-basic" 
              label="Note Title" 
              fullWidth
              style={{ margin: 8 }}
              onChange={onChange}
              name="title"
              value = {title}
              />

              <TextField
              id="standard-textarea"
              label="Note Description"
              multiline
              fullWidth
              style={{ margin: 8 }}
              onChange={onChange}
              name="desc"
              value = {desc}

        />
            </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
