'use client';

import { useState } from 'react';
import { StudentList } from '@/components/admin/student-list';
import { students } from '@/lib/mock-data';
import { AlertCircle } from 'lucide-react';

export default function AdminPage() {
  const [studentList, setStudentList] = useState(students);

  const handleEliminate = (studentId: string) => {
    if (confirm('Are you sure you want to eliminate this student? This action cannot be undone.')) {
      setStudentList(studentList.filter((s) => s.id !== studentId));
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
        <p className="text-muted-foreground mt-2">Manage members and track performance</p>
      </div>

      {/* Admin Notice */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 flex items-start gap-4">
        <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-foreground mb-1">Admin Privileges</h3>
          <p className="text-sm text-muted-foreground">
            You have access to member elimination and advanced management features. Use with caution.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm font-medium mb-2">Total Members</p>
          <span className="text-3xl font-bold text-foreground">{studentList.length}</span>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm font-medium mb-2">Active Today</p>
          <span className="text-3xl font-bold text-foreground">
            {studentList.filter((s) => s.attendance > 85).length}
          </span>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm font-medium mb-2">Average Coins</p>
          <span className="text-3xl font-bold text-foreground">
            {studentList.length > 0 ? Math.round(studentList.reduce((sum, s) => sum + s.coins, 0) / studentList.length) : 0}
          </span>
        </div>
      </div>

      {/* Student List */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Members Directory</h2>
        <StudentList students={studentList} onEliminate={handleEliminate} />
      </div>
    </div>
  );
}
