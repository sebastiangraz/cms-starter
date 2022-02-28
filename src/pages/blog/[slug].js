/** @jsxImportSource theme-ui */

import client from "../../client.js";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          style={{ width: 400 }}
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(800).fit("clip").auto("format")}
        />
      );
    },
  },
};

const Post = ({ post }) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
  } = post;
  return (
    <div sx={{ variant: "layout.row" }}>
      <article>
        <h1>{post?.title}</h1>
        <PortableText value={body} components={ptComponents} />
      </article>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
}

export default Post;
