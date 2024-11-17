export interface ProductType {
    metadata:any;
    uuid:string;
    vectors:any;
    [key: string]: any;
    title: string;
    average_rating: number;
    rating_number: number;
    price: number;
    main_image: string;
}
export interface ProductGraphQL {
    main_image: string;
    title: string;
    average_rating: number;
    price: number;
}