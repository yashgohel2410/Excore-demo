/* eslint-disable jsx-a11y/label-has-associated-control */
const ExpProductCell = (props: any) => {
  const { productDetails } = props;

  console.log({ productDetails });

  return (
    <div className="product-card">
      <div className="card-inner">
        <div className="card-figure">
          <div className="card-image-slider">
            <div className="card-image-item">
              <a href="javascript:void(0)" rel="nofollow">
                <picture>
                  <source
                    media="(min-width:1280px)"
                    srcSet={
                      productDetails?.images_ej?.length &&
                      `${productDetails?.images_ej[0]?.url_zoom?.replace(
                        "https://cdn11.bigcommerce.com",
                        "https://product-images.experro.app"
                      )}&width=360`
                    }
                  />
                  <img
                    srcSet={
                      productDetails?.images_ej?.length &&
                      `${productDetails?.images_ej[0]?.url_zoom?.replace(
                        "https://cdn11.bigcommerce.com",
                        "https://product-images.experro.app"
                      )}&width=360`
                    }
                    alt=""
                    height="346"
                    width="346"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card-brand-rating flex flex-wrap align-center justify-space">
        {productDetails?.brand_esi && productDetails?.brand_page_slug_esi && (
          <a href="javascript:void(0)" rel="nofollow">
            <p className="card-brandname">{productDetails?.brand_esi}</p>
          </a>
        )}
      </div>
      <h4 className="card-title">{productDetails?.name_eti}</h4>
      <h4>${productDetails?.price_efi}</h4>
    </div>
  );
};

export default ExpProductCell;
