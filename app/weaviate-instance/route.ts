import weaviate from "weaviate-client";
import {  dataType } from 'weaviate-client';
import {  importData } from './dataImporter.js';



export async function GET() {
    try {
        // Connect to the local Weaviate instance
        const client = await weaviate.connectToLocal()

        // create collection
        await client.collections.create({
            name: 'FashionProducts',
            vectorizers: [
                weaviate.configure.vectorizer.multi2VecClip({
                    name: 'product_vector',
                    imageFields: [
                        {
                            name: 'image',
                            weight: 0.9,
                        },
                    ],
                    textFields: [
                        {
                            name: 'title',
                            weight: 0.1,
                        },
                    ],
                }),
            ],
            properties: [
                {
                    name: 'title',
                    dataType: dataType.TEXT,
                },
                {
                    name: 'image',
                    dataType: dataType.BLOB,
                },
                {
                    name: 'average_rating',
                    dataType: dataType.NUMBER,
                },
                {
                    name: 'rating_number',
                    dataType: dataType.NUMBER,
                },
                {
                    name: 'price',
                    dataType: dataType.NUMBER,
                },
                {
                    name: 'main_image',
                    dataType: dataType.TEXT,
                }
            ]
        });

        // import data
        await importData(client);
        
        console.log("Data imported successfully");

        // close client
        client.close()

        // Return a Response object
        return new Response(JSON.stringify({ message: 'Data imported successfully, now have fun!' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('Error:', error);
        // Return error response
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'An unknown error occurred' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}