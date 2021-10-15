import React, { useState } from "react";
import { Stepper, Step } from "./Stepper/Stepper";
interface Props {}
const App: React.FC<Props> = () => {
  const [curStep, setCurStep] = useState(0);
  return (
    <>
      <Stepper curStep={curStep} setCurStep={setCurStep}>
        <Step label="Step 0 " />
        <Step label="Step 1" />
        <Step>??</Step>
        <Step />
        <Step locked={curStep < 3} />
        <Step locked={curStep < 4} />
        <Step locked={curStep < 5} />
      </Stepper>
    </>
  );
};

export default App;
