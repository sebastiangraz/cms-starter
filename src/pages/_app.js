import Layout from "../components/layout";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.router} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;
