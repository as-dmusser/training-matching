import React, { useState } from 'react';

interface ComparisonFormProps {
  onCompare: (text1: string[], text2: string[]) => void;
}

export const ComparisonForm: React.FC<ComparisonFormProps> = ({ onCompare }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCompare(text1.split(','), text2.split(','));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mb-8">
      <div className="mb-4">
        <label htmlFor="text1" className="block text-gray-700 text-sm font-bold mb-2">
          Text Array 1 (comma-separated):
        </label>
        <input
          type="text"
          id="text1"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="text2" className="block text-gray-700 text-sm font-bold mb-2">
          Text Array 2 (comma-separated):
        </label>
        <input
          type="text"
          id="text2"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Compare
        </button>
      </div>
    </form>
  );
};