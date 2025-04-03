import Image from "next/image";
import Navbar from "./components/Navbar";
import RandomMotion from "./components/RandomMotion";
import CustomCursor from "./components/CustomCursor";
import Index from "./components/Index";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialSidebar from "./components/SocialSidebar";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Custom Cursor */}
      {/* <CustomCursor />
       */}
      {/* Navbar */}
      <Navbar />

      {/* Floating Random Motion Element (Background) */}
      {/* <div className="absolute -z-10 inset-0 min-h-full">
        <RandomMotion />
      </div> */}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Index />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center ">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center ">
        <Skills />
      </section >

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center ">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>

      {/* Social Sidebar */}
      <div className="fixed bottom-5 left-5 flex flex-col items-center space-y-4 z-50">
        <SocialSidebar/>
      </div>

    </div>
  );
}
