interface RatingStarsProps {
  rating: number;
  max?: number;
}

export default function RatingStars({ rating, max = 5 }: RatingStarsProps) {
  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-current"
              : "text-slate-300 fill-current"
          }`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span className="ml-2 text-sm font-medium text-slate-600">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
