import NoteForm from './component/NoteForm';
import NoteList from './component/NoteList';
import { useState, useEffect } from 'react';
import type { Note } from './types';
import './App.css'; 

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  // 1. เพิ่มตัวแปรเช็คว่าโหลดข้อมูลเสร็จหรือยัง
  const [isLoading, setIsLoading] = useState(true);

  // 2. Load Data (ทำงานครั้งแรกครั้งเดียว)
  useEffect(() => {
    const saved = localStorage.getItem('notes');
    if (saved) {
      setNotes(JSON.parse(saved) as Note[]);
    }

    setIsLoading(false);
  }, []);

  // 3. Save Data (ทำงานเมื่อ notes เปลี่ยนแปลง)
  useEffect(() => {
    // เช็คว่าถ้าโหลดเสร็จแล้ว ค่อยบันทึก
    if (!isLoading) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes, isLoading]); // เพิ่ม isLoading 

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(), 
      text: text,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <NoteForm onAdd={addNote}/>
      <NoteList notes={notes} onDelete={deleteNote}/>
    </div>
  );
}

export default App;