type Position = {
  role: string;
  startDate: string;
  endDate?: string;
  description: string | string[];
  skills?: string[];
};

export type ExperienceItemProps = {
  companyName: string;
  companyLogoUrl: string;
  companyUrl?: string;
  positions: Position[];
};

const ExperienceItem = (props: ExperienceItemProps) => {
  const singlePosition = props.positions.length === 1;

  return (
    <div className="mb-8 break-before-all">
      <div className="flex flex-col items-start print:flex-row print:items-center sm:flex-row sm:items-center">
        <div className="flex flex-none flex-row items-center">
          <img
            src={props.companyLogoUrl}
            className="w-12 rounded-full border border-solid border-gray-200"
          />
          <div className="ml-6 ">
            <h3 className="text-xl font-bold leading-5">
              {props.companyUrl ? (
                <a
                  href={props.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {props.companyName}
                </a>
              ) : (
                props.companyName
              )}
            </h3>
            {singlePosition ? (
              <p className="text-lg font-medium">{props.positions[0].role}</p>
            ) : null}
          </div>
        </div>
        <div className="flex-grow">
          {singlePosition ? (
            <p className="ml-[4.5rem] mt-2 text-left italic text-gray-400 print:mt-0 print:text-right sm:mt-0 sm:ml-0 sm:text-right">
              {props.positions[0].startDate} -{" "}
              {props.positions[0].endDate || "Present"}
            </p>
          ) : null}
        </div>
      </div>
      {singlePosition ? (
        <div className="ml-[4.5rem] mt-2">
          {typeof props.positions[0].description === "string" ? (
            props.positions[0].description.split("\n").map((y) => (
              <p className="mb-3 text-justify" key={y}>
                {y}
              </p>
            ))
          ) : (
            <ul className="ml-7 mb-3 list-outside list-disc">
              {props.positions[0].description.map((x) => (
                <li key={x} className="text-justify">
                  {x}
                </li>
              ))}
            </ul>
          )}
          {props.positions[0].skills ? (
            <p className="mb-3">
              <span className="font-bold">Skills: </span>
              {props.positions[0].skills.map((s) => (
                <div
                  key={s}
                  className="mx-1 mb-1 inline-block rounded-full bg-gray-100 px-2 py-1 text-sm"
                >
                  {s}
                </div>
              ))}
            </p>
          ) : null}
        </div>
      ) : (
        <div>
          {props.positions.map((x, i) => (
            <div key={i} className={`${i === 0 ? "mt-4" : ""}`}>
              <div className="flex flex-row">
                <div className="flex w-12 flex-none flex-col items-center">
                  <div className="mt-0.5 block h-5 w-5 flex-none rounded-full border-4 border-solid border-white bg-gray-300"></div>
                  {i < props.positions.length - 1 ? (
                    <div className="h-max w-[2px] flex-grow bg-gray-300"></div>
                  ) : null}
                </div>
                <div className="mb-2 ml-6 flex-grow">
                  <div className="mb-2 flex flex-col print:flex-row sm:flex-row">
                    <p className="flex-none text-lg font-medium">{x.role}</p>
                    <p className="mt-2 flex-grow text-left italic text-gray-400 print:mt-0 print:text-right sm:mt-0 sm:ml-0 sm:text-right">
                      {x.startDate} - {x.endDate || "Present"}
                    </p>
                  </div>
                  {typeof x.description === "string" ? (
                    x.description.split("\n").map((y) => (
                      <p className="mb-3 text-justify" key={y}>
                        {y}
                      </p>
                    ))
                  ) : (
                    <ul className="ml-7 mb-3 list-outside list-disc">
                      {x.description.map((y) => (
                        <li key={y} className="text-justify">
                          {y}
                        </li>
                      ))}
                    </ul>
                  )}
                  {x.skills ? (
                    <p className="mb-3">
                      <span className="font-bold">Skills: </span>
                      {x.skills.map((s) => (
                        <div
                          key={s}
                          className="mx-1 mb-1 inline-block rounded-full bg-gray-100 px-2 py-1 text-sm"
                        >
                          {s}
                        </div>
                      ))}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
