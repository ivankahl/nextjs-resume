import ExperienceItem, {
  ExperienceItemProps,
} from "../molecules/ExperienceItem";
import Section from "../molecules/Section";

export type ExperienceProps = {
  companies: ExperienceItemProps[];
};

const Experience = (props: ExperienceProps) => {
  return (
    <Section title="Experience">
      {props.companies.map((x, i) => (
        <ExperienceItem
          key={i}
          companyUrl={x.companyUrl}
          companyLogoUrl={x.companyLogoUrl}
          companyName={x.companyName}
          positions={x.positions}
        ></ExperienceItem>
      ))}
    </Section>
  );
};

export default Experience;
