import React, { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>
              {" "}
              <b>1</b>{" "}
            </div>
            <div className={`${step >= 2 ? "active" : ""}`}>
              <b>2</b>
            </div>
            <div className={`${step >= 3 ? "active" : ""}`}>
              <b>3</b>
            </div>
          </div>
          <p className="message">
            <b>
              Step{step} : {messages[step - 1]}{" "}
            </b>
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#048cc2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#048cc2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
