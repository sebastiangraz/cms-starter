import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

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
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <h1>{heading}</h1>
      <div sx={{ ...style, px: 5, py: 4, borderRadius: 2 }}>
        <PortableText value={tagline} />
      </div>
    </motion.div>
  );
}

export default HeroSection;
