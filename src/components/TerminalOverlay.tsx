"use client";

import { useState, useEffect, useRef } from "react";
import { TERMINAL_LOGS } from "@/lib/data";

export default function TerminalOverlay() {
  const [logs, setLogs] = useState<
    { level: string; service: string; message: string; timestamp: string }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const addLog = () => {
      const log = TERMINAL_LOGS[indexRef.current % TERMINAL_LOGS.length];
      const now = new Date();
      const timestamp = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}.${now
        .getMilliseconds()
        .toString()
        .padStart(3, "0")}`;

      setLogs((prev) => {
        const newLogs = [...prev, { ...log, timestamp }];
        return newLogs.slice(-12); // Keep last 12 entries
      });

      indexRef.current++;
    };

    // Initial batch
    for (let i = 0; i < 5; i++) {
      setTimeout(() => addLog(), i * 200);
    }

    const interval = setInterval(addLog, 2000 + Math.random() * 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "ERROR":
        return "text-red";
      case "WARN":
        return "text-amber";
      case "DEBUG":
        return "text-text-muted";
      default:
        return "text-green";
    }
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden w-full max-w-lg">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-secondary/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green/60" />
        </div>
        <span className="text-[11px] font-mono text-text-muted ml-2">
          system.log — event-stream
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-glow" />
          <span className="text-[10px] font-mono text-green/70">LIVE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={containerRef}
        className="p-3 font-mono text-[11px] leading-5 h-52 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {logs.map((log, i) => (
          <div
            key={`${i}-${log.timestamp}`}
            className="flex gap-2 animate-[slide-up_0.3s_ease-out]"
          >
            <span className="text-text-muted/50 shrink-0">{log.timestamp}</span>
            <span className={`shrink-0 w-12 ${getLevelColor(log.level)}`}>
              [{log.level}]
            </span>
            <span className="text-accent/70 shrink-0">{log.service}:</span>
            <span className="text-text-secondary">{log.message}</span>
          </div>
        ))}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-accent">❯</span>
          <span className="w-2 h-4 bg-accent/60 animate-blink" />
        </div>
      </div>
    </div>
  );
}
