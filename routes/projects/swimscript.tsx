import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const SwimscriptProject = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>Swimscript</h1>
      <h2>Description</h2>
      <p>
        Swimscript is an idea for a domain specific language meant to write swim
        practices. It has a parser which converts it to an intermediate representation(IR)
        which can later be turned into a physical document that swimmers can read. 
        Currently the parser and IR is functional, but a backend
        to convert the IR into a LaTeX is planned.
      </p>
      <p>Here is a link to the project: <a href="https://github.com/AidenPetersen/swimscript">https://github.com/AidenPetersen/swimscript</a></p>
      <h2>Skills</h2>
      <p>
        This project is written in Rust using the Nom parser. I gained skills in using parser combinators,
        which are a way to easily compose complex parsers using smaller combinator building blocks. I also
        became more proficient using the Rust programming language.
      </p>
      <h2>Resources Used</h2>
      <p>
        I primarily used the documentation for Rust and Nom for this project:
      </p>
      <ul>
        <li><a href="https://doc.rust-lang.org/stable/book/">Rust</a></li>
        <li><a href="https://docs.rs/nom/latest/nom/">Nom</a></li>
      </ul>
      <h2>My Role</h2>
      <p>
        Swim script has been written entirely by me, and it was though of by myself and some friends on the Swim Club at Iowa State University.
      </p>
    </div>
    <Footer />
  </div>
);

export default SwimscriptProject;
