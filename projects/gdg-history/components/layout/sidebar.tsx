'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, BookOpen, Calendar, Home, Users, Settings, Layers, Archive } from 'lucide-react';
import { cn } from '@/lib/utils';

const studentNavLinks = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: Home,
  },
  {
    href: '/tracks',
    label: 'Tracks',
    icon: BookOpen,
  },
];

const adminNavLinks = [
  {
    href: '/tracks',
    label: 'Tracks',
    icon: BookOpen,
  },
  {
    href: '/attendance',
    label: 'Attendance',
    icon: Calendar,
  },
  {
    href: '/admin',
    label: 'Admin Panel',
    icon: Users,
  },
  {
    href: '/core-teams',
    label: 'Core Teams',
    icon: Layers,
  },
  {
    href: '/archive',
    label: 'Archive',
    icon: Archive,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState<'student' | 'admin'>('student');

  useEffect(() => {
    const roleCookie = document.cookie
      .split('; ')
      .find((entry) => entry.startsWith('role='))
      ?.split('=')[1];

    if (roleCookie === 'admin' || roleCookie === 'student') {
      setRole(roleCookie);
    }
  }, []);

  const navLinks = useMemo(() => {
    return role === 'admin' ? adminNavLinks : studentNavLinks;
  }, [role]);

  return (
    <aside className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:border-r md:border-border md:bg-card md:flex md:flex-col">
      <div className="flex flex-col h-full">
        {/* Logo/Brand */}
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">GDG</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground">GDG AASTU</span>
              <span className="text-xs text-muted-foreground capitalize">{role} Portal</span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
