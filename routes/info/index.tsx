import Menu from "../../components/menu.tsx";
import Text from "../../components/info/text.tsx";

import Footer from "../../components/footer.tsx";
import MoreInfo from "../../components/info/moreinfo.tsx";

import Link from "../../components/info/link.tsx";

const Index = () => {
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
      <Menu />
      <MoreInfo />
      <Text label="Goals" text="asdasd"/>
      <Text label="Interests" text="asdasd"/>
      <Link label="Reflection" dest="/info/ethics" icon="/vectors/reflect.svg"/>
      <Link label="Ethics" dest="/info/reflection" icon="/vectors/document.svg"/>
      <Footer />
    </div>
  );
};

export default Index;
