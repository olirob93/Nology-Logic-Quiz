import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const Final = ({ setFinishTimer, finishTimer }) => {
  const disptach = useDispatch();
  const history = useHistory();
  const completedAnswers = useSelector((state) => state);

  console.log("completed Answers", completedAnswers);

  const handleGoBack = () => {
    history.push("/partThree");
  };

  const handleFinalSubmit = async (completedAnswers) => {
    console.log("this runs?");
    // Send responses to api
    // await axios.post(REACT_APP_API_URL, { results: completedAnswers });

    // stop the timer
    setFinishTimer(true);
    // Throw a modal once this has successfully completed and return them to the home screen

    return;
  };

  return (
    <>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        You are finished! to submit your quiz click Submit or if you want to
        double check your answers click go back
      </Typography>
      <button onClick={() => handleGoBack()} variant="outlined">
        Go back
      </button>
      {finishTimer ? null : (
        <button
          onClick={() => handleFinalSubmit(completedAnswers)}
          variant="outlined"
        >
          Submit Quiz
        </button>
      )}
    </>
  );
};

export default Final;
