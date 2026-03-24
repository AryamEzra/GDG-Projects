'use client';

import { AttendanceTable } from '@/components/attendance/attendance-table';
import { attendanceRecords, students } from '@/lib/mock-data';
import { BarChart3, AlertCircle } from 'lucide-react';

export default function AttendancePage() {
  const absenceCount = attendanceRecords.filter((r) => r.status === 'absent').length;
  const presentCount = attendanceRecords.filter((r) => r.status === 'present').length;
  const averageAttendance =
    students.length > 0
      ? Math.round(students.reduce((sum, s) => sum + s.attendance, 0) / students.length)
      : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Attendance Tracking</h1>
        <p className="text-muted-foreground mt-2">Monitor member attendance and track absences</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Present</span>
            <span className="text-green-500">●</span>
          </div>
          <span className="text-3xl font-bold text-foreground">{presentCount}</span>
          <p className="text-xs text-muted-foreground mt-2">Recent sessions</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Absent</span>
            <AlertCircle className="w-5 h-5 text-destructive" />
          </div>
          <span className="text-3xl font-bold text-foreground">{absenceCount}</span>
          <p className="text-xs text-muted-foreground mt-2">Recent sessions</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground text-sm font-medium">Average Attendance</span>
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <span className="text-3xl font-bold text-foreground">{averageAttendance}%</span>
          <p className="text-xs text-muted-foreground mt-2">All members</p>
        </div>
      </div>

      {/* Table */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Records</h2>
        <AttendanceTable records={attendanceRecords} />
      </div>
    </div>
  );
}
