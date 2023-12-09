"use client"

import { Icon } from '@iconify/react';
import expoIcon from '@iconify/icons-cib/expo';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import pythonIcon from '@iconify/icons-logos/python';
import flagChina from '@iconify/icons-twemoji/flag-china';
import flagUnitedKingdom from '@iconify/icons-twemoji/flag-united-kingdom';
import flagFrance from '@iconify/icons-twemoji/flag-france';
import writingSign from '@iconify/icons-tabler/writing-sign';
import readingIcon from '@iconify/icons-ep/reading';
import nextjsIcon from '@iconify/icons-logos/nextjs-icon';
import turborepoIcon from '@iconify/icons-logos/turborepo-icon';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';
import reactIcon from '@iconify/icons-devicon/react';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import mysqlDark from '@iconify/icons-skill-icons/mysql-dark';
import prismaIcon from '@iconify/icons-logos/prisma';
import trpcIcon from '@iconify/icons-devicon/trpc';
import html5 from '@iconify/icons-logos/html-5';
import astroIcon from '@iconify/icons-devicon/astro';
import awsIcon from '@iconify/icons-logos/aws';
import golangIcon from '@iconify/icons-skill-icons/golang';
import { T3 } from "./t3";
import githubIcon from '@iconify/icons-mdi/github';
import globeIcon from '@iconify/icons-flat-color-icons/globe';
import userOutline from '@iconify/icons-mdi/user-outline';
import outlineMail from '@iconify/icons-ic/outline-mail';
import phoneIcon from '@iconify/icons-bi/phone';
import linkedinIcon from '@iconify/icons-skill-icons/linkedin';
import womanTechnologist from '@iconify/icons-noto-v1/woman-technologist';
import redHeart from '@iconify/icons-noto/red-heart';
import womanLiftingWeightsLight from '@iconify/icons-fluent-emoji-flat/woman-lifting-weights-light';
import manSwimming from '@iconify/icons-twemoji/man-swimming';
import serverIcon from '@iconify/icons-icon-park/server';
import twotoneBook from '@iconify/icons-ic/twotone-book';
import educationIcon from '@iconify/icons-carbon/education';
import aiIcon from '@iconify/icons-eos-icons/ai';
import cloudBroken from '@iconify/icons-solar/cloud-broken';
import tedIcon from '@iconify/icons-simple-icons/ted';
import musicIcon from '@iconify/icons-flat-color-icons/music';
import certificateIcon from '@iconify/icons-ph/certificate';
import financeIcon from '@iconify/icons-carbon/finance';
import machineLearningModel from '@iconify/icons-carbon/machine-learning-model';
import investIcon from '@iconify/icons-arcticons/invest';
import wineIcon from '@iconify/icons-ph/wine';
import textLineDuotone from '@iconify/icons-solar/text-line-duotone';
import kafkaIcon from '@iconify/icons-logos/kafka';

export interface NavigationType {
    name: string;
    icon: React.ReactNode;
    content: {
        icon: React.ReactNode;
        name: string;
        href?: string;
        fluency?: string;
    }[];
}

