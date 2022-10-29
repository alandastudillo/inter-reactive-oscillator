import InteractiveOscillator from "./oscillator";
import GlobalPlayPause from "./globalPlayPause";
import React, { useState } from "react";

window.AudioContext = window.AudioContext || window.webkitAudioContext;

export default function App() {
  const [osc1Playing, setOsc1Playing] = useState(false);
  const [osc2Playing, setOsc2Playing] = useState(false);
  const [osc3Playing, setOsc3Playing] = useState(false);

  // TODO: set these nicer

  const osc1 = new InteractiveOscillator({
    initOscType: "sine",
    initFreq: "73",
    minFreq: "20",
    maxFreq: "1000",
    id: "osc-1",
    isPlaying: osc1Playing,
    setPlaying: setOsc1Playing,
  });
  const osc2 = new InteractiveOscillator({
    initOscType: "square",
    initFreq: "77",
    minFreq: "20",
    maxFreq: "1000",
    id: "osc-2",
    isPlaying: osc2Playing,
    setPlaying: setOsc2Playing,
  });
  const osc3 = new InteractiveOscillator({
    initOscType: "triangle",
    initFreq: "75",
    minFreq: "20",
    maxFreq: "1000",
    id: "osc-3",
    isPlaying: osc3Playing,
    setPlaying: setOsc3Playing,
  });
  const globalPP = new GlobalPlayPause({
    playStates: [
      { isPlaying: osc1Playing, setPlaying: setOsc1Playing },
      { isPlaying: osc2Playing, setPlaying: setOsc2Playing },
      { isPlaying: osc3Playing, setPlaying: setOsc3Playing },
    ],
    id: "global-play-pause",
  });
  return (
    <div
      id="osc-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
        padding: 50,
      }}
    >
      <div id="osc-1-div" htmlFor="osc-1">
        {osc1}
      </div>
      <div id="osc-2-div" htmlFor="osc-2">
        {osc2}
      </div>
      <div id="osc-3-div" htmlFor="osc-3">
        {osc3}
      </div>
      <div id="global-div" htmlFor="global-play-pause">
        {globalPP}
      </div>
    </div>
  );
}
