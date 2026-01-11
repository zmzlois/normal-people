import Balancer from 'react-wrap-balancer';

export const About = () => {
  return (
    <div id="about">
      <h2>ABOUT</h2>
      <Balancer className="text-slate-300 font-light tracking-wide leading-relaxed">
        How it all started? I had the courage to tackle a Python course offered
        by{' '}
        <a
          aria-label="ICMA Center at Henley Business School (Open in new tab)"
          title="ICMA Center at Henley Business School"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.icmacentre.ac.uk/study/masters/msc-behavioural-finance"
        >
          school
        </a>{' '}
        -- from mass scraping data from{' '}
        <a
          aria-label="U.S. Securities and Exchange Commission Search and Access Database (Open in new tab)"
          title="EDGAR"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.sec.gov/edgar/search-and-access"
        >
          EDGAR
        </a>{' '}
        for text-analysis to building machine learning models to predict oil
        prices. After thousands of documents ran through my fingers in a blink
        of an eye, I started to dive into web development. <br /> <br />
        Fast forward to today, I've helped and built{' '}
        <a
          href="https://comcord.vision"
          target="_blank"
          rel="noopener noreferrer"
          title="Comcord Vision"
          aria-label="Comcord Vision | The most ridiculous team collab tool ever created (Open in new tab)"
        >
          products for myself
        </a>{' '}
        and {' '}
        <a
          href="https://daytona.io"
          aria-label="Self-hostable Github Codespaces alternative | Daytona (Open in new tab)"
          target="_blank"
          title="Daytona"
          rel="noopener noreferrer"
        >
          devtool startups like{' '}
          <a
            href="https://daytona.io"
            aria-label="Self-hostable Github Codespaces alternative | Daytona (Open in new tab)"
            target="_blank"
            title="Daytona"
            rel="noopener noreferrer"
          >
            Daytona
          </a> and <a
            href="https://zephyr-cloud.io"
            aria-label="Orchestration platform for micro-frontend deployment."
            target="_blank"
            title="Zephyr Cloud"
            rel="noopener noreferrer"
          >
            Zephyr
          </a>
        </a>
        . <br />I also sign small angel
        checks to early-stage startups focusing on Infra and AI. You can email
        me at{' '}
        <a
          href="mailto:lois@normal-people.com"
          aria-label="zmzlois email"
          target="_blank"
          title="email"
          rel="noopener noreferrer"
        >
          lois@normal-people.com
        </a>
        . If I didn't respond to you, chances are I missed it or your email went
        into spam box as I try to get back to everyone. You can send it again
        but I guess the fastest way to reach me is on{' '}
        <a
          href="https://x.com/zmzlois"
          aria-label="zmzlois Twitter"
          target="_blank"
          title="Twitter"
          rel="noopener noreferrer"
        >
          twitter
        </a>
        .
      </Balancer>
    </div>
  );
};
