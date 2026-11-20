import { Suspense } from "react";
import { Search } from "lucide-react";
import { users } from "@/lib/demo-data";
import { getRole } from "@/lib/role";
import { RoleSwitcher } from "@/components/role-switcher";

// The role comes from a cookie, so this part renders per request.
async function HeaderControls() {
  const role = await getRole();
  const user = users[role];

  return (
    <div className="flex items-center gap-4">
      <RoleSwitcher role={role} />

      <label className="flex w-64 items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-400">
        <Search className="size-4" />
        <input
          className="w-full bg-transparent text-zinc-900 outline-none placeholder:text-zinc-400"
          placeholder={
            role === "company"
              ? "Search researchers, labs..."
              : "Search challenges, companies..."
          }
        />
      </label>

      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
          {user.initials}
        </span>
        <div className="text-sm leading-tight">
          <p className="font-medium text-zinc-900">{user.name}</p>
          <p className="text-xs text-zinc-500">{user.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="flex items-center justify-between gap-6 border-b border-zinc-200 bg-white px-8 py-5">
      <div>
        <h1 className="text-xl font-semibold text-zinc-900">{title}</h1>
        <p className="text-sm text-zinc-500">{subtitle}</p>
      </div>

      <Suspense>
        <HeaderControls />
      </Suspense>
    </header>
  );
}
