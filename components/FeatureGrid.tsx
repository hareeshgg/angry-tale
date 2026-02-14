interface FeatureGridProps {
  features: string[];
  title?: string;
  columns?: 1 | 2 | 3 | 4;
}

export default function FeatureGrid({
  features,
  title,
  columns = 2,
}: FeatureGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          {title}
        </h3>
      )}
      <div className={`grid gap-4 ${gridCols[columns]}`}>
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
          >
            <svg
              className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
