import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Circle, Clock3, Users } from 'lucide-react';
import {
  coreTeamMeetingNotes,
  coreTeamMembersArchive,
  coreTeams,
  coreTeamTasks,
} from '@/lib/mock-data';

interface TeamPageProps {
  params: Promise<{
    teamId: string;
  }>;
}

function badgeForStatus(status: 'todo' | 'in-progress' | 'done') {
  if (status === 'done') return 'bg-green-500/15 text-green-700';
  if (status === 'in-progress') return 'bg-amber-500/15 text-amber-700';
  return 'bg-secondary text-foreground';
}

function iconForStatus(status: 'todo' | 'in-progress' | 'done') {
  if (status === 'done') return <CheckCircle2 className="w-4 h-4" />;
  if (status === 'in-progress') return <Clock3 className="w-4 h-4" />;
  return <Circle className="w-4 h-4" />;
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Task List / To-Dos</h2>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="border border-border rounded-md p-4 bg-secondary/30">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-foreground">{task.title}</p>
                  <span className={`text-xs px-2 py-1 rounded-full capitalize inline-flex items-center gap-1 ${badgeForStatus(task.status)}`}>
                    {iconForStatus(task.status)}
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Assignee: {task.assignee}</p>
                <p className="text-xs text-muted-foreground">Due: {task.dueDate}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Weekly Meeting Notes</h2>
          <div className="space-y-3">
            {meetingNotes.map((note) => (
              <div key={note.id} className="border border-border rounded-md p-4 bg-secondary/30">
                <p className="text-sm text-primary font-medium">{note.week}</p>
                <p className="text-sm text-foreground mt-2">{note.summary}</p>
                <ul className="mt-3 space-y-1">
                  {note.actionItems.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
