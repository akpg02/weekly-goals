import React from "react";
import "./habits.css";
import NewHabit from "../habit-new/new-habit";
import Habit from "../habit/habit";

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
    <table className="habit-table">
      <thead>
        <tr>
          <th scope="col">Habit</th>
          <th scope="col">M</th>
          <th scope="col">T</th>
          <th scope="col">W</th>
          <th scope="col">T</th>
          <th scope="col">F</th>
          <th scope="col">S</th>
          <th scope="col">S</th>
          <th scope="col">ACHIEVED</th>
          <th scope="col">GOAL</th>
          {/* <th scope="col">TOTAL</th> */}
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
                <tr key={h.id}>
                  <Habit
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
      </tbody>
    </table>
  );
}

export default Habits;
