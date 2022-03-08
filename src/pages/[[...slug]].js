import React from "react";
import groq from "groq";
import client from "../client";
import RenderSections from "../components/RenderSections";
import { getSlugVariations, slugParamToPath } from "../utils/urls";

const pageFragment = groq`
...,
content[] {
  ...
}`;

export const getServerSideProps = async ({ params }) => {
  const slug = slugParamToPath(params?.slug);

  let data;

  if (slug === "/") {
    data = await client
      .fetch(
        groq`*[_type == "route" && slug.current in $possibleSlugs][0]{
        page-> {
          ${pageFragment}
        }
      }`,
        { possibleSlugs: getSlugVariations(slug) }
      )
      .then((res) => (res?.page ? { ...res.page, slug } : undefined));
  } else {
    data = await client
      .fetch(
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
        <div>
          <h2>{title}</h2>
          <RenderSections sections={content} />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
