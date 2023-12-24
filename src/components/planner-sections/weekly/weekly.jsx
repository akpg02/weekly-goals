import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import Todos from "../todos-list/todos/todos";
import Tooltip from "../../tooltip/tooltip";
import Notes from "../weekly-notes/notes/notes";
import HabitsTable from "../habits-list/habits-table/habits";
import "./weekly.css";
import Goals from "../goals-list/goals/goals";

function Weekly({ week, today }) {
  const [weeklyGoals, setWeeklyGoals] = useState([
    { id: uuid(), goal: "First Goal", completed: false },
    { id: uuid(), goal: "Second Goal", completed: false },
  ]);
  const [todoList, setTodoList] = useState([
    { id: uuid(), todo: "First Todo", completed: false },
    { id: uuid(), todo: "Second Todo", completed: false },
    { id: uuid(), todo: "Third Todo", completed: false },
    { id: uuid(), todo: "Fourth Todo", completed: false },
    { id: uuid(), todo: "Fifth Todo", completed: false },
  ]);
  const [habitsList, setHabitsList] = useState([
    {
      id: uuid(),
      habit: "First Habit",
      mon: false,
      tue: false,
      wed: true,
      thu: true,
      fri: true,
      sat: true,
      sun: false,
      achieve: 0,
      goal: 4,
      total: 10,
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
          { id: uuid(), goal: weekGoal, completed: false },
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
          { id: uuid(), todo: todo, completed: false },
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
            id: uuid(),
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

  const weekDayGoal = (e) => {
    console.log("this is e: ", e);
  };

  const totalHabitGoal = (e) => {};

  /** End of Habit */

  return (
    <>
      <section className="weekly-goals">
        <div className="week-of-year">
          <p>
            Week of: {today} - {week}{" "}
          </p>
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
            <Goals
              weeklyGoals={weeklyGoals}
              editItem={editItem}
              selectedItem={selectedItem}
              weekGoal={weekGoal}
              addToWeekGoals={addToWeekGoals}
              submitWeekGoal={submitWeekGoal}
              completedGoal={completedGoal}
              removeWeeklyGoal={removeWeeklyGoal}
              editWeekGoal={editWeekGoal}
              showHiddenGoal={showHiddenGoal}
            />
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
            <Todos
              todoList={todoList}
              editItem={editItem}
              selectedItem={selectedItem}
              todo={todo}
              addtoTodoList={addtoTodoList}
              submitTodo={submitTodo}
              removeTodo={removeTodo}
              completedTodo={completedTodo}
              editTodo={editTodo}
              showHiddenTodo={showHiddenTodo}
              addTodo={addTodo}
            />
            <div className="plus" onClick={todoPlus}>
              <span className="material-symbols-rounded">add</span>
            </div>
          </div>
        </div>
        <div className="habit-tracker-section">
          <div className="help-wrapper">
            <div className="title">Habit Tracker</div>

            <Tooltip
              className="tooltip-icon"
              content="Write down the habits for each week. Use the check box as visual reminder."
              direction="left"
            >
              <span className="material-symbols-rounded help">help</span>
            </Tooltip>
          </div>
          <HabitsTable
            habitsList={habitsList}
            editItem={editItem}
            selectedItem={selectedItem}
            habit={habit}
            editHabit={editHabit}
            removeHabit={removeHabit}
            weekDayGoal={weekDayGoal}
            addHabit={addHabit}
            totalHabitGoal={totalHabitGoal}
            showHiddenHabit={showHiddenHabit}
            submitHabit={submitHabit}
          />
          <div className="plus" onClick={habitPlus}>
            <span className="material-symbols-rounded">add</span>
          </div>
        </div>
        <Notes />
      </section>
    </>
  );
}

export default Weekly;
