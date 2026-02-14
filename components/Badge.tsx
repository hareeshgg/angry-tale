interface BadgeProps {
  children: React.ReactNode;
  color?: "slate" | "blue" | "green" | "red" | "purple" | "orange";
}

export default function Badge({ children, color = "slate" }: BadgeProps) {
  const colors = {
    slate: "bg-slate-100 text-slate-800 border-slate-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    red: "bg-red-50 text-red-700 border-red-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colors[color]}`}
    >
      {children}
    </span>
  );
}
