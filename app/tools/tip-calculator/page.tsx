"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, DollarSign, Percent, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [customTip, setCustomTip] = useState('');

  const bill = parseFloat(billAmount) || 0;
  const tipAmount = customTip ? parseFloat(customTip) : (bill * tipPercentage / 100);
  const totalAmount = bill + tipAmount;
  const amountPerPerson = numberOfPeople > 0 ? totalAmount / numberOfPeople : 0;

  const tipPercentages = [5, 10, 15, 20, 25];

  const handleTipPercentageChange = (percentage: number) => {
    setTipPercentage(percentage);
    setCustomTip('');
  };

  const handleCustomTipChange = (value: string) => {
    setCustomTip(value);
    setTipPercentage(0);
  };

  const resetCalculator = () => {
    setBillAmount('');
    setTipPercentage(15);
    setNumberOfPeople(1);
    setCustomTip('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto pt-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/tools"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
              <Calculator className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Tip Calculator
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Calculate tips and split bills with ease
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
              Bill Details
            </h2>

            {/* Bill Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bill Amount
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Tip Percentage */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Tip Percentage
              </label>
              <div className="grid grid-cols-5 gap-2 mb-3">
                {tipPercentages.map((percentage) => (
                  <button
                    key={percentage}
                    onClick={() => handleTipPercentageChange(percentage)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      tipPercentage === percentage && !customTip
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30'
                    }`}
                  >
                    {percentage}%
                  </button>
                ))}
              </div>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  value={customTip}
                  onChange={(e) => handleCustomTipChange(e.target.value)}
                  placeholder="Custom tip amount"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Number of People */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of People
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  -
                </button>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {numberOfPeople}
                  </span>
                </div>
                <button
                  onClick={() => setNumberOfPeople(numberOfPeople + 1)}
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetCalculator}
              className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Reset Calculator
            </button>
          </motion.div>

          {/* Results Section */}
          <motion.div
            className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-xl text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Results</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-green-400/30">
                <span className="text-green-100">Bill Amount:</span>
                <span className="font-semibold">${bill.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-green-400/30">
                <span className="text-green-100">Tip Amount:</span>
                <span className="font-semibold">${tipAmount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-green-400/30">
                <span className="text-green-100">Total Amount:</span>
                <span className="font-semibold text-xl">${totalAmount.toFixed(2)}</span>
              </div>

              {numberOfPeople > 1 && (
                <div className="flex justify-between items-center py-3 border-b border-green-400/30">
                  <span className="text-green-100">Amount per person:</span>
                  <span className="font-semibold text-xl">${amountPerPerson.toFixed(2)}</span>
                </div>
              )}

              <div className="pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">${totalAmount.toFixed(2)}</div>
                  <div className="text-green-100">
                    {numberOfPeople > 1 
                      ? `Split ${numberOfPeople} ways: $${amountPerPerson.toFixed(2)} each`
                      : 'Total to pay'
                    }
                  </div>
                </div>
              </div>
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
            <Calculator className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Easy Calculation</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Quick and accurate tip calculations
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Split Bills</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Split bills evenly among friends
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Percent className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Custom Tips</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Set custom tip amounts or percentages
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 