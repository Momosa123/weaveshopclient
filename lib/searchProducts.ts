import { prisma } from "./prisma";
import { Product } from "../app/definition";

//search by image
export async function searchProductsByImage(
  imageBase64: string,
  limit: number = 4,
): Promise<Product[]> {
  // Pour l'instant, retourne simplement les produits les plus récents
  // La recherche par image nécessiterait une intégration avec un service d'IA
  try {
    const products = await prisma.product.findMany({
      take: limit,
      orderBy: {
        id: "desc",
      },
    });

    return products;
  } catch (error) {
    console.error("Error searching products by image:", error);
    return [];
  }
}

//search by text
export async function searchProductsByText(
  searchText: string,
  limit: number = 4,
): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { title: { contains: searchText, mode: "insensitive" } },
          { description: { contains: searchText, mode: "insensitive" } },
        ],
      },
      take: limit,
      orderBy: {
        id: "desc",
      },
    });

    return products;
  } catch (error) {
    console.error("Error searching products by text:", error);
    return [];
  }
}
