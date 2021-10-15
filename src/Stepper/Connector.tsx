import React from "react";

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

export default Connector;
