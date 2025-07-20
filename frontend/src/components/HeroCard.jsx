import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroCard({ hero }) {
  const navigate = useNavigate();
  const baseUrl = 'https://marvelrivalsapi.com';
  const imgSrc = hero.imageUrl.startsWith('http') ? hero.imageUrl : baseUrl + hero.imageUrl;

  return (
    <div className="card">
      <img src={imgSrc} alt={hero.name} />
      <button onClick={() => navigate(`/streamers/${hero.id}`)}>View Streamers</button>
    </div>
  );
}