import Bestsellers from "./BestSellers";
import Discover from "./Discover";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
        <Discover />
        <Bestsellers />
      </div>
    </>
  );
};

export default HomePage;
