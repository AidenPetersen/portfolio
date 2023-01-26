const Milestone = (
  props: { title: string; date: string; details: string[] },
) => (
  <div>
    <div class="flex justify-between md:flex-col">
      <h4 class="md:order-2">{props.title}</h4>
      <p class="md:order-1 md:mb-0.2">{props.date}</p>
    </div>
    {props.details.map((item: string) => (
      <p class="whitespace-pre-wrap">{item}</p>
    ))}
  </div>
);
const Education = () => (
  <>
    <h3>Education</h3>
    <div class="space-y-3 lg:space-y-2">
      <Milestone
        title="Iowa State University | B. Sc. Computer Engineering"
        date="Aug. 2020 - Dec 2023"
        details={[
          "Bachelor of Science",
          "Computer Engineering Major, Math Minor",
          "Focus: Computer Architecture",
        ]}
      />
    </div>
  </>
);
export default Education;
