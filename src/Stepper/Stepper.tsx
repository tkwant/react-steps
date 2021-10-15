import React, { cloneElement, ReactElement } from "react";
import "./index.css";
export { Step } from "./Step";
interface StepperProps {
  children: ReactElement[];
  curStep: number;
  setCurStep: (index: number) => void;
  activeColor?: string;
  inActiveColor?: string;
  borderColor?: string;
  stepSize?: number;
}

export const Stepper: React.FC<StepperProps> = ({
  children,
  curStep,
  setCurStep,
  activeColor,
  inActiveColor,
  borderColor,
  stepSize,
}) => {
  return (
    <ul className="flex flex-row justify-between mx-3">
      {children.map((child, i) =>
        cloneElement(child, {
          isLastActive: i <= curStep - 1,
          isActive: i <= curStep,
          setCurStep: setCurStep,
          activeColor: activeColor,
          inActiveColor: inActiveColor,
          borderColor: borderColor,
          stepSize: stepSize,
          key: i,
          index: i,
          isLast: i === children.length - 1,
        })
      )}
    </ul>
  );
};

Stepper.defaultProps = {
  borderColor: "#8fb3db",
  activeColor: "#0b294b",
  inActiveColor: "#D1D5DB",
  stepSize: 60,
};
