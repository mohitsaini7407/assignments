import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import cyberRacerImg from '../assets/lsb.jpg';
import neonArenaImg from '../assets/gtyp.jpg';
import cyberRacerShot1 from '../assets/cs-goright.jpg';
import cyberRacerShot2 from '../assets/Gamezer.jpg';
import neonArenaShot1 from '../assets/island-rusty.jpg';
import neonArenaShot2 from '../assets/CS-GO.jpg';

const gameDetails = {
  1: {
    title: 'Cyber Racer',
    genre: 'Racing',
    image: cyberRacerImg,
    description: 'Race through neon-lit streets in this futuristic racing game. Upgrade your car and compete in global tournaments.',
    screenshots: [
      cyberRacerShot1,
      cyberRacerShot2,
    ],
  },
  2: {
    title: 'Neon Arena',
    genre: 'Shooter',
    image: neonArenaImg,
    description: 'Battle in a neon-lit arena with futuristic weapons and power-ups. Team up or go solo to dominate the leaderboard.',
    screenshots: [
      neonArenaShot1,
      neonArenaShot2,
    ],
  },
};

function Details() {
  const { id } = useParams();
  const game = gameDetails[id] || gameDetails[1];
  return (
    <div>
      <h1>{game.title}</h1>
      <div className="flex">
        <img src={game.image} alt={game.title} style={{width: '50%', borderRadius: '18px'}} />
        <div style={{marginLeft: '2rem'}}>
          <h3 className="text-muted">{game.genre}</h3>
          <p>{game.description}</p>
        </div>
      </div>
      <h2>Screenshots</h2>
      <div className="flex">
        {game.screenshots.map((src, idx) => (
          <img key={idx} src={src} alt={`Screenshot ${idx+1}`} style={{width: '300px', borderRadius: '12px', marginRight: '1rem'}} />
        ))}
      </div>
    </div>
  );
}

export default Details; 