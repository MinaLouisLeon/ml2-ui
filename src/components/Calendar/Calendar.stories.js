import React from 'react';
import Calendar from './Calendar';
import dayjs from 'dayjs';

export default {
    title : 'Calendar/Large Calender',
    component : Calendar,
    argTypes : {
        onDaySelect : {
            action : 'selected Day '
        },
        onEventSelect : {
            action : 'selected Event '
        }
    }
}

const Template = (args) => <Calendar {...args} />;
const day1 = dayjs().format("DD-MM-YYYY");
const day2 = dayjs().add(1,"day").format("DD-MM-YYYY")
const events = {
    [day1] : [
      {
        eventName : "Meeting",
        color : "green"
      },
      {
        eventName : "Meeting 2",
        color : "orange"
      }
    ],
    [day2] : [
      {
        eventName : "Meeting 3",
        color: "red"
      },{
        eventName : "Meeting 4",
        color : "blue"
      },{
        eventName : "Meeting 5",
        color : "purple"
      }
    ],
  }
export const LargeCalendar = Template.bind({});
LargeCalendar.args={
    // monthNum : 6
    events : events
}   

