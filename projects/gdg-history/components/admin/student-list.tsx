'use client';

import { Trash2, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Student {
  id: string;
  name: string;
  email: string;
  coins: number;
  attendance: number;
  track: string;
  avatar: string;
}

interface StudentListProps {
  students: Student[];
  onEliminate?: (studentId: string) => void;
}

export function StudentList({ students, onEliminate }: StudentListProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-secondary border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-foreground">Student</th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">Email</th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">Track</th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">Coins</th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">Attendance</th>
              <th className="px-6 py-4 text-right font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        {student.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-foreground">{student.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-muted-foreground text-xs">{student.email}</td>
                <td className="px-6 py-4 text-muted-foreground">{student.track}</td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-foreground flex items-center gap-1">
                    {student.coins}
                    <span className="text-yellow-500">⚡</span>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 transition-all"
                        style={{ width: `${student.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{student.attendance}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onEliminate?.(student.id)}
                      className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                      title="Eliminate student"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
