import React from "react";
import "./table.css";

function Table() {
  return (
    <table className="habit-table">
      <caption>Habit Tracker</caption>
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
          <th scope="col">TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-aria-label="Habit">
            <input type="text" value="First Goal" />
          </td>
          <td data-aria-label="M">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="T">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="W">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="T">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="F">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="S">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="Achieved">
            <input type="number" value="35" min="0" />
          </td>
          <td data-aria-label="Goal">
            <input type="number" min="0"></input>
          </td>
          <td data-aria-label="Total">
            <input type="number" value="3" min="0" />
          </td>
        </tr>
        <tr>
          <td data-aria-label="Habit">
            <input type="text" value="Second Goal" />
          </td>
          <td data-aria-label="M">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="T">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="W">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="T">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="F">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="S">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="Achieved">
            <input type="number" value="30" min="0" />
          </td>
          <td data-aria-label="Goal">
            <input type="number" min="0"></input>
          </td>
          <td data-aria-label="Total">
            <input type="number" value="10" min="0" />
          </td>
        </tr>
        <tr>
          <td data-aria-label="Habit">
            <input type="text" value="Third Goal" />
          </td>
          <td data-aria-label="M">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="T">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="W">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="T">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="F">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="S">
            <input type="checkbox"></input>
          </td>
          <td data-aria-label="Achieved">
            <input type="number" value="40" min="0" />
          </td>
          <td data-aria-label="Goal">
            <input type="number" min="0"></input>
          </td>
          <td data-aria-label="Total">
            <input type="number" value="8" min="0" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
