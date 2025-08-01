"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, Copy, Download } from 'lucide-react';
import Link from 'next/link';

const readingSpeeds = [
  { name: 'Slow', wpm: 150 },
  { name: 'Average', wpm: 250 },
  { name: 'Fast', wpm: 350 },
  { name: 'Speed Reading', wpm: 500 }
];

export default function ReadTimeEstimator() {
  const [text, setText] = useState('');
  const [selectedSpeed, setSelectedSpeed] = useState(readingSpeeds[1]);

  const analysis = useMemo(() => {
    if (!text.trim()) return null;

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const readingTimeMinutes = wordCount / selectedSpeed.wpm;
    const minutes = Math.floor(readingTimeMinutes);
    const seconds = Math.round((readingTimeMinutes - minutes) * 60);
    
    return {
      wordCount,
      readingTime: `${minutes}m ${seconds}s`,
      wpm: selectedSpeed.wpm
    };
  }, [text, selectedSpeed]);

  const loadSample = () => {
    setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
  };

  const copyResults = () => {
    if (!analysis) return;
    navigator.clipboard.writeText(`Reading Time: ${analysis.readingTime} (${analysis.wordCount} words at ${analysis.wpm} WPM)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto pt-20">
        {/* Header */}
        <motion.div className="text-center mb-12">
          <Link href="/tools" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-yellow-600 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
              <Clock className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Read Time Estimator
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Calculate reading time for articles and content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input */}
          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Text Input</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Reading Speed
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {readingSpeeds.map((speed) => (
                    <button
                      key={speed.name}
                      onClick={() => setSelectedSpeed(speed)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedSpeed.name === speed.name
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {speed.name} ({speed.wpm} WPM)
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Text
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste your article or content here..."
                  rows={12}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div className="flex space-x-3">
                <button onClick={loadSample} className="flex-1 py-3 px-4 bg-yellow-500 text-white rounded-xl font-medium hover:bg-yellow-600 transition-colors">
                  Load Sample
                </button>
                <button onClick={() => setText('')} className="py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Clear
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Reading Analysis</h2>
              {analysis && (
                <button onClick={copyResults} className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="h-96 overflow-y-auto">
              {analysis ? (
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white">
                    <Clock className="w-12 h-12 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">{analysis.readingTime}</div>
                    <div className="text-sm opacity-90">
                      {selectedSpeed.name} speed ({analysis.wpm} WPM)
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {analysis.wordCount}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Words</div>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {Math.round(analysis.wordCount / 5)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Characters</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <div className="text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Reading analysis will appear here...</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 