import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const ReflectionGenEd = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>General Education Reflection</h1>
      <p>
        Throughout my time as a student at Iowa State, I have learned a lot in
        the field of computer engineering, but I also took general education
        courses outside of my major, which allowed me to break up my engineering
        courses with other perspectives that diversified my knowledge. These
        courses challenged me in different ways than computer engineering and
        introduced me to more perspectives in the classroom.
      </p>
      <p>
        In ECON: 321 Economics of Discriminations, I learned more rigorous
        economics than the basics taught in entry-level micro and
        macroeconomics. This class taught us to think about externalities often
        ignored in economics. This class taught us why discrimination was
        present in past economies and still present in modern economies.
        Understanding the motivations behind discriminators allows us to enact
        certain policies to prevent discrimination in the future. These skills
        aren't just relevant to economics and improving diversity and inclusion
        in the workplace.
      </p>
      <p>
        I also learned about international political perspectives in POLS 241:
        Introduction to Comparative Politics and RUS 375: Russia Today. These
        classes helped explain international perspectives and how different
        countries differ from our own. These skills are useful to have as our
        world becomes more interconnected. Understanding other people's cultures
        are beneficial to provide inclusive environments to people whose
        cultures and backgrounds may differ from ours.
      </p>
      <p>
        I appreciate Iowa State's general education program in the ECpE
        department. It allowed us to have a wider breadth of knowledge, which is
        important for becoming well-rounded. My general education classes also
        introduced me to many different perspectives I wouldn't have gained
        without them.
      </p>
    </div>
    <Footer />
  </div>
);

export default ReflectionGenEd;
