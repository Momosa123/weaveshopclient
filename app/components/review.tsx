import StarRating from './starRating';

export default function Review({ name, review, stars }: { name: string; review: string; stars: number }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <StarRating rating={stars} />
        </div>
      </div>
      <p className="text-gray-600">{review}</p>
    </div>
  );
} 