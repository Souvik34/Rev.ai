/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ReviewPanel from "./components/ReviewPanel";
import { getCodeReview } from "./api";

export default function App() {
  const [code, setCode] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    if (!code.trim()) {
      alert("Please write some code to review!");
      return;
    }
    setLoading(true);
    setSuggestions([]);

    try {
      const reviewSuggestions = await getCodeReview(code);
      setSuggestions(reviewSuggestions);
    } catch (err) {
      alert("Failed to get review from backend.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCode("");
    setSuggestions([]);
  };

  return (
    <div className="flex gap-4 p-8 h-screen bg-[#12122f]">
      <div className="flex-1 flex flex-col">
        <CodeEditor
          code={code}
          setCode={setCode}
          onRun={handleRun}
          onReset={handleReset}
        />
      </div>

      <div className="w-1/3">
        {loading ? (
          <div className="text-white p-4">Loading review...</div>
        ) : (
          <ReviewPanel suggestions={suggestions} />
        )}
      </div>
    </div>
  );
}
