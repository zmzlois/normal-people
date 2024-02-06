export const Companies: ContentType[] = [
  {
    name: "Daytona.io (Open Source)",
    type: "DevTool Start Up",
    time: "2023.11 - Present",
    //location: "Remote | Contract",
    slug: "https://daytona.io/", // find a way to put it. show you know how to learn to code. Primeagen: if you are an expert of a framework, you are not a good engineer. 
    // The job is to solve problems, regardless what tool you are using. Tech companies are very into details. Smaller companies/start ups are more into problem solving. Not someone who is "frontend", "backend", "cloud". But a general person knows everything. 
    title: "Developer Relation", // show ansible, terraform, kubernetes, docker, linux: what you know. 
    description: "Self-hostable Github Codespaces alternative for enterprises.",
    // trash: I don't care about the context, I just want to know your responsibility. shrink the container, bigger text/font-xl, increase readability. 
    // be more intentional with your words. less shit. 
    context: "Responsible for the frontend and content of technical documentation. Worked closely with engineers and founder to test alpha product before launch, include but not limited in JetBrains' Gateway Plugin, VS Code Extension, installer and CLI tool. Responsibility also include growing and managing community. ",
    tags: ["Astro", "Alpine.js", "CSS", "Shell script", "Terraform", "Docker", "Google Cloud Platform", "Virtual Machine", "Kubernetes"],
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
    description: "Improving operation efficiency for companies.",
    context: "After building products for hospitality industry to assist on inventory management, we realised there are more problems to solve in the start up landscape for sales, customer support and remote team collaboration. We soon pivoted to develop ComCord https://comcord.vision to help companies to manage their sales and customer support in one place.",
    responsibility: [
      // "Business development and outreach.",
      "Designed and implemented product frontend and database schema using Next.js v3 with server actions, TailwindCSS, tRPC and DrizzleORM",
      "Worked with one developer to build the MVP of ComCord for YC Application. An express app as a discord bot to manage cron job for company's team standup and daily internal report",
      "Deployed and orchestrated Kafka and Redis to enable an event driven architecture for better load balancing avoiding app crashing",
      "Designed multi-tenancy SaaS software architecture",

    ],
    links: [
      {
        name: "ComCord",
        url: "https://comcord.vision",
        aria: "ComCord is a project management tool for early start ups working remote.",
        title: "ComCord"
      },
      {
        name: "Wait.gg",
        url: "https://wait.gg",
        aria: "Wait.gg was meant to built as an AI powered outreach CRM for sales and customer support.",
        title: "Wait.gg"
      },
      {
        name: "Project Waitless",
        url: "https://projectwaitless.io",
        aria: "Project Waitless is a start up that aims to improve operation efficiency for hospitality businesses.",
        title: "Project Waitless"
      }
    ],
    tags: ["Next.js", "TailwindCSS", "tRPC", "DrizzleORM", "Kafka", "Node.js", "Express.js"]
  },
  {
    name: "Henley Business School",
    type: "MSc. Behavioural Finance",
    time: "2020.09 - 2021.12",
    location: "Reading, UK",
    slug: "https://www.icmacentre.ac.uk/study/masters/msc-behavioural-finance",
    title: "MSc. Behavioural Finance",
    description: "Behavioural Finance is a field of finance that proposes psychology-based theories to investigate investment decisions.",
    context: "Where I got the first taste of programming. I was part of the MSc. Behavioural Finance program at Henley Business School, University of Reading. Where I learned about the psychology of finance and investing, and how to apply it to real world problems.",
    responsibility: [
      "Responsible for project delivery and land surveying coordination.",
      "Screening and hiring of new employees.",
      "Sourced effective and efficient technology and planning methods for city gentrification and urban renewal.",
    ],
    tags: ["Behavioural Finance", "Energy Finance", "Psychology for Finance and Investing", "Security, Futures and Options", "Python for Finance", "Coporate Finance and Investment Banking"]
  },
  {
    name: "Knight Frank LLP",
    type: "Real Estate Consultancy",
    time: "2018.12 - 2019.09",
    location: "Shenzhen, China",
    slug: "https://www.knightfrank.co.uk/",
    title: "Management Trainee - Intern",
    description: "Global real estate consultancy.",
    context: "Researched in real estate capital market valuation and analysis. Established a training scheme for new coming management trainees. Assisted, developed and responsible for clients includes TOSHIBA, Lenovo, Ebay, EPAM system, DJI and Kerry Holdings.",
    responsibility: [
      "Obtaining new clients by cold calling and networking.",
      "Assisted on key account management to increase client retainment and revenue.",
      "Conducting market research, market valuation and analysis.",
      "Recruited, trained and managed new recruits.",
    ],
    tags: ["Real Estate", "Merger&Acquisition", "Valuation", "Feasibility Research", "Bidding", "Investment Consulting", "Market Research"]
  },
  // {
  //   name: "HVS",
  //   type: "Gloabl Hospitality Consultancy",
  //   time: "2018.06 - 2018.12",
  //   location: "Shenzhen, China",
  //   title: "Research Intern",
  //   slug: "https://www.hvs.com/",
  //   description: "Boutique hospitality consultancy firm.",
  //   context: "Published and co-authored 'White Paper of Rental Apartment Industry in China' and 'Overview of Rental Apartments in the US'.",
  //   responsibility: [
  //     "Conducted market research and analysis.",
  //     "Analysing and translating English content including reports from Harvard Joint Center for Housing Studies, National Apartmnet Association and multiple media resrouces.",
  //     "Gathered data of 135 rental apartment operators in China and hotels by cold-calling and desk research in 4 consulting projects, from convention hall for Shenzhen government to 5-star hotel in Shanghai.",
  //   ]
  // },
  // {
  //   name: "Page Group",
  //   type: "Recruitment Agency",
  //   time: "2018.04 - 2018.06",
  //   location: "Shenzhen, China",
  //   title: "Intern",
  //   slug: "https://www.pagepersonnel.com.hk/",
  //   description: "Global recruitment agency.",
  //   context: "Assisted in the recruitment process for clients in the technology and finance sectors.",
  // }
  //,
  {
    name: "Macau University of Science and Technology",
    type: "University",
    time: "2014.09 - 2019.06",
    location: "Macau SAR, China",
    title: "BHM. Hospitality Management",
    slug: "https://www.must.edu.mo/en/",
    description: "Leading research institution in hospitality management in Asia.",
    tags: ["Casino Mathematics", "Microeconomics", "Advance Calculus", "Statistics", "Accounting", "Consumer Behaviours", "Food and Beverage Management", "Cost Control"],
  },
  // {
  //   name: "Las Vegas Sands Corp.",
  //   type: "Integrated Resort and Casion",
  //   time: "2017.12 - 2018.06",
  //   slug: "https://www.sands.com/",
  //   location: "Macau SAR, China",
  //   title: "Intern",
  //   description: "Las Vegas Sands Corp. is an American casino and resort company based in Paradise, Nevada, United States.",
  //   context: "Assisted data scientists converting high value customers by Tensorflow in smart casino project. Managed, translate and proof read multiple social media platforms with 3 languages. Liaised with branding department, F&B department and external vendors to ensure smooth operation of media management. Increased cross-department communication efficiency on workflow design and task scheduling.",
  //   responsibility: [
  //     "Assisted data scientists converting high value customers by Tensorflow in smart casino project.",
  //     "Managed, translate and proof read multiple social media platforms with 3 languages.",
  //     "Liaised with branding department, F&B department and external vendors to ensure smooth operation of media management.",
  //     "Increased cross-department communication efficiency on workflow design and task scheduling."
  //   ]
  // },
  {
    name: "Sheraton Hotel",
    type: "Hotel",
    time: "2015.01 - 2015.06",
    slug: "https://sheraton.marriott.com/",
    location: "Shantou, China",
    title: "Room Service Intern",
    context: "Cleaning rooms."

  }
]
export interface ContentType {

