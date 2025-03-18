import HorizontalScroll from "@/components/HorizontalScroll/horizontal";
import Contact from "@/components/Section/Contact";
import Footer from "@/components/Section/Footer";
import Skills from "@/components/Section/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
    <HorizontalScroll></HorizontalScroll>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}
