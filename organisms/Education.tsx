import Certification, { CertificationProps } from "../molecules/Certification";
import Section from "../molecules/Section";

export type EducationProps = {
  certifications: CertificationProps[];
};

const Education = (props: EducationProps) => {
  return (
    <Section title="Education">
      {props.certifications.map((x, i) => (
        <Certification
          key={i}
          certification={x.certification}
          description={x.description}
          dateReceived={x.dateReceived}
          institution={x.institution}
        />
      ))}
    </Section>
  );
};

export default Education;
