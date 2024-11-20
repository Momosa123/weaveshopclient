import weaviate from "weaviate-client";
import {ProductType} from "../app/definition"

//search by image
export async function searchProductsByImage(base64Image: string, limit: number = 4) {
  try {
    // Connect to Weaviate
    const client = await weaviate.connectToLocal();
    const collectionName = "FashionProducts";
    const myCollection = client.collections.get<ProductType>(collectionName);

    // Perform nearImage search
    const result = await myCollection.query.nearImage(
      base64Image,  // The model provider integration will automatically vectorize the query
      {
        limit: limit,
      }
    ) 

    return result?.objects;
  } catch (error) {
    console.error('Error searching similar products:', error);
    throw error;
  }
}
//search by text
export async function searchProductsByText(searchText: string, limit: number = 4) {
  try {
    // Connect to Weaviate
    const client = await weaviate.connectToLocal();
    const collectionName = "FashionProducts";
    const myCollection = client.collections.get<ProductType>(collectionName);

    // Perform text search
    const result = await myCollection.query.nearText(
      searchText,
      {limit: limit}
    );

    return result?.objects;
  } catch (error) {
    console.error('Error searching products by text:', error);
    throw error;
  }
}
  
