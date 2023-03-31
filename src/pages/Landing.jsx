import ErrorBoundary from "../components/ErrorBoundary";
import Layout from "../layout/Layout";
import Hero from "../sections/Hero";
import Blog from "../sections/Blog";
import WhatWeDo from "../sections/WhatWeDo";
import Team from "../sections/Team";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import WhyUs from "../sections/WhyUs";

const Landing = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <WhatWeDo />
      </ErrorBoundary>
      <ErrorBoundary>
        <WhyUs />
      </ErrorBoundary>
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>
      <ErrorBoundary>
        <Team />
      </ErrorBoundary>
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
      <ErrorBoundary>
        <Blog />
      </ErrorBoundary>
    </Layout>
  );
}

export default Landing;