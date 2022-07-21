import { useTimer } from "react-timer-hook";

const MyTimer = ({ expiryTimestamp, setFinishTimer }) => {
  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => setFinishTimer(true),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "Quiz Started" : "Quiz finished"}</p>
    </div>
  );
};

export default MyTimer;
