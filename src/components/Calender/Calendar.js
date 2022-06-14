import PropTypes from "prop-types";
import '../../index.css';
import React, { useState } from "react";
import { getMonth } from "./util";
import Month from "./Month";
const Calendar = ({ monthNum = null ,selectedDay}) => {
  const [currentMonth, setCurrentMonth] = useState(
    monthNum ? getMonth(monthNum - 1) : getMonth()
  );
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Month month={currentMonth} selectedDay={selectedDay}/>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  monthNum: PropTypes.number,
  selectedDay : PropTypes.func
};

export default Calendar;
