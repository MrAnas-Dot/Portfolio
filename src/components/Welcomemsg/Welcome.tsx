import React, { useState, useEffect } from "react";
import "./Welcome.css"; // For styling

const Welcome: React.FC = () => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Only show the prompt once
    const name = window.prompt("Welcome! Please enter your name:");
    if (name) {
      setUserName(name);
    } else {
      setUserName("Guest");
    }
  }, [1]); // Empty dependency array ensures this runs only once

  return (
    <div className="welcome-container">
      <h1 className="welcome-message">{`Welcome to my Portfolio, ${userName}!`}</h1>
    </div>
  );
};

export default Welcome;
