import AllProducts from "./components/homeProducts";
import Hero from "./components/hero";
import ReviewScroller from "./components/reviewScroller";
import Container from "./components/container";

export default async function Home() {

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
