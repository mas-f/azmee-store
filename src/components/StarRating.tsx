import { Star } from 'lucide-react';

type StarRatingProps = {
  rating: number;
  className?: string;
  size?: number;
};

export function StarRating({ rating, className = '', size = 14 }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`Rating ${rating} dari 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.round(rating);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? 'fill-coksu-500 text-coksu-500' : 'fill-coksu-200 text-coksu-200'}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}
