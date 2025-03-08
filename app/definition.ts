export interface Product {
  id: string;
  title: string;
  average_rating: number;
  rating_number: number;
  price: number;
  main_image: string;
  description?: string;
  stock?: number;
  images?: string[];
  categoryId?: string;
}
