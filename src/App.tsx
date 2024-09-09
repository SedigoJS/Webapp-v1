import React from 'react';
import { useState } from 'react';
import './App.css';

type Note = {
  id: number;
  title: string;
  content: string; 
}

function App() {
  const[notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "note title 1",
      content: "content 1",
    },
    {
      id: 2,
      title: "note title 2",
      content: "content 2",
    },
    {
      id: 3,
      title: "note title 3",
      content: "content 3",
    },
    {
      id: 4,
      title: "note title 4",
      content: "content 4",
    },
  ]);

  const[title, setTitle] = useState("");
  const[content, setContent] = useState("");

  const handleSubmit = (
    event: React.FormEvent
  ) => {event.preventDefault();
    console.log("title: ", title)
    console.log("content: ", content)

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content
    }

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <form className="note-form" onSubmit={(event) => handleSubmit(event)}>
        <input 
        value= {title}
        onChange={(event)=>
          setTitle(event.target.value)
        }
        placeholder="title" required></input>
          <textarea 
          value= {content}
          onChange={(content)=> 
            setContent(content.target.value)
          }
          placeholder="content" rows={10} required></textarea>
          <button type="submit">Add note</button>
      </form>
        <div className="note-grid">
          {notes.map((note)=>(
            <div className="note-item">
            <div className="note-header">
              <button>X</button>
            </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          </div>
        ))}  
      </div>
    </div>
  )
}

export default App