import React, { useState } from "react";
import GoalItem from "../goal-item/goal-item";
import TodoItem from "../todo-item/todo-item";
import Tooltip from "../../../components/tooltip/tooltip";
import NewItem from "../new-item/new-item";
import "./weekly.css";
import NewHabit from "../../new-habit/new-habit";
import HabitItem from "../habit-item/habit-item";

function Weekly() {
  const [weeklyGoals, setWeeklyGoals] = useState([
    { id: "03979fya8ivgaug", goal: "First Goal", completed: false },
    { id: "03979fya8405297", goal: "Second Goal", completed: false },
  ]);
  const [todoList, setTodoList] = useState([
    { id: "03979f09897oh", todo: "First Todo", completed: false },
    { id: "03979f0989iush", todo: "Second Todo", completed: false },
    { id: "03979f0989374i", todo: "Third Todo", completed: false },
    { id: "03979f098738ga", todo: "Fourth Todo", completed: false },
    { id: "03979fuihfavu8", todo: "Fifth Todo", completed: false },
  ]);
  const [habitsList, setHabitsList] = useState([
    {
      id: "ius97r8qw6r97roh",
      habit: "First Habit",
      mon: false,
      tue: false,
      wed: true,
      thu: true,
      fri: true,
      sat: true,
      sun: false,
      goal: 4,
    },
  ]);

  const [focus, setFocus] = useState("");
  const [todo, setTodo] = useState("");
  const [weekGoal, setWeekGoal] = useState("");
  const [habit, setHabit] = useState("");
  const [showHiddenGoal, setShowHiddenGoal] = useState(false);
  const [showHiddenTodo, setShowHiddenTodo] = useState(false);
  const [showHiddenHabit, setshowHiddenHabit] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const createID = (length) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  /** Focus */
  const handleFocus = (e) => {
    setFocus(e.target.value);
  };

  /** End of Focus */

  /**Goals */
  const completedGoal = (id) => {
    let temp = weeklyGoals.map((g) => {
      let item = {};
      if (g.id === id) {
        item = { ...g, completed: !g.completed };
      } else {
        item = { ...g };
      }
      return item;
    });
    setWeeklyGoals(temp);
  };

  const removeWeeklyGoal = (e) => {
    const filtered = weeklyGoals.filter((g) => g.id !== e.id);
    setWeeklyGoals(filtered);
  };

  const addToWeekGoals = (e) => {
    setWeekGoal(e.target.value);
  };

  const editWeekGoal = (g) => {
    setEditItem(true);
    setSelectedItem(g);
    setWeekGoal(g.goal);
  };

  const submitWeekGoal = (id) => {
    if (weekGoal.length > 0) {
      if (editItem) {
        const updated = weeklyGoals.map((g) => {
          if (g.id === id) {
            return { ...g, goal: weekGoal };
          } else {
            return g;
          }
        });
        setWeeklyGoals(updated);
        setEditItem(false);
        setWeekGoal("");
      } else {
        setWeeklyGoals([
          ...weeklyGoals,
          { id: createID(10), goal: weekGoal, completed: false },
        ]);
        setShowHiddenGoal(false);
        setWeekGoal("");
      }
    }
  };

  const goalPlus = () => {
    setShowHiddenGoal(!showHiddenGoal);
    setEditItem(false);
  };
  /** End of Goals */

  /** Todo  */
  const addtoTodoList = (e) => {
    setTodo(e.target.value);
  };

  const editTodo = (t) => {
    setEditItem(true);
    setSelectedItem(t);
    setTodo(t.todo);
  };

  const addTodo = (e) => {
    setTodo(e.target.value);
  };

  const submitTodo = (id) => {
    if (todo.length > 0) {
      if (editItem) {
        const updated = todoList.map((t) => {
          if (t.id === id) {
            return { ...t, todo: todo };
          } else {
            return t;
          }
        });
        setTodoList(updated);
        setEditItem(false);
        setTodo("");
      } else {
        setTodoList([
          ...todoList,
          { id: createID(10), todo: todo, completed: false },
        ]);
        setTodo("");
        setShowHiddenTodo(false);
      }
    }
  };

  const completedTodo = (id) => {
    let temp = todoList.map((t) => {
      let item = {};
      if (t.id === id) {
        item = { ...t, completed: !t.completed };
      } else {
        item = { ...t };
      }
      return item;
    });
    setTodoList(temp);
  };

  const removeTodo = (e) => {
    const filtered = todoList.filter((t) => t.id !== e.id);
    setTodoList(filtered);
  };

  const todoPlus = () => {
    setShowHiddenTodo(!showHiddenTodo);
    setEditItem(false);
  };

  /** End of Todo  */

  /** Habit */

  const editHabit = (h) => {
    setEditItem(true);
    setSelectedItem(h);
    setHabit(h.habit);
  };

  const removeHabit = (e) => {
    const filtered = habitsList.filter((h) => h.id !== e.id);
    setHabitsList(filtered);
  };

  const submitHabit = (id) => {
    if (habit.length > 0) {
      if (editItem) {
        const updated = habitsList.map((h) => {
          if (h.id === id) {
            return { ...h, habit: habit };
          } else {
            return h;
          }
        });
        setHabitsList(updated);
        setEditItem(false);
        setHabit("");
      } else {
        setHabitsList([
          ...habitsList,
          {
            id: createID(10),
            habit: habit,
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
            goal: 0,
          },
        ]);
        setHabit("");
        setshowHiddenHabit(false);
      }
    }
  };

  const habitPlus = () => {
    setshowHiddenHabit(!showHiddenHabit);
    setEditItem(false);
  };

  const addHabit = (e) => {
    setHabit(e.target.value);
  };

  const weekDayGoal = (e) => {};

  const totalHabitGoal = (e) => {};

  /** End of Habit */

  return (
    <>
      <section className="weekly-goals">
        <div className="week-of-year">
          <p>Week of: </p>
        </div>
        <div className="weekly-focus">
          <span className="goals title">Weekly Focus:</span>
          <Tooltip
            className="tooltip-icon"
            content="Provide an objective for the week."
            direction="right"
          >
            <span className="material-symbols-rounded help">help</span>
          </Tooltip>
          <input
            type="text"
            name="focus"
            value={focus}
            onChange={handleFocus}
          />
        </div>
        <div className="goals-todo">
          <div className="goals">
            <div className="help-wrapper">
              <span className="goals title">Weekly Goals</span>
              <Tooltip
                className="tooltip-icon"
                content="Enter your weekly goals here"
                direction="top"
              >
                <span className="material-symbols-rounded help">help</span>
              </Tooltip>
            </div>
            <div className="goals-list-group">
              <ol className="center">
                {weeklyGoals &&
                  weeklyGoals.map((g) => {
                    if (editItem && selectedItem.id === g.id) {
                      return (
                        <li key={g.id}>
                          <NewItem
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
                    <NewItem
                      addToList={addToWeekGoals}
                      newItem={weekGoal}
                      submit={submitWeekGoal}
                      editItem={editItem}
                    />
                  </li>
                )}
              </ol>
            </div>
            <div className="plus" onClick={goalPlus}>
              <span className="material-symbols-rounded">add</span>
            </div>
          </div>
          <div className="todo-list">
            <div className="help-wrapper">
              <span className="todo-list title">To Do List</span>
              <Tooltip
                className="tooltip-icon"
                content="List what needs to be done this week"
                direction="top"
              >
                <span className="material-symbols-rounded help">help</span>
              </Tooltip>
            </div>
            <div className="todo-list-group">
              <ul>
                {todoList &&
                  todoList.map((t) => {
                    if (editItem && selectedItem.id === t.id) {
                      return (
                        <li key={t.id}>
                          <NewItem
                            newItem={todo}
                            edit={editItem}
                            addToList={addtoTodoList}
                            submit={() => submitTodo(selectedItem.id)}
                          />
                        </li>
                      );
                    } else {
                      return (
                        <li key={t.id}>
                          <TodoItem
                            key={t.id}
                            todo={t}
                            removeTodo={removeTodo}
                            completedTodo={() => completedTodo(t.id)}
                            completed={t.completed}
                            editTodo={editTodo}
                          />
                        </li>
                      );
                    }
                  })}
                {showHiddenTodo && (
                  <li>
                    <NewItem
                      addToList={addTodo}
                      newItem={todo}
                      submit={submitTodo}
                      editItem={editItem}
                    />
                  </li>
                )}
              </ul>
            </div>
            <div className="plus" onClick={todoPlus}>
              <span className="material-symbols-rounded">add</span>
            </div>
          </div>
        </div>
        <div className="habit-tracker-section">
          <div className="help-wrapper">
            <span className="title">Habit Tracker</span>
            <Tooltip
              className="tooltip-icon"
              content="Write down the habits for each week. Use the check box as visual reminder."
              direction="left"
            >
              <span className="material-symbols-rounded help">help</span>
            </Tooltip>
          </div>
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
          <div className="plus" onClick={habitPlus}>
            <span className="material-symbols-rounded">add</span>
          </div>
        </div>
        <div className="daily-goals-section">
          <div className="day-goals">
            <p className="title">Mon</p>
            <div className="goals-area">
              <textarea name="mon-goal" id="mon-goal"></textarea>
            </div>
          </div>
          <div className="day-goals">
            <p className="title">Tue</p>
            <div className="goals-area">
              <textarea name="mon-goal" id="mon-goal"></textarea>
            </div>
          </div>
          <div className="day-goals">
            <p className="title">Wed</p>
            <div className="goals-area">
              <textarea name="mon-goal" id="mon-goal"></textarea>
            </div>
          </div>
          <div className="day-goals">
            <p className="title">Thu</p>
            <div className="goals-area">
              <textarea name="mon-goal" id="mon-goal"></textarea>
            </div>
          </div>
          <div className="day-goals">
            <p className="title">Fri</p>
            <div className="goals-area">
              <textarea name="mon-goal" id="mon-goal"></textarea>
            </div>
          </div>
          <div className="day-goals">
            <p className="title">Weekend</p>
            <div className="goals-area">
              <textarea name="mon-goal" id="mon-goal"></textarea>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Weekly;
