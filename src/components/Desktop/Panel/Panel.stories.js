import React from "react";
import PanelComp from "./PanelSpace";
import Panel from "./Panel";
import PageHeader from "../PageHeader/PageHeader";
import ML2Page from "../ML2Page";
import HeaderTitle from "../PageHeader/HeaderTitle";
import { FcDocument, FcHome } from "react-icons/fc";
export default {
  title: "Desktop/PanelSpace",
  component: PanelComp,
};

const Template = (args) => (
  <ML2Page>
  <PageHeader>
    <HeaderTitle slot="right">App Header</HeaderTitle>
  </PageHeader>
    <PanelComp {...args}>
      <Panel id="DocPanel" icon={<FcDocument />} header="Docs Panel">
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
        <h1>doc panel</h1>
      </Panel>
      <Panel id="HomePanel" icon={<FcHome />} header="Home Panel">
        <h1>Home panel</h1>
      </Panel>
    </PanelComp>
  </ML2Page>
);

export const PanelSpace = Template.bind({});
PanelSpace.args = {
  position: "left",
};
