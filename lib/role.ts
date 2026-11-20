import { cookies } from "next/headers";
import type { Role } from "@/lib/demo-data";

export const ROLE_COOKIE = "rx-role";

export const roleHome: Record<Role, string> = {
  company: "/challenges/new",
  researcher: "/challenges",
};

export async function getRole(): Promise<Role> {
  const value = (await cookies()).get(ROLE_COOKIE)?.value;
  return value === "researcher" ? "researcher" : "company";
}
