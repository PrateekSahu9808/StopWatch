import { useState, useRef } from "react";
import "./App.css"
function App() {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const intervalRef = useRef(null); 


  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); 
      }, 1); 
    }
  };

  
  const handlePause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };


  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: "48px", marginBottom: "20px" }}>{formatTime()}</div>
       <div style={{display:'flex',gap:"10px"}}>
       <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
       </div>
    </div>
  );
}

export default App;
