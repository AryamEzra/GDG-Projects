import Link from 'next/link';
import { tracks, students, leaderboard } from '@/lib/mock-data';
import { Leaderboard } from '@/components/leaderboard/leaderboard';
import { ArrowLeft, Users, User, BookOpen } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TrackDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const track = tracks.find((t) => t.slug === slug);

  if (!track) {
    notFound();
  }

  // Filter students by track
  const trackStudents = students.filter((s) => s.track === track.name);

  // Get track leaderboard (simplified)
  const trackLeaderboard = leaderboard.filter((l) => l.track === track.name).slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link href="/tracks" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Tracks
      </Link>

      {/* Track Header */}
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-5xl mb-4">{track.icon}</div>
            <h1 className="text-4xl font-bold text-foreground mb-2">{track.name}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{track.description}</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm mb-4">
              {track.level}
            </span>
          </div>
        </div>

        {/* Mentor Info */}
        <div className="border-t border-border pt-6 mt-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Track Mentor</p>
              <p className="font-semibold text-foreground">{track.mentor}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Track Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Members Enrolled</span>
            <Users className="w-5 h-5 text-primary" />
          </div>
          <span className="text-3xl font-bold text-foreground">{track.members}</span>
          <p className="text-xs text-muted-foreground mt-2">Active learners</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Progress</span>
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <span className="text-3xl font-bold text-foreground">
            {Math.round((trackStudents.length / track.members) * 100)}%
          </span>
          <p className="text-xs text-muted-foreground mt-2">Completion rate</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Avg Attendance</span>
            <span className="text-primary text-sm font-bold">●</span>
          </div>
          <span className="text-3xl font-bold text-foreground">
            {trackStudents.length > 0
              ? Math.round(trackStudents.reduce((sum, s) => sum + s.attendance, 0) / trackStudents.length)
              : 0}
            %
          </span>
          <p className="text-xs text-muted-foreground mt-2">This track</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Track Members */}
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">Enrolled Members</h2>
          {trackStudents.length > 0 ? (
            <div className="space-y-4">
              {trackStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {student.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-xs text-muted-foreground">{student.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground flex items-center gap-1">
                      {student.coins} <span className="text-yellow-500">⚡</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{student.attendance}% attendance</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm py-8 text-center">No members enrolled in this track yet</p>
          )}
        </div>

        {/* Leaderboard */}
        <div>
          {trackLeaderboard.length > 0 ? (
            <Leaderboard entries={trackLeaderboard} />
          ) : (
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm">No leaderboard data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
