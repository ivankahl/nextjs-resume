import Head from "next/head";
import { useContext } from "react";
import ResumeContext, { useResumeContext } from "../context/ResumeContext";

import CvHeader from "../organisms/CvHeader";
import Education from "../organisms/Education";
import Experience from "../organisms/Experience";
import References from "../organisms/References";
import Skills from "../organisms/Skills";
import Summary from "../organisms/Summary";

export default function Home() {
  const resume = useResumeContext();

  return (
    <div className="container mx-auto mt-8 max-w-4xl px-6 leading-6 print:mt-0 print:max-w-none print:px-0">
      <Head>
        <title>Ivan Kahl&apos;s Resume</title>
      </Head>
      <CvHeader
        profilePictureUrl={resume.header.profilePictureUrl}
        name={resume.header.name}
        role={resume.header.role}
        emailAddress={resume.header.emailAddress}
        github={resume.header.github}
        twitter={resume.header.twitter}
        website={resume.header.website}
      />
      <Summary>{resume.summary}</Summary>
      <Skills
        technicalSkills={resume.skills.technicalSkills}
        softSkills={resume.skills.softSkills}
      ></Skills>
      <Experience companies={resume.experience.companies}></Experience>
      <Education certifications={resume.education.certifications}></Education>
      <References
        emailAddress={resume.references.emailAddress}
        subject={resume.references.subject}
        body={resume.references.body}
      />
    </div>
  );
}
