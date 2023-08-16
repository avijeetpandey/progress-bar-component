import React, { useEffect, useState } from "react";

// import type
import ProgressBarProps from "../types/progressbar.types";

// style import
import "./style.css";

// constants import
import { MAX, MIN } from "../consants";

function ProgressBar({ value = 0 }: ProgressBarProps) {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(MAX, Math.max(value, MIN)));
  }, [value]);

  return (
    <div className="container__box">
      <span
        style={{
          color: percentage > 50 ? "white" : "black",
        }}
      >
        {percentage.toFixed()}%
      </span>
      <div
        className="shadow__container"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}

export default ProgressBar;
