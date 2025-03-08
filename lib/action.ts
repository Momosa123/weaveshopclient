"use server";

import { revalidatePath } from "next/cache";
import { searchProductsByText, searchProductsByImage } from "./searchProducts";
import { Product } from "@/app/definition";

export async function searchAction(formData: FormData) {
  const searchText = formData.get("searchText") as string | null;
  const searchImage = formData.get("searchImage") as File | null;

  let results: Product[] | undefined;

  if (searchText) {
    results = await searchProductsByText(searchText, 3);
  } else if (searchImage) {
    const imageBuffer = Buffer.from(await searchImage.arrayBuffer());
    const imageBase64 = imageBuffer.toString("base64");
    results = await searchProductsByImage(imageBase64, 3);
  }

  revalidatePath("/search");
  return results;
}
