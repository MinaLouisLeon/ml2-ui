import React from "react";
import dayjs from 'dayjs';
const Day = ({ day, rowIndex,events,onDaySelect,onEventSelect}) => {
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
    const getEventColorClass = (color) => {
      switch(color){
        case "red" :
          return "bg-red-500";
        case "orange" :
          return "bg-orange-500";
        case "green" :
          return "bg-green-500";
        case "blue" :
          return "bg-blue-500";
        case "purple" :
          return "bg-purple-500";
        default :
          return "bg-blue-500";
      }
    }
    const handleEventSelect = (key,event) => {
      console.log(key);
      console.log(event);
      onEventSelect({
        ...event,
        date : key
      })
    }
  return (
    <div className="border border-gray-200 flex flex-col"
      onClick={() => onDaySelect(day.format("DD-MM-YYYY"))}
    >
      <header className="flex flex-col items-center">
        <p key={day.format("DD")} className={`text-sm p-1 my-1 text-center dark:text-white ${getCurrentDayClass()} ${getNotInThisMonthClass()}`}>
          {parseInt(day.format("DD"))}
        </p>
      </header>
      <div className=" w-full h-full overflow-auto">
        {Object.keys(events).map((key) => {
          return(
            key === day.format("DD-MM-YYYY") ? <>
              {events[key].map((event) => {
                return(
                  <div key={key + (event.eventName)} 
                  onClick={() => handleEventSelect(key,event)}
                  className={`w-full h-5 pl-1 mb-0.5 text-sm cursor-pointer ${getEventColorClass(event.color)}`}>
                    {event.eventName}
                  </div>
                )
              })}
            </> : <></>
          )
        })}
      </div>
    </div>
  );
};

export default Day;
