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
  /**
   * month number `(from 1 to 12)` <br/>
   * if not specified the component will render the current month
   */
  monthNum: PropTypes.number,
  /**
   * events object to be redered in calendar cells
   */
  events : PropTypes.object,
  /**
   * function that return selected date on format  `DD-MM-YY` <br/>
   * `onDaySelect=((date) => console.log(date))`
   */
  onDaySelect : PropTypes.func,
  /**
   * function that return object of the selected event <br/>
   * `
   *  {eventName : string , color : string , date : string}
   * `
   */
  onEventSelect : PropTypes.func
};

export default Calendar;
