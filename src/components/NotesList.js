import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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

const NotesList = ({notes}) => {
    console.log(notes)
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={2}>
            <Grid item xs>
            { notes !== [] ? (notes.map((note,index) => (
                <Card className={classes.root} key={index} > 
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {note.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {note.desc}
                </Typography>
                </CardContent>
                </Card>)
                )) : <h2>No notes</h2>}
             </Grid>
            </Grid>
        </div>
    )
}

export default NotesList
