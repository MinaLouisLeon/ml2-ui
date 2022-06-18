import React from "react";
import PanelComp from "./PanelSpace";
import Panel from "./Panel";
import ML2Page from "../ML2Page";
import {FcDocument,FcHome} from 'react-icons/fc';
export default {
  title: "Desktop/PanelSpace",
  component: PanelComp,
};

const Template = (args) => (
  <ML2Page>
    <PanelComp {...args}>
      <Panel id="DocPanel"
        icon={<FcDocument />}
      >
        <h1>doc panel</h1>
      </Panel>
      <Panel id="HomePanel"
        icon={<FcHome />}
      >
        <h1>Home panel</h1>
      </Panel>
    </PanelComp>
  </ML2Page>
);

export const PanelSpace = Template.bind({});
PanelSpace.args = {
  position: "left",
};
