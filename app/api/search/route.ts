import { searchProductsByImage, searchProductsByText } from '@/utils/searchProducts';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (body.isImage && body.query) {
      // Handle image search
      const base64Image = body.query;
      const results = await searchProductsByImage(base64Image);
      return NextResponse.json(results);
    }

    return NextResponse.json({ error: 'No image provided' }, { status: 400 });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('search');

    if (!query) {
      return NextResponse.json({ error: 'No search query provided' }, { status: 400 });
    }
    console.log(query);
    // Check if the query is a base64 image (starts with data:image)
    const isImage = query.startsWith('data:image');
    
    const results = isImage 
      ? await searchProductsByImage(query)
      : await searchProductsByText(query);

    return NextResponse.json(results);

  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
}
