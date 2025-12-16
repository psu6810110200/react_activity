import NoteForm from './component/NoteForm';
import NoteList from './component/NoteList';
import { useState } from 'react';
import type { Note } from './types';
import './App.css'; 

function App() {

  const [notes, setNotes] = useState<Note[]>([]);
  const addNote = (text: string) => {
  const newNote: Note = {
    id: Date.now(), 
    text: text,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <NoteForm onAdd={addNote}/>
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;