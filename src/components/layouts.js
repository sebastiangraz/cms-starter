import { BaseStyles } from "theme-ui";
import Nav from "./nav";
// import footer from "./footer";

const Layout = ({ children }) => {
  return (
    <BaseStyles>
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </BaseStyles>
  );
};

export default Layout;
