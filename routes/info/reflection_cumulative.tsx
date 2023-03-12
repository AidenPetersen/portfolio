import Menu from "../../components/menu.tsx";
import Footer from "../../components/footer.tsx";

const ReflectionGenEd = () => (
  <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1 gap-y-10 lg:gap-y-0">
    <Menu />

    <div class="space-y-2">
      <h1>Cumulative Reflection</h1>
      <p>
        My name is Aiden Petersen, and I’m a senior in Computer Engineering. I
        decided to attend Iowa State University because of its excellent
        engineering program. Throughout my time at Iowa State, I gained a lot of
        work experience in different areas to find what I’m truly passionate
        about, along with amazing communities in clubs, which have also led to
        leadership opportunities.
      </p>
      <p>
        While at Iowa State, I have found amazing communities that have helped
        me develop personally and professionally. Initially, one of the first
        clubs I joined was the Swim Club. Swim Club had many amazing people and
        allowed me to stay fit, which is useful for staying healthy. I was able
        to compete in US Masters College Club Swimming in 2022 in Atlanta, which
        was a great experience. I later became the president of the Swim Club,
        where I gained a lot of experience communicating and leading my board
        members to ensure that the Swim Club operates properly. Another
        extracurricular activity that benefited me was competitive programming
        with Professor Simanta Mitra. This experience cemented many of the
        advanced programming skills taught in other classes that I otherwise
        wouldn’t have been able to utilize. This opportunity immensely benefited
        me in many future computer science classes I had to take.
      </p>
      <p>
        I have also found many work experiences to discover where I truly
        enjoyed. After my freshman year, I got a position as a web developer for
        the IT services web development department. This was my first
        programming job, which provided me with tons of experience in
        programming. I continued with this job until the end of my sophomore
        year when I got an internship at Bio::Neos, where I did a lot more web
        development. After that internship, I discovered I didn’t enjoy web
        development very much. I enjoyed CprE 381: Computer Organization and
        Assembly, so I wanted to get into digital design and hardware. I decided
        to become a TA for CprE 381 which cemented many of my VHDL skills
        because I had to teach students how to use it. I was able to leverage
        this position to become a research assistant position with Professor
        Henry Duwe, which is what I’m doing right now and am currently enjoying.
        The TA position was also useful for getting me my first hardware
        engineering internship at IBM, which I will be working at in the summer
        of 2023.
      </p>
      <p>
        All of the work experiences I’ve had have shown me the importance of
        continuous learning. For example, when I worked at Iowa State ITS, I
        utilized the Laravel framework as a monolithic framework for full-stack
        development. Learning how to use Laravel taught me many of the basics of
        general web development and how to use Laravel. I later did more web
        development for Bio::Neos. Web development there used a completely
        different stack of frameworks. We had a split front and back end, unlike
        Laravel, which required me to learn how to use Express.js and Vue.js to
        adapt to these changes. The ability to learn and adapt quickly is an
        important skill in engineering, and I wouldn’t be able to be successful
        without that skill.
      </p>
      <p>
        One of my favorite parts of my time at Iowa State has been the Computer
        Engineering classes, specifically the core curriculum of CprE 281, CprE
        288, CprE 381, and CprE 308. These classes touch on vital aspects of how
        computers work in general. CprE 281 teaches you the basics of digital
        design, which CprE 381 later builds on to teach you the
        microarchitectural basics of how CPUs work. CprE 288 teaches you how to
        interact with CPUs and other devices at a low level, and CprE 308
        teaches you how large modern systems work on CPUS using operating
        systems. The exposure to a variety of concepts and the “full stack” of
        how a computer works are something I enjoyed. Large final projects also
        complement this general concept for each class, which allows students to
        fully understand what they are being taught by implementing it for
        themselves.
      </p>
      <p>
        My favorite example so far of a final project has been CprE 381. This
        class’s final project of creating a pipelined MIPS processor has proved
        incredibly valuable for me. It taught me the basics of CPUs and
        potential optimizations that could have been made to them. This class
        led me to dig deeper than strictly the class’s content by researching
        concepts such as out-of-order computing and cache coherency, which
        wouldn’t have been discovered if it wasn’t for this class and its final
        project. The CprE 381 final project was also an example of how the
        computer engineering curriculum encourages strong design skills. Because
        of the project’s complexity, it was almost necessary to plan it before.
        We had fully mapped out how each instruction correlated to control
        signals on the processor. To design this system, we had planned
        everything out but also consulted external resources to complete it,
        such as the Hennessy and Patterson Computer Architecture textbook, to
        fully understand how the system should work and the various features we
        had to implement. These features included data forwarding, pipeline
        flushing, and branch prediction.
      </p>
      <p>
        Overall I have enjoyed my college experience at Iowa State. It taught me
        the importance of self-learning. This was not a skill I had in high
        school, but university taught me how to pursue my interests and learn
        independently. I’ve also been able to achieve many career-related
        achievements and be a part of amazing communities.
      </p>
    </div>
    <Footer />
  </div>
);

export default ReflectionGenEd;
