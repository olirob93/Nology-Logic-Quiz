import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Error from "./Components/404/Error";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MyTimer from "./Components/MyTimer";
import Setting from "./Pages/Setting";
import PartOne from "./Pages/PartOne";
import PartTwo from "./Pages/PartTwo";
import PartThree from "./Pages/PartThree";
import Final from "./Pages/Final";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800); // 30 minutes timer

  const [startTimer, setStartTimer] = useState(false);
  const [finishTimer, setFinishTimer] = useState(false);

  useEffect(() => {
    if (finishTimer) {
      console.log("timer ended");
    }
  }, [finishTimer]);

  return (
    <div className="App">
      {startTimer && !finishTimer ? (
        <MyTimer expiryTimestamp={time} setFinishTimer={setFinishTimer} />
      ) : (
        <p>Quiz Finished</p>
      )}
      <Typography variant="h2" fontWeight="bold">
        Nology Logic Quiz
      </Typography>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Switch>
              <Route exact path="/">
                <Setting
                  setStartTimer={setStartTimer}
                  startTimer={startTimer}
                />
              </Route>
              <Route path="/partOne">
                <PartOne />
              </Route>
              <Route path="/partTwo">
                <PartTwo />
              </Route>
              <Route path="/partThree">
                <PartThree />
              </Route>
              <Route path="/final">
                <Final
                  finishTimer={finishTimer}
                  setFinishTimer={setFinishTimer}
                />
              </Route>
            </Switch>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
