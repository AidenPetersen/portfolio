import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const SGPProject = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>Simple Graphics Processing Unit</h1>
      <p>Currently a work in progress (it will get done since it's coursework).</p>

    </div>
    <Footer />
  </div>
);

export default SGPProject;
