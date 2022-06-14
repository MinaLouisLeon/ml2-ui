import PropTypes from "prop-types";
import '../../index.css';
import React, { useState ,useEffect} from "react";
import { getMonth } from "./util";
import dayjs from 'dayjs';
import Month from "./Month";
const Calendar = ({ monthNum = null ,events = {} ,onDaySelect,onEventSelect}) => {
  const [monthIndexState, setMonthIndexState] = useState(monthNum ? monthNum - 1 : (parseInt(dayjs().format("MM")) - 1));
  const [currentMonth, setCurrentMonth] = useState(getMonth(monthIndexState));
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndexState))
  },[monthIndexState])
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Month month={currentMonth} monthIndexState={monthIndexState} setMonthIndexState={setMonthIndexState} onDaySelect={onDaySelect}  events={events} onEventSelect={onEventSelect}/>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  monthNum: PropTypes.number,
  events : PropTypes.object,
  onDaySelect : PropTypes.func,
  onEventSelect : PropTypes.func
};

export default Calendar;
