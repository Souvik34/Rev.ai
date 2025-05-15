import React from "react";
import Editor from "@monaco-editor/react";
import { Copy, RefreshCcw, Play } from "lucide-react";

const CodeEditor = ({ code, setCode, onRun, onReset }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  return (
    <div className="relative flex flex-col h-full bg-[#1a1b3a] text-white rounded shadow-lg overflow-hidden">
      {/* Placeholder text shown only when code is empty */}
      {!code && (
        <pre
          className="absolute top-4 left-4 pointer-events-none select-none text-gray-500 font-mono text-lg whitespace-pre-wrap"
          style={{ userSelect: "none" }}
        >
          {"# Write your code here..."}
        </pre>
      )}

      {/* Editor Area */}
      <div className="flex-1">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(val) => setCode(val)}
          theme="vs-dark"
          options={{
            fontSize: 20,
            minimap: { enabled: false },
            fontFamily: "'Fira Code', monospace",
            lineNumbers: "on",
            padding: { top: 20, bottom: 20 },
          }}
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
