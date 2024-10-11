import React from 'react';

interface ResultDisplayProps {
  result: number | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  if (result === null) return null;

  return (
    <div className="mb-8 text-center">
      <h2 className="text-xl font-semibold mb-2">Comparison Result</h2>
      <p className="text-lg">
        Likelihood of being the same item: {(result * 100).toFixed(2)}%
      </p>
    </div>
  );
};