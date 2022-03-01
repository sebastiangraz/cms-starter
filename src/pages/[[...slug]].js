import { motion } from "framer-motion";
import React from "react";
import groq from "groq";
import client from "../client";
import RenderSections from "../components/RenderSections";
import { getSlugVariations, slugParamToPath } from "../utils/urls";
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const pageFragment = groq`
...,
content[] {
  ...
}`;

/**
 * Fetches data for our pages.
 *
 * The [[...slug]] name for this file is intentional - it means Next will run this getServerSideProps
 * for every page requested - /, /about, /contact, etc..
 * From the received params.slug, we're able to query Sanity for the route coresponding to the currently requested path.
 */
export const getServerSideProps = async ({ params }) => {
  const slug = slugParamToPath(params?.slug);

  let data;

  // Frontpage - fetch the linked `frontpage` from the global configuration document.
  if (slug === "/") {
    data = await client
      .fetch(
        // Get the route document with one of the possible slugs for the given requested path
        groq`*[_type == "route" && slug.current in $possibleSlugs][0]{
        page-> {
          ${pageFragment}
        }
      }`,
        { possibleSlugs: getSlugVariations(slug) }
      )
      .then((res) => (res?.page ? { ...res.page, slug } : undefined));
  } else {
    // Regular route
    data = await client
      .fetch(
        // Get the route document with one of the possible slugs for the given requested path
        groq`*[_type == "route" && slug.current in $possibleSlugs][0]{
          page-> {
            ${pageFragment}
          }
        }`,
        { possibleSlugs: getSlugVariations(slug) }
      )
      .then((res) => (res?.page ? { ...res.page, slug } : undefined));
  }

  if (!data?._type === "page") {
    return console.log("Page not found");
  }

  return {
    props: data || {},
  };
};

const LandingPage = (props) => {
  const { title = "Not found", content = [] } = props;

  return (
    <div sx={{ variant: "layout.row" }}>
      {content && (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
        >
          <h2>{title}</h2>
          <RenderSections sections={content} />
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;
