import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = (num) => (num < 10 ? `0${num}` : num); // Add leading zero

  return (
    <div style={styles.clock}>
      <h1>
        {formatTime(time.getHours())}:
        {formatTime(time.getMinutes())}:
        {formatTime(time.getSeconds())}
      </h1>
    </div>
  );
};

const styles = {
  clock: {
    fontSize: "2rem",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default Clock;
