import React, { useState, useEffect } from "react";

function ToggleDivs() {
  const [showFirst, setShowFirst] = useState(true);

  // Toggle the visibility every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col w-48 h-24 border border-gray-700 p-2">
      <div className={`${showFirst ? "block" : "hidden"} p-4 text-center bg-blue-200`}>
        Child 1
      </div>
      <div className={`${showFirst ? "hidden" : "block"} p-4 text-center bg-green-200`}>
        Child 2
      </div>
    </div>
  );
}

export default ToggleDivs;
