import React from 'react';
import Calendar from './Calendar';
import dayjs from 'dayjs';

export default {
    title : 'Calendar/Large Calender',
    component : Calendar,
    argTypes : {
        selectedDay : {
            action : 'selected Day '
        }
    }
}

const Template = (args) => <Calendar {...args} />;

export const LargeCalendar = Template.bind({});
LargeCalendar.args={
    monthNum : parseInt(dayjs().format("MM"))
}

