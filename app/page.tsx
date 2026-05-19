import Cover from "@components/home-page/cover";
import About from "./components/home-page/about";
import Contact from "./components/home-page/contact";
import Timeline from "./components/home-page/timeline";
import Publications from "./components/home-page/publications";

export default function Home() {
  return (
    <>
      <Cover />
      <About />
      <Timeline />
      <Publications />
      <Contact />
    </>
  );
}
