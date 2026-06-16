"use client";
import Card from "../components/card/Card";

export default function Page() {
  const projectInfo = [
    {
      picture: "/Placeholder.svg",
      title: "Puppli",
      link: "https://github.com/DavidJamesAdam/cpsc513-project-puppli",
      description: "Dog picture voting webapp",
    },
    {
      picture: "/Placeholder.svg",
      title: "SmartPantry",
      link: "https://github.com/DavidJamesAdam/cpsc471-project-SmartPantry",
      description: "Recipe, home inventory, and grocery tracker",
    },
    {
      picture: "/Placeholder.svg",
      title: "RED - Retro Entertainment Device",
      link: "https://github.com/DavidJamesAdam/RED-Retro-Entertainment-Device-",
      description: "Project",
    },
    {
      picture: "/Placeholder.svg",
      title: "HIC - Hikers Information Companion",
      link: "https://github.com/DavidJamesAdam/HIC---The-Hiker-s-Information-Companion",
      description: "Project",
    },
    {
      picture: "/Placeholder.svg",
      title: "Personal Backend Server (CRUD) project",
      link: "https://github.com/DavidJamesAdam/myFirstServer",
      description: "Project",
    },
    // {title: "Family History website", link: "https://github.com/DavidJamesAdam/family-history", description: "Project"},
  ];
  return (
    <div className="flex flex-col flex-1">
      <h1 className="weathered-effect text-8xl my-5">
        SOME RECENT
        <br />
        <span className="text-[#52f83c]">CONJURATIONS</span>
      </h1>
      <div className="flex md:flex-row flex-col justify-items-center weathered-effect flex-1 justify-between">
        {projectInfo.map((project, index) => (
          <Card
            key={index}
            picture={project.picture}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
      <div className="text-[#894fad] weathered-effect m-5 pt-5">
        <a href="https://github.com/DavidJamesAdam">&gt; VIEW ALL PROJECTS</a>
      </div>
    </div>
  );
}
