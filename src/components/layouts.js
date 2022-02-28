import { BaseStyles } from "theme-ui";
import Nav from "./nav";
// import footer from "./footer";

export default function Layout({ children }) {
  return (
    <BaseStyles>
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </BaseStyles>
  );
}
