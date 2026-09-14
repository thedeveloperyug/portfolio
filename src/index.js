import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function FounderLayer() {
  useEffect(() => {
    const timeline = document.querySelector("#experience .timeline");
    if (timeline && !timeline.querySelector(".neytra-founder-item")) {
      const item = document.createElement("article");
      item.className = "timeline-item reveal visible neytra-founder-item";
      item.innerHTML = `
        <div class="timeline-dot cyan"></div>
        <div class="timeline-period">Aug 2026 — Present</div>
        <div class="timeline-card">
          <div class="timeline-title">
            <div><h3>Founder</h3><h4>NEYTRA OS</h4></div>
            <span>Independent · Remote</span>
          </div>
          <p>Founder of NEYTRA OS, an independent AI-native computing initiative exploring intent-driven computing, intelligent automation and a new interaction layer between people, software and machines.</p>
          <div class="tag-row">
            <span>AI Systems</span><span>Operating Systems</span><span>Automation</span><span>Developer Tools</span>
          </div>
        </div>`;
      timeline.insertBefore(item, timeline.firstElementChild);
    }
  }, []);
  return null;
}

ReactDOM.render(
  <><App /><FounderLayer /></>,
  document.getElementById("root")
);
