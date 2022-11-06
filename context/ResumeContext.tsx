import { createContext, useContext } from "react";
import { CvHeaderProps } from "../organisms/CvHeader";
import { EducationProps } from "../organisms/Education";
import { ExperienceProps } from "../organisms/Experience";
import { ReferencesProps } from "../organisms/References";
import { SkillsProps } from "../organisms/Skills";

type ResumeContextType = {
  header: CvHeaderProps;
  summary: string;
  skills: SkillsProps;
  experience: ExperienceProps;
  education: EducationProps;
  references: ReferencesProps;
};

const ResumeContext = createContext<ResumeContextType>({
  header: {
    name: "Ivan Kahl",
    role: "Technical Lead",
    emailAddress: "hello@ivankahl.com",
    location: "Johannesburg, South Africa",
    website: "https://ivankahl.com",
    twitter: "@IvanKahl",
    github: "ivankahl",
    profilePictureUrl: "/img/profile.jpg",
  },
  summary: `I am a software developer and technical team lead situated in South Africa eager to develop innovative solutions that enhance the
  productivity and efficiency of various industries around the world. I am studying a BSc in Applied Mathematics and
  Computer Science at UNISA while developing integrations for Mercury FX International and working on my own
  personal projects to better my own skills`,
  skills: {
    technicalSkills: [
      "C# (.NET Framework, .NET Core, .NET 5/6)",
      "ASP.NET Core",
      "Blazor",
      "Microsoft SQL Server",
      "AWS",
      "REST Integration",
      "SOAP Integration",
      "FIX Integration",
      "GitHub CI/CD",
      "NodeJS",
      "TypeScript",
      "Sage CRM",
    ],
    softSkills: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Work Ethic",
      "Collaboration",
      "Organization",
      "Time Management",
    ],
  },
  experience: {
    companies: [
      {
        companyLogoUrl: "/img/Mercury.jpg",
        companyName: "Mercury FX International",
        positions: [
          {
            description: `After architecting our framework and moving into more of a leadership role, I am now the Technical Lead at Mercury.

              I have focused my time on optimizing our technical processes. This involves developing robust CI/CD pipelines and improving developer and business documentation. I also help plan and delegate development tasks for the team. I am in constant communication with my team, offering guidance and ensuring we are on track to meet business requirements in good time.
              
              The role is teaching me a lot about managing work and people. As much as getting tasks done is important, I am also big on company culture and make an effort to build a open and co-operative at Mercury.`,
            role: "Technical Lead",
            startDate: "June 2022",
            skills: [
              "Team Management",
              "Leadership",
              "C#",
              "Microsoft SQL Server",
            ],
          },
          {
            description: `I joined as the first internal software developer. During my time as Software Developer at Mercury, I did a variety of backend and frontend work.

            I was responsible for maintaining and adding features to our initial WordPress website. This included maintaining PHP code that integrated with a SOAP interface on our back office system. I also built a more modern website that clients could use to request Tax Clearance Forms from SARS. I used Vue for the frontend and ASP.NET in the backend.
            
            As our development team grew, my responsibilities gravitated more towards backend work. We are looking at overhauling our systems completely to work in .NET Core and later. I architected and started developing a framework in .NET Standard to help with this. The framework divides the business, data and integration logic. We also have automated testing across the entire codebase to help catch bugs. Because we are building it in .NET Standard, we use it across all our different platforms which run different versions of .NET Framework, .NET Core and .NET 5/6. This framework has become the backbone for our rebranding and rebuilding exercise that we are undergoing. 
            
            Besides the framework, I have developed various integrations with banks and other third-parties. These include FIX services that are used to book forex deals with different banks in the UK. I have also built integrations to automate the opening of bank accounts at third-party banks for clients using REST APIs. 
            
            One of our big ongoing projects is with Ripple. I have collaborated with Ripple, Bitstamp and VALR to help bring instant international payments to South Africa. This involved going to the Ripple offices in the UK and collaborating with Ripple team members there.
            
            As I progressed in my position, I started to take on more of a leadership role and am now the Technical Lead at Mercury.`,
            role: "Backend Software Developer",
            startDate: "June 2019",
            endDate: "May 2022",
            skills: [
              "PHP",
              "Crypto",
              "JavaScript",
              "C#",
              "Microsoft SQL Server",
            ],
          },
        ],
      },
      {
        companyLogoUrl: "/img/DraftDev.jpg",
        companyName: "Draft.dev",
        positions: [
          {
            description: `I have always been eager to write technical articles and started with my blog, where I would post as I learned technical concepts. 

            Then, I started writing posts for Draft.dev. The articles cover a wide range of topics and have expanded my technical knowledge drastically as I research and write articles.`,
            role: "Technical Writer",
            startDate: "June 2022",
            skills: ["Technical Writing"],
          },
        ],
      },
      {
        companyLogoUrl: "/img/YellowDuckling.jpg",
        companyName: "Yellow Duckling",
        positions: [
          {
            description: `During the COVID-19 pandemic, I developed a side project to help churches manage the attendance limits imposed by government. This led me to found Yellow Duckling.

            Yellow Duckling focuses on tailored software solutions. This can be as simple as a custom-made WordPress website to a fully custom-built portal. Besides development, I also write guest articles and blog posts for various technical companies.`,
            role: "Founder",
            startDate: "March 2021",
            skills: [
              "WordPress",
              "DigitalOcean",
              "Technical Writing",
              "Business Management",
              "C#",
            ],
          },
        ],
      },
      {
        companyLogoUrl: "/img/Astech.jpg",
        companyName: "Astech",
        positions: [
          {
            description: `I worked on a variety of projects related to Sage products. These included developing and enhancing their Loan Management System built into Sage CRM, integrating Sage CRM into other Sage products such as Sage Evolution for Sage themselves, setting up Sage CRM for clients and doing extensive customization of Sage CRM using .NET, ASP and Javascript. I also worked on .NET projects outside of Sage CRM including an Outlook plugin for clients that integrated with Sage CRM.`,
            role: "Software Developer and Consultant",
            startDate: "January 2018",
            endDate: "May 2019",
          },
        ],
      },
      {
        companyLogoUrl: "/img/StandardBank.jpg",
        companyName: "Standard Bank",
        positions: [
          {
            description: `I entered the Standard Bank Hackathon in 2015. I was placed in a team of graduates. Within 24 hours, we designed a ticket queuing system much like the ones that have now been implemented in bank branches. I was responsible for the backend development and also presented the solution to the company executives.`,
            role: "Hackathon Participant",
            startDate: "January 2018",
            endDate: "May 2019",
          },
        ],
      },
    ],
  },
  education: {
    certifications: [
      {
        institution: {
          name: "University of South Africa",
          logoUrl: "img/Unisa.jpg",
        },
        certification: "BSc in Informatics",
        dateReceived: "December 2024",
        description: ["Studying Part Time"],
      },
      {
        institution: {
          name: "Amazon Web Services",
          logoUrl: "img/aws.jpg",
        },
        certification: "AWS Certified Developer",
        dateReceived: "December 2021",
        description: [],
      },
      {
        institution: {
          name: "Amazon Web Services",
          logoUrl: "img/aws.jpg",
        },
        certification: "AWS Certified Cloud Practitioner",
        dateReceived: "November 2020",
        description: [],
      },
      {
        institution: {
          name: "Reddam House Bedfordview",
          logoUrl: "img/Reddam.jpg",
        },
        certification: "Matric Certificate",
        dateReceived: "December 2016",
        description: [
          "8 distinctions",
          "School Dux Scholar of 2016",
          "In Top 100 of IEB",
        ],
      },
      {
        institution: {
          name: "Dale Carnegie",
          logoUrl: "img/DaleCarnegie.jpg",
        },
        certification: "Generation NEXT",
        dateReceived: "October 2015",
        description: [],
      },
    ],
  },
  references: {
    emailAddress: "hello@ivankahl.com",
    subject: "Request References",
    body: "Hi Ivan,\r\n\r\nI saw your resume and was wondering if you could provide me with references?\r\n\r\nKind regards,\r\n",
  },
});

const useResumeContext = () => useContext(ResumeContext);

export { useResumeContext };
export default ResumeContext;
