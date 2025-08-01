"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Hash, FileText, BarChart3, ArrowLeft, Copy, Download } from 'lucide-react';
import Link from 'next/link';

interface WordCount {
  word: string;
  count: number;
  percentage: number;
}

export default function DuplicateWordCounter() {
  const [text, setText] = useState('');
  const [showResults, setShowResults] = useState(false);

  const wordAnalysis = useMemo(() => {
    if (!text.trim()) return { words: [], totalWords: 0, uniqueWords: 0, duplicates: 0 };

    // Clean and split text into words
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 0);

    const totalWords = words.length;
    const wordCounts: { [key: string]: number } = {};

    // Count word frequencies
    words.forEach(word => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    // Convert to array and sort by frequency
    const wordCountArray: WordCount[] = Object.entries(wordCounts)
      .map(([word, count]) => ({
        word,
        count,
        percentage: (count / totalWords) * 100
      }))
      .sort((a, b) => b.count - a.count);

    const uniqueWords = wordCountArray.length;
    const duplicates = wordCountArray.filter(w => w.count > 1).length;

    return {
      words: wordCountArray,
      totalWords,
      uniqueWords,
      duplicates
    };
  }, [text]);

  const handleAnalyze = () => {
    if (text.trim()) {
      setShowResults(true);
    }
  };

  const handleClear = () => {
    setText('');
    setShowResults(false);
  };

  const copyResults = () => {
    const results = wordAnalysis.words
      .map(w => `${w.word}: ${w.count} times (${w.percentage.toFixed(1)}%)`)
      .join('\n');
    navigator.clipboard.writeText(results);
  };

  const downloadResults = () => {
    const results = wordAnalysis.words
      .map(w => `${w.word},${w.count},${w.percentage.toFixed(1)}%`)
      .join('\n');
    const csv = `Word,Count,Percentage\n${results}`;
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'word-analysis.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/tools"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <Hash className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Duplicate Word Counter
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Analyze text and find duplicate words with frequency counts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Enter Your Text
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Text to Analyze
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here to analyze duplicate words..."
                rows={12}
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleAnalyze}
                disabled={!text.trim()}
                className="flex-1 py-3 px-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Analyze Text
              </button>
              <button
                onClick={handleClear}
                className="py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Clear
              </button>
            </div>

            {/* Quick Stats */}
            {text.trim() && (
              <motion.div
                className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-300">Total Words:</span>
                    <span className="ml-2 font-semibold text-gray-900 dark:text-white">{wordAnalysis.totalWords}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-300">Unique Words:</span>
                    <span className="ml-2 font-semibold text-gray-900 dark:text-white">{wordAnalysis.uniqueWords}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-300">Duplicate Words:</span>
                    <span className="ml-2 font-semibold text-gray-900 dark:text-white">{wordAnalysis.duplicates}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-300">Duplication Rate:</span>
                    <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                      {wordAnalysis.totalWords > 0 ? ((wordAnalysis.totalWords - wordAnalysis.uniqueWords) / wordAnalysis.totalWords * 100).toFixed(1) : 0}%
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Results Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Word Analysis
              </h2>
              {showResults && wordAnalysis.words.length > 0 && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyResults}
                    className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    title="Copy results"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={downloadResults}
                    className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    title="Download CSV"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {showResults && wordAnalysis.words.length > 0 ? (
              <div className="space-y-4">
                <div className="max-h-96 overflow-y-auto">
                  {wordAnalysis.words.map((word, index) => (
                    <motion.div
                      key={word.word}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {word.word}
                        </span>
                        {word.count > 1 && (
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                            {word.count}x
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {word.percentage.toFixed(1)}%
                        </span>
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(word.percentage * 2, 100)}%` }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Enter text above and click "Analyze Text" to see results</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Hash className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Word Frequency</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Count how many times each word appears
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Visual Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              See word distribution with progress bars
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Download className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Export Results</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Download results as CSV or copy to clipboard
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 