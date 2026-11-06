import { redirect } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { auth } from "@/auth";
import { logoutAction } from "@/app/admin/actions";
import Sidebar from "@/components/admin/Sidebar";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await auth();

  if (!session?.user || session.user.role !== "admin") {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#f5f8f2] lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto mb-7 flex max-w-7xl items-center justify-between rounded-2xl border border-[#e0e9dd] bg-white px-4 py-3 shadow-sm sm:px-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6b7b70]">God&apos;stime Orphanage Home</p>
            <h1 className="mt-0.5 font-sans text-lg font-extrabold text-[#17201A] sm:text-xl">Admin workspace</h1>
          </div>
          <form action={logoutAction}>
            <button className="min-h-11 rounded-full border border-[#cbdccb] px-4 text-sm font-bold text-[#18492f] hover:bg-[#f3f8f1]">
              Logout
            </button>
          </form>
        </div>
        {children}
      </div>
    </div>
  );
}
