import { Suspense } from "react";
import Link from "next/link";
import { FlaskConical, GraduationCap } from "lucide-react";
import { challenges, labs, matches, type Role } from "@/lib/demo-data";
import { getRole } from "@/lib/role";
import { SidebarNav } from "@/components/sidebar-nav";

const promo = {
  company: {
    icon: GraduationCap,
    title: "Access world-class research talent",
    body: "Turn real-world problems into research collaborations with top universities.",
  },
  researcher: {
    icon: FlaskConical,
    title: "Fund your lab's research",
    body: "Work on real-world problems with industry partners and bring in sponsored funding.",
  },
};

// The demo company is Meridian Health and the demo lab is Dr. Morgan's.
function matchCount(role: Role) {
  if (role === "company") {
    const ids = challenges.filter((c) => c.companyId === "meridian").map((c) => c.id);
    return matches.filter((m) => ids.includes(m.challengeId)).length;
  }
  return matches.filter((m) => m.labId === labs[0].id).length;
}

// The role comes from a cookie, so this part renders per request.
async function RoleSidebarContent() {
  const role = await getRole();
  const { icon: PromoIcon, title, body } = promo[role];

  return (
    <>
      <SidebarNav role={role} matchCount={matchCount(role)} />

      <div className="mt-auto rounded-xl bg-brand-50 p-4">
        <PromoIcon className="mb-2 size-5 text-brand" />
        <p className="text-sm font-semibold text-zinc-900">{title}</p>
        <p className="mt-1 text-xs text-zinc-600">{body}</p>
      </div>
    </>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col gap-8 border-r border-zinc-200 bg-white px-4 py-6">
      <Link href="/" className="px-3 text-lg font-bold leading-tight text-zinc-900">
        Research
        <br />
        <span className="text-brand">Exchange</span>
      </Link>

      <Suspense>
        <RoleSidebarContent />
      </Suspense>
    </aside>
  );
}
