import React from "react";
import "./create-note.css";

function CreateNote({ day, textHandler, saveHandler, inputText }) {
  const charLimit = 300;
  const charLeft = charLimit - inputText.length;

  return (
    <div className="day-goals">
      <p className="title">{day || "Test"}</p>
      <div className="goals-area">
        <textarea
          placeholder="Enter goals..."
          onChange={textHandler}
          value={inputText}
          name={`${day}-goal`}
          id={`${day}-goal`}
          maxLength={charLimit}
        ></textarea>
        <div className="day-goals-footer">
          <span className="charleft"> {charLeft} left </span>
          <button className="save-goal" onClick={saveHandler}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
