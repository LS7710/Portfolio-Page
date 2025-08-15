import React, { useState, useEffect } from 'react';

interface StartupAnimationProps {
  onComplete: () => void;
}

const StartupAnimation: React.FC<StartupAnimationProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const asciiArt = `
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
      ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
      ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
      ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
      ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
      ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
      ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
  `;

  const bootSequence = [
    'PORTFOLIO SYSTEM v2.1',
    'Copyright (c) 2025 Some made up company lmao',
    '',
    'Initializing memory modules... [OK]',
    'Loading portfolio data... [OK]',
    'Starting terminal interface... [OK]',
    'Checking system integrity... [OK]',
    '',
    'System ready. Terminal online',
    '',
    'Press any key to continue...'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < bootSequence.length) {
        setDisplayText(prev => prev + bootSequence[currentStep] + '\n');
        setCurrentStep(prev => prev + 1);
      }
      // Removed auto-complete - now waits for user input
    }, currentStep === 0 ? 1000 : 300); // First line delayed, others faster to make it look like system booting up

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  const handleKeyPress = () => {
    if (currentStep >= bootSequence.length) {
      onComplete();
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      handleKeyPress();
    };
    
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [currentStep]);

  return (
    <div 
      className="min-h-screen terminal-screen flex flex-col items-center justify-center p-8 cursor-pointer"
      onClick={handleKeyPress}
    >
      <div className="max-w-4xl w-full">
        {/* ASCII Art */}
        <div className="ascii-art text-center mb-8 animate-fade-in text-[0.4rem] sm:text-xs md:text-sm overflow-x-auto">
          {asciiArt}
        </div>

        {/* Boot sequence */}
        <div className="terminal-text font-mono text-sm leading-relaxed animate-slide-up">
          <pre className="whitespace-pre-wrap">{displayText}</pre>
          {currentStep < bootSequence.length && (
            <span className="terminal-cursor inline-block w-2 h-4 ml-1"></span>
          )}
        </div>

        {/* Instructions */}
        {currentStep >= bootSequence.length && (
          <div className="text-center mt-8 animate-glow-pulse">
            <div className="terminal-text-bright text-lg">
              System Ready
            </div>
            <div className="terminal-text-dim text-sm mt-2">
              Click anywhere or press any key to enter the portfolio
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupAnimation;