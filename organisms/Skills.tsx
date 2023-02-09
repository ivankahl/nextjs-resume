import Section from "../molecules/Section";

export type SkillsProps = {
  technicalSkills: string[];
  softSkills: string[];
};

const Skills = (props: SkillsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 print:grid-cols-2 sm:grid-cols-2">
      <Section title="Technical Skills">
        <ul className="ml-7 list-outside list-disc">
          {props.technicalSkills.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>
      <Section title="Soft Skills">
        <ul className="ml-7 list-outside list-disc">
          {props.softSkills.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default Skills;
