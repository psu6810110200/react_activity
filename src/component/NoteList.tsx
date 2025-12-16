import type{ Note } from '../types';

interface NoteListProps { notes: Note[]; onDelete: (id: number) => void;}


const NoteList = ({ notes, onDelete }: NoteListProps) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
          <button 
            onClick={() => onDelete(note.id)} 
            style={{ marginLeft: '10px', background: '#ff4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;