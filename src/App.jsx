import "./App.css";
import BrandLogo from "./components/brand-logo/brand-logo";
import {Carousel} from "./components/carousel";
import CtaBanner from "./components/cta-banner/cta-banner";
import ProductCard from "./components/product-card/product-card";
import ZigZagBanner from "./components/zig-zag-banner/zig-zag-banner";

function App() {

  return (
    <>
      <Carousel/>
      <ZigZagBanner/>
      <ProductCard/>
      <CtaBanner/>
      <BrandLogo/>
    </>
  );
}

export default App;
