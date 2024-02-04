export const Companies: CompanyType[] = [
  {
    name: "Daytona.io",
    type: "DevTool Start Up",
    time: "2023.11 - Present",
    location: "Remote | Contract",
    slug: "https://daytona.io/", // find a way to put it. show you know how to learn to code. Primeagen: if you are an expert of a framework, you are not a good engineer. 
    // The job is to solve problems, regardless what tool you are using. Tech companies are very into details. Smaller companies/start ups are more into problem solving. Not someone who is "frontend", "backend", "cloud". But a general person knows everything. 
    title: "Community Manager", // show ansible, terraform, kubernetes, docker, linux: what you know. 
    description: "Self-hostable Github Codespaces alternative for enterprises.",
    // trash: I don't care about the context, I just want to know your responsibility. shrink the container, bigger text/font-xl, increase readability. 
    // be more intentional with your words. less shit. 
    context: "Responsible for the frontend and content of technical documentation, including but not limited in testing, growing and managing community. ",
    tags: ["Astro", "Alpine.js", "CSS", "Terraform", "Docker", "Virtual Machine", "Kubernetes"],
    responsibility: [
      "Identify the strength and ",
      "Documentation: https://github.com/daytonaio/docs",
      "Installer testing and rewrite: https://github.com/daytonaio/installer ",
      "Tooling: https://github.com/zmzlois/Docksible",
      "Growing and maintaining an engaging community."
    ],
    links: [
      {
        name: "Documentation",
        url: "https://github.com/daytonaio/docs",
        aria: "Technical documentation for Daytona.io, client facing",
        title: "Daytona.io documentation"
      },
      {
        name: "Testing",
        url: "https://github.com/daytonaio/installer",
        aria: "Testing shell script for user's installation and deployment",
        title: "Daytona installer shell script"
      },

    ]
  },
  {
    name: "Project Waitless",
    type: "Start Up",
    time: "2022.04 - 2023.11",
    location: "London, UK",
    slug: "https://projectwaitless.io/",
    title: "Founder",
    description: "Project Waitless is a tech start up that aims to improve operation efficiency for companies.",
    context: "After building products for hospitality industry to assist on inventory management, we realised there are more problems to solve in the start up landscape for sales, customer support and remote team collaboration. We soon pivoted to develop ComCord https://comcord.vision to help companies to manage their sales and customer support in one place.",
    responsibility: [
      // "Business development and outreach.",
      "Designed and implemented product frontend and database schema using Next.js v3 with server actions, TailwindCSS, tRPC and DrizzleORM",
      "Worked with one developer to build the MVP of ComCord for YC Application. An express app as a discord bot to manage cron job for company's team standup and daily internal report",
      "Deployed and orchestrated Kafka and Redis to enable an event driven architecture for better load balancing avoiding app crashing",
      "Designed multi-tenancy SaaS software architecture",

    ]
  },
  {
    name: "The Vulture Company",
    type: "Urban Planning Consultancy",
    time: "2019.09 - 2021.12",
    location: "Guangdong, China",
    title: "Co-Founder",
    description: "The Vulture Company is a boutique consultancy that provides urban planning, land surveying and design services for Chinese governments and real estate developers.",
    context: "Project includes transforming forestry land to maximise economic output and urban renewal of old waterway to improve city landscape and living standards.",
    responsibility: [
      "Responsible for project delivery and land surveying coordination.",
      "Screening and hiring of new employees.",
      "Sourced effective and efficient technology and planning methods for city gentrification and urban renewal.",
    ]
  },
  {
    name: "Knight Frank LLP",
    type: "Real Estate Consultancy",
    time: "2018.12 - 2019.09",
    location: "Shenzhen, China",
    title: "Management Trainee - Intern",
    description: "Knight Frank LLP is a global real estate consultancy firm that provides services in residential and commercial property markets, valuation, property management, research and consultancy.",
    context: "I was part of the management trainee program that rotated across different departments to gain a holistic understanding of the business. Clients includes TOSHIBA, Lenovo, Ebay, EPAM system, DJI and Kerry Holdings.",
    responsibility: [
      "Obtaining new clients by cold calling and networking.",
      "Assisted on key account management to increase client retainment and revenue.",
      "Conducting market research, market valuation and analysis.",
      "Recruited, trained and managed new recruits.",
    ]
  },
  {
    name: "HVS",
    type: "Gloabl Hospitality Consultancy",
    time: "2018.06 - 2018.12",
    location: "Shenzhen, China",
    title: "Research Intern",
    description: "HVS is a global hospitality consultancy firm that provides services in valuation, feasibility, operator search, investment consulting, asset management, property tax appeal and market research.",
    context: "Published and co-authored 'White Paper of Rental Apartment Industry in China' and 'Overview of Rental Apartments in the US'.",
    responsibility: [
      "Conducted market research and analysis.",
      "Analysing and translating English content including reports from Harvard Joint Center for Housing Studies, National Apartmnet Association and multiple media resrouces.",
      "Gathered data of 135 rental apartment operators in China and hotels by cold-calling and desk research in 4 consulting projects, from convention hall for Shenzhen government to 5-star hotel in Shanghai.",
    ]
  },
  {
    name: "Las Vegas Sands Corp.",
    type: "Integrated Resort and Casion",
    time: "2017.12 - 2018.06",
    location: "Macau SAR, China",
    title: "Intern",
    description: "Las Vegas Sands Corp. is an American casino and resort company based in Paradise, Nevada, United States.",
    context: "I was working in the Macau office as a part of the internship program.",
    responsibility: [
      "Assisted data scientists converting high value customers by Tensorflow in smart casino project.",
      "Managed, translate and proof read multiple social media platforms with 3 languages.",
      "Liaised with branding department, F&B department and external vendors to ensure smooth operation of media management.",
      "Increased cross-department communication efficiency on workflow design and task scheduling."
    ]
  },
  {
    name: "Sheraton Hotel",
    type: "Hotel",
    time: "2015.01 - 2015.06",
    location: "Shantou, China",
    title: "Room Service Intern",

  }
]
export interface CompanyType {

