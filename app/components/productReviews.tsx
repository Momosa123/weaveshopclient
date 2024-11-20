import Review from './review';
import reviews from '@/reviews.json';

export default function ProductReviews() {
  return (
      <>
       
    <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-2xl font-bold mb-4 text-center">Product Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {reviews.slice(0,2).map((review, index) => (
          <Review
            key={index}
            name={review.name}
            review={review.review}
            stars={review.stars}
          />
        ))}
      </div>
    </div>
    </>
  );  
} 