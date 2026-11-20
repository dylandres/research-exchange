"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ROLE_COOKIE, roleHome } from "@/lib/role";

export async function setRole(formData: FormData) {
  const role = formData.get("role") === "researcher" ? "researcher" : "company";
  (await cookies()).set(ROLE_COOKIE, role, { maxAge: 60 * 60 * 24 * 365 });
  redirect(roleHome[role]);
}
