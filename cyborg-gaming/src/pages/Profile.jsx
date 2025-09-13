import React from 'react';
import './Profile.css';

const user = {
  name: 'PlayerOne',
  avatar: '',
  bio: 'Pro gamer. Streamer. Esports enthusiast.',
  stats: {
    gamesPlayed: 120,
    wins: 45,
    followers: 2300,
  },
  recent: [
    { id: 1, action: 'Won a match in Cyber Racer' },
    { id: 2, action: 'Started streaming Neon Arena' },
    { id: 3, action: 'Reached level 20 in Pixel Quest' },
  ],
};

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <div className="flex">
        <div className="profile-avatar">
          <div className="avatar-placeholder" />
        </div>
        <div style={{marginLeft: '2rem'}}>
          <h2>{user.name}</h2>
          <p className="text-muted">{user.bio}</p>
          <div className="profile-stats">
            <span>Games Played: <b>{user.stats.gamesPlayed}</b></span>
            <span>Wins: <b>{user.stats.wins}</b></span>
            <span>Followers: <b>{user.stats.followers}</b></span>
          </div>
        </div>
      </div>
      <h2>Recent Activity</h2>
      <ul className="profile-recent">
        {user.recent.map(item => (
          <li key={item.id}>{item.action}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile; 