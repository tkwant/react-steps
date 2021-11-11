import React, { useState } from "react";
import { Stepper, Step } from "./Stepper/Stepper";
interface Props {}
const App: React.FC<Props> = () => {
  const [curStep, setCurStep] = useState(0);
  const [step2Data, setStep2Data] = useState("");
  const renderContent = () => {
    switch (curStep) {
      case 0:
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            First Step
          </div>
        );
      case 1:
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ marginRight: 2 }}>My Validation: </p>
            <input
              style={{ border: "2px solid red" }}
              onChange={(e) => setStep2Data(e.currentTarget.value)}
              value={step2Data}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Stepper
        style={{ padding: 10 }}
        curStep={curStep}
        setCurStep={setCurStep}
      >
        <Step label="Step 0 " />
        <Step label="Step 1" />
        <Step locked={step2Data === ""}>??</Step>
        <Step locked={curStep < 2} />
        <Step locked={curStep < 3} />
        <Step locked={curStep < 4} />
        <Step locked={curStep < 5} />
      </Stepper>
      {renderContent()}
    </>
  );
};

export default App;
