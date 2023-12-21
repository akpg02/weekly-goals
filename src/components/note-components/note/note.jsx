import React from "react";
import "./note.css";

function Note({ id, day, deleteNote, editNote, text }) {
  return (
    <div className="day-goals">
      <p className="title">{day || "Test"}</p>
      <div className="goals-area">
        <div className="note-body" name={` ${day}-goal`} id={`${day}-goal`}>
          {text}
        </div>
        <div className="day-goals-footer note">
          <div className="options">
            <span
              className="material-symbols-rounded edit"
              onClick={() => editNote(id)}
            >
              edit
            </span>
            <span
              className="material-symbols-rounded remove"
              onClick={() => deleteNote(id)}
            >
              delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
