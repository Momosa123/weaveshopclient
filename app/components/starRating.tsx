interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => (
        <span key={index} className="text-xl text-yellow-400">
          {index < Math.round(rating) ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-1 text-sm text-gray-600">({rating})</span>
    </div>
  );
} 