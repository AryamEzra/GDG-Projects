'use client';

import { useMemo, useState } from 'react';
import type { TrackLessonPlanItem } from '@/lib/mock-data';

interface SubmissionEntry {
  lessonId: string;
  lessonTitle: string;
  repoUrl: string;
  submittedAt: string;
}

interface StudentTrackWorkspaceProps {
  trackSlug: string;
  trackName: string;
  lessons: TrackLessonPlanItem[];
}

export function StudentTrackWorkspace({ trackSlug, trackName, lessons }: StudentTrackWorkspaceProps) {
  const storageKey = `student-submissions:${trackSlug}`;
  const [openLessonId, setOpenLessonId] = useState<string | null>(lessons[0]?.id ?? null);
  const [repoInputs, setRepoInputs] = useState<Record<string, string>>({});
  const [submissions, setSubmissions] = useState<SubmissionEntry[]>(() => {
    if (typeof window === 'undefined') return [];

    try {
      const saved = window.localStorage.getItem(storageKey);
      return saved ? (JSON.parse(saved) as SubmissionEntry[]) : [];
    } catch {
      return [];
    }
  });

  const latestSubmissionByLesson = useMemo(() => {
    const map = new Map<string, SubmissionEntry>();
    for (const entry of submissions) {
      const prev = map.get(entry.lessonId);
      if (!prev || new Date(entry.submittedAt) > new Date(prev.submittedAt)) {
        map.set(entry.lessonId, entry);
      }
    }
    return map;
  }, [submissions]);

  const handleSubmit = (lesson: TrackLessonPlanItem) => {
    const repoUrl = (repoInputs[lesson.id] ?? '').trim();

    if (!repoUrl || !repoUrl.includes('github.com')) {
      return;
    }

    const nextEntry: SubmissionEntry = {
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      repoUrl,
      submittedAt: new Date().toISOString(),
    };

    const nextSubmissions = [nextEntry, ...submissions];
    setSubmissions(nextSubmissions);

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(nextSubmissions));
    } catch {
      // Ignore localStorage write errors in this mock workflow.
    }

    setRepoInputs((prev) => ({ ...prev, [lesson.id]: '' }));
  };

  return (
    <div className="space-y-8">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-semibold text-foreground">{trackName} Roadmap</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Submit your GitHub repository for each lesson milestone to track progress.
        </p>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson, index) => {
          const latest = latestSubmissionByLesson.get(lesson.id);
          const isOpen = openLessonId === lesson.id;

          return (
            <div key={lesson.id} className="bg-card border border-border rounded-lg">
              <button
                onClick={() => setOpenLessonId(isOpen ? null : lesson.id)}
                className="w-full text-left p-5 flex items-start justify-between gap-4"
              >
                <div>
                  <p className="text-xs text-primary font-medium">Milestone {index + 1}</p>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Deadline: {lesson.deadline}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground">
                  {latest ? 'Submitted' : 'Pending'}
                </span>
              </button>

              {isOpen ? (
                <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                  <p className="text-sm text-muted-foreground">{lesson.summary}</p>

                  <div className="flex flex-col md:flex-row gap-3">
                    <input
                      type="url"
                      value={repoInputs[lesson.id] ?? ''}
                      onChange={(event) =>
                        setRepoInputs((prev) => ({
                          ...prev,
                          [lesson.id]: event.target.value,
                        }))
                      }
                      placeholder="https://github.com/username/repository"
                      className="flex-1 bg-secondary border border-border rounded-md px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      onClick={() => handleSubmit(lesson)}
                      className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90"
                    >
                      Submit Link
                    </button>
                  </div>

                  {latest ? (
                    <p className="text-xs text-muted-foreground">
                      Latest: <a href={latest.repoUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline">{latest.repoUrl}</a>
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground">My Past Submissions</h3>
        {submissions.length === 0 ? (
          <p className="text-sm text-muted-foreground mt-3">No submissions yet. Start by submitting your first lesson repository.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {submissions.map((item, index) => (
              <div key={`${item.lessonId}-${item.submittedAt}-${index}`} className="p-3 bg-secondary/50 rounded-md">
                <p className="text-sm font-medium text-foreground">{item.lessonTitle}</p>
                <a href={item.repoUrl} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline break-all">
                  {item.repoUrl}
                </a>
                <p className="text-xs text-muted-foreground mt-1">Submitted: {new Date(item.submittedAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
