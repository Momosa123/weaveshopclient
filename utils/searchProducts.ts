"use server";
import { imageToBase64 } from "./imageToBase64";
import weaviate from "weaviate-client";
import {ProductType} from "../app/definition"

//search by image
export async function searchProductsByImage(imageFile: File) {
  try {
    // Convert image to base64
    const base64String = await imageToBase64(imageFile);
    
    // Connect to Weaviate
    const client = await weaviate.connectToLocal();
    const collectionName = "FashionProducts";
    const myCollection = client.collections.get(collectionName);

    // Perform nearImage search
    const result = await myCollection.query.nearImage(
      base64String,
      {
        limit: 2,
      }
    );

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
  
