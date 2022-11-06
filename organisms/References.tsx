import Section from "../molecules/Section";

export type ReferencesProps = {
  emailAddress: string;
  subject: string;
  body: string;
};

const References = (props: ReferencesProps) => {
  return (
    <Section title="References">
      <p>
        References available{" "}
        <a
          className="underline"
          href={`mailto:${props.emailAddress}?subject=${encodeURIComponent(
            props.subject
          )}&body=${encodeURIComponent(props.body)}`}
        >
          on request
        </a>
        .
      </p>
    </Section>
  );
};

export default References;
