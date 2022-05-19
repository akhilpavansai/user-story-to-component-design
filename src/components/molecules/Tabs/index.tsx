import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";

const Tabs = ({ data }) => {
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={""}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={undefined} aria-label="lab API tabs example">
            {data.map((tabData, index) => {
              return <Tab label={tabData} value={index} />;
            })}
          </TabList>
        </Box>
        {data.map((tabData, index) => {
          return <TabPanel value={index}>{tabData}</TabPanel>;
        })}
      </TabContext>
    </Box>
  );
};

export default Tabs;
