import fakedata from "./fakeData";
import "../../assets/brand-logo.scss";

const BrandLogo = () => {
  return (
    <>
      <h1>BrandLogo</h1>
      <div className="manufacturers-section section-gap column-5">
        <div className="logo-grid">
          {fakedata?.length &&
            fakedata?.map((item: any, index: number) => {
              return (
                <div key={index.toString()} className="logo">
                  {item?.slider_link_et ? (
                    <a href={item?.slider_link_et}>
                      <div className="has-img">
                        {item?.slider_image_emd && (
                          <img
                            src={
                              item?.slider_image_emd
                                ? item?.slider_image_emd[0]
                                : ""
                            }
                            height="88"
                            width="315"
                          />
                        )}
                      </div>
                    </a>
                  ) : (
                    <a href={item?.slider_link_et} rel="nofollow">
                      <div className="has-img">
                        {item?.slider_image_emd && (
                          <img
                            src={
                              item?.slider_image_emd
                                ? item?.slider_image_emd[0]
                                : ""
                            }
                            height="88"
                            width="315"
                            aria-label="brand image"
                          />
                        )}
                      </div>
                    </a>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BrandLogo;
