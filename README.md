# Weaveshop Fashion Product Search Application
Weaveshop is a modern, scalable, and user-friendly platform designed to provide a seamless shopping experience. Built with cutting-edge technologies, it offers features such as product search with images  and a responsive design for all devices.

## Prerequisites

- Node.js 18+
- Docker Desktop
- npm or yarn

## Installation

1. Clone the repository:
`git clone https://github.com/Momosa123/weaveshopclient.git cd weaveshopclient`

2. Install dependencies:
`npm install`

3. Launch Docker Desktop and run `docker-compose up -d` to start the Docker container 

4. Start the development server:
`npm run dev`

5. Deploy a local instance of Weaviate using Docker:
navigate to:[http://localhost:3000/weaviate-instance](http://localhost:3000/weaviate-instance)

After setting up Weaviate, you can view the main application at:
[http://localhost:3000](http://localhost:3000)

## Features

- Semantic product search using Weaviate vector database
- Real-time search results
- Similar product recommendations
- Docker integration for local Weaviate instance

## Tech Stack

- Next.js
- TailwindCSS
- Weaviate
- Docker

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Weaviate Documentation](https://weaviate.io/developers/weaviate)
- [Docker Documentation](https://docs.docker.com/)

Here is another app that uses weaviate for movie recommandations
https://weavimovie.vercel.app/
