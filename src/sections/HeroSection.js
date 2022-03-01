import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { PortableText } from "@portabletext/react";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function HeroSection(props) {
  const { heading, backgroundImage, tagline } = props;

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage)
          .width(1000)
          .auto("format")
          .url()}")`,
      }
    : {};

  return (
    <>
      <h1>{heading}</h1>
      <div sx={{ ...style, px: 5, py: 4, borderRadius: 2 }}>
        <PortableText value={tagline} />
      </div>
    </>
  );
}

export default HeroSection;
