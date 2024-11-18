'use client';
import { useEffect, useState } from 'react';
import Review from './review';
import reviews from '../../reviews.json';

const ReviewScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-5xl font-integral font-bold text-center mt-10">OUR HAPPY CUSTOMERS</h1>
      <div
        className="transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        <div className="flex">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-full px-4 py-8"
            >
              <Review
                name={review.name}
                review={review.review}
                stars={review.stars}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewScroller; 