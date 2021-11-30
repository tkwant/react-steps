import React from "react";
import Connector from "./Connector";
import Lock from "./Lock";
export interface StepProps {
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
