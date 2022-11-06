import Section from "../molecules/Section";

export type SummaryProps = {
  children: string;
};

const Summary = (props: SummaryProps) => {
  return (
    <Section title="Summary">
      <p className="text-justify">{props.children}</p>
    </Section>
  );
};

export default Summary;
