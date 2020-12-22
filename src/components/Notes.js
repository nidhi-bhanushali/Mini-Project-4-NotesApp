import React , {useState , useEffect} from 'react';
import { Container } from '@material-ui/core';
import Modal from './Modal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: 15,
      flexGrow: 1,
    },
    title: {
      fontSize: 14,
    },
  });

const Notes = () => {
    const classes = useStyles();
    const [notes , setNotes] = useState([]);

    const addNote = (note) => {
        const newNotes = ([...notes , note])
        setNotes(newNotes)
        localStorage.setItem('notes', JSON.stringify(newNotes));
    }

    useEffect(() => {
        const noteEl = JSON.parse(localStorage.getItem("notes"));
        if (noteEl) {
          setNotes(noteEl);
        }
      }, [])

    return (

        <Container maxWidth = 'sm' >
            {
            notes !== null ? notes.map((note,index) => (
            <Grid container spacing={2}>
            <Grid item xs>
            <Card className={classes.root} key={index} > 
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {note.title}
            </Typography>
            <Typography variant="body2" component="p">
                {note.desc}
            </Typography>
            </CardContent>
            </Card>
            </Grid>
            </Grid>)
            ) :
             console.log('hello')}
            <Modal addNote = {addNote}/>
        </Container >
    )
}

export default Notes
