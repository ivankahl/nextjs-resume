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
    profilePictureUrl: "/img/profile-3.jpg",
  },
  summary: `I've always wanted to build big, super cool systems and help others along the way. I love turning complex ideas into performant software using appropriate design patterns like Domain-Driven Design (DDD), Event-Driven Architecure (EDA), Ports and Adapters or even a straightforward minimal REST API. I strive to continue learning, whether it be new concepts, languages, frameworks or tools. As I learn, I love to share my learnings with others on my personal blog, and in blog posts I write for other companies as a freelance technical writer.`,
  skills: {
    technicalSkills: [
      "Software Architecture",
      "Domain-Driven Design (DDD)",
      "Event-Driven Architecture (EDA)",
      "C# (.NET Framework, .NET Core, .NET 5+)",
      "ASP.NET Core",
      "Microsoft SQL Server",
      "PostgreSQL",
      "Azure",
      "AWS",
      "REST Integration",
      "SOAP Integration",
      "FIX Integration",
      "Azure DevOps",
      "GitHub CI/CD",
      "Go",
      "NodeJS",
      "React",
      "Next.js",
      "TypeScript",
      "Sage CRM",
      "Salesforce",
    ],
    softSkills: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Work Ethic",
      "Teaching",
      "Collaboration",
      "Organization",
      "Time Management",
    ],
  },
  experience: {
    companies: [
      {
        companyLogoUrl: "/img/Alpha.png",
        companyName: "Alpha International",
        companyUrl: "https://alpha.org",
        positions: [
          {
            role: "Senior Software Engineer (Technical Lead)",
            startDate: "April 2023",
            skills: [
              "Domain-Driven Design",
              "Event-Driven Architecture",
              "Leadership",
              "C#",
              "Microsoft Azure",
              "PostgreSQL",
              "Azure DevOps",
            ],
            description: [
              "Build and maintain our internal Identity Provider based on Duende",
              "Design and build new platform services for other teams",
              "Help maintain testing and deployment pipelines in Azure DevOps",
              "Champion Domain-Driven Design and Event-Driven Architecture across internal teams",
              "Planned and executed migration of services to a private network with NGINXaaS as a reverse proxy",
              "Mentor other developers",
              "Code review and feedback",
              "Collaborate across teams to deliver new products",
            ],
          },
        ],
      },
      {
        companyLogoUrl: "/img/Mercury.jpg",
        companyName: "Mercury",
        companyUrl: "https://mercury.global/",
        positions: [
          {
            description: [
              "Communicate with business stakeholders to plan projects and set appropriate deadlines.",
              "Designed and developed new features for Mercury's core applications.",
              "Architected technical solutions for third party integrations.",
              "Developed CI/CD process for core applications.",
              "Implemented software development workflow for the team in GitHub.",
              "Reviewed code and provided feedback to team members.",
              "Hired and trained new team members.",
            ],
            role: "Technical Lead",
            startDate: "June 2022",
            endDate: "March 2023",
            skills: [
              "Team Management",
              "Leadership",
              "C#",
              "Microsoft SQL Server",
              "AWS",
              "GitHub Actions",
            ],
          },
          {
            description: [
              "Maintained and developed new features on our WordPress website using SOAP and PHP.",
              "Developed a new website for clients to request Tax Clearance Forms from SARS using Vue and ASP.NET.",
              "Designed and developed a framework that encapsulates all our business processes in .NET Standard. This framework is used across all our different platforms.",
              "Developed integrations with banks and other third-parties using REST and FIX.",
              "Collaborated with Ripple, Bitstamp and VALR to bring instant international payments to South Africa.",
              "Worked with South African Reserve Bank in a sandbox to help shape crypto regulations in South Africa.",
              "Hired and trained new team members.",
            ],
            role: "Backend Software Developer",
            startDate: "June 2019",
            endDate: "May 2022",
            skills: [
              "PHP",
              "Crypto",
              "JavaScript",
              "C#",
              "Microsoft SQL Server",
              "AWS",
            ],
          },
        ],
      },
      {
        companyLogoUrl: "/img/DraftDev.jpg",
        companyName: "Draft.dev",
        companyUrl: "https://draft.dev",
        positions: [
          {
            description: [
              "Research and experiment with different technologies.",
              "Write technical articles using outlines provided.",
              "Collaborate with editors and technical reviewers to refine articles.",
            ],
            role: "Technical Writer",
            startDate: "June 2022",
            skills: [
              "Technical Writing",
              "Rust",
              "WordPress",
              "JavaScript",
              ".NET",
            ],
          },
        ],
      },
      {
        companyLogoUrl: "/img/YellowDuckling.jpg",
        companyName: "Yellow Duckling",
        companyUrl: "https://yellowduckling.dev",
        positions: [
          {
            description: [
              "Developed system for multiple churches to manage attendance limits during the COVID-19 pandemic.",
              "Develop WordPress websites.",
              "Create Google Doc plugin to help manage grades for a tutoring company.",
              "Developed registration form for church using Next.js and Firebase.",
            ],
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
        companyUrl: "https://as-tech.co.za",
        positions: [
          {
            description: [
              "Helped maintain and develop a Loan Management System built on top of Sage CRM.",
              "Developed a .NET plugin for Outlook that integrated with Sage CRM.",
              "Developed the official Sage CRM integration for Sage Evolution used by Sage.",
              "Customized Sage CRM using .NET, ASP and JavaScript.",
            ],
            role: "Software Developer and Consultant",
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
        dateReceived: "December 2025",
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
