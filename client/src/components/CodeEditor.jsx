import React from "react";
import Editor from "@monaco-editor/react";
import { Copy, RefreshCcw, Play } from "lucide-react";
import { toast } from "react-hot-toast";

const CodeEditor = ({ code, setCode, onRun, onReset }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    toast.success("Code copied! 🎉", {
      position: "top-center",
      style: {
        fontWeight: "bold",
        fontSize: "18px",
        padding: "12px 24px",
      },
    });
  };

  return (
    <div className="relative flex flex-col h-full bg-[#1a1b3a] text-white rounded shadow-lg overflow-hidden">
      {!code && (
        <pre
          className="absolute top-2 left-1/2 transform -translate-x-1/2 pointer-events-none select-none text-gray-400 font-mono text-xl font-bold whitespace-pre-wrap"
          style={{ userSelect: "none" }}
        >
          {"# Write your code here..."}
        </pre>
      )}

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

        <div className="w-4" />

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
