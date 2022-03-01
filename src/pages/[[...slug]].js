import groq from "groq";
import client from "../client";
import RenderSections from "../components/RenderSections";
import { getSlugVariations, slugParamToPath } from "../utils/urls";

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
        groq`
        *[_id == "global-config"][0]{
          frontpage -> {
            ${pageFragment}
          }
        }
      `
      )
      .then((res) => (res?.frontpage ? { ...res.frontpage, slug } : undefined));
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
  const { title = "Missing title", content = [] } = props;

  return (
    <div sx={{ variant: "layout.row" }}>
      {content && (
        <>
          <h2>{title}</h2>
          <RenderSections sections={content} />
        </>
      )}
    </div>
  );
};

export default LandingPage;
