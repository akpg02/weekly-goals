import React from "react";
import NewHabit from "../new-habit/new-habit";
import HabitItem from "../habit-item/habit-item";

import "./habits.css";

function Habits({
  habitsList,
  editItem,
  selectedItem,
  habit,
  editHabit,
  removeHabit,
  weekDayGoal,
  addHabit,
  totalHabitGoal,
  showHiddenHabit,
  submitHabit,
}) {
  return (
    <table className="tracker-table">
      <thead>
        <tr>
          <th>Habit</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
          <th>S</th>
          <th>Achieved</th>
          <th>Goal</th>
        </tr>
      </thead>
      <tbody>
        {habitsList &&
          habitsList.map((h) => {
            if (editItem && selectedItem.id === h.id) {
              return (
                <tr key={h.id}>
                  <NewHabit
                    habit={selectedItem}
                    newItem={habit}
                    edit={editItem}
                    addToList={addHabit}
                    submit={() => submitHabit(selectedItem.id)}
                  />
                </tr>
              );
            } else {
              return (
                <tr className="habit-row" key={h.id}>
                  <HabitItem
                    habit={h}
                    editHabit={editHabit}
                    removeHabit={removeHabit}
                    weekDayGoal={weekDayGoal}
                    totalGoal={totalHabitGoal}
                  />
                </tr>
              );
            }
          })}
        {showHiddenHabit && (
          <tr>
            <NewHabit
              habit={selectedItem}
              newItem={habit}
              edit={editItem}
              addToList={addHabit}
              submit={() => submitHabit(selectedItem.id)}
            />
          </tr>
        )}
        <tr>
          <td className="habit-totals" colSpan={8}>
            Total
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Habits;
