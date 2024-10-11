import React, { useState, useEffect } from 'react';
import { ComparisonForm } from './components/ComparisonForm';
import { ResultDisplay } from './components/ResultDisplay';
import { TrainingData } from './components/TrainingData';
import { compareTexts, trainModel } from './utils/textComparison';

function App() {
  const [comparisonResult, setComparisonResult] = useState<number | null>(null);
  const [trainingData, setTrainingData] = useState<Array<[string[], string[], number]>>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('trainingData');
    if (storedData) {
      setTrainingData(JSON.parse(storedData));
    }
  }, []);

  const handleCompare = (text1: string[], text2: string[]) => {
    const result = compareTexts(text1, text2);
    setComparisonResult(result);
  };

  const handleTrain = (text1: string[], text2: string[], similarity: number) => {
    const newTrainingData = [...trainingData, [text1, text2, similarity]];
    setTrainingData(newTrainingData);
    localStorage.setItem('trainingData', JSON.stringify(newTrainingData));
    trainModel(newTrainingData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Text Comparison Trainer</h1>
      <ComparisonForm onCompare={handleCompare} />
      <ResultDisplay result={comparisonResult} />
      <TrainingData data={trainingData} onTrain={handleTrain} />
    </div>
  );
}

export default App;