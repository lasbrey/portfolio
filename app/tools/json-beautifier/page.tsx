"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Braces, CheckCircle, AlertCircle, ArrowLeft, Copy, Download } from 'lucide-react';
import Link from 'next/link';

export default function JSONBeautifier() {
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const sampleJson = `{"name":"John Doe","age":30,"city":"New York","hobbies":["reading","music","travel"],"address":{"street":"123 Main St","zip":"10001"}}`;

  const formatJSON = (jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      const formatted = JSON.stringify(parsed, null, 2);
      setFormattedJson(formatted);
      setIsValid(true);
      setErrorMessage('');
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
      setFormattedJson('');
    }
  };

  const handleInputChange = (value: string) => {
    setInputJson(value);
    if (value.trim()) {
      formatJSON(value);
    } else {
      setFormattedJson('');
      setIsValid(null);
      setErrorMessage('');
    }
  };

  const loadSample = () => {
    setInputJson(sampleJson);
    formatJSON(sampleJson);
  };

  const clearText = () => {
    setInputJson('');
    setFormattedJson('');
    setIsValid(null);
    setErrorMessage('');
  };

  const copyFormatted = () => {
    navigator.clipboard.writeText(formattedJson);
  };

  const downloadJson = () => {
    const blob = new Blob([formattedJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/tools"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
              <Braces className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              JSON Beautifier & Validator
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Format, validate, and beautify JSON with syntax highlighting
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="mb-6 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={loadSample}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Load Sample
          </button>
          <button
            onClick={clearText}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Clear
          </button>
          {formattedJson && isValid && (
            <>
              <button
                onClick={copyFormatted}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Copy className="w-4 h-4 inline mr-2" />
                Copy JSON
              </button>
              <button
                onClick={downloadJson}
                className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download JSON
              </button>
            </>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Input JSON
              </h2>
              <Braces className="w-6 h-6 text-teal-500" />
            </div>

            <textarea
              value={inputJson}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Paste your JSON here..."
              rows={20}
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none font-mono text-sm"
            />

            {/* Validation Status */}
            {isValid !== null && (
              <motion.div
                className={`mt-4 p-3 rounded-lg flex items-center space-x-2 ${
                  isValid 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isValid ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span className="text-sm font-medium">
                  {isValid ? 'Valid JSON' : `Invalid JSON: ${errorMessage}`}
                </span>
              </motion.div>
            )}
          </motion.div>

          {/* Output */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Formatted JSON
              </h2>
              {isValid && <CheckCircle className="w-6 h-6 text-green-500" />}
            </div>

            <div className="h-96 overflow-y-auto">
              {formattedJson ? (
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-900 dark:text-gray-100">
                  <code>{formattedJson}</code>
                </pre>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <div className="text-center">
                    <Braces className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Formatted JSON will appear here...</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <CheckCircle className="w-8 h-8 text-teal-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">JSON Validation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Validate JSON syntax and catch errors
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Braces className="w-8 h-8 text-teal-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Beautify JSON</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Format JSON with proper indentation
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Download className="w-8 h-8 text-teal-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Export Options</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Copy or download formatted JSON
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 