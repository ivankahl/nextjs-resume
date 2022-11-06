export type SectionProps = {
  title: string;
  children?: any;
};

const Section = (props: SectionProps) => {
  return (
    <section className="mt-6 mb-4">
      <h2 className="mb-4 text-3xl font-bold">{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
