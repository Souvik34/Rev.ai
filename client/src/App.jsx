import React from 'react';
import HistoryPanel from './components/HistoryPanel';
import Editor from './components/Editor';
import ReviewPanel from './components/ReviewPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2d145d] text-white flex">
      <HistoryPanel />
      <Editor />
      <ReviewPanel />
    </div>
  );
}
