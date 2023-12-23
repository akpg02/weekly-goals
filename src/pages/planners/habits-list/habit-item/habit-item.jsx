import React from "react";
import "./habit-item.css";

function HabitItem({ habit, editHabit, removeHabit, weekDayGoal, totalGoal }) {
  return (
    <>
      <td>
        <div className="label">
          <label htmlFor={habit.habit} className={`habit-desc `}>
            {habit.habit}
          </label>
        </div>
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
      <td className="dayOfWeek">
        <input
          checked={habit.mon}
          type="checkbox"
          name="mon"
          id="mon"
          onChange={(e) => weekDayGoal(e)}
        />
      </td>
      <td className="dayOfWeek">
        <input
          checked={habit.tue}
          type="checkbox"
          name="tue"
          id="tue"
          onChange={(e) => weekDayGoal(e)}
        />
      </td>
      <td className="dayOfWeek">
        <input
          checked={habit.wed}
          type="checkbox"
          name="wed"
          id="wed"
          onChange={(e) => weekDayGoal(e)}
        />
      </td>
      <td className="dayOfWeek">
        <input
          checked={habit.thu}
          type="checkbox"
          name="thu"
          id="thu"
          onChange={(e) => weekDayGoal(e)}
        />
      </td>
      <td className="dayOfWeek">
        <input
          checked={habit.fri}
          type="checkbox"
          name="fri"
          id="fri"
          onChange={(e) => weekDayGoal(e)}
        />
      </td>
      <td className="dayOfWeek">
        <input
          checked={habit.sat}
          type="checkbox"
          name="sat"
          id="sat"
          onChange={(e) => weekDayGoal(e)}
        />
      </td>
      <td className="dayOfWeek">
        <input
          checked={habit.sun}
          type="checkbox"
          name="sun"
          id="sun"
          onChange={(e) => weekDayGoal(e)}
        />
      </td>
      <td>
        <span>{habit.achieved}</span>
      </td>
      <td>
        <input
          value={habit.goal || 0}
          type="number"
          name="habit-goal"
          id="habit-goal"
          min={0}
          onChange={(e) => totalGoal(e)}
        />
      </td>
    </>
  );
}

export default HabitItem;
