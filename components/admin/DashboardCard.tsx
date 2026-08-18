type DashboardCardProps = {
  title: string;
  value: number;
};

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <article className="rounded-2xl border border-[#dcfce7] bg-white p-5 shadow-sm">
      <p className="text-sm text-[#2f3d34]">{title}</p>
      <p className="mt-2 text-3xl font-bold text-[#166534]">{value}</p>
    </article>
  );
}
