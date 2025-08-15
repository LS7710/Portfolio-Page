import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface TerminalProps {
  onCommand: (command: string) => void;
  currentSection: React.ReactNode;
}

const Terminal: React.FC<TerminalProps> = ({ onCommand, currentSection }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = 0; // Scroll to top instead of bottom
    }
  }, [currentSection]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setHistory(prev => [...prev, input]);
      onCommand(input.trim());
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const quickCommands = [
    { cmd: '/about', desc: 'About me' },
    { cmd: '/skills', desc: 'Technical skills' },
    { cmd: '/projects', desc: 'View projects' },
    { cmd: '/resume', desc: 'View resume' },
    { cmd: '/contact', desc: 'Contact info' },
    { cmd: '/download', desc: 'Download resume' },
    { cmd: 'clear', desc: 'Clear screen' },
    { cmd: 'help', desc: 'Show commands' }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Content Area */}
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 terminal-text"
      >
        {currentSection}
      </div>

      {/* Quick Commands */}
      <div className="border-t border-border p-2">
        <div className="text-xs terminal-text-dim mb-2">Quick Commands:</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {quickCommands.map((cmd) => (
            <Button
              key={cmd.cmd}
              variant="ghost"
              size="sm"
              onClick={() => onCommand(cmd.cmd)}
              className="justify-start text-xs terminal-text hover:terminal-text-bright h-auto py-1 px-2"
            >
              <span className="font-mono">{cmd.cmd}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Command Input */}
      <div className="border-t border-border p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="command-prompt">guest@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none terminal-text"
            placeholder="Type a command or use quick buttons above..."
            autoComplete="off"
          />
          <span className="terminal-cursor w-2 h-4 inline-block ml-1"></span>
        </form>
        
        <div className="mt-2 text-xs terminal-text-dim">
          Tip: Use arrow keys for command history • Tab for autocomplete • Type 'help' for all commands
        </div>
      </div>
    </div>
  );
};

export default Terminal;