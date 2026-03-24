'use client';

import { CheckCircle2, Zap } from 'lucide-react';

interface DsaProblem {
  id: string;
  studentId: string;
  studentName: string;
  problemName: string;
  difficulty: string;
  solved: boolean;
  solvedDate: string;
  language: string;
}

interface DsaStatsProps {
  problems: DsaProblem[];
}

export function DsaStats({ problems }: DsaStatsProps) {
  const solvedCount = problems.filter((p) => p.solved).length;
  const easyCount = problems.filter((p) => p.difficulty === 'Easy').length;
  const mediumCount = problems.filter((p) => p.difficulty === 'Medium').length;
  const hardCount = problems.filter((p) => p.difficulty === 'Hard').length;

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Total Solved</span>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <span className="text-3xl font-bold text-foreground">{solvedCount}</span>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Easy</span>
            <span className="text-sm font-bold text-green-500">●</span>
          </div>
          <span className="text-3xl font-bold text-foreground">{easyCount}</span>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Medium</span>
            <span className="text-sm font-bold text-yellow-500">●</span>
          </div>
          <span className="text-3xl font-bold text-foreground">{mediumCount}</span>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Hard</span>
            <span className="text-sm font-bold text-red-500">●</span>
          </div>
          <span className="text-3xl font-bold text-foreground">{hardCount}</span>
        </div>
      </div>

      {/* Problems List */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Recent Submissions</h3>
        </div>
        <div className="divide-y divide-border">
          {problems.map((problem) => (
            <div key={problem.id} className="p-6 hover:bg-secondary/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-medium text-foreground">{problem.problemName}</p>
                  <p className="text-sm text-muted-foreground mt-1">Solved by {problem.studentName}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      problem.difficulty === 'Easy'
                        ? 'bg-green-500/10 text-green-600'
                        : problem.difficulty === 'Medium'
                          ? 'bg-yellow-500/10 text-yellow-600'
                          : 'bg-red-500/10 text-red-600'
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{problem.language}</span>
                <span className="text-muted-foreground">{new Date(problem.solvedDate).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
