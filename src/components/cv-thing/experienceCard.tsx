import clsx from "clsx";
export const experienceCard = ({
  section,
  title,
  company,
  time,
  location,
  description,
  modules,
  activity,
}: {
  section: string;
  title: string;
  company: string;
  time: string;
  location: string;
  description: string[];
  modules: string[];
  activity: string[];
}) => {
  return (
    <div className={clsx("flex flex-col gap-4 px-2 py-4 last:sm:mb-53")}>
      <div className=" sm:text-end text-start">
        <h3 className="font-mono font-semibold text-md text-slate-100">
          {title}
        </h3>
        <p className="text-sm text-slate-200">{location}</p>
        <p className="text-sm text-slate-300">{time}</p>
      </div>
      <div className=" ml-0 space-y-1 sm:ml-2">
        <h3 className="font-mono font-bold text-md text-slate-100">
          {company}
        </h3>
        <div>
          {description && (
            <>
              <h5 className="text-sm italic font-semibold text-slate-300">
                Description
              </h5>
              <ul className="space-y-1 text-slate-200">
                {description.map((res, index) => (
                  <li key={index} className="text-xs">
                    {res}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div>
          {modules && (
            <>
              <h5 className="text-sm italic font-semibold text-slate-300">
                Modules
              </h5>
              <ul className="flex flex-wrap text-slate-200">
                {modules.map((res, index) => (
                  <li key={index} className="text-xs">
                    {res} |{" "}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div>
          {activity && (
            <>
              <h5 className="text-sm italic font-semibold text-slate-300">
                Activities
              </h5>
              <ul className="space-y-1 text-slate-200">
                {activity.map((res, index) => (
                  <li key={index} className="text-xs">
                    {res}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