export const navigation: NavigationType[] = [
    {
    name: "Contacts",
    icon: <Icon icon={userOutline} width="24" height="24" className="text-slate-50"/>,
    content: [
        {
            icon: <Icon icon={githubIcon} width="24" height="24" className="text-slate-50"/>,
            name: "Github",
            href: "https://github.com/zmzlois",
        },
        {
            icon: <Icon icon={linkedinIcon} width="24" height="24"/>,
            name: "Linkedin",
            href: "https://www.linkedin.com/in/loiszhao/",
        },
        {
            icon: <Icon icon={outlineMail} width="24" height="24" className="text-slate-50"/>,
            name: "loisisar@outlook.com",
            href: "mailto:loisisar@outlook.com",
        },
        {
            icon:  <Icon icon={phoneIcon} width="24" height="24" className="text-slate-50"/>,
            name: "+44 7873471573",
            href: "tel:+44 7873 471 573",
        }
    ],
}, {
    name: "Hobbies",
    icon: <Icon icon={redHeart} width="24" height="24" />,
        content: [
            {
                icon: <Icon icon={womanLiftingWeightsLight} width="24" height="24" />,
                name: "Crossfit",
            },
            {
                icon: <Icon icon={manSwimming} width="24" height="24" />,
                name: "Swimming",
            },
            {
                icon: <Icon icon={writingSign} width="24" height="24" className="text-slate-50" />,
                name: "Writing",
            },
            {
                icon: <Icon icon={readingIcon} width="24" height="24" className="text-slate-50"/>,
                name: "Reading",
            }
        ],
    },
    {
        name: "Languages",
        icon: <Icon icon={globeIcon} width="24" height="24" />,

        content: [
            {
                icon: <Icon icon={flagChina} width="24" height="24" />,
                name: "Chinese",
                fluency: "Native",

            },
            {
                icon: <Icon icon={flagUnitedKingdom} width="24" height="24" />,
                name: "English",
                fluency: "Fluent",
            },
            {
                icon: <Icon icon={flagFrance} width="24" height="24" />,
                name: "French",
                fluency: "Beginner",
            }
        ],
    },
    {
        name: "Tech",
        icon: <Icon icon={womanTechnologist} width="24" height="24" />,
        content: [
            {
                icon: <Icon icon={typescriptIcon} width="24" height="24" />,
                name: "Typescript",
            },
            {
                icon: <Icon icon={pythonIcon} width="24" height="24" />,
                name: "Python",
            },
            {
                icon: <Icon icon={nextjsIcon} width="24" height="24" className="border border-slate-100 rounded-full py-[2px]" />,
                name: "Next.js",
            },
            {
                icon: <Icon icon={reactIcon} width="24" height="24" />,
                name: "React",
            },
            {
                icon: <Icon icon={tailwindcssIcon} width="24" height="24" />,
                name: "TailwindCSS",
            },
            {
                icon: <Icon icon={html5} width="24" height="24" />,
                name: "HTML5/CSS",
            },
            {
                icon: <Icon icon={trpcIcon} width="24" height="24" className="rounded-full bg-slate-100" />,
                name: "tRPC",
            },
            {
                icon: <Icon icon={prismaIcon} width="24" height="24" className="py-[2px] rounded-full bg-slate-100"/>,
                name: "PrismaORM",
            },
            {
                icon: <T3 className="w-6 h-6 border border-slate-100 rounded-full p-[2px]" />,
                name: "Create T3 App",
            },
            {
                icon: <Icon icon={astroIcon} width="24" height="24" className="rounded-full bg-slate-100 py-[2px]"/>,
                name: "Astro.build",
            },
            {
                icon: <Icon icon={golangIcon} width="24" height="24" className="rounded-full bg-slate-100 py-[2px]"/>,
                name: "Golang",
            },
      
    
        ],
    }, {
        name: "Backend / Infra",
        icon: <Icon icon={serverIcon} width="24" height="24" />,
    
    content: [
        {
            icon: <Icon icon={awsIcon} width="24" height="24" className="rounded-full bg-slate-100 p-[2px]"/>,
            name: "AWS",
        },
        
        {
            icon: <Icon icon={postgresqlIcon} width="24" height="24" />,
            name: "PostgreSQL",
        },
        {
            icon: <Icon icon={mysqlDark} width="24" height="24" className="p-[1px] border rounded-full border-slate-50" />,
            name: "MySQL",
        },
        {
            icon: <Icon icon={kafkaIcon} width="24" height="24" className="rounded-full bg-slate-50 p-[1px]"/>,
            name: "Kafka",

        },
        {
            icon: <Icon icon={nodejsIcon} width="24" height="24" />,
            name: "Node.js",
        },
      
        {
            icon: <Icon icon={turborepoIcon} width="24" height="24" className="rounded-full bg-slate-100 p-[2px]" />,
            name: "Turborepo",
        },
        {
            icon: <Icon icon={expoIcon} width="24" height="24" className="rounded-full bg-slate-950 p-[2px]" />,
            name: "Expo",
        },
    ]
    },
    {
        name: "Publications&Talks",
        icon: <Icon icon={twotoneBook} width="24" height="24" className="text-slate-50"/>,
        content: [
            {
                icon: <Icon icon={aiIcon} width="24" height="24" />,
                name: "Prompt - A practical guide to use ChatGPT",
                href: "https://prompt.mba"
            },
            {
                icon: <Icon icon={cloudBroken} width="24" height="24" />,
                name: "AWS Cloud Woman - Business Track",
                href: "https://www.linkedin.com/posts/loiszhao_aws-cloud-work-activity-7019810128736440320-RmAR? utm_source=share&utm_medium=member_desktop"
            },
            {
                icon: <Icon icon={textLineDuotone} width="24" height="24" />,
                name: "Text Annotation - Data Science QuantumBlack"

            },
            {
                icon: <Icon icon={tedIcon} width="24" height="24" />,
                name: "TEDx - How to be extremely lucky",
                href: "https://www.caeruscareers.com/tedxbrookgreen"

            },
            {
                icon: <Icon icon={musicIcon} width="24" height="24" />,
                name: "The future of the nighttime economy",
                href: "https://www.linkedin.com/posts/loiszhao_nte-summit-hospitality-activity-7028772289164795904-LZbv?utm_source=share&utm_medium=member_desktop"
            }
        ]
    },
    {
        name: "Certifications",
        icon: <Icon icon={certificateIcon} width="24" height="24" />,
        content: [
            {
                icon: <Icon icon={awsIcon} width="24" height="24" className="p-[2px] bg-slate-200 rounded-full"/>,
                name: "AWS Certified Cloud Practitioner",
                href: "https://www.linkedin.com/learning/certificates/4c861fef7166be19e1c8a4fda3d4615d50363f0a0cca95c052691e5e4e4e98ca",

            }, 
            {
                icon: <Icon icon={financeIcon} width="24" height="24" />,
                name: "Bloomberg Market Concepts",
                href:"https://www.bloomberg.com/professional/product/certificate-courses/"
                
            },
            {
                icon: <Icon icon={machineLearningModel} width="24" height="24" />,
                name: "Artificial Intelligence Foundations",
                href: "https://www.linkedin.com/learning/certificates/00c93cbf90c46d7d8246d380217b9332a03228cdb30b750632c775fd3491bf1f"
                
            },
            {
                icon: <Icon icon={investIcon} width="24" height="24" className="text-slate-50" />,
                name: "Amplify Investment Banking Bootcamp",
                href: "https://www.amplifytrading.com/"
            },
            {
                icon: <Icon icon={wineIcon} width="24" height="24" />,
                name: "Wine and Spirit Education Trust Level 2",
                href:"https://www.wsetglobal.com/",
            }
        ]
    }
   
]

export const siteConfig = {
    name: "ZHAOMIAN ZHAO(Lois)",
    occupation: "Software Engineer",
    location: "London, UK",
    avatar: "https://pbs.twimg.com/profile_images/1696601645038112768/PfKCwuVk_400x400.jpg",
    intro: "Self-taught engineer. Writer. TEDx Speaker. Crossfitter. Entrepreneurial. Behavioral Finance Graduate."
}
    
  