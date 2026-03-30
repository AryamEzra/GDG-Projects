'use client';

import { useMemo, useState } from 'react';
import {
  archiveDocuments,
  archiveMemberRoles,
  archiveProjects,
  archiveStudents,
  coreTeamMembersArchive,
} from '@/lib/mock-data';

export default function ArchivePage() {
  const years = useMemo(() => {
    return Array.from(new Set(archiveStudents.map((student) => student.year))).sort((a, b) => b - a);
  }, []);

  const [selectedYear, setSelectedYear] = useState<number>(years[0] ?? 2024);
  const [trackFilter, setTrackFilter] = useState<string>('all');
  const [teamFilter, setTeamFilter] = useState<string>('all');

  const tracks = useMemo(() => {
    return Array.from(new Set(archiveStudents.map((student) => student.track))).sort();
  }, []);

  const coreTeams = useMemo(() => {
    return Array.from(new Set(coreTeamMembersArchive.map((member) => member.team))).sort();
  }, []);

  const yearlyCards = useMemo(() => {
    return years.map((year) => ({
      year,
      students: archiveStudents.filter((student) => student.year === year).length,
      coreMembers: coreTeamMembersArchive.filter((member) => member.year === year).length,
      projects: archiveProjects.filter((project) => project.year === year).length,
    }));
  }, [years]);

  const filteredStudents = useMemo(() => {
    return archiveStudents.filter((student) => {
      const yearOk = student.year === selectedYear;
      const trackOk = trackFilter === 'all' || student.track === trackFilter;
      return yearOk && trackOk;
    });
  }, [selectedYear, trackFilter]);

  const filteredCoreMembers = useMemo(() => {
    return coreTeamMembersArchive.filter((member) => {
      const yearOk = member.year === selectedYear;
      const teamOk = teamFilter === 'all' || member.team === teamFilter;
      return yearOk && teamOk;
    });
  }, [selectedYear, teamFilter]);

  const filteredProjects = useMemo(() => {
    return archiveProjects.filter((project) => {
      const yearOk = project.year === selectedYear;
      const trackOk = trackFilter === 'all' || project.track === trackFilter;
      return yearOk && trackOk;
    });
  }, [selectedYear, trackFilter]);

  const filteredDocs = useMemo(() => {
    return archiveDocuments.filter((doc) => {
      const yearOk = doc.year === selectedYear;
      const trackOk = trackFilter === 'all' || doc.track === trackFilter;
      return yearOk && trackOk;
    });
  }, [selectedYear, trackFilter]);

  const filteredMemberRoles = useMemo(() => {
    return archiveMemberRoles.filter((memberRole) => memberRole.year === selectedYear);
  }, [selectedYear]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Historical Archive</h1>
        <p className="text-muted-foreground mt-2">
          Browse the last 3 years with year cards, then drill into students, core teams, projects, and documents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {yearlyCards.map((yearCard) => (
          <button
            key={yearCard.year}
            onClick={() => setSelectedYear(yearCard.year)}
            className={`text-left rounded-lg border p-5 transition-all ${
              selectedYear === yearCard.year
                ? 'border-primary bg-primary/5'
                : 'border-border bg-card hover:border-primary/40'
            }`}
          >
            <p className="text-sm text-muted-foreground">Academic Year</p>
            <h2 className="text-2xl font-bold text-foreground mt-1">{yearCard.year}</h2>
            <p className="text-sm text-muted-foreground mt-3">{yearCard.students} students</p>
            <p className="text-sm text-muted-foreground">{yearCard.coreMembers} core team members</p>
            <p className="text-sm text-muted-foreground">{yearCard.projects} projects</p>
          </button>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-end">
        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Track</label>
          <select
            value={trackFilter}
            onChange={(event) => setTrackFilter(event.target.value)}
            className="bg-secondary border border-border rounded-md px-3 py-2 text-sm"
          >
            <option value="all">All tracks</option>
            {tracks.map((track) => (
              <option key={track} value={track}>
                {track}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-1">Core Team</label>
          <select
            value={teamFilter}
            onChange={(event) => setTeamFilter(event.target.value)}
            className="bg-secondary border border-border rounded-md px-3 py-2 text-sm"
          >
            <option value="all">All teams</option>
            {coreTeams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Students by Track ({selectedYear})</h2>
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="p-3 whitespace-nowrap">Name</th>
                <th className="p-3 whitespace-nowrap">Track</th>
                <th className="p-3 whitespace-nowrap">Mentor</th>
                <th className="p-3 whitespace-nowrap">Email</th>
                <th className="p-3 whitespace-nowrap">Phone</th>
                <th className="p-3 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-t border-border align-top">
                  <td className="p-3 font-medium text-foreground whitespace-nowrap">{student.name}</td>
                  <td className="p-3 whitespace-nowrap">{student.track}</td>
                  <td className="p-3 whitespace-nowrap">{student.mentor}</td>
                  <td className="p-3 whitespace-nowrap">{student.email}</td>
                  <td className="p-3 whitespace-nowrap">{student.phone}</td>
                  <td className="p-3 capitalize whitespace-nowrap">{student.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Core Team Members ({selectedYear})</h2>
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="p-3 whitespace-nowrap">Team</th>
                <th className="p-3 whitespace-nowrap">Name</th>
                <th className="p-3 whitespace-nowrap">Role</th>
                <th className="p-3 whitespace-nowrap">Email</th>
                <th className="p-3 whitespace-nowrap">Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoreMembers.map((member) => (
                <tr key={member.id} className="border-t border-border align-top">
                  <td className="p-3 whitespace-nowrap">{member.team}</td>
                  <td className="p-3 font-medium text-foreground whitespace-nowrap">{member.name}</td>
                  <td className="p-3 whitespace-nowrap">{member.role}</td>
                  <td className="p-3 whitespace-nowrap">{member.email}</td>
                  <td className="p-3 whitespace-nowrap">{member.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Past Years Projects ({selectedYear})</h2>
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="p-3 whitespace-nowrap">Project</th>
                <th className="p-3 whitespace-nowrap">Year</th>
                <th className="p-3 whitespace-nowrap">Duration</th>
                <th className="p-3 whitespace-nowrap">Track</th>
                <th className="p-3 whitespace-nowrap">Description & Objectives</th>
                <th className="p-3 whitespace-nowrap">Tech Stack</th>
                <th className="p-3 whitespace-nowrap">Team Members</th>
                <th className="p-3 whitespace-nowrap">GitHub</th>
                <th className="p-3 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <tr key={project.id} className="border-t border-border align-top">
                  <td className="p-3 font-medium text-foreground whitespace-nowrap">{project.title}</td>
                  <td className="p-3 whitespace-nowrap">{project.year}</td>
                  <td className="p-3 whitespace-nowrap">{project.duration}</td>
                  <td className="p-3 whitespace-nowrap">{project.track}</td>
                  <td className="p-3">
                    <p>{project.description}</p>
                    <p className="text-muted-foreground mt-1">{project.objectives}</p>
                  </td>
                  <td className="p-3 whitespace-nowrap">{project.techStack.join(', ')}</td>
                  <td className="p-3">{project.teamMembers}</td>
                  <td className="p-3">
                    <a href={project.githubRepo} target="_blank" rel="noreferrer" className="text-primary hover:underline break-all">
                      Repo Link
                    </a>
                  </td>
                  <td className="p-3 capitalize whitespace-nowrap">{project.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Past Members and Roles ({selectedYear})</h2>
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="p-3 whitespace-nowrap">Member Name</th>
                <th className="p-3 whitespace-nowrap">Role</th>
                <th className="p-3 whitespace-nowrap">Years Active</th>
                <th className="p-3 whitespace-nowrap">Team / Domain</th>
                <th className="p-3 whitespace-nowrap">Contributions</th>
                <th className="p-3 whitespace-nowrap">Projects</th>
              </tr>
            </thead>
            <tbody>
              {filteredMemberRoles.map((member) => (
                <tr key={member.id} className="border-t border-border align-top">
                  <td className="p-3 font-medium text-foreground whitespace-nowrap">{member.name}</td>
                  <td className="p-3 whitespace-nowrap">{member.role}</td>
                  <td className="p-3 whitespace-nowrap">{member.yearsActive}</td>
                  <td className="p-3 whitespace-nowrap">{member.teamOrDomain}</td>
                  <td className="p-3">{member.contributions}</td>
                  <td className="p-3 whitespace-nowrap">{member.projects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Documents and Discussions ({selectedYear})</h2>
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="p-3 whitespace-nowrap">Year</th>
                <th className="p-3 whitespace-nowrap">Track</th>
                <th className="p-3 whitespace-nowrap">Type</th>
                <th className="p-3 whitespace-nowrap">Title</th>
                <th className="p-3 whitespace-nowrap">Summary</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="border-t border-border align-top">
                  <td className="p-3 whitespace-nowrap">{doc.year}</td>
                  <td className="p-3 whitespace-nowrap">{doc.track}</td>
                  <td className="p-3 capitalize whitespace-nowrap">{doc.type.replace('-', ' ')}</td>
                  <td className="p-3 font-medium text-foreground whitespace-nowrap">{doc.title}</td>
                  <td className="p-3">{doc.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
