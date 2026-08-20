"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
  BackgroundVariant,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { nodeTypes } from "./playground/CustomNodes";
import { ARCHITECTURE_DIAGRAMS } from "@/lib/data";
import { IconBuilding } from "./Icons";

type DiagramKey = keyof typeof ARCHITECTURE_DIAGRAMS;

const DIAGRAM_CONFIGS: Record<DiagramKey, { nodes: Node[]; edges: Edge[] }> = {
  rabbitmq: {
    nodes: [
      { id: "producer", position: { x: 50, y: 0 }, type: "service", data: { label: "API Server", type: "service", icon: "server" } },
      { id: "exchange", position: { x: 250, y: 0 }, type: "service", data: { label: "Exchange", type: "queue", icon: "inbox" } },
      { id: "q1", position: { x: 100, y: 130 }, type: "service", data: { label: "analytics.queue", type: "queue", icon: "inbox" } },
      { id: "q2", position: { x: 400, y: 130 }, type: "service", data: { label: "alarm.queue", type: "queue", icon: "inbox" } },
      { id: "dlq", position: { x: 250, y: 130 }, type: "service", data: { label: "dead-letter", type: "cache", icon: "alert-triangle" } },
      { id: "worker1", position: { x: 80, y: 260 }, type: "service", data: { label: "Analytics Worker", type: "service", icon: "gear" } },
      { id: "worker2", position: { x: 380, y: 260 }, type: "service", data: { label: "Alarm Worker", type: "service", icon: "bell" } },
      { id: "db", position: { x: 80, y: 380 }, type: "service", data: { label: "PostgreSQL", type: "database", icon: "database" } },
      { id: "notify", position: { x: 380, y: 380 }, type: "service", data: { label: "Notifications", type: "client", icon: "smartphone" } },
    ],
    edges: [
      { id: "e1", source: "producer", target: "exchange", animated: true, style: { stroke: "#6366f1" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" } },
      { id: "e2", source: "exchange", target: "q1", animated: true, style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e3", source: "exchange", target: "q2", animated: true, style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "e4", source: "exchange", target: "dlq", style: { stroke: "#ef4444", strokeDasharray: "5,5" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ef4444" } },
      { id: "e5", source: "q1", target: "worker1", animated: true, style: { stroke: "#6366f1" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" } },
      { id: "e6", source: "q2", target: "worker2", animated: true, style: { stroke: "#6366f1" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" } },
      { id: "e7", source: "worker1", target: "db", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "e8", source: "worker2", target: "notify", animated: true, style: { stroke: "#06b6d4" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" } },
    ],
  },
  redis: {
    nodes: [
      { id: "app", position: { x: 250, y: 0 }, type: "service", data: { label: "Application", type: "service", icon: "server" } },
      { id: "local", position: { x: 80, y: 120 }, type: "service", data: { label: "Local LRU", type: "cache", icon: "hard-drive" } },
      { id: "redis", position: { x: 250, y: 120 }, type: "service", data: { label: "Redis Cluster", type: "cache", icon: "zap" } },
      { id: "pg", position: { x: 420, y: 120 }, type: "service", data: { label: "PostgreSQL", type: "database", icon: "database" } },
      { id: "inv", position: { x: 250, y: 250 }, type: "service", data: { label: "Invalidation Bus", type: "queue", icon: "refresh-cw" } },
      { id: "s1", position: { x: 80, y: 370 }, type: "service", data: { label: "Service A", type: "service", icon: "package" } },
      { id: "s2", position: { x: 250, y: 370 }, type: "service", data: { label: "Service B", type: "service", icon: "package" } },
      { id: "s3", position: { x: 420, y: 370 }, type: "service", data: { label: "Service C", type: "service", icon: "package" } },
    ],
    edges: [
      { id: "r1", source: "app", target: "local", label: "L1 check", animated: true, style: { stroke: "#ef4444" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ef4444" } },
      { id: "r2", source: "app", target: "redis", label: "L2 check", animated: true, style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "r3", source: "app", target: "pg", label: "L3 fallback", style: { stroke: "#10b981", strokeDasharray: "5,5" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "r4", source: "redis", target: "inv", animated: true, style: { stroke: "#6366f1" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" } },
      { id: "r5", source: "inv", target: "s1", animated: true, style: { stroke: "#6366f1" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" } },
      { id: "r6", source: "inv", target: "s2", animated: true, style: { stroke: "#6366f1" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" } },
      { id: "r7", source: "inv", target: "s3", animated: true, style: { stroke: "#6366f1" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" } },
    ],
  },
  pipeline: {
    nodes: [
      { id: "store", position: { x: 250, y: 0 }, type: "service", data: { label: "Merchant Store", type: "client", icon: "shopping-bag" } },
      { id: "gtm", position: { x: 80, y: 110 }, type: "service", data: { label: "GTM / GA4", type: "service", icon: "bar-chart" } },
      { id: "collector", position: { x: 420, y: 110 }, type: "service", data: { label: "Event Collector", type: "service", icon: "radio" } },
      { id: "rabbit", position: { x: 250, y: 220 }, type: "service", data: { label: "RabbitMQ", type: "queue", icon: "inbox" } },
      { id: "proc", position: { x: 250, y: 330 }, type: "service", data: { label: "Processing Engine", type: "service", icon: "gear" } },
      { id: "cache", position: { x: 80, y: 330 }, type: "service", data: { label: "Redis Cache", type: "cache", icon: "zap" } },
      { id: "db", position: { x: 420, y: 330 }, type: "service", data: { label: "PostgreSQL", type: "database", icon: "database" } },
      { id: "alarm", position: { x: 420, y: 440 }, type: "service", data: { label: "Anomaly Engine", type: "service", icon: "bell" } },
      { id: "dash", position: { x: 250, y: 440 }, type: "service", data: { label: "Dashboard", type: "client", icon: "monitor" } },
    ],
    edges: [
      { id: "p1", source: "store", target: "gtm", animated: true, style: { stroke: "#6366f1" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" } },
      { id: "p2", source: "store", target: "collector", animated: true, style: { stroke: "#6366f1" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" } },
      { id: "p3", source: "gtm", target: "rabbit", animated: true, style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "p4", source: "collector", target: "rabbit", animated: true, style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "p5", source: "rabbit", target: "proc", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "p6", source: "proc", target: "cache", animated: true, style: { stroke: "#ef4444" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#ef4444" } },
      { id: "p7", source: "proc", target: "db", animated: true, style: { stroke: "#10b981" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" } },
      { id: "p8", source: "db", target: "alarm", animated: true, style: { stroke: "#f59e0b" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" } },
      { id: "p9", source: "cache", target: "dash", animated: true, style: { stroke: "#06b6d4" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" } },
      { id: "p10", source: "alarm", target: "dash", animated: true, style: { stroke: "#06b6d4" }, markerEnd: { type: MarkerType.ArrowClosed, color: "#06b6d4" } },
    ],
  },
};

export default function ArchitecturePlayground() {
  const [activeDiagram, setActiveDiagram] =
    useState<DiagramKey>("rabbitmq");

  const config = DIAGRAM_CONFIGS[activeDiagram];
  const meta = ARCHITECTURE_DIAGRAMS[activeDiagram];

  const onInit = useCallback((instance: { fitView: () => void }) => {
    setTimeout(() => instance.fitView(), 100);
  }, []);

  return (
    <section id="architecture" className="section-spacing relative">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mx-auto w-fit">
            <IconBuilding size={13} className="text-accent-light" />
            Live Architecture
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mt-3 mb-3 leading-tight">
            Interactive <span className="gradient-text">system diagrams</span>
          </h2>
          <p className="text-text-muted text-sm max-w-2xl mx-auto leading-relaxed">
            Explore the architectures behind the systems I build. Drag nodes, zoom
            in, and follow the data flow.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {(Object.keys(ARCHITECTURE_DIAGRAMS) as DiagramKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveDiagram(key)}
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
                activeDiagram === key
                  ? "bg-accent/15 text-accent border border-border/30"
                  : "text-text-muted border border-border hover:text-text-secondary hover:border-border-hover"
              }`}
            >
              {ARCHITECTURE_DIAGRAMS[key].label}
            </button>
          ))}
        </div>

        {/* Diagram description */}
        <motion.p
          key={activeDiagram}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-text-muted mb-5 font-mono"
        >
          {meta.description}
        </motion.p>

        {/* React Flow Canvas */}
        <motion.div
          key={`flow-${activeDiagram}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="retro-card rounded-sm overflow-hidden"
          style={{ height: 480 }}
        >
          <ReactFlow
            nodes={config.nodes}
            edges={config.edges}
            nodeTypes={nodeTypes}
            onInit={onInit}
            fitView
            attributionPosition="bottom-left"
            proOptions={{ hideAttribution: true }}
            className="bg-bg-secondary"
          >
            <Background
              variant={BackgroundVariant.Dots}
              gap={20}
              size={1}
              color="rgba(99, 102, 241, 0.08)"
            />
            <Controls
              showInteractive={false}
              className="!bg-bg-tertiary !border-border !rounded-lg !shadow-lg"
            />
          </ReactFlow>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            { color: "bg-accent", label: "Service" },
            { color: "bg-amber", label: "Queue" },
            { color: "bg-green", label: "Database" },
            { color: "bg-red", label: "Cache" },
            { color: "bg-cyan", label: "Client" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs text-text-muted"
            >
              <span className={`w-2.5 h-2.5 rounded ${item.color}`} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
