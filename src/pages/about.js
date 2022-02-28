import groq from "groq";
import client from "../client";

const About = ({ about }) => {
  return (
    <div sx={{ variant: "layout.row" }}>
      <p>About</p>
      {JSON.stringify(about, null, 0)}
    </div>
  );
};

export async function getStaticProps() {
  const about = await client.fetch(groq`
      *[_type == "page"]
    `);
  return {
    props: {
      about,
    },
  };
}

export default About;
