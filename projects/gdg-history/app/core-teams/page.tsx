'use client';

import { coreTeams } from '@/lib/mock-data';

export default function CoreTeamsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Core Teams</h1>
        <p className="text-muted-foreground mt-2">
          Manage the operational teams that keep GDG AASTU running.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreTeams.map((team) => (
          <div
            key={team.id}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{team.icon}</span>
              <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                {team.level}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2">{team.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{team.description}</p>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{team.members}</span> members
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
