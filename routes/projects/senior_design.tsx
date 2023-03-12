import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const SeniorDesignProject = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>Senior Design</h1>
      <h2>Description</h2>
      <p>
        This project is still a work in progress, but we are trying to design
        and fabricate a ReRAM crossbar that can be used for in memory multiply
        and accumulate operations. We will create a MPW submission to eFabless,
        and hopefully we will be chosen to have our project fabricated.
      </p>
      <h2>My Role</h2>
      <p>
        For this project I am the digital designer. All of my other team members
        are Electrical Engineers focusing on VLSI, but I am the only person on
        the team experienced with digital design, which is necessary for this
        project.
      </p>
      <h2>Skills</h2>
      <p>
        This project is my first time fabricating anything. I needed to learn a
        lot of the open source toolflows that eFabless provided for this
        application. I also needed to learn some of the basics of analog design
        because of mixed-signal circuitry that is required for this project.
        Additionally I needed a strong C and devops to be successful, since I am
        the only person on my team proficient in software engineering, and
        proper project management isnecessary.
      </p>
      <h2>Supporting Documents</h2>
      <p>
        Here is a link to our team's website which contains all of the resources
        we've used, along with our final results:
      </p>
      <a href="https://sddec23-08.sd.ece.iastate.edu/">
        https://sddec23-08.sd.ece.iastate.edu/
      </a>
      <h2>Big Picture Contribution</h2>
      <p>
        The primary purpose of this project is to contribute to ReRAM research
        being done by Professor Cheng Wang, but ReRAM is a promising technology
        that has a lot of potential compared to traditional SRAM and DRAM,
        making it important to research to improve future computers.
      </p>
    </div>
    <Footer />
  </div>
);

export default SeniorDesignProject;
