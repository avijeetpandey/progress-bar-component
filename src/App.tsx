import React, { useEffect, useState } from "react";
import ProgressBar from "./components/Progressbar";

// style import
import "./styles/app.css";

function App(): JSX.Element {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((oldValue) => oldValue + 1);
    }, 100);
  }, []);

  return (
    <div className="container">
      <p>Progress bar component</p>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
