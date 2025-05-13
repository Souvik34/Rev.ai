import React, { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { FaSyncAlt, FaClipboard, FaUpload } from 'react-icons/fa';

const sampleCode = `// Write your code here...
function add(a, b) {
  return a + b;
}`;

export default function EditorLayout() {
  const [files, setFiles] = useState([
    { id: 1, name: 'File 1', code: sampleCode, language: 'javascript' },
  ]);
  const [activeFileId, setActiveFileId] = useState(1);
  const [editorWidth, setEditorWidth] = useState(70); // In percentage
  const isResizing = useRef(false);

  const activeFile = files.find(file => file.id === activeFileId);

  const handleAddFile = () => {
    const newId = files.length + 1;
    const newFile = {
      id: newId,
      name: `File ${newId}`,
      code: sampleCode,
      language: 'javascript',
    };
    setFiles([...files, newFile]);
    setActiveFileId(newId);
  };

  const handleEditorChange = (value) => {
    setFiles(files.map(file =>
      file.id === activeFileId ? { ...file, code: value } : file
    ));
  };

  // Handle drag to resize
  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = (e.clientX / window.innerWidth) * 100;
    if (newWidth > 30 && newWidth < 85) setEditorWidth(newWidth);
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="flex h-screen bg-[#0e091a] text-white overflow-hidden">
      {/* Code Editor Pane */}
      <div
        className="p-4 flex flex-col border-r border-[#2c1a48] bg-[#1a102e]"
        style={{ width: `${editorWidth}%` }}
      >
        {/* Tabs and "+" */}
        <div className="flex items-center gap-2 mb-4">
          {files.map(file => (
            <button
              key={file.id}
              onClick={() => setActiveFileId(file.id)}
              className={`text-sm px-3 py-1 rounded ${
                file.id === activeFileId
                  ? 'bg-purple-700 text-white'
                  : 'bg-[#100820] text-purple-400'
              }`}
            >
              {file.name}
            </button>
          ))}
          <button
            onClick={handleAddFile}
            className="text-xl font-bold text-purple-400 hover:text-purple-200"
            title="New File"
          >
            +
          </button>
        </div>

        {/* Monaco Editor */}
        <div className="flex-1 overflow-hidden rounded">
          <Editor
            height="100%"
            language={activeFile.language}
            theme="vs-dark"
            value={activeFile.code}
            onChange={handleEditorChange}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              lineNumbers: 'on',
            }}
          />
        </div>

        {/* Icons + Run */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4 text-purple-400 text-lg">
            <FaSyncAlt className="hover:text-purple-200 cursor-pointer" title="Refresh" />
            <FaClipboard className="hover:text-purple-200 cursor-pointer" title="Copy" />
            <FaUpload className="hover:text-purple-200 cursor-pointer" title="Upload" />
          </div>
          <button className="bg-purple-700 hover:bg-purple-600 px-6 py-2 rounded">
            Run
          </button>
        </div>
      </div>

      {/* Resizer */}
      <div
        className="w-1 bg-[#2c1a48] cursor-col-resize"
        onMouseDown={handleMouseDown}
      />

      {/* Review/Output Pane */}
      <div className="flex-1 bg-[#100820] p-6">
        <h2 className="text-xl mb-2">Output / Review</h2>
        <div className="bg-[#1a102e] h-full rounded p-4 text-purple-300">
          {/* Placeholder output */}
          <pre>// Output will appear here after clicking Run.</pre>
        </div>
      </div>
    </div>
  );
}
