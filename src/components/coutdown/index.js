import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [time, setTime] = useState(900); // Initial time in seconds (15 minutes)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000); // Update time every second

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <p>Thời gian còn lại: {formatTime(time)}</p>
    </div>
  );
}

export default CountdownTimer;