import Link from "next/link";
import groq from "groq";
import client from "../client";

const Blog = ({ posts }) => {
  return (
    <div sx={{ variant: "layout.row" }}>
      <h1>Blog</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", publishedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  {title}
                </Link>{" "}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
