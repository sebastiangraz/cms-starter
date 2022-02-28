import Layout from "../components/layouts";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;
