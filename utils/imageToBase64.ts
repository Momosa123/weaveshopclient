"use server";

export async function imageToBase64(imageFile: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!imageFile.type.includes('png')) {
      reject(new Error('File must be a PNG image'));
      return;
    }

    const reader = new FileReader();
    
    reader.onload = () => {
      const base64String = reader.result as string;
      // Remove the data URL prefix to get just the base64 string
      const base64 = base64String.split(',')[1];
      resolve(base64);
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsDataURL(imageFile);
  });
}
