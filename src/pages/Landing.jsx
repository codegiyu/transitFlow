import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../layout/Layout";
import Hero from "../sections/Hero";
import Blog from "../sections/Blog";

const Landing = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <Blog />
      </ErrorBoundary>
    </Layout>
  );
}

export default Landing;