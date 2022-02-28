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
    <div sx={{ ...style, px: 5, py: 4, borderRadius: 2 }}>
      <h1>{heading}</h1>
      <h2>{<PortableText value={tagline} />}</h2>
    </div>
  );
}

export default HeroSection;
