import { HeroIconArrowLeft } from "../../assets/HeroIconArrowLeft";
import { HeroIconArrowRight } from "../../assets/HeroIconArrowRight";
import fakeData from "./fakeData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    prevArrow: (
      <button
        type="button"
        className="slick-arrow slick-prev"
        aria-label="Left Arrow">
        <HeroIconArrowLeft />
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-arrow slick-next"
        aria-label="Right Arrow">
        <HeroIconArrowRight />
      </button>
    ),
  };
  return (
    <div>
      <h1>Carousel</h1>
      <Slider {...settings}>
        {fakeData.map((data: any, index: number) => {
          return (
            <div
              key={index.toString()}
              className="hero-carousel-section"
            >
              <div className="heroSlideImage">
                <img src={data?.slide_image_emd[0]} height="600" width="1920" />
              </div>
              <div className="heroSlideContent">
                <div className="heroSlideContentInner">
                  <p
                    className="uppercase"
                    dangerouslySetInnerHTML={{
                      __html: data?.slide_tag_line_et,
                    }}
                  />
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: data?.slide_heading_et,
                    }}
                  />
                  <p
                    className={"sub-title"}
                    dangerouslySetInnerHTML={{
                      __html: data?.slide_sub_heading_et,
                    }}
                  />
                  {data?.slide_button_text_1_et && (
                    <a
                      className="button"
                      href={data?.slide_button_link_1_et}
                      dangerouslySetInnerHTML={{
                        __html: data?.slide_button_text_1_et,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );;
};

export default Carousel;
