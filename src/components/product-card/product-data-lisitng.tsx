import { Fragment } from "react";
import Slider from "react-slick";
import ExpProductCell  from "./product-cell";

const ProductListing = (props: any) => {
  const {
    productsData,
    mappingObj,
    sliderView = {
      settings: {},
    },
  } = props;
  const { settings } = sliderView;

  return (
    <>

      {/* Fetching Products */}
      {!!(!productsData?.Data?.items?.length) && (
        <div className="position-relative" style={{ height: "300px" }}>
          <div className={"cart-loading"}>
            <div className="loader-wrapper">
              <div className="loader-main flex" />
            </div>
          </div>
        </div>
      )}

      {/* Products fetched successfully */}
      {!!productsData?.Data?.items?.length && (
        <>
          <Slider {...settings}>
            {productsData?.Data?.items?.map((product: any, index: number) => (
              <Fragment key={index.toString()}>
                <ExpProductCell
                  productDetails={product}
                  showActionButtons={false}
                  mode={"widget"}
                  widgetId={!!mappingObj?.headingText}
                />
              </Fragment>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default ProductListing;
