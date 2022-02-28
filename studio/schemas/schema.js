import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import post from "./post";
import blockContent from "./blockContent";
import route from "./route";
import page from "./page";
import heroSection from "./sections/heroSection";
import textSection from "./sections/textSection";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    post,
    blockContent,
    route,
    page,
    heroSection,
    textSection,
  ]),
});
