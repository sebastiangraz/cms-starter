import Nav from "./nav";
// import footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
