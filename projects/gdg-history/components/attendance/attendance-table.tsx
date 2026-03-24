'use client';

import { AlertCircle } from 'lucide-react';

interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  date: string;
  status: 'present' | 'absent';
  session: string;
}

interface AttendanceTableProps {
  records: AttendanceRecord[];
}

export function AttendanceTable({ records }: AttendanceTableProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-secondary border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left font-semibold text-foreground">Student Name</th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">Date</th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">Session</th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                <td className="px-6 py-4 text-foreground">{record.studentName}</td>
                <td className="px-6 py-4 text-muted-foreground">{new Date(record.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-muted-foreground">{record.session}</td>
                <td className="px-6 py-4">
                  {record.status === 'present' ? (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 text-xs font-medium rounded-full">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Present
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
                      <AlertCircle className="w-3 h-3" />
                      Absent
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
