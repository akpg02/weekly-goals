import React from "react";
import "./goal-item.css";

function GoalItem({
  goal,
  completedGoal,
  removeWeeklyGoal,
  completed,
  editGoal,
}) {
  return (
    <div className="goal-item">
      <label
        htmlFor={goal.goal}
        className={`goal-desc ${completed ? "completed" : ""}`}
      >
        {goal.goal}
      </label>
      <div className="options">
        <input
          type="checkbox"
          name="goal-desc"
          value={goal.goal}
          onChange={() => completedGoal(goal.id)}
        />
        <span
          className="material-symbols-rounded edit"
          onClick={() => editGoal(goal)}
        >
          edit
        </span>
        <span
          className="material-symbols-rounded remove"
          onClick={() => removeWeeklyGoal(goal)}
        >
          delete
        </span>
      </div>
    </div>
  );
}

export default GoalItem;
