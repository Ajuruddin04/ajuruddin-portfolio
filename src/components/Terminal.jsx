import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Circle, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SOCIAL_LINKS } from '../data/socials';
import { processCommand } from '../data/terminalCommands';

export default function Terminal() {
  const [inputVal, setInputVal] = useState('');
  const [draftInput, setDraftInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([
    { type: 'cmd', text: 'whoami' },
    { type: 'output', text: 'ajuruddin-ali (B.Tech IT Final Year @ REC Mirzapur)' },
    { type: 'cmd', text: 'role' },
    { type: 'output', text: 'Software Developer | Web Developer | Cloud & DevOps Enthusiast' },
    { type: 'cmd', text: 'focus' },
    { type: 'output', text: 'Code → Container → Cloud → Production' },
    { type: 'cmd', text: 'help' },
    { type: 'output', text: "Type 'projects', 'about', 'skills', 'experience', 'education', 'contact', 'resume' or 'sudo hire ajuruddin' to execute!" }
  ]);

  // History cycling states
  const [cmdHistory, setCmdHistory] = useState(['whoami', 'role', 'focus', 'help']);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const triggerConfetti = () => {
    try { confetti({ particleCount: 85, spread: 65, origin: { y: 0.7 } }); } catch (err) {}
  };

  const executeCommand = (cmdString) => {
    const rawCmd = cmdString.trim();
    if (!rawCmd) return;

    // Add to entered commands history for ArrowUp/ArrowDown
    setCmdHistory((prev) => [...prev, rawCmd]);
    setHistoryIdx(-1);
    setDraftInput('');

    const res = processCommand(rawCmd, SOCIAL_LINKS, triggerConfetti);

    if (res.type === 'clear') {
      setHistory([]);
      setInputVal('');
      inputRef.current?.focus();
      return;
    }

    if (res.type !== 'none') {
      setHistory((prev) => [
        ...prev,
        { type: 'cmd', text: rawCmd },
        { type: 'output', text: res.output }
      ]);
    }

    setInputVal('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;

      if (historyIdx === -1) {
        setDraftInput(inputVal);
        const newIdx = cmdHistory.length - 1;
        setHistoryIdx(newIdx);
        setInputVal(cmdHistory[newIdx]);
      } else if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInputVal(cmdHistory[newIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx !== -1) {
        if (historyIdx < cmdHistory.length - 1) {
          const newIdx = historyIdx + 1;
          setHistoryIdx(newIdx);
          setInputVal(cmdHistory[newIdx]);
        } else {
          setHistoryIdx(-1);
          setInputVal(draftInput);
        }
      }
    }
  };

  const copyTerminalContent = () => {
    const text = history.map((h) => (h.type === 'cmd' ? `$ ${h.text}` : h.text)).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Suggestion buttons
  const suggestions = ['whoami', 'about', 'skills', 'projects', 'experience', 'education', 'contact', 'sudo hire ajuruddin'];

  return (
    <div className="w-full glass-panel rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      
      {/* Terminal Title Bar */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Circle className="w-3 h-3 fill-rose-500 text-rose-500" />
          <Circle className="w-3 h-3 fill-amber-500 text-amber-500" />
          <Circle className="w-3 h-3 fill-emerald-500 text-emerald-500" />
          <span className="ml-2 text-slate-400 text-xs font-semibold flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-purple-400" />
            <span>ajuruddin@devstation:~</span>
          </span>
        </div>

        <button
          onClick={copyTerminalContent}
          className="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded hover:bg-slate-800"
          title="Copy Terminal Logs"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Output Body */}
      <div
        className="p-4 sm:p-5 h-[340px] overflow-y-auto space-y-3 bg-slate-950/90 text-slate-300"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="text-slate-500 text-xs pb-2 border-b border-slate-800/60">
          Welcome to Ajuruddin's Portfolio CLI (v3.0). Type <span className="text-cyan-400 font-bold">'help'</span> for navigation & system commands.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.type === 'cmd' ? (
              <div className="flex items-center gap-2 text-purple-300">
                <span className="text-emerald-400 font-bold">ajuruddin@ubuntu:~$</span>
                <span>{item.text}</span>
              </div>
            ) : (
              <div className="pl-4 text-slate-300 leading-relaxed font-sans sm:font-mono text-xs sm:text-sm border-l-2 border-slate-800 whitespace-pre-line">
                {item.text}
              </div>
            )}
          </div>
        ))}

        {/* Input Prompt Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 font-bold shrink-0">ajuruddin@ubuntu:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'projects', 'about', 'skills', 'help'..."
            className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs sm:text-sm placeholder-slate-600"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>

      {/* Quick Suggestion Chips */}
      <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400 overflow-x-auto">
        <span className="text-slate-500 font-semibold shrink-0">Try:</span>
        {suggestions.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-purple-950 hover:text-purple-300 border border-slate-700/60 transition-colors whitespace-nowrap"
          >
            {cmd}
          </button>
        ))}
      </div>

    </div>
  );
}
