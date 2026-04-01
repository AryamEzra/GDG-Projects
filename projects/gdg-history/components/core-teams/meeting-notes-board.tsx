'use client';

import { useEffect, useState } from 'react';
import type { CoreTeamMeetingNote } from '@/lib/mock-data';

interface MeetingNotesBoardProps {
  teamId: string;
  initialNotes: CoreTeamMeetingNote[];
}

type MeetingNoteInput = {
  week: string;
  summary: string;
  actionItemsText: string;
};

export function MeetingNotesBoard({ teamId, initialNotes }: MeetingNotesBoardProps) {
  const storageKey = `core-team-notes:${teamId}`;
  const taskBoardStorageKey = `core-team-board:${teamId}`;
  const [notes, setNotes] = useState<CoreTeamMeetingNote[]>(initialNotes);
  const [form, setForm] = useState<MeetingNoteInput>({
    week: `Week of ${new Date().toLocaleDateString()}`,
    summary: '',
    actionItemsText: '',
  });

  useEffect(() => {
    const applyStateAsync = (nextNotes: CoreTeamMeetingNote[]) => {
      const timer = window.setTimeout(() => {
        setNotes(nextNotes);
      }, 0);
      return () => window.clearTimeout(timer);
    };

    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        return applyStateAsync(JSON.parse(saved) as CoreTeamMeetingNote[]);
      }
    } catch {
      // Ignore parse errors and fallback to defaults.
    }

    return applyStateAsync(initialNotes);
  }, [initialNotes, storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(notes));
    } catch {
      // Ignore localStorage write errors in this mock workflow.
    }
  }, [notes, storageKey]);

  const handleAdd = () => {
    const summary = form.summary.trim();
    if (!summary) return;

    const actionItems = form.actionItemsText
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);

    const note: CoreTeamMeetingNote = {
      id: `note-${teamId}-${Date.now()}`,
      teamId,
      week: form.week.trim() || `Week of ${new Date().toLocaleDateString()}`,
      summary,
      actionItems,
    };

    setNotes((current) => [note, ...current]);

    if (actionItems.length > 0) {
      try {
        const existingRaw = window.localStorage.getItem(taskBoardStorageKey);
        const existingTasks = existingRaw ? (JSON.parse(existingRaw) as Array<Record<string, unknown>>) : [];

        const generatedTasks = actionItems.map((item, index) => ({
          id: `task-${teamId}-${Date.now()}-${index}`,
          teamId,
          title: item,
          assignee: 'Member',
          dueDate: new Date().toISOString().slice(0, 10),
          status: 'todo',
        }));

        window.localStorage.setItem(taskBoardStorageKey, JSON.stringify([...generatedTasks, ...existingTasks]));
        window.dispatchEvent(new CustomEvent('core-team-board-updated', { detail: { teamId } }));
      } catch {
        // Ignore localStorage write errors in this mock workflow.
      }
    }

    setForm((prev) => ({ ...prev, summary: '', actionItemsText: '' }));
  };

  return (
    <section className="bg-card border border-border rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Weekly Meeting Recaps</h2>

      <div className="rounded-lg border border-border bg-secondary/30 p-3 space-y-2">
        <input
          value={form.week}
          onChange={(event) => setForm((prev) => ({ ...prev, week: event.target.value }))}
          placeholder="Week label"
          className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm"
        />
        <textarea
          value={form.summary}
          onChange={(event) => setForm((prev) => ({ ...prev, summary: event.target.value }))}
          placeholder="Meeting recap summary"
          rows={3}
          className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm"
        />
        <textarea
          value={form.actionItemsText}
          onChange={(event) => setForm((prev) => ({ ...prev, actionItemsText: event.target.value }))}
          placeholder="Possible actions / to-dos (one per line)"
          rows={4}
          className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm"
        />
        <button
          onClick={handleAdd}
          className="px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
        >
          Add Weekly Note
        </button>
      </div>

      <div className="space-y-3">
        {notes.map((note) => (
          <div key={note.id} className="border border-border rounded-md p-4 bg-secondary/30">
            <p className="text-sm text-primary font-medium">{note.week}</p>
            <p className="text-sm text-foreground mt-2">{note.summary}</p>
            {note.actionItems.length > 0 ? (
              <ul className="mt-3 space-y-1">
                {note.actionItems.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground">• {item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-muted-foreground mt-2">No action items listed.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
