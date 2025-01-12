import ContactSection from "../components/Contact/ContactSection";
import Card from "../components/Democards/Card";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/ProBanner/Banner";
import Slider from "../components/Slider/Slider";
import Trusted from "../components/Trusted/Trusted";

export default function Home() {
  return (
    <>
      <Header />
      <Card />
      <Slider />
      <Banner />
      <Trusted />
      <ContactSection />
      <Footer />
    </>
  );
}
