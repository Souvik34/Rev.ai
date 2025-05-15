import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ReviewPanel from "./components/ReviewPanel";

const App = () => {
  const defaultCode = "def add(a, b):\n    return a + b";
  const [code, setCode] = useState(defaultCode);

  const handleRun = () => {
    alert("Simulated Run: Code submitted.");
  };

  const handleReset = () => {
    setCode(defaultCode);
  };

  const suggestions = [
    "Consider using the add() function for addition",
    "No newline at end of file",
  ];

  return (
    <div className="min-h-screen bg-[#1a1b3a] text-white p-4 flex gap-4">
      <div className="flex-1 border border-[#8e44ad] rounded shadow-lg">
        <CodeEditor code={code} setCode={setCode} onRun={handleRun} onReset={handleReset} />
      </div>

      <div className="w-1/4 border border-[#8e44ad] rounded shadow-lg">
        <ReviewPanel suggestions={suggestions} />
      </div>
    </div>
  );
};

export default App;
