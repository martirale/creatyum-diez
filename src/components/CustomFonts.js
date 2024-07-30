import localFont from "next/font/local";

const SpaceMono = localFont({
  src: [{ path: "../../public/fonts/spacemono-bolditalic.woff2" }],
  variable: "--font-spacemono",
});

const Roboto = localFont({
  src: [
    {
      path: "../../public/fonts/roboto-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/roboto-lightitalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/roboto-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/roboto-mediumitalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
});

export { Roboto, SpaceMono };
