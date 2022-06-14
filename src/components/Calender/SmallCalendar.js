import React, { useState,useEffect } from "react";
import "../../index.css";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { getMonth } from "./util";
const SmallCalendar = ({ month = 6 ,onDaySelect}) => {
  const [monthIndexState, setMonthIndexState] = useState(month - 1);
  const [currentMonth, setCurrentMonth] = useState(getMonth(monthIndexState));
  const [selectedDayState, setSelectedDayState] = useState(null);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndexState))
  },[monthIndexState])
  const getDayClass = (day) => {
    const format = "DD-MM-YYYY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === selectedDayState) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  };
  const getNotInThisMonthClass = (day,rowIndex) => {
    if(rowIndex === 0 && parseInt(day.format("DD")) >= 25){
      return "text-gray-300 dark:text-gray-400"
    }else if(rowIndex === 4 && parseInt(day.format("DD")) <= 7){
      return "text-gray-300 dark:text-gray-400"
    }else{
      return ""
    }
  }
  return (
    <div className="w-64 border rounded">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold mx-2 my-2">
          {dayjs(new Date(dayjs().year(), monthIndexState)).format("MMMM YYYY")}
        </p>
        <div>
          {/* prev month */}
          <button
            className="h-fit mx-2 my-2"
            onClick={() => {
              setMonthIndexState(monthIndexState - 1);
            }}
          >
            <span className="cursor-pointer text-gray-600 h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </span>
          </button>
          {/* next month */}
          <button
            className="h-fit mx-2 my-2"
            onClick={() => {
              setMonthIndexState(monthIndexState + 1);
            }}
          >
            <span className="cursor-pointer text-gray-600 h-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, dayIndex) => {
          return (
            <span key={dayIndex} className="text-sm py-1 text-center border">
              {day.format("dd").charAt(0)}
            </span>
          );
        })}
        {currentMonth.map((row, rowIndex) => {
          return (
            <React.Fragment key={rowIndex}>
              {row.map((day, dayIndex) => {
                return (
                  <button
                    className={`w-7 h-7 my-1 flex flex-row flex-wrap justify-center content-center ${getDayClass(
                      day
                    )}`}
                    onClick={() =>
                      {
                        onDaySelect(day.format("DD-MM-YYYY"))
                        setSelectedDayState(day.format("DD-MM-YYYY"));
                      }
                    }
                  >
                    <span className={`text-sm ${getNotInThisMonthClass(day,rowIndex)}`}>{day.format("D")}</span>
                  </button>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

SmallCalendar.propTypes = {
  month: PropTypes.number,
  onDaySelect : PropTypes.func
};

export default SmallCalendar;
