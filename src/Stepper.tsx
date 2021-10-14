import React, { cloneElement, ReactElement } from "react";
import Lock from "./Lock";

interface StepProps {
  isLast?: boolean;
  className?: string;
  index?: number;
  isActive?: boolean;
  activeColor?: string;
  inActiveColor?: string;
  setCurStep?: (index: number) => void;
  locked?: boolean;
  isLastActive?: boolean;
  borderColor?: string;
  label?: string;
  stepSize?: number;
}

export const Step: React.FC<StepProps> = ({
  isLast,
  className,
  children,
  index,
  isActive,
  activeColor,
  inActiveColor,
  setCurStep,
  locked,
  isLastActive,
  borderColor,
  label,
  stepSize,
}) => {
  const stepOnClick = (index: number) => {
    if (setCurStep) {
      setCurStep(index);
    }
  };
  return (
    <>
      <div>
        <li
          onClick={() => {
            if (!locked) {
              stepOnClick(index || 0);
            }
          }}
          className={`rounded-full border-8  
        flex items-center justify-center transition duration-300
        relative 
        text-white 
        ${locked ? "cursor-not-allowed" : "cursor-pointer"} ${className}`}
          style={{
            width: stepSize,
            height: stepSize,
            backgroundColor: isActive ? activeColor : inActiveColor,
            borderColor: isActive ? borderColor : inActiveColor,
          }}
        >
          <>
            {locked && <Lock />}
            {!locked && (children ? children : index)}
          </>
        </li>
        <div className="relative h-6">
          <p className="absolute left-1/2 -translate-x-1/2  whitespace-nowrap">
            {label}
          </p>
        </div>
      </div>

      {!isLast && (
        <Connector
          height={stepSize || 0}
          isActive={isLastActive || false}
          activeColor={borderColor || ""}
          inActiveColor={inActiveColor || ""}
        />
      )}
    </>
  );
};

Step.defaultProps = {
  isLast: false,
  className: "",
  isActive: false,
  locked: false,
  isLastActive: false,
  setCurStep: () => {},
  label: "",
  index: 0,
  stepSize: 60,
};

interface ConnectorProps {
  isActive: boolean;
  activeColor: string;
  inActiveColor: string;
  height: number;
}

const Connector: React.FC<ConnectorProps> = ({
  isActive,
  activeColor,
  inActiveColor,
  height,
}) => {
  return (
    <div
      className="flex w-full justify-start items-center relative"
      style={{ height: height }}
    >
      <div
        className={`absolute border-t-8  w-full z-0`}
        style={{ borderColor: inActiveColor }}
      ></div>
      <div
        className={`border-t-8  bg-red-400 transition-width  duration-700 ease-in-out z-50 ${
          isActive ? "w-full" : "w-0"
        }`}
        style={{ borderColor: activeColor }}
      ></div>
    </div>
  );
};

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
