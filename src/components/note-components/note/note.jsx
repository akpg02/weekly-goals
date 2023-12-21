import React from "react";
import "./note.css";

function Note({ id, day, deleteNote, text }) {
  return (
    <div className="day-goals">
      <p className="title">{day || "Test"}</p>
      <div className="goals-area">
        <div className="note-body" name={` ${day}-goal`} id={`${day}-goal`}>
          {text}
        </div>
        <div className="day-goals-footer">
          <span
            className="material-symbols-rounded remove"
            onClick={() => deleteNote(id)}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default Note;
