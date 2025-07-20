import { useParams } from 'react-router-dom';
import StreamerCard from '../components/StreamerCard';

// Dummy streamer data
const dummyStreamers = [
  { name: 'Streamer A', platform: 'Twitch', link: 'https://twitch.tv/streamerA', avatar: '/avatar1.png' },
  { name: 'Streamer B', platform: 'YouTube', link: 'https://youtube.com/streamerB', avatar: '/avatar2.png' },
];

export default function StreamersPage() {
  const { heroId } = useParams();

  return (
    <div>
      <h1>Streamers Playing Hero #{heroId}</h1>
      <div className="streamer-grid">
        {dummyStreamers.map((s, i) => <StreamerCard key={i} streamer={s} />)}
      </div>
    </div>
  );
}
