import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Sample code to display with typing effect
const sampleCode = [
  'import React from "react";',
  'import { motion } from "framer-motion";',
  '',
  'const Portfolio = () => {',
  '  return (',
  '    <div className="app">',
  '      <Header />',
  '      <Hero />',
  '      <About />',
  '      <Skills />',
  '      <Projects />',
  '      <Contact />',
  '    </div>',
  '  );',
  '};',
  '',
  'export default Portfolio;'
];

// Commands that appear to be running
const commands = [
  '> Installing dependencies...',
  '> npm install framer-motion',
  '> npm install tailwindcss',
  '> Compiling...',
  '> Building...',
  '> Optimizing assets...',
  '> Deploying...',
  '> Project deployed successfully!'
];

const LiveCoding = () => {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [commandText, setCommandText] = useState('');
  const [cursor, setCursor] = useState(true);

  // Typing effect for code
  useEffect(() => {
    if (currentLine < sampleCode.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(prev => [...prev, sampleCode[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, Math.random() * 200 + 100); // Random delay for realistic typing
      
      return () => clearTimeout(timer);
    }
  }, [currentLine, displayedCode]);

  // Command running effect
  useEffect(() => {
    if (currentCommand < commands.length) {
      let text = '';
      const command = commands[currentCommand];
      
      const typeCommand = (index: number) => {
        if (index < command.length) {
          text += command.charAt(index);
          setCommandText(text);
          
          const delay = Math.random() * 50 + 20;
          setTimeout(() => typeCommand(index + 1), delay);
        } else {
          setTimeout(() => {
            setCurrentCommand(prev => prev + 1);
            setCommandText('');
          }, 1000);
        }
      };
      
      typeCommand(0);
    } else {
      // Start over when all commands have run
      setTimeout(() => {
        setCurrentCommand(0);
        setCommandText('');
      }, 3000);
    }
  }, [currentCommand]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="code-editor-container relative w-full h-full">
      {/* Editor background */}
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-xl">
        {/* Editor header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-xs ml-4">portfolio.tsx</div>
        </div>
        
        {/* Code area */}
        <div className="p-4 font-mono text-xs md:text-sm text-gray-300 h-64 overflow-hidden relative">
          <div className="space-y-1">
            {displayedCode.map((line, index) => (
              <div key={index} className="flex">
                <span className="text-gray-500 w-8">{index + 1}</span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1"
                >
                  {line}
                </motion.span>
              </div>
            ))}
            {currentLine < sampleCode.length && (
              <div className="flex">
                <span className="text-gray-500 w-8">{displayedCode.length + 1}</span>
                <span className="flex-1">
                  {cursor ? <span className="text-blue-400">|</span> : <span>&nbsp;</span>}
                </span>
              </div>
            )}
          </div>
          
          {/* Floating web elements */}
          <motion.div 
            className="absolute right-4 top-2 w-20 h-20 border border-blue-500/30 rounded opacity-60"
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 5, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute right-12 top-12 w-16 h-16 border border-purple-500/30 rounded-full opacity-60"
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut",
              delay: 1 
            }}
          />
        </div>
        
        {/* Console output */}
        <div className="bg-black p-3 font-mono text-xs border-t border-gray-700 h-24 overflow-hidden">
          <div className="text-green-500">$ npm run build</div>
          <div className="text-gray-300 mt-1">
            {commandText}
            {cursor ? <span className="text-gray-300">_</span> : <span>&nbsp;</span>}
          </div>
        </div>
      </div>
      
      {/* Web elements being "created" in real-time */}
      <div className="absolute top-1/4 right-4 z-10">
        <motion.div 
          className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
          animate={{ 
            x: [30, 0, 30],
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="absolute bottom-1/3 left-8 z-10">
        <motion.div 
          className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-full"
          animate={{ 
            y: [20, -20, 20],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </div>
  );
};

export default LiveCoding;