import { Trophy, Award, Zap } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  coins: number;
  track: string;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export function Leaderboard({ entries }: LeaderboardProps) {
  const getMedalIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Award className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Award className="w-5 h-5 text-orange-600" />;
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Leaderboard</h3>
      <div className="space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center justify-center gap-3 w-12">
                {getMedalIcon(entry.rank) || (
                  <span className="text-sm font-bold text-muted-foreground">{entry.rank}</span>
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{entry.name}</p>
                <p className="text-xs text-muted-foreground">{entry.track}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold text-foreground">{entry.coins}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
