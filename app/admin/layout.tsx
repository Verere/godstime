import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { auth } from "@/auth";
import { logoutAction } from "@/app/admin/actions";
import Sidebar from "@/components/admin/Sidebar";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await auth();

  if (!session?.user || session.user.role !== "admin") {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#f8fff9] lg:flex">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6">
        <div className="mb-6 flex items-center justify-between rounded-2xl border border-[#dcfce7] bg-white p-4">
          <h1 className="text-xl font-bold text-[#17201A]">God&apos;stime Admin</h1>
          <form action={logoutAction}>
            <button className="rounded-full border border-[#bbf7d0] px-4 py-2 text-sm font-semibold text-[#166534]">
              Logout
            </button>
          </form>
        </div>
        {children}
      </div>
    </div>
  );
}
