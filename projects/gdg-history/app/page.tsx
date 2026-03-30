'use client';

import { ShieldCheck, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const selectRole = (role: 'student' | 'admin') => {
    document.cookie = `role=${role}; path=/; max-age=${60 * 60 * 24 * 30}; samesite=lax`;
    router.push(role === 'student' ? '/dashboard' : '/attendance');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">GDG AASTU Portal</h1>
          <p className="text-muted-foreground mt-3 text-base md:text-lg">
            Choose a role to simulate login and continue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => selectRole('student')}
            className="bg-card border border-border rounded-2xl p-8 text-left hover:border-primary/40 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Student</h2>
            <p className="text-muted-foreground mt-2">Access dashboard and learning tracks.</p>
          </button>

          <button
            onClick={() => selectRole('admin')}
            className="bg-card border border-border rounded-2xl p-8 text-left hover:border-primary/40 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Admin</h2>
            <p className="text-muted-foreground mt-2">Access attendance, admin panel, and core teams.</p>
          </button>
        </div>
      </div>
    </div>
  );
}
