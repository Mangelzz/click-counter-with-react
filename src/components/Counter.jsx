import React from "react";

const Counter = ({ click }) => {
  return (
    <div className="mb-4 flex h-[300px] min-h-[300px] items-center justify-center rounded-md border-4 border-white p-6 text-9xl text-white min-w-full">
      {click}
    </div>
  );
};

export default Counter;
