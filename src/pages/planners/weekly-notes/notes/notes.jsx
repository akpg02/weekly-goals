import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import Note from "../note/note";

import "./notes.css";
import CreateNote from "../create-note/create-note";

function Notes() {
  const [edit, setEdit] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([
    {
      id: uuid(),
      day: "Mon",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
      id: uuid(),
      day: "Tue",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    },
    {
      id: uuid(),
      day: "Wed",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at? Lorem at?`,
    },
    {
      id: uuid(),
      day: "Thu",
      text: `Lorem ipsum dolor sit amet consectetur `,
    },
    {
      id: uuid(),
      day: "Fri",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at? Lorem?`,
    },
    {
      id: uuid(),
      day: "Weekend",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at?`,
    },
  ]);

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = (id) => {
    const updated = notes.map((n) =>
      n.id === id ? { ...n, text: inputText } : n
    );
    setNotes(updated);
    setEdit(false);
  };

  const deleteNote = (id) => {
    const updated = notes.map((n) => (n.id === id ? { ...n, text: "" } : n));
    setNotes(updated);
  };

  const editNote = (id) => {
    setEdit(true);
    setSelectedId(id);
    const filtered = notes.filter((n) => n.id === id);
    setInputText(filtered[0].text);
  };

  return (
    <div className="daily-goals-section">
      {notes.map((n) => {
        if (edit && n.id === selectedId) {
          return (
            <CreateNote
              textHandler={textHandler}
              saveHandler={saveHandler}
              inputText={inputText}
              day={n.day}
              id={n.id}
              key={n.id}
            />
          );
        } else {
          return (
            <Note
              key={n.id}
              id={n.id}
              day={n.day}
              text={n.text}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          );
        }
      })}
    </div>
  );
}

export default Notes;
