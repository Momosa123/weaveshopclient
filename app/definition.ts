import { Properties } from "weaviate-client";

  
export interface ProductGraphQL {
    _additional:{id:string};
    main_image: string;
    title: string;
    average_rating: number;
    price: number;
}   

export interface ProductProperties extends Properties{
    uuid: string;
    properties: {
        title: string;
        average_rating: number;
        rating_number: number;
        price: number;
        main_image: string;
      };
}