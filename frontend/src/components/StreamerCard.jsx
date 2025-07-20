export default function StreamerCard({ streamer }) {
  return (
    <div className="streamer-card">
      <img src={streamer.avatar} alt={streamer.name} />
      <h3>{streamer.name}</h3>
      <p>{streamer.platform}</p>
      <a href={streamer.link} target="_blank" rel="noreferrer">Watch</a>
    </div>
  );
}
