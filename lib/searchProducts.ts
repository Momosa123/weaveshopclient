'use server';
import weaviate from "weaviate-client";
import {ProductType} from "../app/definition"
import { WeaviateReturn } from "weaviate-client"; 
//search by image
export async function searchProductsByImage(base64Image: string) {
  try {
    // Connect to Weaviate
    const client = await weaviate.connectToLocal();
    const collectionName = "FashionProducts";
    const myCollection = client.collections.get<ProductType>(collectionName);

    // Perform nearImage search
    const result = await myCollection.query.nearImage(
      base64Image,  // The model provider integration will automatically vectorize the query
      {
        limit: 2,
      }
    ) 

    return result;
  } catch (error) {
    console.error('Error searching similar products:', error);
    throw error;
  }
}
//search by text
export async function searchProductsByText(searchText: string) {
  try {
    // Connect to Weaviate
    const client = await weaviate.connectToLocal();
    const collectionName = "FashionProducts";
    const myCollection = client.collections.get<ProductType>(collectionName);

    // Perform text search
    const result = await myCollection.query.nearText(
      searchText,
      {limit: 2,}
    );

    return result;
  } catch (error) {
    console.error('Error searching products by text:', error);
    throw error;
  }
}
  
