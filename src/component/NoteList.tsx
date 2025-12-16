import type{ Note } from '../types';

interface NoteListProps { notes: Note[]; }

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
        </li>
      ))}
    </ul>
  );
}

export default NoteList;