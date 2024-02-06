import Balancer from "react-wrap-balancer";

export const About = () => {
  return (
    <div className="sm:py-14" id="about">
      <h2>ABOUT</h2>
      <Balancer className="text-slate-300 font-light tracking-wide leading-relaxed">
        How it all started? I had the courage to tackle a Python course offered
        by{" "}
        <a
          aria-label="ICMA Center at Henley Business School (Open in new tab)"
          title="ICMA Center at Henley Business School"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.icmacentre.ac.uk/study/masters/msc-behavioural-finance"
        >
          school
        </a>{" "}
        -- from mass scraping data from{" "}
        <a
          aria-label="U.S. Securities and Exchange Commission Search and Access Database (Open in new tab)"
          title="EDGAR"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.sec.gov/edgar/search-and-access"
        >
          EDGAR
        </a>{" "}
        for text-analysis to building machine learning models to predict oil
        prices. After thousands of documents ran through my fingers in a blink
        of an eye, I started to dive into web development. <br /> <br />
        Fast forward to today, I've helped build{" "}
        <a
          href="https://comcord.vision"
          target="_blank"
          rel="noopener noreferrer"
          title="Comcord Vision"
          aria-label="Comcord Vision | The most ridiculous team collab tool ever created (Open in new tab)"
        >
          products for myself
        </a>{" "}
        and a{" "}
        <a
          href="https://daytona.io"
          aria-label="Self-hostable Github Codespaces alternative | Daytona (Open in new tab)"
          target="_blank"
          title="Daytona"
          rel="noopener noreferrer"
        >
          devtool startup
        </a>
        , where I advanced my skill from frontend, database to documentation,
        vitual machines, CI/CD and DevOps. <br /> <br />
        At the moment, I am looking for a new opportunity to work with a team in
        London, where I can share my knowledge and learn from others in a
        preferrably hybrid setting.
      </Balancer>
    </div>
  );
};
