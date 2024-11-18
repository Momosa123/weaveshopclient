import weaviate from "weaviate-ts-client"

//get 9 products
export async function getProducts(){
 
    const client =  weaviate.client(
        {
            scheme: "http",
            host: "localhost:8080",
        }
    )
    const response =  await client.graphql.get().withClassName("FashionProducts").withFields("main_image,title,average_rating,price").withLimit(9).do();
   
   return response
   }