export default function ProjectHeader() {
  return (
    <div className="px-8 md:px-14">
      <span className="flex">
        <h1>Cabinet of experiments</h1>
      </span>
      <h3>
        Inspired by{" "}
        <a
          className="cloud"
          href="https://bedes.qui.gg/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Igor Bedesqui"
        >
          Igor
        </a>
        ,{" "}
        <a
          href="https://uilabs.dev"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Mariana Castillo"
          className="cloud"
        >
          Mariana
        </a>
        ,{" "}
        <a
          className="cloud"
          href="https://emilkowal.ski/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Emil Kowalski"
        >
          Emil
        </a>
        ,{" "}
        <a className="cloud" href="https://rauno.me" target="_blank">
          Rauno
        </a>{" "}
        and many others.
      </h3>
    </div>
  );
}
