// Construct our "page" GROQ
const page = `
  "type": _type,
  "slug": slug.current,
`;

export const blog = `
*[_type == "post" && publishedAt < now()] | order(publishedAt desc)
`;
