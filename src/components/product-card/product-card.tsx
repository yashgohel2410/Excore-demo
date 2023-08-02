import { HeroIconArrowLeft } from "../../assets/HeroIconArrowLeft";
import { HeroIconArrowRight } from "../../assets/HeroIconArrowRight";
import fakedata from "./fakeData";
import ProductListing from "./product-data-lisitng";

const ProductCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    className: `'pagination-show slick-top-arrow'`,
    speed: 500,
    arrows: true,
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: false,
    prevArrow: (
      <button
        type="button"
        className="slick-arrow slick-prev"
        aria-label="Left Arrow"
      >
        <HeroIconArrowLeft />
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-arrow slick-next"
        aria-label="Right Arrow"
      >
        <HeroIconArrowRight />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 307,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="product-set-outer-section">
      <h1>Product Card</h1>
      <div className="section-gap product-set-section">
        <div className="product-set-inner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ProductListing
                  mappingObj={fakedata}
                  productsData={fakedata}
                  sliderView={{
                    settings: settings,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
