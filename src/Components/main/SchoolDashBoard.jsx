import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import ClassroomSchool from "./classroomSchool";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  let btnRef = useRef(null);
  const [name, setName] = useState();
  const [schoolId, setSchoolId] = useState();
  let subjects = [];
  let subject = "";
  useEffect(() => {
    setName(sessionStorage.getItem("school"));
    setSchoolId(sessionStorage.getItem("schoolId"));
    console.log(schoolId);
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const _onAddSubjects = () => {
    let data = {
      schoolId: schoolId,
      subjects: subjects,
    };

    axios({
      url: "http://192.168.50.101:4000/api-ivoireschool/addsubjects",
      method: "POST",
      data,
    });
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label={`${name}`} />
          <Tab label="Classes" {...a11yProps(1)} />
          <Tab label="Profs" {...a11yProps(2)} />
          <Tab label="Elèves" {...a11yProps(3)} />
          <Tab label="Matières" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div style={{ backgroundColor: "whitesmoke", height: "90vh" }}></div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{ backgroundColor: "whitesmoke", height: "90vh" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ float: "right" }}
          >
            Ajouter une classe
          </Button>
          <ClassroomSchool schoolId={schoolId} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div style={{ backgroundColor: "whitesmoke", height: "90vh" }}></div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div
          style={{
            backgroundColor: "whitesmoke",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div
          style={{
            backgroundColor: "whitesmoke",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>Ajouter vos Matières</h2>
          <div>
            <TextField
              label="Nom de la matière"
              helperText="*"
              variant="outlined"
              onChange={(e) => (subject = e.currentTarget.value)}
            />
          </div>
          <div>
            {subjects.length < 10 && (
              <IconButton
                color="primary"
                size="large"
                onClick={() => {
                  subjects.push(subject);
                  if (subjects.length === 2) {
                    btnRef.current.style.display = "block";
                  }
                  console.log(subjects);
                  subject = " ";
                }}
              >
                <AddCircleIcon />
              </IconButton>
            )}
            <Button
              style={{ display: "none" }}
              ref={btnRef}
              onClick={() => {
                _onAddSubjects();
              }}
            >
              Terminer
            </Button>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
