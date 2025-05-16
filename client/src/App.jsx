import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ReviewPanel from "./components/ReviewPanel";
import { getCodeReview } from "./api";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

const App = () => {
  const [code, setCode] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showHome, setShowHome] = useState(true);

  const handleRun = async () => {
    setLoading(true);
    try {
      const reviewSuggestions = await getCodeReview(code);
      console.log("Suggestions received:", reviewSuggestions);
      setSuggestions(reviewSuggestions || []);
    } catch (error) {
      console.error("Review error:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCode("");
    setSuggestions([]);
  };

  return (
    <>
      <Toaster />
      {showHome ? (
        <Home onGetStarted={() => setShowHome(false)} />
      ) : (
        <div className="flex h-screen gap-4 p-4 bg-[#0f0f2e]">
          <div className="flex-1">
            <CodeEditor
              code={code}
              setCode={setCode}
              onRun={handleRun}
              onReset={handleReset}
            />
          </div>
          <div className="w-1/3">
            {loading ? (
              <div className="text-white p-4 bg-[#2c2c54] rounded shadow">
                Loading review...
              </div>
            ) : (
              <ReviewPanel suggestions={suggestions} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
