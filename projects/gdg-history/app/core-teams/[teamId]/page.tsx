import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Users } from 'lucide-react';
import {
  coreTeamMeetingNotes,
  coreTeamMembersArchive,
  coreTeams,
  coreTeamTasks,
} from '@/lib/mock-data';
import { TaskBoard } from '@/components/core-teams/task-board';
import { MeetingNotesBoard } from '@/components/core-teams/meeting-notes-board';

interface TeamPageProps {
  params: Promise<{
    teamId: string;
  }>;
}

export default async function CoreTeamDetailPage({ params }: TeamPageProps) {
  const { teamId } = await params;
  const team = coreTeams.find((item) => item.id === teamId);

  if (!team) {
    notFound();
  }

  const years = Array.from(new Set(coreTeamMembersArchive.map((member) => member.year)));
  const latestYear = years.length > 0 ? Math.max(...years) : new Date().getFullYear();

  const members = coreTeamMembersArchive
    .filter((member) => member.year === latestYear && member.team === team.name)
    .sort((a, b) => a.name.localeCompare(b.name));

  const tasks = coreTeamTasks.filter((task) => task.teamId === team.id);
  const meetingNotes = coreTeamMeetingNotes.filter((note) => note.teamId === team.id);

  return (
    <div className="space-y-8">
      <Link href="/core-teams" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Core Teams
      </Link>

      <div className="bg-card border border-border rounded-lg p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-4xl mb-3">{team.icon}</p>
            <h1 className="text-3xl font-bold text-foreground">{team.name} Team</h1>
            <p className="text-muted-foreground mt-2">{team.description}</p>
          </div>
          <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full self-start">
            {team.level}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <TaskBoard teamId={team.id} tasks={tasks} />
        <MeetingNotesBoard teamId={team.id} initialNotes={meetingNotes} />
      </div>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Team Members ({latestYear})</h2>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr>
                <th className="p-3 whitespace-nowrap">Name</th>
                <th className="p-3 whitespace-nowrap">Role</th>
                <th className="p-3 whitespace-nowrap">Email</th>
                <th className="p-3 whitespace-nowrap">Phone</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-t border-border">
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
    </div>
  );
}
