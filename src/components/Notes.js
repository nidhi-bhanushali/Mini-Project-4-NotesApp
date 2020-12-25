import React , {useState , useEffect} from 'react';
import { Container } from '@material-ui/core';
import Modal from './Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NotesList from './NotesList'

const useStyles = makeStyles({
    textfield : {
      '& > *': {
        // margin: theme.spacing(1),
        width: '100%', 
      },
    }
  });

const Notes = () => {
    const classes = useStyles();
    const [notes , setNotes] = useState([]);
    const [searchNote, setSearchNote] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
      setSearchNote(e.target.value);
    }
  

    const addNote = (note) => {
        const newNotes = ([...notes , note])
        setNotes(newNotes)
        localStorage.setItem('notes', JSON.stringify(newNotes));
    }


  
    useEffect(() => {
        const noteEl = JSON.parse(localStorage.getItem("notes"));
        if (noteEl) {
          setNotes(noteEl);

          const result = noteEl.filter(({title}) => title.toLowerCase().includes(searchNote.toLowerCase())
            // console.log(note.title)
          );
          console.log(result)
          setResults(result);
        }
      }, [searchNote])

    return (
        <div>
          <form className={classes.textfield} 
             noValidate 
             autoComplete="off" 
             style={{ margin: 20 }}
             value={searchNote}
             onChange={onChange}
             >
             <TextField id="standard-basic" label="Search note" />
           </form>
        
        <Container maxWidth = 'sm' >
            {
            searchNote ?  <NotesList notes = {results}/> : <NotesList notes = {notes}/>}
            <Modal addNote = {addNote}/>
        </Container >
        </div>
    )
}



export default Notes
