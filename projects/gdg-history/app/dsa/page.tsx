'use client';

import { DsaStats } from '@/components/dsa/dsa-stats';
import { dsaProblems } from '@/lib/mock-data';

export default function DsaPage() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">DSA Progress</h1>
        <p className="text-muted-foreground mt-2">Track member progress on Data Structures & Algorithms</p>
      </div>

      {/* Stats */}
      <DsaStats problems={dsaProblems} />
    </div>
  );
}
