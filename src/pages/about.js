import groq from "groq";
import client from "../client";
import Link from "next/link";

const About = ({ navItems }) => {
  return (
    <div sx={{ variant: "layout.row" }}>
      <p>About</p>
      {navItems &&
        navItems.map((item) => {
          const { slug, title, _id } = item;
          return (
            <li key={_id}>
              <Link href={slug.current}>{slug.current}</Link>
            </li>
          );
        })}
    </div>
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

export default About;
