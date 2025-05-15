import React from 'react';
import ReactMarkdown from 'react-markdown';

const ReviewPanel = ({ suggestions = [] }) => {
  return (
    <div className="bg-[#2c2c54] h-full p-4 text-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">REVIEW</h2>

      <div className="bg-[#1a1b3a] p-4 rounded">
        <h3 className="font-semibold mb-2 text-sm">Suggestions</h3>

        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          {Array.isArray(suggestions) && suggestions.length > 0 ? (
            suggestions.map((sug, idx) => (
              <li key={idx}>
                <ReactMarkdown>{sug}</ReactMarkdown>
              </li>
            ))
          ) : (
            <li>No suggestions available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReviewPanel;
