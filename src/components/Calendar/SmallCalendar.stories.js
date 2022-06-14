import React from 'react';
import SmallCalendar from './SmallCalendar';
import dayjs from 'dayjs';
export default {
    title : 'Calendar/Small Calender',
    component : SmallCalendar,
    argTypes : {
        onDaySelect : {
            action : 'selected Date'
        }
    }
}

const Template = (args) => <SmallCalendar {...args}/>

export const SmallCalendarExample = Template.bind({});