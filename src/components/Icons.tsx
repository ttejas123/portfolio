// Inline SVG line icons — no emoji, fully consistent
// All icons are 20x20 with stroke-based design

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

const defaultProps = { size: 20, className: "text-current" };

function makeIcon(path: string, opts?: { viewBox?: string; fill?: boolean }) {
  const vb = opts?.viewBox || "0 0 24 24";
  return function Icon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={vb}
        fill={opts?.fill ? "currentColor" : "none"}
        stroke={opts?.fill ? "none" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d={path} />
      </svg>
    );
  };
}

// Multi-path icon helper
function makeMultiIcon(paths: string[], opts?: { viewBox?: string; fill?: boolean }) {
  const vb = opts?.viewBox || "0 0 24 24";
  return function Icon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={vb}
        fill={opts?.fill ? "currentColor" : "none"}
        stroke={opts?.fill ? "none" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        {paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    );
  };
}

// ===== SECTION LABEL ICONS =====
export const IconBarChart = makeMultiIcon([
  "M18 20V10", "M12 20V4", "M6 20v-6",
]);

export const IconBrain = makeMultiIcon([
  "M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z",
  "M9 22h6", "M10 17v5", "M14 17v5",
]);

export const IconGear = makeMultiIcon([
  "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
]);

export const IconBuilding = makeMultiIcon([
  "M3 21h18", "M5 21V7l8-4v18", "M19 21V11l-6-4",
  "M9 9h1", "M9 13h1", "M9 17h1",
]);

export const IconBookOpen = makeMultiIcon([
  "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
  "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
]);

export const IconRocket = makeMultiIcon([
  "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
  "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
  "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
  "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
]);

// ===== METRIC ICONS =====
export const IconZap = makeIcon("M13 2L3 14h9l-1 8 10-12h-9l1-8z");

export const IconActivity = makeIcon("M22 12h-4l-3 9L9 3l-3 9H2");

export const IconSearch = makeMultiIcon([
  "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M21 21l-4.35-4.35",
]);

export const IconCheckCircle = makeMultiIcon([
  "M22 11.08V12a10 10 0 1 1-5.93-9.14",
  "M22 4L12 14.01l-3-3",
]);

export const IconLink = makeMultiIcon([
  "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
  "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
]);

// ===== CONCEPT ICONS =====
export const IconBolt = makeIcon("M13 2L3 14h9l-1 8 10-12h-9l1-8z");

export const IconSnowflake = makeMultiIcon([
  "M12 2v20", "M17 7l-5 5-5-5", "M17 17l-5-5-5 5",
  "M2 12h20", "M7 7l5 5 5-5", "M7 17l5-5 5 5",
]);

export const IconDatabase = makeMultiIcon([
  "M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2z",
  "M2 6.5C2 8.98 6.48 11 12 11s10-2.02 10-4.5",
  "M2 11.5C2 13.98 6.48 16 12 16s10-2.02 10-4.5",
]);

export const IconTrendingUp = makeMultiIcon([
  "M23 6l-9.5 9.5-5-5L1 18",
  "M17 6h6v6",
]);

export const IconFlag = makeMultiIcon([
  "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
  "M4 22v-7",
]);

export const IconGlobe = makeMultiIcon([
  "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
  "M2 12h20",
  "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
]);

export const IconMonitor = makeMultiIcon([
  "M2 3h20v14H2z", "M8 21h8", "M12 17v4",
]);

export const IconLayers = makeMultiIcon([
  "M12 2L2 7l10 5 10-5-10-5z",
  "M2 17l10 5 10-5",
  "M2 12l10 5 10-5",
]);

// ===== JOURNAL ICONS =====
export const IconGitBranch = makeMultiIcon([
  "M6 3v12", "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  "M18 9c0 4-4 6-6 9",
]);

export const IconRefreshCw = makeMultiIcon([
  "M23 4v6h-6", "M1 20v-6h6",
  "M3.51 9a9 9 0 0 1 14.85-3.36L23 10",
  "M20.49 15a9 9 0 0 1-14.85 3.36L1 14",
]);

