import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const MIPSProcProject = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>Pipelined MIPS Processor</h1>
      <h2>Description</h2>
      <p>
        This was a class project for CprE 381: Computer Organization and
        Assembly. We implemented a 5 stage pipelined MIPS processor using
        structural VHDL. I worked in a group of 2 people, and we implemented
        almost all of the MIPS base ISA. I ended up enjoying CprE 381 so much
        that I ended up being a TA for it the next semester.
      </p>
      <img width="600" src="/projects/pipeline.jpg" />
      <h2>Skills</h2>
      <p>
        This project was my first introduction to VHDL. I also learned a lot
        about CPU architecture for this project.
      </p>
      <h2>Resources Used</h2>
      <p>
        Most of resources used came from the class's content and teaching assistants.
      </p>
      <h2>My Role</h2>
      <p>
        Since this was a group project, me and my partner split the work. I
        worked primarily on the design and testing of the ALU, along with the
        forwarding unit to avoid data hazards and to speed up the processor.
      </p>
    </div>
    <Footer />
  </div>
);

export default MIPSProcProject;
