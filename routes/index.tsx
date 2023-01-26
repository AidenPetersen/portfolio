import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";
import Experience from "../components/experience.tsx";
import Skills from "../components/skills.tsx";
import Projects from "../components/projects.tsx";
import Footer from "../components/footer.tsx";


const Index = () => {
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
      <Menu/>
      <Me/>
      <Education/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
};

export default Index;