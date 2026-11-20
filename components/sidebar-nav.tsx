"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  FilePlus2,
  FlaskConical,
  FolderOpen,
  LayoutDashboard,
  MessageSquare,
  Search,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Role } from "@/lib/demo-data";

type NavItem = {
  label: string;
  icon: LucideIcon;
  href?: string; // no href = not built yet
  badge?: number;
};

function navItems(role: Role, matchCount: number): NavItem[] {
  return [
    { label: "Dashboard", icon: LayoutDashboard },
    role === "company"
      ? { label: "Submit a Research Challenge", icon: FilePlus2, href: "/challenges/new" }
      : { label: "Browse Challenges", icon: Search, href: "/challenges" },
    { label: "Matches", icon: Users, href: "/matches", badge: matchCount },
    { label: "Messages", icon: MessageSquare },
    { label: "Projects", icon: FolderOpen },
    role === "company"
      ? { label: "Company Profile", icon: Building2 }
      : { label: "Lab Profile", icon: FlaskConical },
    { label: "Settings", icon: Settings },
  ];
}

export function SidebarNav({ role, matchCount }: { role: Role; matchCount: number }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {navItems(role, matchCount).map(({ label, icon: Icon, href, badge }) => {
        const content = (
          <>
            <Icon className="size-4 shrink-0" />
            <span className="flex-1">{label}</span>
            {badge ? (
              <span className="rounded-full bg-brand px-1.5 text-xs font-medium text-white">
                {badge}
              </span>
            ) : null}
          </>
        );
        const base = "flex items-center gap-3 rounded-lg px-3 py-2 text-sm";

        if (!href) {
          return (
            <span
              key={label}
              title="Not built yet"
              className={`${base} cursor-not-allowed text-zinc-400`}
            >
              {content}
            </span>
          );
        }

        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={label}
            href={href}
            className={`${base} ${
              active
                ? "bg-brand-50 font-medium text-brand"
                : "text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
