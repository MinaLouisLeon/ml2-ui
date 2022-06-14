import React from "react";
import dayjs from 'dayjs';

const Day = ({ day, rowIndex,selectedDay}) => {
    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") 
            ? "bg-blue-600 text-white rounded-full w-7"
            : ""
    }
    const getNotInThisMonthClass = () => {
      if(rowIndex === 0 && parseInt(day.format("DD")) >= 25){
        return "text-gray-300 dark:text-gray-400"
      }else if(rowIndex === 4 && parseInt(day.format("DD")) <= 7){
        return "text-gray-300 dark:text-gray-400"
      }else{
        return ""
      }
    }
  return (
    <div className="border border-gray-200 flex flex-col cursor-pointer"
      onClick={() => selectedDay(day.format("DD-MM-YYY"))}
    >
      <header className="flex flex-col items-center">
        <p className={`text-sm p-1 my-1 text-center dark:text-white ${getCurrentDayClass()} ${getNotInThisMonthClass()}`}>
          {parseInt(day.format("DD"))}
        </p>
      </header>
    </div>
  );
};

export default Day;