  name: string;
  image?: string;
  type?: string;
  time?: string;
  location?: string;
  slug?: string;
  title?: string;
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

export const Projects: ContentType[] = [
  {
    name: "NormalPeople.js",
    image: "https://repository-images.githubusercontent.com/735431409/0a8ef239-4d29-4a69-935d-44d574b8fdef",
    slug: "https://github.com/zmzlois/NormalPeopleJs",
    // time: "2023.09",
    context: "NormalPeople.js is a backend framework built to support Bun but with user experience similar to tRPC.",
    tags: ["Bun", "Typescript"]
  },
  {
    name: "The Random Times",
    image: "https://repository-images.githubusercontent.com/742846865/74dbdd96-ceb3-4183-8530-e08509459ced",
    slug: "https://random-times.vercel.app/",
    // time: "2023.09",
    context: "The Random Times is a democratised news website that gathering news from multiple sources and display them in a random order.",
    tags: ["Vite", "TailwindCSS"]
  },
  {
    name: "http-server",
    image: "https://repository-images.githubusercontent.com/744997611/f5e0ed56-f5fe-4627-ab00-a549f106731e",
    slug: "https://github.com/zmzlois/http-server",
    // time: "2023.09",
    context: "A web server with zero dependencies. Built in Golang.",
    tags: ["Golang", "HTTP"]
  },
  // {
  //   name: "DDNSed",
  //   image: "https://avatars.githubusercontent.com/u/10251060?s=200&v=4",
  //   slug: "https://github.com/zmzlois/DDNSed",
  //   //  time: "2023.09",
  //   context: "A DNS server built in Rust.",
  //   tags: ["Rust", "DNS"],
  // },
  // {
  //   name: "lmp-nvm",
  //   image: "https://avatars.githubusercontent.com/u/10251060?s=200&v=4",
  //   slug: "https://github.com/kerwanp/lmp-nvm",
  //   //  time: "2023.09",
  //   context: "Custom configuration for Nvim using Lazy and Lua",
  //   tags: ["Neovim", "Lua", "Lazy"],
  // },
  {
    name: "Reading React source code",
    image: "https://repository-images.githubusercontent.com/720122724/9a5671a9-c923-4dd6-ad4d-0cc62550809f", // placeholde
    //  time: "2023.12 - Present",
    location: "Everywhere",
    title: "Author | Translator",
    slug: "https://reading-react.vercel.app/",
    context: "A project aims to provide a comprehensive understanding the frontend framework React.js and how a frontend framework was designed and developed.",
    tags: ["React", "Typescript"],
  },
  {
    name: "Modern.js",
    image: "https://avatars.githubusercontent.com/u/79988376?v=4",
    slug: "https://modernjs.dev/en",
    // time: "2023.05 - Present",
    location: "Remote",
    title: "Contributor",
    context: "Modern.js is a web framework developed by ByteDance Infrastructure Team, offering an one-for-all solution for npm packages, frontend and documentation. ",
  },
  {
    name: "Docksible",
    image: "https://repository-images.githubusercontent.com/742522711/ab095e7a-fef3-44e4-909b-1096e255d118",
    slug: "https://github.com/zmzlois/Docksible",
    // time: "2024.01",
    context: "Docksible is a templating tool to help developers to test Ansible playbooks and roles in Docker container, with SSH and mimicking real world scenario.",
    tags: ["Docker", "Ansible", "Shell script", "SSH"]
  },

]

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

export const Writing = [
  {
    name: "How to animate any custom SVG with framer motion",
    time: "2024",
    slug: "https://dev.to/zmzlois/how-to-animate-any-custom-svg-with-framer-motion-3jg4",
    image: "https://repository-images.githubusercontent.com/742846865/74dbdd96-ceb3-4183-8530-e08509459ced",
  },
  {
    name: ""
  }
]