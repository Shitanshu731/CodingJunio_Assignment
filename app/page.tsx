import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import Page5 from "@/components/Page5";
import Page6 from "@/components/Page6";
import Page7 from "@/components/Page7";
import Register from "@/components/Register";
import Remarks from "@/components/Remarks";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Page2 />
      <Page3 />
      <Page4 />
      <Offerings />
      <Remarks />
      <Page5 />
      <Page6 />
      <Page7 />
      <Register />
      <Footer />
    </div>
  );
}
