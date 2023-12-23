import React from "react";
import GoalItem from "../goal-item/goal-item";
import NewGoal from "../new-goal/new-goal";
import "./goals.css";

function Goals({
  weeklyGoals,
  editItem,
  selectedItem,
  weekGoal,
  addToWeekGoals,
  submitWeekGoal,
  completedGoal,
  removeWeeklyGoal,
  editWeekGoal,
  showHiddenGoal,
}) {
  return (
    <div className="goals-list-group">
      <ol className="center">
        {weeklyGoals &&
          weeklyGoals.map((g) => {
            if (editItem && selectedItem.id === g.id) {
              return (
                <li key={g.id}>
                  <NewGoal
                    newItem={weekGoal}
                    edit={editItem}
                    addToList={addToWeekGoals}
                    submit={() => submitWeekGoal(selectedItem.id)}
                  />
                </li>
              );
            } else {
              return (
                <li key={g.id}>
                  <GoalItem
                    key={g.id}
                    goal={g}
                    completedGoal={() => completedGoal(g.id)}
                    removeWeeklyGoal={removeWeeklyGoal}
                    completed={g.completed}
                    editGoal={editWeekGoal}
                  />
                </li>
              );
            }
          })}
        {showHiddenGoal && (
          <li>
            <NewGoal
              addToList={addToWeekGoals}
              newItem={weekGoal}
              submit={submitWeekGoal}
              editItem={editItem}
            />
          </li>
        )}
      </ol>
    </div>
  );
}

export default Goals;
