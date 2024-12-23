import React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
        "gecko-coin-price-marquee-widget": any
    }
  }
}