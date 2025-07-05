import React from 'react';
import './Home.css';
import cyberRacerImg from '../assets/lsb.jpg';
import neonArenaImg from '../assets/gtyp.jpg';
import pixelQuestImg from '../assets/yal.jpg';
import shadowOpsImg from '../assets/pubg.jpg';

const trendingGames = [
  { id: 1, title: 'Cyber Racer', image: cyberRacerImg, genre: 'Racing' },
  { id: 2, title: 'Neon Arena', image: neonArenaImg, genre: 'Shooter' },
  { id: 3, title: 'Pixel Quest', image: pixelQuestImg, genre: 'Adventure' },
  { id: 4, title: 'Shadow Ops', image: shadowOpsImg, genre: 'Stealth' },
];

const topStreams = [
  { id: 1, user: 'GamerX', game: 'Cyber Racer', viewers: 1200 },
  { id: 2, user: 'NeonNinja', game: 'Neon Arena', viewers: 980 },
  { id: 3, user: 'PixelPro', game: 'Pixel Quest', viewers: 870 },
];

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Cyborg Gaming</h1>
        <p className="text-muted">Your portal to the latest games, streams, and esports action.</p>
        <button>Browse Games</button>
      </section>
      <section>
        <h2>Trending Games</h2>
        <div className="grid">
          {trendingGames.map(game => (
            <div className="card" key={game.id}>
              <img src={game.image} alt={game.title} style={{width: '100%', borderRadius: '12px'}} />
              <h3>{game.title}</h3>
              <span className="text-muted">{game.genre}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Top Streams</h2>
        <div className="grid">
          {topStreams.map(stream => (
            <div className="card" key={stream.id}>
              <h3>{stream.user}</h3>
              <span className="text-muted">Playing {stream.game}</span>
              <div style={{marginTop: '0.5em', color: 'var(--accent-blue)'}}>{stream.viewers} viewers</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home; 