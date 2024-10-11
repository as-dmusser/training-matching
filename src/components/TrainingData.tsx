import React, { useState } from 'react';

interface TrainingDataProps {
  data: Array<[string[], string[], number]>;
  onTrain: (text1: string[], text2: string[], similarity: number) => void;
}

export const TrainingData: React.FC<TrainingDataProps> = ({ data, onTrain }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [similarity, setSimilarity] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTrain(text1.split(','), text2.split(','), similarity);
    setText1('');
    setText2('');
    setSimilarity(0);
  };

  return (
    <div className="w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">Training Data</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="trainText1" className="block text-gray-700 text-sm font-bold mb-2">
            Text Array 1 (comma-separated):
          </label>
          <input
            type="text"
            id="trainText1"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="trainText2" className="block text-gray-700 text-sm font-bold mb-2">
            Text Array 2 (comma-separated):
          </label>
          <input
            type="text"
            id="trainText2"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="similarity" className="block text-gray-700 text-sm font-bold mb-2">
            Similarity (0-1):
          </label>
          <input
            type="number"
            id="similarity"
            value={similarity}
            onChange={(e) => setSimilarity(parseFloat(e.target.value))}
            min="0"
            max="1"
            step="0.01"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Training Data
          </button>
        </div>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-2">Existing Training Data:</h3>
        <ul className="list-disc pl-5">
          {data.map(([t1, t2, sim], index) => (
            <li key={index} className="mb-2">
              <strong>Text 1:</strong> {t1.join(', ')} <br />
              <strong>Text 2:</strong> {t2.join(', ')} <br />
              <strong>Similarity:</strong> {sim.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};