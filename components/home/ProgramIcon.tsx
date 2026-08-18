import {
  GraduationCap,
  HandHeart,
  HeartPulse,
  Soup,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  HeartPulse,
  Soup,
  Wrench,
  HandHeart,
  Users,
};

export default function ProgramIcon({ icon }: { icon: string }) {
  const Icon = iconMap[icon] ?? HandHeart;
  return <Icon className="h-6 w-6 text-[#16A34A]" aria-hidden="true" />;
}
