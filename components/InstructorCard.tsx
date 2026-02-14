import Image from "next/image";

interface InstructorCardProps {
  name: string;
  title: string;
  image: string;
  className?: string;
}

export default function InstructorCard({
  name,
  title,
  image,
  className = "",
}: InstructorCardProps) {
  return (
    <div
      className={`full flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm ${className}`}
    >
      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-200">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">
          {name}
        </h4>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {title}
        </p>
      </div>
    </div>
  );
}
