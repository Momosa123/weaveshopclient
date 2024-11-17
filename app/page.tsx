import SearchResults from "./components/searchResults";
import AllProducts from "./components/allProducts";
export default async function Home(props: {searchParams?: Promise<{search: string}>}) {
  const searchParams = await props.searchParams || {search: ""};
  const search =  searchParams.search;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AllProducts />
       {/*  <SearchResults query={search} /> */}
      </main>
    
    </div>
  );
}
