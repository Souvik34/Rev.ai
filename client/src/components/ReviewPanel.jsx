/* eslint-disable no-unused-vars */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';

const ReviewPanel = ({ suggestions = [] }) => {
  return (
    <div className="bg-[#2c2c54] h-full p-4 text-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">REVIEW</h2>

      <div className="bg-[#1a1b3a] p-4 rounded max-h-150 overflow-y-auto text-lg text-gray-300">
        {Array.isArray(suggestions) && suggestions.length > 0 ? (
          suggestions.map((sug, idx) => (
            <div key={idx} className="mb-4 last:mb-0">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkEmoji]}
                components={{
                  code({node, inline, className, children, ...props}) {
                    return !inline ? (
                      <pre className="bg-gray-800 rounded p-2 overflow-x-auto" {...props}>
                        <code>{children}</code>
                      </pre>
                    ) : (
                      <code className="bg-gray-700 rounded px-1" {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {sug}
              </ReactMarkdown>
            </div>
          ))
        ) : (
          <p>No suggestions available.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewPanel;
