import React from 'react';
import './Streams.css';

const streams = [
  { id: 1, user: 'GamerX', game: 'Cyber Racer', viewers: 1200 },
  { id: 2, user: 'NeonNinja', game: 'Neon Arena', viewers: 980 },
  { id: 3, user: 'PixelPro', game: 'Pixel Quest', viewers: 870 },
  { id: 4, user: 'ShadowOps', game: 'Shadow Ops', viewers: 650 },
];

function Streams() {
  return (
    <div>
      <h1>Live Streams</h1>
      <div className="grid">
        {streams.map(stream => (
          <div className="card" key={stream.id}>
            <h3>{stream.user}</h3>
            <span className="text-muted">Playing {stream.game}</span>
            <div style={{marginTop: '0.5em', color: 'var(--accent-blue)'}}>{stream.viewers} viewers</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Streams; 