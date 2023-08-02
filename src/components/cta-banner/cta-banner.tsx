import { CSSProperties } from "react";
import fakedata from "./fakeData";
import "../../assets/cta-banner.scss";

const CtaBanner = () => {
  const divCustomStyleForImage: CSSProperties = {
    backgroundImage: `url(${fakedata.backgroundImage})`,
    backgroundSize: fakedata?.backgroundImageWidth,
    backgroundColor: "lightgray",
  };
  return (
    <div>
      <h1>CTA Banner</h1>
      <div className="liquid-image-banner" style={divCustomStyleForImage}>
        <div className={"container flex image-banner-inner"}>
          <div className="image-caption">
            <h3
              style={{ color: "#000" , margin:'24px' }}
              dangerouslySetInnerHTML={{
                __html: fakedata.headingText,
              }}
            />

            <p
              style={{ color: "#000" }}
              dangerouslySetInnerHTML={{
                __html: fakedata.tagLine,
              }}
            />

            <a
              dangerouslySetInnerHTML={{
                __html: fakedata.buttonText,
              }}
              style={{ color: "#000" }}
              href={fakedata.buttonLink}
              className="button buttonStyle hoverStyle button_style hover_button_style"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
