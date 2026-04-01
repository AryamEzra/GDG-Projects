'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { coreTeamArchive, coreTeams } from '@/lib/mock-data';

export default function CoreTeamsPage() {
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [teamFilter, setTeamFilter] = useState<string>('all');

  const years = useMemo(() => {
    return Array.from(new Set(coreTeamArchive.map((entry) => entry.year))).sort((a, b) => b - a);
  }, []);

  const teams = useMemo(() => {
    return Array.from(new Set(coreTeamArchive.map((entry) => entry.team))).sort();
  }, []);

  const filteredHistory = useMemo(() => {
    return coreTeamArchive.filter((entry) => {
      const yearOk = yearFilter === 'all' || entry.year === Number(yearFilter);
      const teamOk = teamFilter === 'all' || entry.team === teamFilter;
      return yearOk && teamOk;
    });
  }, [yearFilter, teamFilter]);

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
          <Link
            key={team.id}
            href={`/core-teams/${team.id}`}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all block"
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
              <p className="text-xs text-primary mt-2">Open team workspace</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Core Team Archive</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Filter historical team initiatives by year and team.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-end">
          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Year</label>
            <select
              value={yearFilter}
              onChange={(event) => setYearFilter(event.target.value)}
              className="bg-secondary border border-border rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All years</option>
              {years.map((year) => (
                <option key={year} value={String(year)}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-1">Team</label>
            <select
              value={teamFilter}
              onChange={(event) => setTeamFilter(event.target.value)}
              className="bg-secondary border border-border rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All teams</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full min-w-200 text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="p-3">Year</th>
                <th className="p-3">Team</th>
                <th className="p-3">Initiative</th>
                <th className="p-3">Lead</th>
                <th className="p-3">Contributors</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((entry) => (
                <tr key={entry.id} className="border-t border-border align-top">
                  <td className="p-3">{entry.year}</td>
                  <td className="p-3">{entry.team}</td>
                  <td className="p-3 font-medium text-foreground">{entry.initiative}</td>
                  <td className="p-3">{entry.lead}</td>
                  <td className="p-3">{entry.contributors}</td>
                  <td className="p-3 capitalize">{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
