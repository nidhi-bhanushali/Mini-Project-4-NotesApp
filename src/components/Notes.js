import React , {useState , useEffect} from 'react';
import { Container } from '@material-ui/core';
import Modal from './Modal';

const Notes = () => {
    
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
            <div key = {index}> 
            <h1>{note.title}</h1>
            <h2>{note.desc}</h2>
            </div>)
            ) :
             console.log('hello')}
            <Modal addNote = {addNote}/>
        </Container >
    )
}

export default Notes
