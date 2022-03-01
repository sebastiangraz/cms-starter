import Layout from "../components/layouts";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => {
  console.log(router.pathname);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;
