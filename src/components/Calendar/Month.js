import React from "react";
import Day from "./Day";
import dayjs from "dayjs";
const Month = ({
  month,
  events,
  monthIndexState,
  onDaySelect,
  onEventSelect,
  setMonthIndexState,
}) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-large-calendar border rounded">
      <header className="border col-span-7 flex justify-between">
        <p className="text-gray-500 font-bold mx-2 my-2">
          {dayjs(new Date(dayjs().year(), monthIndexState)).format("MMMM YYYY")}
        </p>
        <div className="flex flex-row flex-wrap justify-center content-center">
          {/* today */}
          <button
            className="h-fit border rounded mx-2 my-2 px-1.5  text-gray-600"
            onClick={() => {
              setMonthIndexState(parseInt(dayjs().format("MM")) - 1)
              // setMonthIndexState(monthIndexState - 1);
            }}
          >
            Today
          </button>
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
      {month[0].map((dayN, dayNIndex) => {
        return (
          <div className="border">
            <span
              key={dayNIndex}
              className="text-sm flex flex-row flex-wrap justify-center content-center h-fit dark:text-white"
            >
              {dayN.format("ddd").toUpperCase()}
            </span>
          </div>
        );
      })}
      {month.map((row, rowIndex) => {
        return (
          <React.Fragment key={rowIndex}>
            {row.map((day, dayIndex) => {
              return (
                <Day
                  day={day}
                  key={dayIndex}
                  rowIndex={rowIndex}
                  events={events}
                  onDaySelect={onDaySelect}
                  onEventSelect={onEventSelect}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Month;
