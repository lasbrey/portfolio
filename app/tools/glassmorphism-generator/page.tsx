"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, ArrowLeft, Copy, Eye } from 'lucide-react';
import Link from 'next/link';

interface GlassmorphismSettings {
  blur: number;
  transparency: number;
  borderRadius: number;
  borderWidth: number;
  borderColor: string;
  backgroundColor: string;
  shadowColor: string;
  shadowBlur: number;
  shadowSpread: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
}

export default function GlassmorphismGenerator() {
  const [settings, setSettings] = useState<GlassmorphismSettings>({
    blur: 10,
    transparency: 0.2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowBlur: 20,
    shadowSpread: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 10
  });

  const [viewMode, setViewMode] = useState<'preview' | 'css'>('preview');

  const generateCSS = () => {
    const rgba = (hex: string, alpha: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return `.glassmorphism {
  backdrop-filter: blur(${settings.blur}px);
  -webkit-backdrop-filter: blur(${settings.blur}px);
  background-color: ${rgba(settings.backgroundColor, settings.transparency)};
  border-radius: ${settings.borderRadius}px;
  border: ${settings.borderWidth}px solid ${rgba(settings.borderColor, 0.2)};
  box-shadow: ${settings.shadowOffsetX}px ${settings.shadowOffsetY}px ${settings.shadowBlur}px ${settings.shadowSpread}px ${rgba(settings.shadowColor, 0.1)};
}`;
  };

  const copyCSS = () => {
    navigator.clipboard.writeText(generateCSS());
  };

  const updateSetting = (key: keyof GlassmorphismSettings, value: number | string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const glassmorphismStyle = {
    backdropFilter: `blur(${settings.blur}px)`,
    WebkitBackdropFilter: `blur(${settings.blur}px)`,
    backgroundColor: `rgba(${parseInt(settings.backgroundColor.slice(1, 3), 16)}, ${parseInt(settings.backgroundColor.slice(3, 5), 16)}, ${parseInt(settings.backgroundColor.slice(5, 7), 16)}, ${settings.transparency})`,
    borderRadius: `${settings.borderRadius}px`,
    border: `${settings.borderWidth}px solid rgba(255, 255, 255, 0.2)`,
    boxShadow: `${settings.shadowOffsetX}px ${settings.shadowOffsetY}px ${settings.shadowBlur}px ${settings.shadowSpread}px rgba(0, 0, 0, 0.1)`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 md:px-8">
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
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-full">
              <Palette className="w-8 h-8 text-pink-600 dark:text-pink-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              CSS Glassmorphism Generator
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Create beautiful glassmorphism effects with real-time CSS code generation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Glassmorphism Settings
            </h2>

            <div className="space-y-6">
              {/* Blur */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Blur: {settings.blur}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={settings.blur}
                  onChange={(e) => updateSetting('blur', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Transparency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Transparency: {Math.round(settings.transparency * 100)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={settings.transparency}
                  onChange={(e) => updateSetting('transparency', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Border Radius */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Border Radius: {settings.borderRadius}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={settings.borderRadius}
                  onChange={(e) => updateSetting('borderRadius', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Border Width */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Border Width: {settings.borderWidth}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={settings.borderWidth}
                  onChange={(e) => updateSetting('borderWidth', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Shadow Settings */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Shadow Blur: {settings.shadowBlur}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={settings.shadowBlur}
                    onChange={(e) => updateSetting('shadowBlur', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Shadow Spread: {settings.shadowSpread}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={settings.shadowSpread}
                    onChange={(e) => updateSetting('shadowSpread', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Shadow Offset X: {settings.shadowOffsetX}px
                  </label>
                  <input
                    type="range"
                    min="-20"
                    max="20"
                    value={settings.shadowOffsetX}
                    onChange={(e) => updateSetting('shadowOffsetX', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Shadow Offset Y: {settings.shadowOffsetY}px
                  </label>
                  <input
                    type="range"
                    min="-20"
                    max="20"
                    value={settings.shadowOffsetY}
                    onChange={(e) => updateSetting('shadowOffsetY', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Color Picker */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Background Color
                  </label>
                  <input
                    type="color"
                    value={settings.backgroundColor}
                    onChange={(e) => updateSetting('backgroundColor', e.target.value)}
                    className="w-full h-10 rounded-lg cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Shadow Color
                  </label>
                  <input
                    type="color"
                    value={settings.shadowColor}
                    onChange={(e) => updateSetting('shadowColor', e.target.value)}
                    className="w-full h-10 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Preview and CSS */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {viewMode === 'preview' ? 'Live Preview' : 'Generated CSS'}
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('preview')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'preview'
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  title="Preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('css')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'css'
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  title="CSS Code"
                >
                  <Palette className="w-4 h-4" />
                </button>
                {viewMode === 'css' && (
                  <button
                    onClick={copyCSS}
                    className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    title="Copy CSS"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="h-96">
              {viewMode === 'preview' ? (
                <div className="h-full flex items-center justify-center">
                  <div
                    className="w-64 h-32 p-6 text-center"
                    style={glassmorphismStyle}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Glassmorphism
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Beautiful glass effect
                    </p>
                  </div>
                </div>
              ) : (
                <pre className="h-full bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-auto text-sm font-mono text-gray-900 dark:text-gray-100">
                  <code>{generateCSS()}</code>
                </pre>
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
            <Eye className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Live Preview</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              See your glassmorphism effect in real-time
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Palette className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customizable</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Adjust blur, transparency, borders, and shadows
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Copy className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Copy CSS</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get the generated CSS code instantly
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 