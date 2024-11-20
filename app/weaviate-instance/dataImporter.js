import axios from 'axios';
import data from './subset_data.json';
// convert image to base64
export async function imageToBase64(imageUrl) {
  try {
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer'
    });
    return Buffer.from(response.data, 'binary').toString('base64');
  } catch (error) {
    console.error(`Error fetching image from ${imageUrl}:`, error);
    return '';
  }
}

// import data
export async function importData(client) {
  // read data
 
 
  // get collection
  const collectionName = "FashionProducts";
  const myCollection = client.collections.get(collectionName);
  // create data objects
  let dataObjects = []
  for (const product of data.products) {
    const mainImage = product.images.find(img => img.variant === 'MAIN');
    if (mainImage && mainImage.hi_res) {
      try {
        const base64Image = await imageToBase64(mainImage.hi_res);
        if (!base64Image) {
          console.error(`No base64 image for product: ${product.title}`);
          continue;
        }

        console.log(`Base64 size for ${product.title}: ${base64Image.length}`);
       
        dataObjects.push({
          title: product.title,
          image: base64Image,
          main_image: mainImage.hi_res,
          average_rating: product.average_rating,
          rating_number: product.rating_number,
          price: product.price || Math.random() * 100 // random price if not available
        })
        
        console.log(`Imported product: ${product.title}`);
      } catch (error) {
        console.error(`Error importing product ${product.title}:`, error);
      }
    }
  }
  const mmInsertResponse = await myCollection.data.insertMany(dataObjects)
  console.log(mmInsertResponse)
} 
