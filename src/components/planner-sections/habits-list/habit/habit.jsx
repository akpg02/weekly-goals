import React from "react";
import "./habit.css";

function Habit({ habit, editHabit, removeHabit, weekDayGoal, totalGoal }) {
  return (
    <>
      <td data-aria-label="Habit">
        <input type="text" value={habit.habit} contentEditable="false" />
        <div className="options">
          <span
            className="material-symbols-rounded edit"
            onClick={() => editHabit(habit)}
          >
            edit
          </span>
          <span
            className="material-symbols-rounded remove"
            onClick={() => removeHabit(habit)}
          >
            delete
          </span>
        </div>
      </td>
      <td data-aria-label="M">
        <input
          checked={habit.mon}
          type="checkbox"
          name="mon"
          id="mon"
          onChange={(e) => weekDayGoal(e)}
        ></input>
      </td>
      <td data-aria-label="T">
        <input
          checked={habit.tue}
          type="checkbox"
          name="tue"
          id="tue"
          onChange={(e) => weekDayGoal(e)}
        ></input>
      </td>
      <td data-aria-label="W">
        <input
          checked={habit.wed}
          type="checkbox"
          name="wed"
          id="wed"
          onChange={(e) => weekDayGoal(e)}
        ></input>
      </td>
      <td data-aria-label="T">
        <input
          checked={habit.thu}
          type="checkbox"
          name="thu"
          id="thu"
          onChange={(e) => weekDayGoal(e)}
        ></input>
      </td>
      <td data-aria-label="F">
        <input
          checked={habit.fri}
          type="checkbox"
          name="fri"
          id="fri"
          onChange={(e) => weekDayGoal(e)}
        ></input>
      </td>
      <td data-aria-label="S">
        <input
          checked={habit.sat}
          type="checkbox"
          name="sat"
          id="sat"
          onChange={(e) => weekDayGoal(e)}
        ></input>
      </td>
      <td data-aria-label="S">
        <input
          checked={habit.sun}
          type="checkbox"
          name="sun"
          id="sun"
          onChange={(e) => weekDayGoal(e)}
        ></input>
      </td>
      <td data-aria-label="Achieved">
        <input type="number" value={habit.achieve} min="0" />
      </td>
      <td data-aria-label="Goal">
        <input type="number" min="0" value={habit.goal || 0}></input>
      </td>
      {/* <td data-aria-label="Total">
        <input type="number" min="0" value={totalGoal || 0} />
      </td> */}
    </>
  );
}

export default Habit;
