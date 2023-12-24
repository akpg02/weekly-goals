import React, { useState } from "react";
import moment from "moment";

import Weekly from "../../components/planner-sections/weekly/weekly";

function PlannerWeek() {
  const [weekNumber] = useState(moment().format("w"));
  const [today] = useState(moment().startOf("week").format("MM/DD/YYYY"));

  return (
    <>
      <Weekly today={today} week={weekNumber} />
      {/* <Table /> */}
    </>
  );
}

export default PlannerWeek;
