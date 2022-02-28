import Link from "next/link";
import groq from "groq";
import client from "../client";

const Index = ({ posts }) => {
  return (
    <div sx={{ variant: "layout.row" }}>
      {posts.length > 0 &&
        posts.map(
          ({ _id, slug = "", title = "" }) =>
            slug && <li key={_id}>{slug.current}</li>
        )}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "route"]
    `);
  return {
    props: {
      posts,
    },
  };
}

// export async function getStaticPaths() {
//   const pageQueries = await client.fetch(
//     groq`*[_type in ["homePage", "page", "article"] && defined(slug.current)][].slug.current`
//   );

//   // Split the slug strings to arrays (as required by Next.js)
//   const paths = pageQueries.map((slug) => ({
//     params: { slug: slug.split("/").filter((p) => p) },
//   }));

//   return { paths };
// }

export default Index;
