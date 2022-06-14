import React, { useState } from "react";
import Day from "./Day";
const Month = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-20-px">
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
      {month.map((row, rowIndex, selectedDay) => {
        return (
          <React.Fragment key={rowIndex}>
            {row.map((day, dayIndex) => {
              return (
                <Day
                  day={day}
                  key={dayIndex}
                  rowIndex={rowIndex}
                  selectedDay={selectedDay}
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
