import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(10); 
  const [isRunning, setIsRunning] = useState(false); 

  useEffect(() => {
    if (!isRunning) return; 

    if (time === 0) { 
      setIsRunning(false);
      return;
    }

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1); 
    }, 1000);

    return () => clearInterval(timerId); 
  }, [time, isRunning]); 

  const startTimer = () => {
    setIsRunning(true);
  };

  return (
    <div>
      {time > 0 ? (
        <h1>Залишилось часу: {time} секунд</h1> 
      ) : (
        <h1>Час вийшов</h1>
      )}
      <button onClick={startTimer} disabled={isRunning || time === 0}>
        Почати таймер
      </button> {}
    </div>
  );
};

export default Timer;
