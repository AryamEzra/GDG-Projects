import { ActivityItem } from './activity-item';

interface Activity {
  id: string;
  type: string;
  studentName: string;
  action: string;
  timestamp: string;
  icon: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Recent Activity</h3>
      <div className="space-y-2">
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            icon={activity.icon}
            studentName={activity.studentName}
            action={activity.action}
            timestamp={activity.timestamp}
          />
        ))}
      </div>
    </div>
  );
}
