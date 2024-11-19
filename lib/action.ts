'use server';


import { revalidatePath } from 'next/cache';
import { searchProductsByText, searchProductsByImage } from './searchProducts';
import { ProductType } from '@/app/definition';
import { WeaviateReturn } from 'weaviate-client';


export async function searchAction(formData: FormData) {
  const searchText = formData.get('searchText') as string | null;
  const searchImage = formData.get('searchImage') as File | null;
 console.log("searchText", searchText);
console.log("searchImage", searchImage); 
  
let results : WeaviateReturn<ProductType> | undefined;
  if (searchText) {
    console.log("on est là");
    // Recherche par texte (appel API ou base de données)
   results = await searchProductsByText(searchText);

  } else if (searchImage) {
    // Recherche par image
    const imageBuffer = Buffer.from(await searchImage.arrayBuffer());
    const imageBase64 = imageBuffer.toString('base64');

    // Appel au moteur vectoriel ou traitement backend
     results = await searchProductsByImage(imageBase64);
  }

  // Optionnel : Revalider une page en cache
  revalidatePath('/search');
  console.log("results", results);
  return results;
}
