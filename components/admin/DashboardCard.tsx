import { ArrowUpRight } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: number;
};

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <article className="group rounded-2xl border border-[#e0e9dd] bg-white p-5 shadow-[0_10px_30px_-26px_rgba(23,32,26,.5)] transition hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
      <div className="flex items-start justify-between">
        <p className="text-sm font-semibold text-[#526257]">{title}</p>
        <span aria-hidden="true" className="rounded-lg bg-[#f0f7ee] p-2 text-[#1f7a46]"><ArrowUpRight className="h-4 w-4" /></span>
      </div>
      <p className="mt-5 font-sans text-4xl font-extrabold tracking-tight text-[#18492f]">{value}</p>
      <p className="mt-1 text-xs text-[#6b7b70]">Across your content</p>
    </article>
  );
}
