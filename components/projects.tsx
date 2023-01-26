const Project = (props: {
  link: string;
  name: string;
  technologies: string;
  from: string;
  to: string;
  matteo?: boolean;
}) => (
  <a href={props.link} rel="noopener" target="_blank">
    <div
      class={`rounded-xl p-0.3 h-full bg-gradient-to-r from-[${props.from}] to-[${props.to}] cursor-pointer transition-transform hover:scale-105`}
    >
      <div class="bg-gray rounded-lg p-2 text-center h-full">
        <h4>{props.name}</h4>
        <p>{props.technologies}</p>
      </div>
    </div>
  </a>
);

const Projects = () => (
  <>
    <h3>Projects</h3>
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-3">
      <Project
        link="/projects/test"
        name="Senior Design Project"
        technologies="TBD"
        from="#ffffff"
        to="#ffffff"
      />
      <Project
        link="/projects/test"
        name="Cryptographic Coprocessor"
        technologies="Verilog, Icarus Verilog, Make"
        from="#8D20B0"
        to="#1D6DDE"
      />
      <Project
        link="/projects/test"
        name="Pipelined MIPS Processor"
        technologies="VHDL, Modelsim, CPU Architecture"
        from="#00ff87"
        to="#60efff"
      />
      <Project
        link="/projects/test"
        name="CprE 480 Project"
        technologies="VHDL, Vivado, GPU Architecture"
        from="#ffffff"
        to="#ffffff"
      />
      <Project
        link="/projects/test"
        name="Roomba Navigation"
        technologies="C, Embedded Systems, Python"
        from="#313946"
        to="#3FAE4E"
      />
      <Project
        link="/projects/test"
        name="Swimscript Parser"
        technologies="Rust, Nom, Parser Combinator"
        from="#BD6E2E"
        to="#2E5CBD"
      />
    </div>
  </>
);

export default Projects;
