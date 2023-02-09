export type CertificationProps = {
  institution: {
    name: string;
    logoUrl: string;
  };
  certification: string;
  dateReceived: string;
  description: string | string[];
};

const Certification = (props: CertificationProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col items-start print:flex-row print:items-center sm:flex-row sm:items-center">
        <div className="flex flex-none flex-row items-center">
          <img
            src={props.institution.logoUrl}
            className="w-12 rounded-full border border-solid border-gray-200 "
          />
          <div className="ml-6">
            <h3 className="text-xl font-bold leading-5">
              {props.institution.name}
            </h3>
            <p className="text-lg font-medium">{props.certification}</p>
          </div>
        </div>
        <div className="flex-grow">
          <p className="ml-[4.5rem] mt-2 text-left italic text-gray-400 print:mt-0 print:text-right sm:mt-0 sm:ml-0 sm:text-right">
            {props.dateReceived}
          </p>
        </div>
      </div>
      <div className="ml-[4.5rem] mt-2">
        {typeof props.description === "string" ? (
          <p className="text-justify">{props.description}</p>
        ) : (
          <ul className="ml-7 list-outside list-disc">
            {props.description.map((x) => (
              <li key={x} className="text-justify">
                {x}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Certification;
