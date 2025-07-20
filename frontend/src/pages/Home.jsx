import { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard';
import axios from 'axios';

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/api/heroes')
      .then(res => {
        console.log('Fetched heroes:', res.data); // Debugging output
        setHeroes(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Unique roles for dropdown filter
  const uniqueRoles = ['All', ...new Set(heroes.map(h => h.role))];

  // Filter heroes based on search and role
  const filteredHeroes = heroes.filter(hero => {
    const matchesName = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'All' || hero.role === selectedRole;
    return matchesName && matchesRole;
  });

  return (
    <div className="home-container">
      <div className="header">
        <h1>Marvel Rivals Characters</h1>
        <p className="hero-count">
          {/* Optional: You can display the count here */}
          {filteredHeroes.length} {filteredHeroes.length === 1 ? 'character' : 'characters'} found
        </p>
      </div>

      {/* Search and filter */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedRole}
          onChange={e => setSelectedRole(e.target.value)}
          className="filter-select"
        >
          {uniqueRoles.map(role => (
            <option key={role} value={role}>
              {role === 'All' ? 'All Roles' : role}
            </option>
          ))}
        </select>
      </div>

      {/* Hero grid */}
      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading characters...</p>
        </div>
      ) : (
        <div className="hero-grid">
          {filteredHeroes.length > 0 ? (
            filteredHeroes.map(hero => <HeroCard key={hero._id} hero={hero} />)
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🦸</div>
              <h3>No characters found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedRole('All');}}
                className="reset-filters-btn"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
