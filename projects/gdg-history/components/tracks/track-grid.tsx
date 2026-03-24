import { TrackCard } from './track-card';

interface Track {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  members: number;
  level: string;
}

interface TrackGridProps {
  tracks: Track[];
}

export function TrackGrid({ tracks }: TrackGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tracks.map((track) => (
        <TrackCard
          key={track.id}
          slug={track.slug}
          name={track.name}
          description={track.description}
          icon={track.icon}
          members={track.members}
          level={track.level}
        />
      ))}
    </div>
  );
}
