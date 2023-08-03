import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import Slider from "react-slick";
import { Fragment as Fragment$1 } from "react";
const App$1 = "";
const fakedata$3 = [
  {
    node_type: "child",
    id: "786f3882-a929-42bf-96fa-72c22ef3374a-1-y9157oia4sfD",
    slider_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/frame-12373-1--ozbf3rhd.png"
    ],
    created_at: "2023-03-23T12:55:49.195Z",
    modified_at: "2023-03-23T12:55:49.195Z",
    _version_: "1770633618042912768"
  },
  {
    node_type: "child",
    id: "786f3882-a929-42bf-96fa-72c22ef3374a-1-dSB9J4dv30aw",
    slider_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/frame-12378-1--dgigpfyg.png"
    ],
    created_at: "2023-03-23T12:55:49.195Z",
    modified_at: "2023-03-23T12:55:49.195Z",
    _version_: "1770633618042912768"
  },
  {
    node_type: "child",
    id: "786f3882-a929-42bf-96fa-72c22ef3374a-1-kysc9EwaODFC",
    slider_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/frame-12374-1--bm0249lw.png"
    ],
    created_at: "2023-03-23T12:55:49.195Z",
    modified_at: "2023-03-23T12:55:49.195Z",
    _version_: "1770633618042912768"
  },
  {
    node_type: "child",
    id: "786f3882-a929-42bf-96fa-72c22ef3374a-1-kJ6Ndu9HQAGp",
    slider_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/frame-12377-1--80wnuufy.png"
    ],
    created_at: "2023-03-23T12:55:49.195Z",
    modified_at: "2023-03-23T12:55:49.195Z",
    _version_: "1770633618042912768"
  },
  {
    node_type: "child",
    id: "786f3882-a929-42bf-96fa-72c22ef3374a-1-jyDDqqDE5a1X",
    slider_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/frame-12374-mbdhamtv.png"
    ],
    created_at: "2023-03-23T12:55:49.195Z",
    modified_at: "2023-03-23T12:55:49.195Z",
    _version_: "1770633618042912768"
  },
  {
    node_type: "child",
    id: "786f3882-a929-42bf-96fa-72c22ef3374a-1-ND8rbMvOlE7k",
    slider_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/frame-12377-rnok5kd2.png"
    ],
    created_at: "2023-03-23T12:55:49.195Z",
    modified_at: "2023-03-23T12:55:49.195Z",
    _version_: "1770633618042912768"
  },
  {
    node_type: "child",
    id: "786f3882-a929-42bf-96fa-72c22ef3374a-1-3bZltmdIwiD3",
    slider_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/frame-12373-1--ozbf3rhd.png"
    ],
    created_at: "2023-03-23T12:55:49.195Z",
    modified_at: "2023-03-23T12:55:49.195Z",
    _version_: "1770633618042912768"
  },
  {
    node_type: "child",
    id: "786f3882-a929-42bf-96fa-72c22ef3374a-1-DDBJcRiKaJDK",
    slider_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/frame-12378-1--dgigpfyg.png"
    ],
    created_at: "2023-03-23T12:55:49.195Z",
    modified_at: "2023-03-23T12:55:49.195Z",
    _version_: "1770633618042912768"
  }
];
const brandLogo = "";
const BrandLogo = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "BrandLogo" }),
    /* @__PURE__ */ jsx("div", { className: "manufacturers-section section-gap column-5", children: /* @__PURE__ */ jsx("div", { className: "logo-grid", children: (fakedata$3 == null ? void 0 : fakedata$3.length) && (fakedata$3 == null ? void 0 : fakedata$3.map((item, index) => {
      return /* @__PURE__ */ jsx("div", { className: "logo", children: (item == null ? void 0 : item.slider_link_et) ? /* @__PURE__ */ jsx("a", { href: item == null ? void 0 : item.slider_link_et, children: /* @__PURE__ */ jsx("div", { className: "has-img", children: (item == null ? void 0 : item.slider_image_emd) && /* @__PURE__ */ jsx(
        "img",
        {
          src: (item == null ? void 0 : item.slider_image_emd) ? item == null ? void 0 : item.slider_image_emd[0] : "",
          height: "88",
          width: "315"
        }
      ) }) }) : /* @__PURE__ */ jsx("a", { href: item == null ? void 0 : item.slider_link_et, rel: "nofollow", children: /* @__PURE__ */ jsx("div", { className: "has-img", children: (item == null ? void 0 : item.slider_image_emd) && /* @__PURE__ */ jsx(
        "img",
        {
          src: (item == null ? void 0 : item.slider_image_emd) ? item == null ? void 0 : item.slider_image_emd[0] : "",
          height: "88",
          width: "315",
          "aria-label": "brand image"
        }
      ) }) }) }, index.toString());
    })) }) })
  ] });
};
const HeroIconArrowLeft = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "34", viewBox: "0 0 16 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx("title", {}),
  /* @__PURE__ */ jsx("g", { id: "icomoon-ignore" }),
  /* @__PURE__ */ jsx("path", { d: "M15.18 32.8402L2.13999 19.8002C0.599992 18.2602 0.599992 15.7402 2.13999 14.2002L15.18 1.16016", stroke: "#191919", strokeWidth: "1.5", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" })
] });
const HeroIconArrowRight = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "34", viewBox: "0 0 16 34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx("title", {}),
  /* @__PURE__ */ jsx("g", { id: "icomoon-ignore" }),
  /* @__PURE__ */ jsx("path", { d: "M0.819946 32.8402L13.8599 19.8002C15.3999 18.2602 15.3999 15.7402 13.8599 14.2002L0.819946 1.16016", stroke: "#191919", strokeWidth: "1.5", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" })
] });
const fakeData = [
  {
    node_type: "child",
    id: "579c96be-54ad-4723-9f40-72a292eedeba-1-en-us-ty6rVzwkKc88",
    slide_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/image-1--wx7prfuv.jpeg"
    ],
    slide_heading_et: "Best chairs in town",
    slide_sub_heading_et: "Filling the home with the beautiful creation of wood",
    slide_button_link_1_et: "/",
    slide_button_text_1_et: "Shop now",
    created_at: "2023-03-30T06:48:50.218Z",
    modified_at: "2023-03-30T06:48:50.218Z",
    _version_: "1770633607663058944"
  },
  {
    node_type: "child",
    id: "579c96be-54ad-4723-9f40-72a292eedeba-1-en-us-Y15B1JtLbsm4",
    slide_image_emd: [
      "https://nuoqhlwc.myexperro.com/mm-images/decor-img-j4kosuqy.jpeg"
    ],
    slide_heading_et: "Best chairs in town",
    slide_sub_heading_et: "Filling the home with the beautiful creation of wood",
    slide_button_link_1_et: "/",
    slide_button_text_1_et: "Shop now",
    created_at: "2023-03-30T06:48:50.218Z",
    modified_at: "2023-03-30T06:48:50.218Z",
    _version_: "1770633607663058944"
  }
];
const slick = "";
const slickTheme = "";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1e3,
    pauseOnHover: true,
    prevArrow: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "slick-arrow slick-prev",
        "aria-label": "Left Arrow",
        children: /* @__PURE__ */ jsx(HeroIconArrowLeft, {})
      }
    ),
    nextArrow: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "slick-arrow slick-next",
        "aria-label": "Right Arrow",
        children: /* @__PURE__ */ jsx(HeroIconArrowRight, {})
      }
    )
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Carousel" }),
    /* @__PURE__ */ jsx(Slider, { ...settings, children: fakeData.map((data, index) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "hero-carousel-section",
          children: [
            /* @__PURE__ */ jsx("div", { className: "heroSlideImage", children: /* @__PURE__ */ jsx("img", { src: data == null ? void 0 : data.slide_image_emd[0], height: "600", width: "1920" }) }),
            /* @__PURE__ */ jsx("div", { className: "heroSlideContent", children: /* @__PURE__ */ jsxs("div", { className: "heroSlideContentInner", children: [
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "uppercase",
                  dangerouslySetInnerHTML: {
                    __html: data == null ? void 0 : data.slide_tag_line_et
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "h2",
                {
                  dangerouslySetInnerHTML: {
                    __html: data == null ? void 0 : data.slide_heading_et
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "p",
                {
                  className: "sub-title",
                  dangerouslySetInnerHTML: {
                    __html: data == null ? void 0 : data.slide_sub_heading_et
                  }
                }
              ),
              (data == null ? void 0 : data.slide_button_text_1_et) && /* @__PURE__ */ jsx(
                "a",
                {
                  className: "button",
                  href: data == null ? void 0 : data.slide_button_link_1_et,
                  dangerouslySetInnerHTML: {
                    __html: data == null ? void 0 : data.slide_button_text_1_et
                  }
                }
              )
            ] }) })
          ]
        },
        index.toString()
      );
    }) })
  ] });
};
const fakedata$2 = {
  "headingText": "Super sale on new products",
  "subHeadingText": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.",
  "backgroundImage": "https://nuoqhlwc.myexperro.com/mm-images/promotional-banner-dp28w3p5.jpeg",
  "tagLine": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.",
  "buttonText": "Buy now",
  "buttonLink": "#",
  "buttonTarget": "",
  "backgroundImageWidth": ""
};
const ctaBanner = "";
const CtaBanner = () => {
  const divCustomStyleForImage = {
    backgroundImage: `url(${fakedata$2.backgroundImage})`,
    backgroundSize: fakedata$2 == null ? void 0 : fakedata$2.backgroundImageWidth,
    backgroundColor: "lightgray"
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "CTA Banner" }),
    /* @__PURE__ */ jsx("div", { className: "liquid-image-banner", style: divCustomStyleForImage, children: /* @__PURE__ */ jsx("div", { className: "container flex image-banner-inner", children: /* @__PURE__ */ jsxs("div", { className: "image-caption", children: [
      /* @__PURE__ */ jsx(
        "h3",
        {
          style: { color: "#000", margin: "24px" },
          dangerouslySetInnerHTML: {
            __html: fakedata$2.headingText
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          style: { color: "#000" },
          dangerouslySetInnerHTML: {
            __html: fakedata$2.tagLine
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          dangerouslySetInnerHTML: {
            __html: fakedata$2.buttonText
          },
          style: { color: "#000" },
          href: fakedata$2.buttonLink,
          className: "button buttonStyle hoverStyle button_style hover_button_style"
        }
      )
    ] }) }) })
  ] });
};
const fakedata$1 = {
  "Status": "success",
  "Data": {
    "items": [
      {
        "id": "P-f0fb1bb5-780a-4994-ba31-2e0cf740615b-138-1",
        "name_eti": "Astonishing 2 Seater Sofa In Shiny Light Grey Colour",
        "sku_esi": "abc-44",
        "price_efi": 1999,
        "retail_price_ef": 0,
        "sale_price_efi": 0,
        "categories_esai": [
          "By Style",
          "Decor",
          "Featured Category",
          "Sale",
          "Bedroom",
          "Trending",
          "Sofa",
          "Limited Edition",
          "Home"
        ],
        "brand_esi": "Phillip Jeffries",
        "calculated_price_efi": 1999,
        "images_ej": [
          {
            "id": 411,
            "product_id": 138,
            "is_thumbnail": true,
            "sort_order": 0,
            "description": "Astonishing 2 Seater\nSofa In Shiny\nLight Grey Colour",
            "image_file": "y/731/Mask_group_10__12251__89305.jpg",
            "url_zoom": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/138/images/411/Mask_group_10__12251__89305.1680154672.1280.1280.jpg?c=1",
            "url_standard": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/138/images/411/Mask_group_10__12251__89305.1680154672.386.513.jpg?c=1",
            "url_thumbnail": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/138/images/411/Mask_group_10__12251__89305.1680154672.220.290.jpg?c=1",
            "url_tiny": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/138/images/411/Mask_group_10__12251__89305.1680154672.44.58.jpg?c=1",
            "date_modified": "2023-03-30T05:37:52+00:00"
          }
        ],
        "variant_options_ej": [],
        "variants_ej": [
          {
            "id": 164,
            "product_id": 138,
            "sku": "abc-44",
            "sku_id": null,
            "price": 1999,
            "calculated_price": 1999,
            "sale_price": 0,
            "retail_price": 0,
            "map_price": 0,
            "weight": 30,
            "width": 5,
            "height": 15,
            "depth": 15,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": 0,
            "calculated_weight": 30,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/138/images/411/Mask_group_10__12251__89305.1680154672.386.513.jpg?c=1",
            "cost_price": 0,
            "upc": "145235874525",
            "mpn": "",
            "gtin": "",
            "inventory_level": 13,
            "inventory_warning_level": 2,
            "bin_picking_number": "",
            "option_values": []
          }
        ],
        "provider_specific_data_ej": {
          "modifiers": []
        },
        "provider_id_esi": "138",
        "sku_for_analytics_esli": "abc-44",
        "page_slug_esi": "/modern-sofa/",
        "pin": false,
        "slot": false
      },
      {
        "id": "P-f0fb1bb5-780a-4994-ba31-2e0cf740615b-139-1",
        "name_eti": "Callay Mid Century Eiffel Iconic Chair in Grey Colour",
        "sku_esi": "abc-25",
        "price_efi": 1988,
        "retail_price_ef": 0,
        "sale_price_efi": 0,
        "categories_esai": [
          "By Style",
          "Decor",
          "Featured Category",
          "Sale",
          "Bedroom",
          "Trending",
          "Limited Edition",
          "Home"
        ],
        "brand_esi": "Black-Tie",
        "calculated_price_efi": 1988,
        "images_ej": [
          {
            "id": 412,
            "product_id": 139,
            "is_thumbnail": true,
            "sort_order": 0,
            "description": "Callay Mid Century Eiffel Iconic Chair in Grey Colour",
            "image_file": "v/011/Group_3838__50772__64247.jpg",
            "url_zoom": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/139/images/412/Group_3838__50772__64247.1680154673.1280.1280.jpg?c=1",
            "url_standard": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/139/images/412/Group_3838__50772__64247.1680154673.386.513.jpg?c=1",
            "url_thumbnail": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/139/images/412/Group_3838__50772__64247.1680154673.220.290.jpg?c=1",
            "url_tiny": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/139/images/412/Group_3838__50772__64247.1680154673.44.58.jpg?c=1",
            "date_modified": "2023-03-30T05:37:53+00:00"
          },
          {
            "id": 413,
            "product_id": 139,
            "is_thumbnail": false,
            "sort_order": 1,
            "description": "Callay Mid Century Eiffel Iconic Chair in Grey Colour",
            "image_file": "p/723/Group_3838_3__17955__26516.jpg",
            "url_zoom": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/139/images/413/Group_3838_3__17955__26516.1680154673.1280.1280.jpg?c=1",
            "url_standard": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/139/images/413/Group_3838_3__17955__26516.1680154673.386.513.jpg?c=1",
            "url_thumbnail": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/139/images/413/Group_3838_3__17955__26516.1680154673.220.290.jpg?c=1",
            "url_tiny": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/139/images/413/Group_3838_3__17955__26516.1680154673.44.58.jpg?c=1",
            "date_modified": "2023-03-30T05:37:53+00:00"
          }
        ],
        "variant_options_ej": [
          {
            "id": 129,
            "product_id": 139,
            "name": "Color1683627013-139",
            "display_name": "Color",
            "type": "swatch",
            "sort_order": 0,
            "option_values": [
              {
                "id": 142,
                "label": "Sky",
                "sort_order": 0,
                "value_data": {
                  "colors": [
                    "#A1E0D5"
                  ]
                },
                "is_default": false
              },
              {
                "id": 143,
                "label": "Lime",
                "sort_order": 1,
                "value_data": {
                  "colors": [
                    "#EEEFA8"
                  ]
                },
                "is_default": false
              },
              {
                "id": 144,
                "label": "Light Pink",
                "sort_order": 2,
                "value_data": {
                  "colors": [
                    "#DEA4DE"
                  ]
                },
                "is_default": false
              }
            ],
            "config": []
          }
        ],
        "variants_ej": [
          {
            "id": 264,
            "product_id": 139,
            "sku": "abc-25-SK",
            "sku_id": 263,
            "price": null,
            "calculated_price": 1988,
            "sale_price": null,
            "retail_price": null,
            "map_price": null,
            "weight": null,
            "calculated_weight": 8,
            "width": null,
            "height": null,
            "depth": null,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": null,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "",
            "cost_price": 0,
            "upc": "",
            "mpn": "",
            "gtin": "",
            "inventory_level": 0,
            "inventory_warning_level": 0,
            "bin_picking_number": "",
            "option_values": [
              {
                "id": 142,
                "label": "Sky",
                "option_id": 129,
                "option_display_name": "Color"
              }
            ]
          },
          {
            "id": 265,
            "product_id": 139,
            "sku": "abc-25-LI",
            "sku_id": 264,
            "price": null,
            "calculated_price": 1988,
            "sale_price": null,
            "retail_price": null,
            "map_price": null,
            "weight": null,
            "calculated_weight": 8,
            "width": null,
            "height": null,
            "depth": null,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": null,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "",
            "cost_price": 0,
            "upc": "",
            "mpn": "",
            "gtin": "",
            "inventory_level": 0,
            "inventory_warning_level": 0,
            "bin_picking_number": "",
            "option_values": [
              {
                "id": 143,
                "label": "Lime",
                "option_id": 129,
                "option_display_name": "Color"
              }
            ]
          },
          {
            "id": 266,
            "product_id": 139,
            "sku": "abc-25-LI-1",
            "sku_id": 265,
            "price": null,
            "calculated_price": 1988,
            "sale_price": null,
            "retail_price": null,
            "map_price": null,
            "weight": null,
            "calculated_weight": 8,
            "width": null,
            "height": null,
            "depth": null,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": null,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "",
            "cost_price": 0,
            "upc": "",
            "mpn": "",
            "gtin": "",
            "inventory_level": 0,
            "inventory_warning_level": 0,
            "bin_picking_number": "",
            "option_values": [
              {
                "id": 144,
                "label": "Light Pink",
                "option_id": 129,
                "option_display_name": "Color"
              }
            ]
          }
        ],
        "provider_specific_data_ej": {
          "modifiers": []
        },
        "provider_id_esi": "139",
        "sku_for_analytics_esli": "abc-25",
        "page_slug_esi": "/black-leather-armchair/",
        "pin": false,
        "slot": false
      },
      {
        "id": "P-f0fb1bb5-780a-4994-ba31-2e0cf740615b-134-1",
        "name_eti": "Gianna Armchair In Dark Grey Colour",
        "sku_esi": "ABC-12",
        "price_efi": 1999,
        "retail_price_ef": 0,
        "sale_price_efi": 0,
        "categories_esai": [
          "By Style",
          "Decor",
          "Featured Category",
          "Sale",
          "Bedroom",
          "Trending",
          "Limited Edition",
          "Home"
        ],
        "brand_esi": "Tinekhome",
        "calculated_price_efi": 1999,
        "images_ej": [
          {
            "id": 402,
            "product_id": 134,
            "is_thumbnail": true,
            "sort_order": 0,
            "description": "Gianna Armchair In\nDark Grey Colour",
            "image_file": "j/187/Group_3834__39182__01520.jpg",
            "url_zoom": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/134/images/402/Group_3834__39182__01520.1680154634.1280.1280.jpg?c=1",
            "url_standard": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/134/images/402/Group_3834__39182__01520.1680154634.386.513.jpg?c=1",
            "url_thumbnail": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/134/images/402/Group_3834__39182__01520.1680154634.220.290.jpg?c=1",
            "url_tiny": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/134/images/402/Group_3834__39182__01520.1680154634.44.58.jpg?c=1",
            "date_modified": "2023-03-30T05:37:14+00:00"
          }
        ],
        "variant_options_ej": [
          {
            "id": 114,
            "product_id": 134,
            "name": "Color1680154634-134",
            "display_name": "Color",
            "type": "swatch",
            "sort_order": 0,
            "option_values": [
              {
                "id": 102,
                "label": "Red",
                "sort_order": 0,
                "value_data": {
                  "colors": [
                    "#FF3F00"
                  ]
                },
                "is_default": false
              },
              {
                "id": 103,
                "label": "Green",
                "sort_order": 1,
                "value_data": {
                  "colors": [
                    "#31FF00"
                  ]
                },
                "is_default": false
              },
              {
                "id": 104,
                "label": "Blue",
                "sort_order": 2,
                "value_data": {
                  "colors": [
                    "#0300FF"
                  ]
                },
                "is_default": false
              }
            ],
            "config": []
          }
        ],
        "variants_ej": [
          {
            "id": 104,
            "product_id": 134,
            "sku": "ABC-12-RE",
            "sku_id": 131,
            "price": null,
            "calculated_price": 1999,
            "sale_price": null,
            "retail_price": null,
            "map_price": null,
            "weight": null,
            "calculated_weight": 15,
            "width": null,
            "height": null,
            "depth": null,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": null,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "",
            "cost_price": 0,
            "upc": "",
            "mpn": "",
            "gtin": "",
            "inventory_level": 0,
            "inventory_warning_level": 0,
            "bin_picking_number": "",
            "option_values": [
              {
                "id": 102,
                "label": "Red",
                "option_id": 114,
                "option_display_name": "Color"
              }
            ]
          },
          {
            "id": 105,
            "product_id": 134,
            "sku": "ABC-12-GR",
            "sku_id": 132,
            "price": null,
            "calculated_price": 1999,
            "sale_price": null,
            "retail_price": null,
            "map_price": null,
            "weight": null,
            "calculated_weight": 15,
            "width": null,
            "height": null,
            "depth": null,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": null,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "",
            "cost_price": null,
            "upc": "",
            "mpn": "",
            "gtin": "",
            "inventory_level": 0,
            "inventory_warning_level": 0,
            "bin_picking_number": "",
            "option_values": [
              {
                "id": 103,
                "label": "Green",
                "option_id": 114,
                "option_display_name": "Color"
              }
            ]
          },
          {
            "id": 106,
            "product_id": 134,
            "sku": "ABC-12-BL",
            "sku_id": 133,
            "price": null,
            "calculated_price": 1999,
            "sale_price": null,
            "retail_price": null,
            "map_price": null,
            "weight": null,
            "calculated_weight": 15,
            "width": null,
            "height": null,
            "depth": null,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": null,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "",
            "cost_price": null,
            "upc": "",
            "mpn": "",
            "gtin": "",
            "inventory_level": 0,
            "inventory_warning_level": 0,
            "bin_picking_number": "",
            "option_values": [
              {
                "id": 104,
                "label": "Blue",
                "option_id": 114,
                "option_display_name": "Color"
              }
            ]
          }
        ],
        "provider_specific_data_ej": {
          "modifiers": []
        },
        "provider_id_esi": "134",
        "sku_for_analytics_esli": "ABC-12",
        "page_slug_esi": "/stylish-grey-armchair/",
        "pin": false,
        "slot": false
      },
      {
        "id": "P-f0fb1bb5-780a-4994-ba31-2e0cf740615b-152-1",
        "name_eti": "Litleo Mini  Decorative Artificial Plant with Pot Green",
        "sku_esi": "LMD-45",
        "price_efi": 1550,
        "retail_price_ef": 1500,
        "sale_price_efi": 0,
        "categories_esai": [
          "By Style",
          "Decor",
          "Featured Category",
          "Decor",
          "Sale",
          "Bedroom",
          "Trending",
          "Limited Edition",
          "Home"
        ],
        "brand_esi": "Tinekhome",
        "calculated_price_efi": 1550,
        "images_ej": [
          {
            "id": 428,
            "product_id": 152,
            "is_thumbnail": true,
            "sort_order": 0,
            "description": "",
            "image_file": "o/657/Mask_group_17__77443__10022.jpg",
            "url_zoom": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/152/images/428/Mask_group_17__77443__10022.1680154680.1280.1280.jpg?c=1",
            "url_standard": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/152/images/428/Mask_group_17__77443__10022.1680154680.386.513.jpg?c=1",
            "url_thumbnail": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/152/images/428/Mask_group_17__77443__10022.1680154680.220.290.jpg?c=1",
            "url_tiny": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/152/images/428/Mask_group_17__77443__10022.1680154680.44.58.jpg?c=1",
            "date_modified": "2023-03-30T05:38:00+00:00"
          }
        ],
        "variant_options_ej": [],
        "variants_ej": [
          {
            "id": 178,
            "product_id": 152,
            "sku": "LMD-45",
            "sku_id": null,
            "price": 1550,
            "calculated_price": 1550,
            "sale_price": 0,
            "retail_price": 1500,
            "map_price": 0,
            "weight": 25,
            "width": 0,
            "height": 0,
            "depth": 0,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": 0,
            "calculated_weight": 25,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/152/images/428/Mask_group_17__77443__10022.1680154680.386.513.jpg?c=1",
            "cost_price": 1550,
            "upc": "",
            "mpn": "",
            "gtin": "",
            "inventory_level": 14,
            "inventory_warning_level": 5,
            "bin_picking_number": "",
            "option_values": []
          }
        ],
        "provider_specific_data_ej": {
          "modifiers": []
        },
        "provider_id_esi": "152",
        "sku_for_analytics_esli": "LMD-45",
        "page_slug_esi": "/litleo-mini--decorative-artificial-plant-with-pot-green/",
        "pin": false,
        "slot": false
      },
      {
        "id": "P-f0fb1bb5-780a-4994-ba31-2e0cf740615b-158-1",
        "name_eti": "Modern minimalist interior with wooden blog",
        "sku_esi": "MMI-45",
        "price_efi": 1550,
        "retail_price_ef": 0,
        "sale_price_efi": 0,
        "categories_esai": [
          "By Style",
          "Decor",
          "Table Furnishing",
          "Featured Category",
          "Sale",
          "Bedroom",
          "Tables",
          "Trending",
          "Limited Edition",
          "Home"
        ],
        "brand_esi": "Phillip Jeffries",
        "calculated_price_efi": 1550,
        "images_ej": [
          {
            "id": 434,
            "product_id": 158,
            "is_thumbnail": true,
            "sort_order": 0,
            "description": "",
            "image_file": "k/657/Mask_group_23__40866__03224.jpg",
            "url_zoom": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/158/images/434/Mask_group_23__40866__03224.1680154684.1280.1280.jpg?c=1",
            "url_standard": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/158/images/434/Mask_group_23__40866__03224.1680154684.386.513.jpg?c=1",
            "url_thumbnail": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/158/images/434/Mask_group_23__40866__03224.1680154684.220.290.jpg?c=1",
            "url_tiny": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/158/images/434/Mask_group_23__40866__03224.1680154684.44.58.jpg?c=1",
            "date_modified": "2023-03-30T05:38:04+00:00"
          }
        ],
        "variant_options_ej": [],
        "variants_ej": [
          {
            "id": 184,
            "product_id": 158,
            "sku": "MMI-45",
            "sku_id": null,
            "price": 1550,
            "calculated_price": 1550,
            "sale_price": 0,
            "retail_price": 0,
            "map_price": 0,
            "weight": 120,
            "width": 15,
            "height": 20,
            "depth": 25,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": 0,
            "calculated_weight": 120,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/158/images/434/Mask_group_23__40866__03224.1680154684.386.513.jpg?c=1",
            "cost_price": 0,
            "upc": "",
            "mpn": "",
            "gtin": "",
            "inventory_level": 15,
            "inventory_warning_level": 5,
            "bin_picking_number": "",
            "option_values": []
          }
        ],
        "provider_specific_data_ej": {
          "modifiers": []
        },
        "provider_id_esi": "158",
        "sku_for_analytics_esli": "MMI-45",
        "page_slug_esi": "/modern-interior-wooden-blog/",
        "pin": false,
        "slot": false
      },
      {
        "id": "P-f0fb1bb5-780a-4994-ba31-2e0cf740615b-150-1",
        "name_eti": "SKAFTET Table lamp base",
        "sku_esi": "STL-45",
        "price_efi": 1550,
        "retail_price_ef": 1500,
        "sale_price_efi": 0,
        "categories_esai": [
          "By Style",
          "Decor",
          "Lighting",
          "Featured Category",
          "Sale",
          "Bedroom",
          "Trending",
          "Limited Edition",
          "Home"
        ],
        "brand_esi": "Tinekhome",
        "calculated_price_efi": 1550,
        "images_ej": [
          {
            "id": 426,
            "product_id": 150,
            "is_thumbnail": true,
            "sort_order": 0,
            "description": "SKAFTET",
            "image_file": "u/398/Mask_group_15__97456__93947.jpg",
            "url_zoom": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/150/images/426/Mask_group_15__97456__93947.1680154679.1280.1280.jpg?c=1",
            "url_standard": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/150/images/426/Mask_group_15__97456__93947.1680154679.386.513.jpg?c=1",
            "url_thumbnail": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/150/images/426/Mask_group_15__97456__93947.1680154679.220.290.jpg?c=1",
            "url_tiny": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/150/images/426/Mask_group_15__97456__93947.1680154679.44.58.jpg?c=1",
            "date_modified": "2023-03-30T05:37:59+00:00"
          }
        ],
        "variant_options_ej": [],
        "variants_ej": [
          {
            "id": 176,
            "product_id": 150,
            "sku": "STL-45",
            "sku_id": null,
            "price": 1550,
            "calculated_price": 1550,
            "sale_price": 0,
            "retail_price": 1500,
            "map_price": 0,
            "weight": 25,
            "width": 15,
            "height": 15,
            "depth": 20,
            "is_free_shipping": false,
            "fixed_cost_shipping_price": 0,
            "calculated_weight": 25,
            "purchasing_disabled": false,
            "purchasing_disabled_message": "",
            "image_url": "https://cdn11.bigcommerce.com/s-bdcq3jom6c/products/150/images/426/Mask_group_15__97456__93947.1680154679.386.513.jpg?c=1",
            "cost_price": 1550,
            "upc": "",
            "mpn": "",
            "gtin": "",
            "inventory_level": 15,
            "inventory_warning_level": 1,
            "bin_picking_number": "",
            "option_values": []
          }
        ],
        "provider_specific_data_ej": {
          "modifiers": []
        },
        "provider_id_esi": "150",
        "sku_for_analytics_esli": "STL-45",
        "page_slug_esi": "/skaftet-table-lamp-base/",
        "pin": false,
        "slot": false
      }
    ],
    "total_count": 7,
    "STORE_HASH": "bdcq3jom6c",
    "ENV_TYPE": "PRODUCTION",
    "TENANT_ID": "f9d6b5ce-ac6f-479d-90d7-ae33956d885f",
    "WORKSPACE_ID": "6e3bab01-edcd-4771-ad05-203ed79042d6"
  }
};
const ExpProductCell = (props) => {
  var _a, _b, _c, _d, _e, _f;
  const { productDetails } = props;
  return /* @__PURE__ */ jsxs("div", { className: "product-card", children: [
    /* @__PURE__ */ jsx("div", { className: "card-inner", children: /* @__PURE__ */ jsx("div", { className: "card-figure", children: /* @__PURE__ */ jsx("div", { className: "card-image-slider", children: /* @__PURE__ */ jsx("div", { className: "card-image-item", children: /* @__PURE__ */ jsx("a", { href: "javascript:void(0)", rel: "nofollow", children: /* @__PURE__ */ jsxs("picture", { children: [
      /* @__PURE__ */ jsx(
        "source",
        {
          media: "(min-width:1280px)",
          srcSet: ((_a = productDetails == null ? void 0 : productDetails.images_ej) == null ? void 0 : _a.length) && `${(_c = (_b = productDetails == null ? void 0 : productDetails.images_ej[0]) == null ? void 0 : _b.url_zoom) == null ? void 0 : _c.replace(
            "https://cdn11.bigcommerce.com",
            "https://product-images.experro.app"
          )}&width=360`
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          srcSet: ((_d = productDetails == null ? void 0 : productDetails.images_ej) == null ? void 0 : _d.length) && `${(_f = (_e = productDetails == null ? void 0 : productDetails.images_ej[0]) == null ? void 0 : _e.url_zoom) == null ? void 0 : _f.replace(
            "https://cdn11.bigcommerce.com",
            "https://product-images.experro.app"
          )}&width=360`,
          alt: "",
          height: "346",
          width: "346"
        }
      )
    ] }) }) }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "card-brand-rating flex flex-wrap align-center justify-space", children: (productDetails == null ? void 0 : productDetails.brand_esi) && (productDetails == null ? void 0 : productDetails.brand_page_slug_esi) && /* @__PURE__ */ jsx("a", { href: "javascript:void(0)", rel: "nofollow", children: /* @__PURE__ */ jsx("p", { className: "card-brandname", children: productDetails == null ? void 0 : productDetails.brand_esi }) }) }),
    /* @__PURE__ */ jsx("h4", { className: "card-title", children: productDetails == null ? void 0 : productDetails.name_eti }),
    /* @__PURE__ */ jsxs("h4", { children: [
      "$",
      productDetails == null ? void 0 : productDetails.price_efi
    ] })
  ] });
};
const ProductListing = (props) => {
  var _a, _b, _c, _d, _e, _f;
  const {
    productsData,
    mappingObj,
    sliderView = {
      settings: {}
    }
  } = props;
  const { settings } = sliderView;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !!!((_b = (_a = productsData == null ? void 0 : productsData.Data) == null ? void 0 : _a.items) == null ? void 0 : _b.length) && /* @__PURE__ */ jsx("div", { className: "position-relative", style: { height: "300px" }, children: /* @__PURE__ */ jsx("div", { className: "cart-loading", children: /* @__PURE__ */ jsx("div", { className: "loader-wrapper", children: /* @__PURE__ */ jsx("div", { className: "loader-main flex" }) }) }) }),
    !!((_d = (_c = productsData == null ? void 0 : productsData.Data) == null ? void 0 : _c.items) == null ? void 0 : _d.length) && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Slider, { ...settings, children: (_f = (_e = productsData == null ? void 0 : productsData.Data) == null ? void 0 : _e.items) == null ? void 0 : _f.map((product, index) => /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(
      ExpProductCell,
      {
        productDetails: product,
        showActionButtons: false,
        mode: "widget",
        widgetId: !!(mappingObj == null ? void 0 : mappingObj.headingText)
      }
    ) }, index.toString())) }) })
  ] });
};
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
    autoplaySpeed: 5e3,
    adaptiveHeight: false,
    prevArrow: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "slick-arrow slick-prev",
        "aria-label": "Left Arrow",
        children: /* @__PURE__ */ jsx(HeroIconArrowLeft, {})
      }
    ),
    nextArrow: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "slick-arrow slick-next",
        "aria-label": "Right Arrow",
        children: /* @__PURE__ */ jsx(HeroIconArrowRight, {})
      }
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 307,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "product-set-outer-section", children: [
    /* @__PURE__ */ jsx("h1", { children: "Product Card" }),
    /* @__PURE__ */ jsx("div", { className: "section-gap product-set-section", children: /* @__PURE__ */ jsx("div", { className: "product-set-inner", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsx(
      ProductListing,
      {
        mappingObj: fakedata$1,
        productsData: fakedata$1,
        sliderView: {
          settings
        }
      }
    ) }) }) }) }) })
  ] });
};
const fakedata = {
  "headingText": "Lorem ipsum",
  "subHeadingText": "",
  "tagLine": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat fermentum est, in maximus libero vestibulum non updated",
  "primaryButtonText": "View Details",
  "bannerImageLink": "https://nuoqhlwc.myexperro.com/mm-images/frame-10863-j4et7bgh.jpeg",
  "primaryButtonLink": "#",
  "logoImage": ""
};
const zigZagBanner = "";
const ZigZagBanner = () => {
  var _a;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
    /* @__PURE__ */ jsx("h1", { children: "Zig Zag Banner" }),
    /* @__PURE__ */ jsx("div", { className: "col-6 col-tab-12 banner-content flex align-center", children: /* @__PURE__ */ jsxs("div", { className: "banner-content-inner", children: [
      /* @__PURE__ */ jsx("div", { className: "banner-content-icon", children: !!((_a = fakedata == null ? void 0 : fakedata.logoImage) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx("img", { src: fakedata == null ? void 0 : fakedata.logoImage }) }),
      /* @__PURE__ */ jsx(
        "h2",
        {
          dangerouslySetInnerHTML: {
            __html: fakedata == null ? void 0 : fakedata.headingText
          },
          className: `m-b-24 h2`
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          dangerouslySetInnerHTML: {
            __html: fakedata == null ? void 0 : fakedata.tagLine
          },
          className: "medium"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          dangerouslySetInnerHTML: {
            __html: fakedata == null ? void 0 : fakedata.primaryButtonText
          },
          className: "button fill-button",
          href: fakedata == null ? void 0 : fakedata.primaryButtonLink
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "col-6 col-tab-12 banner-image", children: /* @__PURE__ */ jsx("div", { className: "has-image-fill banner-image-1 scale-img", children: /* @__PURE__ */ jsx("img", { src: fakedata == null ? void 0 : fakedata.bannerImageLink }) }) })
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Carousel, {}),
    /* @__PURE__ */ jsx(ZigZagBanner, {}),
    /* @__PURE__ */ jsx(ProductCard, {}),
    /* @__PURE__ */ jsx(CtaBanner, {}),
    /* @__PURE__ */ jsx(BrandLogo, {})
  ] });
};
function render(url, context) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, context, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
