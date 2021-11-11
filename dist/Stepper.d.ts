import React, { ReactElement } from 'react';

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
declare const Step: React.FC<StepProps>;

interface StepperProps {
    children: ReactElement[];
    curStep: number;
    setCurStep: (index: number) => void;
    activeColor?: string;
    inActiveColor?: string;
    borderColor?: string;
    stepSize?: number;
    progressBarActiveColor?: string;
    progressBarBackgroundColor?: string;
    smallScreenShowProgressbar?: boolean;
}
declare const Stepper: React.FC<StepperProps>;

export { Step, Stepper };
