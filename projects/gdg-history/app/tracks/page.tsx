'use client';

import { TrackGrid } from '@/components/tracks/track-grid';
import { archiveStudents, tracks } from '@/lib/mock-data';

export default function TracksPage() {
  const years = Array.from(new Set(archiveStudents.map((student) => student.year)));
  const latestYear = years.length > 0 ? Math.max(...years) : new Date().getFullYear();
  const totalStudentsInLatestYear = archiveStudents.filter((student) => student.year === latestYear).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Learning Tracks</h1>
        <p className="text-muted-foreground mt-2">Explore our comprehensive learning tracks and join mentors</p>
      </div>

      {/* Filters/Info */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{tracks.length}</span> tracks with{' '}
          <span className="font-semibold text-foreground">{totalStudentsInLatestYear}</span> students in {latestYear}
        </div>
      </div>

      {/* Track Grid */}
      <TrackGrid tracks={tracks} />
    </div>
  );
}
