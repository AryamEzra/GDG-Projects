import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';

interface TrackCardProps {
  slug: string;
  href?: string;
  name: string;
  description: string;
  icon: string;
  members: number;
  level: string;
}

export function TrackCard({ slug, href, name, description, icon, members, level }: TrackCardProps) {
  const trackHref = href ?? `/tracks/${slug}`;

  return (
    <Link href={trackHref}>
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-lg transition-all group cursor-pointer h-full">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{icon}</span>
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
            {level}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{members} members</span>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </Link>
  );
}
