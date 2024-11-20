import AllProducts from "./components/homeProducts";
import Hero from "./components/hero";
import ReviewScroller from "./components/reviewScroller";
import Container from "./components/Container";
interface SearchParams {
  search?: string;
  imageSearch?: string;
}

export default async function Home(props: {
  searchParams: Promise<SearchParams>
}) {
  // Await the searchParams
  const resolvedParams = await props.searchParams;
  const { search, imageSearch } = resolvedParams;
  console.log(search, imageSearch);
  const query = search || "";
  const isImageSearch = imageSearch === "true";

  return (
    <div >
      <Container>
        <Hero />
        <AllProducts /> 
        <ReviewScroller />  
      </Container>
    </div>
  );
}
