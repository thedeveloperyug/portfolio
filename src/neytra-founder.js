// NEYTRA OS — independent founder profile layer.
// Injects the founder role without changing the CV employment timeline.
import React from "react";

export const neytraFounder = {
  period: "Aug 2026 — Present",
  role: "Founder",
  company: "NEYTRA OS",
  location: "Independent · Remote",
  tone: "cyan",
  summary:
    "Founder of NEYTRA OS, an independent AI-native computing initiative exploring intent-driven computing, intelligent automation and a new interaction layer between people, software and machines.",
  tags: ["AI Systems", "Operating Systems", "Automation", "Developer Tools"],
};

export function NeytraFounderBadge() {
  return React.createElement(
    "span",
    { className: "neytra-founder-badge" },
    "FOUNDER · NEYTRA OS"
  );
}
