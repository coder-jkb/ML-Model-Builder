import Contact from "./components/Contact";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Step from "./components/Step";
import Team from "./components/Team";
export default function Index() {
  return (
    <>
      <Header />
      <hr />
      <Hero />
      <hr />
      <Step/>
      <hr />
      <Feature />
      <hr />
      <Team />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </>
  )
}