  name: string;
  type: string;
  time: string;
  location: string;
  slug?: string;
  title: string;
  description?: string;
  context?: string;
  tags?: string[];
  responsibility?: string[];
  links?: LinkType[];

}

export interface LinkType {
  name: string;
  url?: string;
  aria?: string;
  title?: string;
}



export const Volunteer: VolunteerType[] = [
  {
    name: "Reading React source code",
    type: "Open Source",
    time: "2023.12 - Present",
    location: "Everywhere",
    title: "Author | Translator",
    description: "Reading React source code is a project that aims to provide a comprehensive understanding of React.js and how a frontend framework was designed and developed.",
    context: "I did it for fun.",
    responsibility: ["Writing: https://github.com/zmzlois/reading-react"]
  },
  {
    name: "Data Science Speaker Club | QuantumBlack by Mckinsey & Company",
    type: "Non-profit",
    time: "2022.04 - Present",
    location: "London, UK",
    title: "Vice President of Public Relations",
    description: "Data Science Speaker Club is a non-profit organisation that aims to provide a platform for data science enthusiasts to practice public speaking and share their knowledge.",
    context: "I am responsible for the public relations of the club, including social media management, event planning and outreach.",
    responsibility: [
      "Handle press release and media presence.",
      "Collaborate and liaise with guest speakers and evaluators within techonology space for fornightly events.",
    ]
  },
  {
    name: "ByteDance Infrastructure Team",
    type: "Open Source",
    time: "2022.12 - Present",
    location: "Remote",
    title: "Contributor",
    description: "ByteDance Infrastructure Team aims to solve the problem of a big corporate by integrating great technologies in one tech stack to empower development, decrease mental overhead for developers across thousands of apps and codebase in a global team.",
    responsibility: [
      "Translate and proof read technical documentations related to build tool Rspack (Webpack rewritten in Rust), frontend framework Modern.js, built on top of React.js 18 from English to Chinese.",
    ]
  },
  {
    name: "ZenStack",
    type: "Open Source",
    time: "2023.04 - Present",
    location: "Remote",
    title: "Contributor",
    description: "ZenStack is a superset of Prisma to manage database schema and facilitate on faster full stack web development through code generation.",
    responsibility: [
      "Manage and maintain the documentation of ZenStack to improve readability and general understanding.",
    ]
  },
  {
    name: "OFund",
    type: "Charity",
    time: "2009.12 - Present",
    location: "Global, China",
    title: "Volunteer",
    description: "OFund is a non-profit organisation provide financial support for children in rural China to continue their education.",
    responsibility: [
      "Organised fundraising events and campaigns.",
      "Designed an occupation curriculum for disadvantaged children in rural area of China to learn about different occupations and career paths.",
      "Taught English and Mathematics to children.",
    ]
  },
  {
    name: "Best Buddies International",
    type: "Charity",
    time: "2015.12 - 2018.09",
    location: "Macau SAR, China",
    title: "Vice President",
    description: "Best Buddies International is a non-profit organisation focusing on creating opportunities for one-to-one friendships, integrated employment, leadership development, and inclusive living for individuals with intellectual and developmental disabilities (IDD).",
    responsibility: [
      "Led BestBuddies Macao Chapter through paying 20+ anti-isolation visits to the 5 IDD local centres during my serving term.",
      "Expansion plan as well as marketing plan to expand the organisation officers from 7 person to 38, grew active member from 30 to 250 people.",
      "Invited as global leader and attended BestBuddies Leadership Conference in the University of Indiana, Illinois."

    ]
  }
]

export interface VolunteerType {
  name: string;
  type: string;
  time: string;
  location: string;
  slug?: string;
  title: string;
  description?: string;
  context?: string;
  responsibility?: string[];
}

export const Education: EducationType[] = [
  {
    name: "Henley Business School",
    major: "MSc. Behavioural Finance",
    time: "2021.09 - 2022.09",
    location: "Reading, UK",
    modules: [
      "Behavioural Finance",
      "Behavioural Economics",
      "Psychology for Finance and Investing",
      "Security, Futures and Options",
      "Programming for Finance",
      "Coporate Finance and Investment Banking"
    ],
    activity: [
      "Class Representative",
      "Finance Society",
      "Rugby Union Women's Team"
    ]
  },
  {
    name: "Macau University of Science and Technology",
    major: "BHM. Hospitality Management",
    time: "2014.09 - 2019.06",
    location: "Macau SAR, China",
    modules: [
      "Casino Mathematics",
      "Microeconomics",
      "Advance Calculus",
      "Statistics",
      "Accounting",
      "Consumer Behaviours",
      "Food and Beverage Management",
      "Cost Control",

    ],
    activity: [
      "Outstanding Leader Award",
      "2nd International Convention Competition",
      "Global Leader Concil",
    ]
  }

]


export interface EducationType {
  name: string;
  major: string;
  time: string;
  location: string;
  modules: string[];
  activity?: string[];
}

