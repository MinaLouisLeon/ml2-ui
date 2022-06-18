import React from "react";
import SmallCalendar from "./SmallCalendar";
import mdx from './SmallCalendar.mdx'
export default {
  title: "Calendar/Small Calender",
  component: SmallCalendar,
  argTypes: {
    onDaySelect: {
      action: "selected Date",
    },
  },
  parameters: {
    docs : {
      page : mdx
    }
  },
};
const Template = (args) => <SmallCalendar {...args} />;

export const SmallCalendarExample = Template.bind({});
