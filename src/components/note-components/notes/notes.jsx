import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import Note from "../note/note";

import "./notes.css";
import CreateNote from "../create-note/create-note";

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: uuid(),
      day: "Mon",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at?`,
    },
    {
      id: uuid(),
      day: "Tue",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at?`,
    },
    {
      id: uuid(),
      day: "Wed",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at?`,
    },
    {
      id: uuid(),
      day: "Thu",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at?`,
    },
    {
      id: uuid(),
      day: "Fri",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at?`,
    },
    {
      id: uuid(),
      day: "Weekend",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at?`,
    },
  ]);

  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prev) => [...prev, { id: uuid(), text: inputText }]);
    setInputText("");
  };

  const deleteNote = (id) => {
    const filtered = notes.filter((n) => notes.id === id);
    setNotes(filtered);
  };

  const editNote = (id) => {};

  return (
    <div className="daily-goals-section">
      {notes.map((n) => (
        <Note
          key={n.id}
          id={n.id}
          day={n.day}
          text={n.text}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;
