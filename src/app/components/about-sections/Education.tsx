/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";

export default function Education() {
  const languagesList = [
    { skill: "Python" },
    { skill: "TypeScript" },
    { skill: "JavaScript" },
    { skill: "C#" },
  ];
  const backendList = [
    { skill: "FastAPI" },
    { skill: "ASP.NET Core" },
    { skill: "Node.js (Express, Fastify)" },
    { skill: "RESTful APIs" },
  ];
  const frontendList = [
    { skill: "Next.js" },
    { skill: "React Router" },
    { skill: "HTML" },
    { skill: "CSS" },
  ];
  const databaseList = [
    { skill: "PostgreSQL" },
    { skill: "SQL" },
    { skill: "Firebase" },
  ];
  const toolsList = [
    { skill: "Git" },
    { skill: "Docker" },
    { skill: "Linux" },
    { skill: "Postman" },
    { skill: "Jira" },
  ];
  const cloudList = [{ skill: "AWS (S3, SQS, DynamoDB)" }];

  return (
    <div className="flex flex-1 min-h-0 flex-col">
      <div className="mb-5">
        <div className="flex-1 mb-5">
          <h2 className="weathered-effect text-5xl">// Education</h2>
        </div>
        <div className="text-lg">
          <div className="flex mb-3">
            <Image
              src="/Balance.svg"
              alt="Bullet point"
              width={20}
              height={20}
              className="purple mr-2"
            />
            <p>BSc in Computer Science</p>
          </div>
          <div className="flex mb-3">
            <Image
              src="/Balance.svg"
              alt="Bullet point"
              width={20}
              height={20}
              className="purple mr-2"
            />
            <p>SOmething</p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex-1 mb-5">
          <h2 className="weathered-effect text-5xl">// Skills</h2>
        </div>
        <div className=" flex flex-coltext-lg">
          <div className="flex mb-3">
            <div className="flex flex-col">
              <h3>Languages</h3>
              <div>
                {languagesList.map((skill, index) => (
                  <div className="flex row" key={index}>
                    <Image
                      src="/Balance.svg"
                      alt="Bullet point"
                      width={20}
                      height={20}
                      className="purple mr-2"
                    />
                    <p className="skills">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <h3>Backend</h3>
              <div>
                {backendList.map((skill, index) => (
                  <div className="flex row" key={index}>
                    <Image
                      src="/Balance.svg"
                      alt="Bullet point"
                      width={20}
                      height={20}
                      className="purple mr-2"
                    />
                    <p className="skills">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <h3>Frontend</h3>
              <div>
                {frontendList.map((skill, index) => (
                  <div className="flex row" key={index}>
                    <Image
                      src="/Balance.svg"
                      alt="Bullet point"
                      width={20}
                      height={20}
                      className="purple mr-2"
                    />
                    <p className="skills">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <h3>Databases</h3>
              <div>
                {databaseList.map((skill, index) => (
                  <div className="flex row" key={index}>
                    <Image
                      src="/Balance.svg"
                      alt="Bullet point"
                      width={20}
                      height={20}
                      className="purple mr-2"
                    />
                    <p className="skills">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <h3>Tools</h3>
              <div>
                {toolsList.map((skill, index) => (
                  <div className="flex row" key={index}>
                    <Image
                      src="/Balance.svg"
                      alt="Bullet point"
                      width={20}
                      height={20}
                      className="purple mr-2"
                    />
                    <p className="skills">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex flex-col">
              <h3>Cloud</h3>
              <div>
                {cloudList.map((skill, index) => (
                  <div className="flex row" key={index}>
                    <Image
                      src="/Balance.svg"
                      alt="Bullet point"
                      width={20}
                      height={20}
                      className="purple mr-2"
                    />
                    <p className="skills">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
