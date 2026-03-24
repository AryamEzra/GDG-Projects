interface ActivityItemProps {
  icon: string;
  studentName: string;
  action: string;
  timestamp: string;
}

export function ActivityItem({ icon, studentName, action, timestamp }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 py-3 border-b border-border last:border-0">
      <div className="text-xl flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">
          {studentName} <span className="font-normal text-muted-foreground">{action}</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">{timestamp}</p>
      </div>
    </div>
  );
}
