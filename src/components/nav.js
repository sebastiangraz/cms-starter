import Link from "next/link";
import client from "../client";
import groq from "groq";
import React from "react";
import capitalizeString from "../utils/capitalizeString";
import { useRouter } from "next/router";

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

export function slugParamToPath(slugParam) {
  // Possible slug value types:
  const slug = Array.isArray(slugParam)
    ? // - ["multiple", "paths"]
      slugParam.join("/")
    : // - "single-path"
      slugParam ||
      // - undefined -> default to "/"
      "/";
  return slug;
}

const Nav = ({ navItems }) => {
  console.log(navItems);
  const [nav, setNav] = React.useState([]);
  const router = useRouter();
  React.useEffect(() => {
    const navItems = client.fetch(groq`*[_type == "route"]`);
    navItems.then((e) => {
      setNav(e);
    }, {});
  }, []); //might be infinite loop issue here

  return (
    <nav sx={style.navStyle}>
      <div sx={style.navWrapper}>
        <Link href="/">Logo</Link>
        <div sx={style.linkGroup}>
          {nav.map((e) => {
            const isActive =
              slugParamToPath(router.query.slug) === e.slug.current;

            return (
              <span
                key={e.slug.current}
                sx={{
                  ...(isActive && {
                    "&>a": {
                      pointerEvent: "none",
                      cursor: "default",
                      textDecoration: "none",
                    },
                  }),
                }}
              >
                {e.slug.current === "/" ? (
                  <Link href="/">Home</Link>
                ) : (
                  <Link key={e.slug.current} href={`/${e.slug.current}`}>
                    {capitalizeString(e.slug.current)}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export async function getStaticProps() {
  const navItems = await client.fetch(groq`*[_type == "route"]`);
  return {
    props: {
      navItems,
    },
  };
}

export default Nav;
