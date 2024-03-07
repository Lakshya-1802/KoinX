import React, { useState } from "react";

const Bar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      <div className="bar ">
        <p
          className={selectedOption === 0 ? "selected" : ""}
          onClick={() => handleClick(0)}
        >
          Overview
        </p>
        <p
          className={selectedOption === 1 ? "selected" : ""}
          onClick={() => handleClick(1)}
        >
          Fundamentals
        </p>
        <p
          className={selectedOption === 2 ? "selected" : ""}
          onClick={() => handleClick(2)}
        >
          News Insights
        </p>
        <p
          className={selectedOption === 3 ? "selected" : ""}
          onClick={() => handleClick(3)}
        >
          Sentiments
        </p>
        <p
          className={selectedOption === 4 ? "selected" : ""}
          onClick={() => handleClick(4)}
        >
          Team
        </p>
        <p
          className={selectedOption === 5 ? "selected" : ""}
          onClick={() => handleClick(5)}
        >
          Technicals
        </p>
        <p
          className={selectedOption === 6 ? "selected" : ""}
          onClick={() => handleClick(6)}
        >
          Tokenomics
        </p>
      </div>
    </>
  );
};

export default Bar;
