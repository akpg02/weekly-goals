import React, { useState, useEffect } from "react";
import moment from "moment";

import Weekly from "../../components/planner-sections/weekly/weekly";

function PlannerWeek() {
  const [weekNumber, setWeekNumber] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const weekNum = moment().format("w");
    setWeekNumber(weekNum);

    const getToday = moment().startOf("week").format("MM/DD/YYYY");
    setToday(getToday);
  }, []);

  return (
    <>
      <Weekly today={today} week={weekNumber} />
    
    </>
  );
}

export default PlannerWeek;
