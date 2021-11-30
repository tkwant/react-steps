import React, { cloneElement, ReactElement } from "react";
import "./index.css";
import { Size, useWindowSize } from "../hooks/useWindowSize";
export { Step } from "./Step";

export interface StepperProps {
  children: ReactElement[];
  curStep: number;
  setCurStep: (index: number) => void;
  className?: string;
  activeColor?: string;
  inActiveColor?: string;
  borderColor?: string;
  stepSize?: number;
  progressBarActiveColor?: string;
  progressBarBackgroundColor?: string;
  smallScreenShowProgressbar?: boolean;
  style?: React.CSSProperties;
}

export const Stepper: React.FC<StepperProps> = ({
  children,
  curStep,
  setCurStep,
  activeColor,
  inActiveColor,
  borderColor,
  stepSize,
  progressBarActiveColor,
  progressBarBackgroundColor,
  smallScreenShowProgressbar,
  className,
  style,
}) => {
  const elements: any = [];
  const isFirst = curStep == 0;
  const isLast = curStep == children.length - 1;
  const windowSize: Size = useWindowSize();

  const isSmallScreen = windowSize.width! < children.length * stepSize! + 80;
  let counter = 0;

  children.forEach((child, i) => {
    let isShowStep = true;
    if (isSmallScreen) {
      isShowStep = curStep == i || curStep == i - 1 || curStep == i + 1;
      if (isFirst) {
        isShowStep = i == 0 || i == 1 || i == 2;
      } else if (isLast) {
        isShowStep =
          i == children.length - 3 ||
          i == children.length - 2 ||
          i == children.length - 1;
      }
    }

    if (isShowStep) {
      counter++;
      const el = cloneElement(child, {
        isLastActive: i <= curStep - 1,
        isActive: i <= curStep,
        setCurStep: setCurStep,
        activeColor: activeColor,
        inActiveColor: inActiveColor,
        borderColor: borderColor,
        stepSize: stepSize,
        key: i,
        index: i,
        isLast: isSmallScreen ? counter === 3 : i === children.length - 1,
      });
      elements.push(el);
    }
  });

  return (
    <>
      {isSmallScreen && smallScreenShowProgressbar && (
        <div
          className="relative "
          style={{ backgroundColor: progressBarBackgroundColor }}
        >
          <div
            style={{
              width: `${(curStep / (children.length - 1)) * 100}%`,
              backgroundColor: progressBarActiveColor,
            }}
            className=" h-2 mb-4 transition-width  duration-700 ease-in-out"
          ></div>
        </div>
      )}

      <ul
        style={style}
        className={`flex flex-row justify-between mx-3 ${className}`}
      >
        {elements}
      </ul>
    </>
  );
};

Stepper.defaultProps = {
  borderColor: "#8fb3db",
  activeColor: "#0b294b",
  smallScreenShowProgressbar: true,
  progressBarActiveColor: "green",
  progressBarBackgroundColor: "lightgray",
  inActiveColor: "#D1D5DB",
  stepSize: 60,
  className: "",
  style: {},
};
