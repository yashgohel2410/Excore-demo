import fakedata from "./fakeData";
import '../../assets/zig-zag-banner.scss'

const ZigZagBanner = () => {
  return (
    <div className="flex flex-wrap">
      <h1>Zig Zag Banner</h1>
      <div className="col-6 col-tab-12 banner-content flex align-center">
        <div className="banner-content-inner">
          <div className="banner-content-icon">
            {!!fakedata?.logoImage?.length && <img src={fakedata?.logoImage} />}
          </div>

          <h2
            dangerouslySetInnerHTML={{
              __html: fakedata?.headingText
            }}
            className={`m-b-24 h2`}
          />

          <p
            dangerouslySetInnerHTML={{
              __html: fakedata?.tagLine
            }}
            className="medium"
          />

          {(fakedata?.primaryButtonText || true) && (
            <a
              dangerouslySetInnerHTML={{
                __html: fakedata?.primaryButtonText
              }}
              className="button fill-button"
              href={fakedata?.primaryButtonLink}
            />
          )}
        </div>
      </div>

      <div className="col-6 col-tab-12 banner-image">
        <div className="has-image-fill banner-image-1 scale-img">
          <img src={fakedata?.bannerImageLink} />
        </div>
      </div>
    </div>
  );
};

export default ZigZagBanner;
