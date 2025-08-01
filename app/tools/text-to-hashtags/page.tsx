"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hash, ArrowLeft, Copy, Download, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface HashtagCategory {
  name: string;
  hashtags: string[];
  color: string;
}

const hashtagCategories: HashtagCategory[] = [
  {
    name: 'Technology',
    hashtags: ['#tech', '#technology', '#innovation', '#digital', '#ai', '#coding', '#programming', '#webdev', '#software', '#startup'],
    color: 'blue'
  },
  {
    name: 'Business',
    hashtags: ['#business', '#entrepreneur', '#startup', '#marketing', '#success', '#leadership', '#strategy', '#growth', '#networking', '#branding'],
    color: 'green'
  },
  {
    name: 'Lifestyle',
    hashtags: ['#lifestyle', '#life', '#motivation', '#inspiration', '#goals', '#happiness', '#wellness', '#fitness', '#health', '#mindset'],
    color: 'purple'
  },
  {
    name: 'Travel',
    hashtags: ['#travel', '#adventure', '#explore', '#wanderlust', '#vacation', '#trip', '#destination', '#photography', '#nature', '#culture'],
    color: 'orange'
  },
  {
    name: 'Food',
    hashtags: ['#food', '#foodie', '#delicious', '#cooking', '#recipe', '#restaurant', '#chef', '#cuisine', '#tasty', '#homemade'],
    color: 'red'
  },
  {
    name: 'Fashion',
    hashtags: ['#fashion', '#style', '#outfit', '#trend', '#clothing', '#shopping', '#beauty', '#makeup', '#accessories', '#design'],
    color: 'pink'
  }
];

export default function TextToHashtags() {
  const [inputText, setInputText] = useState('');
  const [generatedHashtags, setGeneratedHashtags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxHashtags, setMaxHashtags] = useState(10);

  const sampleText = "Just launched my new tech startup focused on AI-powered solutions for small businesses. Excited to share this journey with fellow entrepreneurs!";

  const generateHashtags = () => {
    if (!inputText.trim()) return;

    const words = inputText.toLowerCase().split(/\s+/);
    const relevantHashtags: string[] = [];

    // Add category-based hashtags
    selectedCategories.forEach(categoryName => {
      const category = hashtagCategories.find(cat => cat.name === categoryName);
      if (category) {
        relevantHashtags.push(...category.hashtags.slice(0, 3));
      }
    });

    // Add word-based hashtags
    words.forEach(word => {
      const cleanWord = word.replace(/[^\w]/g, '');
      if (cleanWord.length > 3) {
        relevantHashtags.push(`#${cleanWord}`);
      }
    });

    // Add common hashtags based on content
    if (inputText.toLowerCase().includes('tech') || inputText.toLowerCase().includes('startup')) {
      relevantHashtags.push('#tech', '#startup', '#innovation');
    }
    if (inputText.toLowerCase().includes('business')) {
      relevantHashtags.push('#business', '#entrepreneur', '#success');
    }
    if (inputText.toLowerCase().includes('travel') || inputText.toLowerCase().includes('trip')) {
      relevantHashtags.push('#travel', '#adventure', '#explore');
    }
    if (inputText.toLowerCase().includes('food') || inputText.toLowerCase().includes('cook')) {
      relevantHashtags.push('#food', '#foodie', '#delicious');
    }
    // Remove duplicates and limit
    const uniqueHashtags = Array.from(new Set(relevantHashtags)).slice(0, maxHashtags);
    setGeneratedHashtags(uniqueHashtags);
  };

  const loadSample = () => {
    setInputText(sampleText);
    setSelectedCategories(['Technology', 'Business']);
  };

  const clearText = () => {
    setInputText('');
    setGeneratedHashtags([]);
    setSelectedCategories([]);
  };

  const copyHashtags = () => {
    navigator.clipboard.writeText(generatedHashtags.join(' '));
  };

  const downloadHashtags = () => {
    const content = `Generated Hashtags:\n\n${generatedHashtags.join('\n')}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hashtags.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleCategory = (categoryName: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      red: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-8">
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
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full">
              <Hash className="w-8 h-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Text to Hashtags Tool
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Convert text into relevant hashtags for social media optimization
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
              Input Text
            </h2>

            <div className="space-y-6">
              {/* Text Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Text
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter your text here to generate relevant hashtags..."
                  rows={6}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                />
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Select Categories
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {hashtagCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => toggleCategory(category.name)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategories.includes(category.name)
                          ? getColorClasses(category.color)
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Hashtags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Max Hashtags: {maxHashtags}
                </label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  value={maxHashtags}
                  onChange={(e) => setMaxHashtags(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={generateHashtags}
                  disabled={!inputText.trim()}
                  className="flex-1 py-3 px-4 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Generate Hashtags
                </button>
                <button
                  onClick={loadSample}
                  className="py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Load Sample
                </button>
                <button
                  onClick={clearText}
                  className="py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </motion.div>

          {/* Output Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Generated Hashtags
              </h2>
              {generatedHashtags.length > 0 && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyHashtags}
                    className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    title="Copy hashtags"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={downloadHashtags}
                    className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    title="Download hashtags"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="h-96 overflow-y-auto">
              {generatedHashtags.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {generatedHashtags.map((hashtag, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-lg text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {hashtag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Copy Text:</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 break-words">
                      {generatedHashtags.join(' ')}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <div className="text-center">
                    <Hash className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Generated hashtags will appear here...</p>
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
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Generation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              AI-powered hashtag suggestions based on your content
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Hash className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Category-Based</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Choose relevant categories for targeted hashtags
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Copy className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Easy Export</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Copy hashtags or download as text file
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 