"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Mic,
  MicOff,
  MessageCircle,
  X,
  Send,
  VolumeX
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const sampleResponses = [
  "Hi! I'm Lasbrey's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
  "Lasbrey has over 5 years of experience in full-stack development, specializing in React, Next.js, and modern web technologies.",
  "Some of his notable projects include an e-commerce platform with Stripe integration, a collaborative task management app, and an AI content generator.",
  "Lasbrey is passionate about creating clean, efficient code and beautiful user interfaces. He loves staying up-to-date with the latest web development trends.",
  "You can reach Lasbrey through the contact form on this website or connect with him on LinkedIn and GitHub. He's always open to discussing new opportunities!",
];

export function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm Lasbrey's voice assistant. Ask me anything about his work, skills, or projects!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const responseContent = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(responseContent);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        speechSynthesis.speak(utterance);
      }
    }, 1000);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        handleSendMessage(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
        handleSendMessage("I couldn't hear you clearly. Could you type your question instead?");
      };

      recognition.start();
    } else {
      handleSendMessage("Voice recognition is not supported in your browser. Please type your question instead.");
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg group relative bg-lime-600 hover:bg-lime-900"
        >
          <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110 text-primary" />

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-lime-400 animate-ping" />
        </Button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              className="relative w-full max-w-md"
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <Card className="h-[500px] flex flex-col shadow-2xl bg-white rounded-md">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-lime-400 text-primary-foreground rounded-t-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Lasbrey's Assistant</h3>
                      <p className="text-xs opacity-90">
                        {isSpeaking ? 'Speaking...' : 'Online'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isSpeaking && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={stopSpeaking}
                        className="text-white hover:bg-white/20"
                      >
                        <VolumeX className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${message.type === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-muted'
                          }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </CardContent>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything..."
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage(inputValue);
                        }
                      }}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleVoiceInput}
                      variant="outline"
                      size="icon"
                      className={isListening ? 'bg-red-500 text-white' : ''}
                    >
                      {isListening ? (
                        <MicOff className="h-4 w-4" />
                      ) : (
                        <Mic className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      className='bg-lime-400'
                      onClick={() => handleSendMessage(inputValue)}
                      size="icon"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {isListening ? 'Listening...' : 'Type or click the mic to speak'}
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}