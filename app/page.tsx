import SearchResults from "./components/searchResults";
import AllProducts from "./components/homeProducts";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {(query || isImageSearch) ? (
          <SearchResults 
            query={query} 
            isImageSearch={isImageSearch} 
          />
        ) : (
          <AllProducts />
        )}
      </main>
    </div>
  );
}
