import React from "react";
import "./note.css";

function Note({ id, day, deleteNote, editNote, text }) {
  return (
    <div className="day-goals">
      <p className="title">{day || "Test"}</p>
      <div className="goals-area">
        <div
          className="note-body"
          name={` ${day}-goal`}
          id={`${day}-goal`}
          onClick={() => editNote(id)}
        >
          {text}
        </div>
        <div className="day-goals-footer note">
          <div className="options">
            {text.length > 0 && (
              <span
                className="material-symbols-rounded remove"
                onClick={() => deleteNote(id)}
              >
                delete
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
