import { setRole } from "@/app/actions";
import type { Role } from "@/lib/demo-data";

const options: { value: Role; label: string }[] = [
  { value: "company", label: "Company" },
  { value: "researcher", label: "Researcher" },
];

export function RoleSwitcher({ role }: { role: Role }) {
  return (
    <form action={setRole} className="flex items-center gap-2 text-xs">
      <span className="font-medium uppercase tracking-wide text-zinc-400">Demo view</span>
      <div className="flex rounded-lg bg-zinc-100 p-0.5">
        {options.map(({ value, label }) => (
          <button
            key={value}
            type="submit"
            name="role"
            value={value}
            aria-pressed={role === value}
            className={`rounded-md px-3 py-1.5 font-medium ${
              role === value
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </form>
  );
}
