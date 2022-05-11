import React, { useState } from "react";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const changeActiveTab = (index: number) => {
    setActiveTab(index);
  };
  return <>{/* map data and render tabs and content */}</>;
};

export default Tabs;
