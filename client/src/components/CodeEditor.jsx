import React from "react";
import Editor from "@monaco-editor/react";
import { Copy, RefreshCcw, Play } from "lucide-react";

const CodeEditor = ({ code, setCode, onRun, onReset }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  return (
    <div className="flex flex-col h-full bg-[#1a1b3a] text-white rounded shadow-lg overflow-hidden">
      {/* Editor Area */}
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage="python"
          value={code}
          onChange={(val) => setCode(val)}
          theme="vs-dark"
        />
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-end gap-4 bg-[#2c2c54] p-3 border-t border-[#8e44ad]">
        <button
          onClick={handleCopy}
          className="hover:text-[#8e44ad] transition"
          title="Copy"
        >
          <Copy size={20} />
        </button>

        <button
          onClick={onReset}
          className="hover:text-[#8e44ad] transition"
          title="Reset"
        >
          <RefreshCcw size={20} />
        </button>

        <div className="w-4" /> {/* Spacer */}

        <button
          onClick={onRun}
          className="bg-[#6c5ce7] hover:bg-[#5c4bcf] text-white px-4 py-2 rounded flex items-center gap-2 transition"
        >
          <Play size={16} /> Run
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
