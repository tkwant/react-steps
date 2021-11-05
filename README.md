# React Stepper

Npm Package:
https://www.npmjs.com/package/@tkwant/react-steps

Demo:
https://stepper.tkwant.de

![image](https://github.com/tkwant/react-steps/raw/master/image.png)

## Usage

```
import React, { useState } from "react";
import { Stepper, Step } from "@tkwant/react-steps";
import "@tkwant/react-steps/dist/Stepper.css";
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
```
