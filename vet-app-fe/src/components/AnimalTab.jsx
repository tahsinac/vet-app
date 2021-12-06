import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PhotoGrid from "./PhotoGrid";
import CommentList from "./CommentList";
import RxTable from "./RxTable";
import AlertsTable from "./AlertsTable";
import DiagnosisTable from "./DiagnosisTable";

export default function AnimalTab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Images" value="1" />
            <Tab label="Comments" value="2" />
            <Tab label="Rx" value="3" />
            <Tab label="Diagnosis" value="4" />
            <Tab label="Alerts" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <PhotoGrid />
        </TabPanel>
        <TabPanel value="2">
          <CommentList />
        </TabPanel>
        <TabPanel value="3">
          {" "}
          <RxTable />{" "}
        </TabPanel>
        <TabPanel value="4">
          <DiagnosisTable />
        </TabPanel>
        <TabPanel value="5">
          <AlertsTable />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
