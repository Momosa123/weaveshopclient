# Weavishop Fashion Product Search Application
Weavishop is a modern, scalable, and user-friendly platform designed to provide a seamless shopping experience. Built with cutting-edge technologies, it offers features such as product search with images  and a responsive design for all devices.

This project demonstrates the implementation of an e-commerce platform, including:

Search functionality: Use text or image-based queries for product discovery.
Dynamic product display: Integrates with a backend vector store for data retrieval.
Responsive design: Optimized for both mobile and desktop users.
Scalable architecture: Powered by Next.js, Tailwind CSS, and Weaviate for vector search.


## Steps to Run Locally

1- Clone the repository:
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app

2- Install dependencies:
npm install

3- Start the development server:
npm run dev

4- Run `docker-compose up -d` to start the Docker container

5- Deploy a local instance of Weaviate using Docker:
navigate to:[http://localhost:3000/weaviate-instance](http://localhost:3000/weaviate-instance)

After setting up Weaviate, you can view the main application at:
[http://localhost:3000](http://localhost:3000)

## Features

- Semantic product search using Weaviate vector database
- Real-time search results
- Similar product recommendations
- Docker integration for local Weaviate instance

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses:
- Next.js, TailwindCSS
- Weaviate for vector search capabilities
- Docker for local development

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Weaviate Documentation](https://weaviate.io/developers/weaviate)
- [Docker Documentation](https://docs.docker.com/)