export const IconUsers = makeMultiIcon([
  "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
  "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  "M23 21v-2a4 4 0 0 0-3-3.87",
  "M16 3.13a4 4 0 0 1 0 7.75",
]);

export const IconCpu = makeMultiIcon([
  "M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z",
  "M9 9h6v6H9z",
  "M9 2v2", "M15 2v2", "M9 20v2", "M15 20v2",
  "M2 9h2", "M2 15h2", "M20 9h2", "M20 15h2",
]);

export const IconTarget = makeMultiIcon([
  "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
  "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
  "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
]);

export const IconRadio = makeMultiIcon([
  "M12 12m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0",
  "M16.24 7.76a6 6 0 0 1 0 8.49",
  "M7.76 16.24a6 6 0 0 1 0-8.49",
  "M19.07 4.93a10 10 0 0 1 0 14.14",
  "M4.93 19.07a10 10 0 0 1 0-14.14",
]);

export const IconWrench = makeMultiIcon([
  "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
]);

// ===== ARCHITECTURE NODE ICONS =====
export const IconServer = makeMultiIcon([
  "M2 5h20v6H2z", "M2 13h20v6H2z",
  "M6 8h.01", "M6 16h.01",
]);

export const IconInbox = makeMultiIcon([
  "M22 12h-6l-2 3H10l-2-3H2",
  "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
]);

export const IconAlertTriangle = makeMultiIcon([
  "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
  "M12 9v4", "M12 17h.01",
]);

export const IconBell = makeMultiIcon([
  "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
  "M13.73 21a2 2 0 0 1-3.46 0",
]);

export const IconHardDrive = makeMultiIcon([
  "M22 12H2",
  "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
  "M6 16h.01", "M10 16h.01",
]);

export const IconSmartphone = makeMultiIcon([
  "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
  "M12 18h.01",
]);

export const IconPackage = makeMultiIcon([
  "M16.5 9.4l-9-5.19",
  "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  "M3.27 6.96L12 12.01l8.73-5.05",
  "M12 22.08V12",
]);

export const IconShoppingBag = makeMultiIcon([
  "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z",
  "M3 6h18", "M16 10a4 4 0 0 1-8 0",
]);

// ===== FOOTER ICONS =====
export const IconMail = makeMultiIcon([
  "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
  "M22 6l-10 7L2 6",
]);

export const IconExternalLink = makeMultiIcon([
  "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  "M15 3h6v6",
  "M10 14L21 3",
]);

export const IconMapPin = makeMultiIcon([
  "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
  "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
]);

// ===== ICON MAP (string key → component) =====
export const ICON_MAP: Record<string, React.FC<IconProps>> = {
  zap: IconZap,
  activity: IconActivity,
  search: IconSearch,
  "check-circle": IconCheckCircle,
  link: IconLink,
  bolt: IconBolt,
  snowflake: IconSnowflake,
  database: IconDatabase,
  "trending-up": IconTrendingUp,
  flag: IconFlag,
  globe: IconGlobe,
  monitor: IconMonitor,
  layers: IconLayers,
  "git-branch": IconGitBranch,
  "refresh-cw": IconRefreshCw,
  users: IconUsers,
  cpu: IconCpu,
  target: IconTarget,
  radio: IconRadio,
  wrench: IconWrench,
  server: IconServer,
  inbox: IconInbox,
  "alert-triangle": IconAlertTriangle,
  bell: IconBell,
  "hard-drive": IconHardDrive,
  smartphone: IconSmartphone,
  package: IconPackage,
  "shopping-bag": IconShoppingBag,
  mail: IconMail,
  "external-link": IconExternalLink,
  "map-pin": IconMapPin,
  "bar-chart": IconBarChart,
  brain: IconBrain,
  gear: IconGear,
  building: IconBuilding,
  "book-open": IconBookOpen,
  rocket: IconRocket,
};

export function getIcon(name: string): React.FC<IconProps> {
  return ICON_MAP[name] || IconGear;
}
