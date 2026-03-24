'use client';

import { StatsCard } from '@/components/dashboard/stats-card';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { Leaderboard } from '@/components/leaderboard/leaderboard';
import { BarChart3, Users, TrendingUp, Zap } from 'lucide-react';
import { dashboardStats, recentActivity, leaderboard } from '@/lib/mock-data';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back to GDG AASTU management dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Members"
          value={dashboardStats.totalMembers}
          icon={<Users className="w-6 h-6" />}
          trend={12}
          description="Active members this month"
        />
        <StatsCard
          title="Active Today"
          value={dashboardStats.activeSessionToday}
          icon={<TrendingUp className="w-6 h-6" />}
          description="Attended today's session"
        />
        <StatsCard
          title="Avg Attendance"
          value={`${dashboardStats.averageAttendance}%`}
          icon={<BarChart3 className="w-6 h-6" />}
          trend={5}
          description="Across all sessions"
        />
        <StatsCard
          title="Total Coins"
          value={dashboardStats.totalCoinsDistributed}
          unit="⚡"
          icon={<Zap className="w-6 h-6" />}
          description="Distributed to members"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <RecentActivity activities={recentActivity} />
        </div>

        {/* Leaderboard - Takes up 1 column */}
        <div>
          <Leaderboard entries={leaderboard} />
        </div>
      </div>
    </div>
  );
}
