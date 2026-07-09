import Banner from "../components/Banner/Banner";
import SearchBar from "../components/SearchBar/SearchBar";
import Categories from "../components/Categories/Categories";
import Benefits from "../components/Benefits/Benefits";
import About from "../components/About/About";

function Home() {
  return (
    <>
      <Banner />
      <SearchBar />
      <Categories />
      <Benefits />
      <About />
    </>
  );
}

export default Home;
