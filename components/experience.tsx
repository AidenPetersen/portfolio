const Milestone = (
  props: { name: string; role: string; tasks: string[]; date: string },
) => (
  <div>
    <div class="flex justify-between md:flex-col">
      <div class="md:order-2">
        <h4>{props.name}</h4>
        <h5>{props.role}</h5>
        <ul>
          {props.tasks.map((item: string) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <p class="flex-shrink-0 md:order-1 md:mb-0.2">{props.date}</p>
    </div>
  </div>
);
const Experience = () => (
  <>
    <h3>Experience</h3>
    <div class="space-y-3 lg:space-y-2">
      <Milestone
        name="Iowa State University"
        role="Undergrad Research Assistant"
        tasks={["Assisted in research involving Spectre"]}
        date="Jan. 2023 - Present"
      />
      <Milestone
        name="Iowa State University"
        role="Computer Organization Teaching Assistant"
        tasks={["Helped students understand Computer Organization"]}
        date="Aug. 2022 - Dec. 2022"
      />
      <Milestone
        name="Bio::Neos"
        role="Software Engineering Intern"
        tasks={[
          "Simulated DNA sequencing",
          "Full stack development in Node.js and Drupal systems",
          "Utilized dev-ops tools including Docker and AWS",
        ]}
        date="May. 2022 - Aug. 2022"
      />
      <Milestone
        name="ISU WebDev"
        role="Software Engineer"
        tasks={[
          "Developed Laravel Sites for ISU IT Services",
          "Contributed to internal Laravel libraries",
        ]}
        date="May. 2021 - May. 2022"
      />
    </div>
  </>
);
export default Experience;
