interface CountdownTimerProps {
  targetDate?: string; // Not actually used for logic in this UI-only version
  labels?: string[];
}

export default function CountdownTimer({
  labels = ["Days", "Hours", "Mins", "Secs"],
}: CountdownTimerProps) {
  // Static values for demo purposes as requested (UI only)
  const timeValues = ["02", "14", "45", "30"];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4">
      {timeValues.map((val, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-mono">
              {val}
            </span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-slate-500 mt-2">
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}
