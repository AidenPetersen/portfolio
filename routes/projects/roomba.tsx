import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const RoombaProject = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>Pipelined MIPS Processor</h1>
      <h2>Description</h2>
      <p>
        This project was the final project for the class CprE 288: Embedded
        Systems. We interacted with a Rooma using the Tiva TM4C123GH6PM
        Microcontroller. We added several components to it that we programmed
        using the GPIO on the MCU to interact with them. These components
        included
      </p>
      <ul>
        <li>Ping Sensor</li>
        <li>Bump Sensor</li>
        <li>Infrared Sensor</li>
        <li>Servo</li>
        <li>Cliff Sensor</li>
        <li>Wheels</li>
      </ul>
      <p>
        We successfully completed the task of manually navigating the Roomba
        between three small pillars, only using the previous sensors.
      </p>
      <img width="500" src="roomba.jpg" />
      <h2>Skills</h2>
      <p>
        This project was my first introduction to embedded C. It also required a
        datasheet reading in order to utilize all of the memory mapped
        registers, which I had never done in the past.
      </p>
      <h2>Resources Used</h2>
      <p>
        Most of resources used came from the class's content, teaching
        assistants, and TM4C123GH6PM datasheet
      </p>
      <h2>My Role</h2>
      <p>
        I did almost all of the work involved in this project.
      </p>
    </div>
    <Footer />
  </div>
);

export default RoombaProject;
