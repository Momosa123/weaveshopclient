import SearchResults from "./components/searchResults";
import AllProducts from "./components/homeProducts";
import Hero from "./components/hero";
import ReviewScroller from "./components/reviewScroller";
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
      <main className="flex flex-col gap-8 p-8 row-start-2 items-center sm:items-start">
        <Hero />
        {(query || isImageSearch) ? (
          <SearchResults 
            query={query} 
            isImageSearch={isImageSearch} 
          />
        ) : (
          <AllProducts /> 
        )}
        <ReviewScroller />  
      </main>
    </div>
  );
}
