import React from 'react';

const files = [
  { name: "File 1", time: "01:30 PM" },
  { name: "File 2", time: "02:00 PM" },
  { name: "File 3", time: "03:10 PM" },
];

export default function HistoryPanel() {
  return (
    <div className="w-1/5 border-r border-purple-700 p-4">
      <h2 className="text-lg font-bold mb-4">HISTORY</h2>
      {files.map((file, idx) => (
        <div
          key={idx}
          className="bg-purple-700 p-3 rounded-lg mb-3 cursor-pointer hover:bg-purple-600 transition"
        >
          <div className="font-semibold">{file.name}</div>
          <div className="text-sm text-purple-300">{file.time}</div>
        </div>
      ))}
    </div>
  );
}
