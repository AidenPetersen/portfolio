const Section = (props: { title: string; skills: string[] }) => (
  <>
    <h4>{props.title}</h4>
    <div class="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-1 ">
      {props.skills.map((skill) => <p key={skill}>{skill}</p>)}
    </div>
  </>
);

const Skills = () => (
  <>
    <h3>Skills</h3>
    <div class="space-y-3">
      <Section
        title="Programming Languages"
        skills={[
          "C",
          "C++",
          "Verilog",
          "VHDL",
          "Haskell",
          "Java",
          "Rust",
          "Python",
        ]}
      />
      <Section
        title="miscellaneous"
        skills={[
          "Make",
          "Linux",
          "Chipyard",
          "Make",
          "Docker",
          "SQL",
          "Git",
          "Vivado",
          "Modelsim",
          "ARM",
          "RISC-V",
          "MIPS",
        ]}
      />
    </div>
  </>
);
export default Skills;
