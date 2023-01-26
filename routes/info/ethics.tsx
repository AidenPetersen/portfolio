import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const Reflection = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>Ethics</h1>
      <p>Here is the ethics....</p>

    </div>
    <Footer />
  </div>
);

export default Reflection;
