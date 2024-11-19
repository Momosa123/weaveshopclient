export interface ProductType {
    metadata:Record<string, unknown>;
    uuid:string;
    vectors:Record<string, unknown>;
    [key: string]: any;
    properties: {
    title: string;
    average_rating: number;
    rating_number: number;
    price: number;
    main_image: string;
    }
}
export interface ProductGraphQL {
    _additional:{id:string};
    main_image: string;
    title: string;
    average_rating: number;
    price: number;
}