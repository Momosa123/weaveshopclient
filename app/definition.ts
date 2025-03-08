export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  main_image: string;
  average_rating: number;
  rating_number: number;
  categoryId: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
