# React Stepper

Works also for mobile devices

Npm Package:
https://www.npmjs.com/package/@tkwant/react-steps

Demo:
https://stepper.tkwant.de

![image](https://github.com/tkwant/react-steps/blob/main/demo.gif)

## Installation

```
yarn add @tkwant/react-steps
```

```
npm i @tkwant/react-steps
```

## Usage

```
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
```

## Stepper Props

| Prop                       | Description | Default     |
| -------------------------- | ----------- | ----------- |
| children                   |             |
| curStep                    |             |
| setCurStep                 |             |
| className                  | optional    | ""          |
| activeColor                | optional    | "#0b294b"   |
| inActiveColor              | optional    | "#D1D5DB"   |
| borderColor                | optional    | "#8fb3db"   |
| stepSize                   | optional    | 60          |
| progressBarActiveColor     | optional    | "green"     |
| progressBarBackgroundColor | optional    | "lightgray" |
| smallScreenShowProgressbar | optional    | true        |
| style                      | optional    | {}          |

## Step Props

| Prop     | Description | Default       |
| -------- | ----------- | ------------- |
| children | optional    | current Index |
| label    | optional    | ""            |
| locked   | optional    | false         |
