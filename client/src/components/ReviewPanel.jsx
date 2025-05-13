import React from 'react';

export default function ReviewPanel() {
  return (
    <div className="w-1/5 p-4">
      <h2 className="text-lg font-bold mb-4">REVIEW</h2>
      <div className="bg-purple-700 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Suggestions</h3>
        <ul className="text-sm text-purple-200 list-disc ml-4">
          <li>Consider using the add() function for addition</li>
          <li>No newline at end of file</li>
        </ul>
      </div>
    </div>
  );
}
