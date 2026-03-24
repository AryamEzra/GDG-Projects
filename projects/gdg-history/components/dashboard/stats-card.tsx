import { ReactNode } from 'react';
import { TrendingUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: ReactNode;
  trend?: number;
  description?: string;
}

export function StatsCard({ title, value, unit, icon, trend, description }: StatsCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="text-muted-foreground">{icon}</div>
        {trend && (
          <div className="flex items-center gap-1 text-xs font-medium text-green-500">
            <TrendingUp className="w-3 h-3" />
            {trend}%
          </div>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm font-medium">{title}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">{value}</span>
          {unit && <span className="text-muted-foreground text-sm">{unit}</span>}
        </div>
        {description && <p className="text-xs text-muted-foreground mt-2">{description}</p>}
      </div>
    </div>
  );
}
