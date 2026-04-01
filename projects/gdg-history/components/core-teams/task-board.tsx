'use client';

import { useEffect, useMemo, useState } from 'react';
import type { CoreTeamTaskItem } from '@/lib/mock-data';

type TaskStatus = CoreTeamTaskItem['status'];

interface BoardTask extends CoreTeamTaskItem {
  completedBy?: string;
  completedAt?: string;
}

interface TaskBoardProps {
  teamId: string;
  tasks: CoreTeamTaskItem[];
}

const COLUMNS: Array<{ status: TaskStatus; title: string }> = [
  { status: 'todo', title: 'To Do' },
  { status: 'in-progress', title: 'In Progress' },
  { status: 'done', title: 'Done' },
];

function columnBgClass(status: TaskStatus) {
  if (status === 'todo') return 'bg-blue-500/10 border-blue-500/30';
  if (status === 'in-progress') return 'bg-yellow-500/12 border-yellow-500/30';
  return 'bg-green-500/10 border-green-500/30';
}

export function TaskBoard({ teamId, tasks }: TaskBoardProps) {
  const storageKey = `core-team-board:${teamId}`;
  const [actorName, setActorName] = useState('Team Lead');
  const [dragTaskId, setDragTaskId] = useState<string | null>(null);
  const [boardTasks, setBoardTasks] = useState<BoardTask[]>(tasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskAssignee, setNewTaskAssignee] = useState('Member');
  const [newTaskDueDate, setNewTaskDueDate] = useState(() => new Date().toISOString().slice(0, 10));

  useEffect(() => {
    const defaultTasks: BoardTask[] = tasks.map((task) =>
      task.status === 'done'
        ? { ...task, completedBy: task.assignee, completedAt: `${task.dueDate}T18:00:00.000Z` }
        : task
    );

    const applyStateAsync = (nextTasks: BoardTask[]) => {
      const timer = window.setTimeout(() => {
        setBoardTasks(nextTasks);
      }, 0);

      return () => window.clearTimeout(timer);
    };

    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        return applyStateAsync(JSON.parse(saved) as BoardTask[]);
      }
    } catch {
      // Ignore parse errors and fallback to defaults.
    }

    return applyStateAsync(defaultTasks);
  }, [storageKey, tasks]);

  useEffect(() => {
    const handleExternalUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{ teamId?: string }>;
      if (customEvent.detail?.teamId !== teamId) return;

      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
          setBoardTasks(JSON.parse(saved) as BoardTask[]);
        }
      } catch {
        // Ignore parse errors from external updates.
      }
    };

    window.addEventListener('core-team-board-updated', handleExternalUpdate);
    return () => window.removeEventListener('core-team-board-updated', handleExternalUpdate);
  }, [storageKey, teamId]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(boardTasks));
    } catch {
      // Ignore storage write failures in this mock workflow.
    }
  }, [boardTasks, storageKey]);

  const grouped = useMemo(() => {
    return {
      todo: boardTasks.filter((task) => task.status === 'todo'),
      'in-progress': boardTasks.filter((task) => task.status === 'in-progress'),
      done: boardTasks.filter((task) => task.status === 'done'),
    };
  }, [boardTasks]);

  const moveTask = (targetStatus: TaskStatus) => {
    if (!dragTaskId) return;

    setBoardTasks((current) =>
      current.map((task) => {
        if (task.id !== dragTaskId) return task;

        if (targetStatus === 'done') {
          return {
            ...task,
            status: 'done',
            completedBy: actorName.trim() || 'Unknown',
            completedAt: new Date().toISOString(),
          };
        }

        return {
          ...task,
          status: targetStatus,
          completedBy: undefined,
          completedAt: undefined,
        };
      })
    );

    setDragTaskId(null);
  };

  const updateTaskDetails = (taskId: string, changes: Partial<Pick<BoardTask, 'assignee' | 'dueDate'>>) => {
    setBoardTasks((current) =>
      current.map((task) => (task.id === taskId ? { ...task, ...changes } : task))
    );
  };

  const handleAddTask = () => {
    const title = newTaskTitle.trim();
    if (!title) return;

    const taskId = `task-${teamId}-${Date.now()}`;
    const task: BoardTask = {
      id: taskId,
      teamId,
      title,
      assignee: newTaskAssignee.trim() || 'Member',
      dueDate: newTaskDueDate,
      status: 'todo',
    };

    setBoardTasks((current) => [task, ...current]);
    setNewTaskTitle('');
  };

  return (
    <section className="bg-card border border-border rounded-lg p-6 space-y-4 xl:col-span-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h2 className="text-xl font-semibold text-foreground">Task Board</h2>
        <div className="flex items-center gap-2">
          <label className="text-xs text-muted-foreground">Completed by</label>
          <input
            value={actorName}
            onChange={(event) => setActorName(event.target.value)}
            className="bg-secondary border border-border rounded-md px-2 py-1 text-sm"
            placeholder="Your name"
          />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-secondary/30 p-3 grid grid-cols-1 lg:grid-cols-12 gap-2">
        <input
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.target.value)}
          placeholder="New task title"
          className="lg:col-span-5 min-w-0 bg-card border border-border rounded-md px-3 py-2 text-sm"
        />
        <input
          value={newTaskAssignee}
          onChange={(event) => setNewTaskAssignee(event.target.value)}
          placeholder="Assignee"
          className="lg:col-span-3 min-w-0 bg-card border border-border rounded-md px-3 py-2 text-sm"
        />
        <input
          type="date"
          value={newTaskDueDate}
          onChange={(event) => setNewTaskDueDate(event.target.value)}
          className="lg:col-span-2 min-w-0 bg-card border border-border rounded-md px-3 py-2 text-sm"
        />
        <button
          onClick={handleAddTask}
          className="lg:col-span-2 w-full px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {COLUMNS.map((column) => (
          <div
            key={column.status}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => moveTask(column.status)}
            className={`rounded-lg border p-3 min-h-72 ${columnBgClass(column.status)}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-foreground">{column.title}</h3>
              <span className="text-xs text-muted-foreground">
                {grouped[column.status].length}
              </span>
            </div>

            <div className="space-y-3">
              {grouped[column.status].map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => setDragTaskId(task.id)}
                  onDragEnd={() => setDragTaskId(null)}
                  className="rounded-md border border-border bg-card p-3 cursor-grab active:cursor-grabbing"
                >
                  <p className="text-sm font-medium text-foreground">{task.title}</p>

                  <div className="mt-2 space-y-2">
                    <div>
                      <label className="text-[11px] text-muted-foreground">Assignee</label>
                      <input
                        value={task.assignee}
                        onChange={(event) => updateTaskDetails(task.id, { assignee: event.target.value })}
                        className="mt-1 w-full bg-secondary border border-border rounded px-2 py-1 text-xs"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-muted-foreground">Due date</label>
                      <input
                        type="date"
                        value={task.dueDate}
                        onChange={(event) => updateTaskDetails(task.id, { dueDate: event.target.value })}
                        className="mt-1 w-full bg-secondary border border-border rounded px-2 py-1 text-xs"
                      />
                    </div>
                  </div>

                  {task.status === 'done' && task.completedBy && task.completedAt ? (
                    <div className="mt-2 rounded bg-green-500/10 text-green-700 px-2 py-1">
                      <p className="text-xs font-medium">Completed by: {task.completedBy}</p>
                      <p className="text-xs">At: {new Date(task.completedAt).toLocaleString()}</p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
