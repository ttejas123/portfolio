"use client";

import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { getIcon } from "../Icons";

interface ServiceNodeProps {
  data: {
    label: string;
    type?: string;
    icon?: string;
  };
}

function ServiceNodeComponent({ data }: ServiceNodeProps) {
  const typeStyles: Record<string, string> = {
    client: "border-cyan/30 bg-cyan/5",
    service: "border-accent/30 bg-accent/5",
    database: "border-green/30 bg-green/5",
    queue: "border-amber/30 bg-amber/5",
    cache: "border-red/30 bg-red/5",
    storage: "border-text-muted/30 bg-text-muted/5",
  };

  const style = typeStyles[data.type || "service"] || typeStyles.service;
  const Icon = getIcon(data.icon || "gear");

  return (
    <div
      className={`px-4 py-3 rounded-lg border ${style} backdrop-blur-sm min-w-[120px] text-center transition-all hover:scale-105`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-accent !w-2 !h-2 !border-0"
      />
      <div className="flex justify-center mb-1">
        <Icon size={16} className="text-text-secondary" />
      </div>
      <div className="text-[11px] font-mono text-text-primary font-medium">
        {data.label}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-accent !w-2 !h-2 !border-0"
      />
    </div>
  );
}

export const ServiceNode = memo(ServiceNodeComponent);

export const nodeTypes = {
  service: ServiceNode,
};
