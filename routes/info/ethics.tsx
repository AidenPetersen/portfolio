import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const Reflection = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>Ethics</h1>
      <p>
        One of the most important parts of being an engineer is ensuring that
        you are ethical. A code of ethics helps ensure that you produce safe
        products that positively affect the world. Computer engineering has some
        specific requirements for ethics that other fields don't need to deal
        with, such as the reliability of the code.
      </p>
      <p>
        In computer engineering, one major ethical obligation is the reliability
        of code. When working with low-level code and hardware, the product must
        keep working, especially for systems that demand high reliability, such
        as vehicles. If anything were to fail, it could lead to death in these
        situations. These situations are why computer engineers must uphold the
        safety and welfare of the public. We need to produce reliable and secure
        systems to ensure that we are unable to harm people. Examples of these
        systems would be airplanes, cars, and telephone systems. If a large
        vehicle like an airplane or car were to become non-operational at high
        speeds, this could lead to the death of the passengers. And for
        communication systems, this could prevent emergency calls from going
        through, preventing a person from being saved. These situations are why
        it's necessary to follow development practices that strive to uphold the
        public's welfare.
      </p>
      <p>
        One example where IEEE's violated these codes of ethics was the
        Volkswagen emissions scandal in 2015. Volkswagen had software in their
        cars to detect if the car was being tested and then changed how much the
        cars emitted. The primary competing interests here are the profit that
        Volkswagen would get by being able to market a high fuel economy and the
        legality and ethics of polluting the air more. Besides violating the
        law, excessive pollution also can harm public welfare. To not violate
        ethical codes, an engineer along the chain of command should have
        refused to implement this feature into Volkswagen's cars. No one ever
        took the responsibility to point this issue out, so the feature got
        implemented regardless.
      </p>
      <p>
        The previous example was pretty simple in who was right and who was
        wrong, but there are also situations where there are multiple
        conflicting ethical principles that are more difficult to navigate. One
        example of this is the emergence of social media. There are aspects of
        social media that damage public welfare and health, such as its
        potential to diminish mental health due to the constant comparison to
        others and sleep disturbance from the presence of blue light. There are
        also benefits to this technology, though; increasing communications
        between people worldwide could potentially be beneficial to society.
        It's hard to determine what is more beneficial, but in the end, I think
        the ability to quickly communicate with and entertainment outweighs the
        potential cons of social media.
      </p>
      <p>
        Now to reflect on some of my ethical values and how they relate to the
        Volkswagen incident. I strongly value responsibility. If Volkswagen had
        been more responsible, they wouldn't have modified their cars like that.
        They would have realized that what they were doing was harming others;
        they ceased that behavior. Honesty is also a very important virtue. If
        Volkswagen valued honesty more, they might not have engaged in this
        behavior, as they are lying to both their customers and the government.
        Fidelity is another valuable virtue. If Volkswagen had been more
        faithful to their clients and their industry, they would not have
        betrayed the trust of their clients and their industry as a whole. These
        are the most important virtues relating to Volkswagen since they
        emphasize doing the bare minimum to be ethical. Other virtues like
        charity and self-discipline apply more to an individual instead of a
        company as a whole.
      </p>
    </div>
    <Footer />
  </div>
);

export default Reflection;
