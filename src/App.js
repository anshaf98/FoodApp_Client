import Cards from "./components/Cards";
import Category from "./components/Category";
import Foods from "./components/Foods";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Foods />
      <Category />
    </div>
  );
}

export default App;
