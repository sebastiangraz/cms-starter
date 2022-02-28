import Link from "next/link";
import groq from "groq";
import client from "../client";

const style = {
  navStyle: {
    borderBottom: "1px solid",
  },
  navWrapper: {
    variant: "layout.row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 8,
  },
  linkGroup: {
    "> * + *": {
      pl: 3,
    },
  },
};

const Nav = ({ posts }) => {
  return (
    <nav sx={style.navStyle}>
      <div sx={style.navWrapper}>
        <Link href="/">Logo</Link>
        <div sx={style.linkGroup}>
          {JSON.stringify(posts, 2, null)}
          {/* {pages.length > 0 &&
            pages.map(
              ({ _id, slug = "", title = "" }) =>
                slug && (
                  <li key={_id}>
                    <Link href="[slug]" as={`/${slug.current}`}>
                      {slug.current}
                    </Link>
                  </li>
                )
            )} */}
          {/* <Link href="/">Home</Link>
          <Link href="/about">About</Link> */}
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </nav>
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

export default Nav;
