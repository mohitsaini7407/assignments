import React from 'react';
import './Browse.css';
import cyberRacerImg from '../assets/lsb.jpg';
import neonArenaImg from '../assets/gtyp.jpg';
import pixelQuestImg from '../assets/yal.jpg';
import shadowOpsImg from '../assets/pubg.jpg';
import galaxyRunImg from '../assets/fortnite.jpg';
import arenaBlitzImg from '../assets/CS-GO.jpg';

const games = [
  { id: 1, title: 'Cyber Racer', image: cyberRacerImg, genre: 'Racing' },
  { id: 2, title: 'Neon Arena', image: neonArenaImg, genre: 'Shooter' },
  { id: 3, title: 'Pixel Quest', image: pixelQuestImg, genre: 'Adventure' },
  { id: 4, title: 'Shadow Ops', image: shadowOpsImg, genre: 'Stealth' },
  { id: 5, title: 'Galaxy Run', image: galaxyRunImg, genre: 'Platformer' },
  { id: 6, title: 'Arena Blitz', image: arenaBlitzImg, genre: 'MOBA' },
];

function Browse() {
  return (
    <div>
      <h1>Browse Games</h1>
      <div className="grid">
        {games.map(game => (
          <div className="card" key={game.id}>
            <img src={game.image} alt={game.title} style={{width: '100%', borderRadius: '12px'}} />
            <h3>{game.title}</h3>
            <span className="text-muted">{game.genre}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse; 