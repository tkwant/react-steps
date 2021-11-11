import React, { useState } from "react";
import { Stepper, Step } from "./Stepper/Stepper";
interface Props {}
const App: React.FC<Props> = () => {
  const [curStep, setCurStep] = useState(0);
  const [step2Data, setStep2Data] = useState("");
  const renderContent = () => {
    switch (curStep) {
      case 0:
        return <div className="flex justify-center mt-3">First Step</div>;
      case 1:
        return (
          <div className="flex justify-center mt-3">
            <p className="mr-2">My Validation: </p>
            <input
              className="border-4 border-red-300"
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
      <Stepper curStep={curStep} setCurStep={setCurStep}>
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
