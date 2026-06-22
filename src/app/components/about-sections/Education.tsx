/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";

export default function Education() {
  const categoryList = [
    {
      category: "Languages",
      list: [
        { skill: "Python" },
        { skill: "TypeScript" },
        { skill: "JavaScript" },
        { skill: "C#" },
      ],
    },
    {
      category: "Backend",
      list: [
        { skill: "FastAPI" },
        { skill: "ASP.NET Core" },
        { skill: "Node.js (Express, Fastify)" },
        { skill: "RESTful APIs" },
      ],
    },
    {
      category: "Frontend",
      list: [
        { skill: "Next.js" },
        { skill: "React Router" },
        { skill: "HTML" },
        { skill: "CSS" },
      ],
    },
    {
      category: "Databases",
      list: [{ skill: "PostgreSQL" }, { skill: "SQL" }, { skill: "Firebase" }],
    },
    {
      category: "Tools",
      list: [
        { skill: "Git" },
        { skill: "Docker" },
        { skill: "Linux" },
        { skill: "Postman" },
        { skill: "Jira" },
      ],
    },
    { category: "Cloud", list: [{ skill: "AWS (S3, SQS, DynamoDB)" }] },
  ];

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
            <p>BMus in Digital Audio Arts</p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex-1 mb-5">
          <h2 className="weathered-effect text-5xl">// Skills</h2>
        </div>
        <div className="flex flex-coltext-lg">
          {categoryList.map((category, index) => (
            <div className="flex flex-col mx-5" key={index}>
              <h3>{category.category}</h3>
              <div>
                {category.list.map((skill, index) => (
                  <div className="flex flex-row my-2" key={index}>
                    <Image
                      src="/Balance.svg"
                      alt="Bullet point"
                      width={20}
                      height={20}
                      className="purple mr-2 hover:rotate-90 transition-transform"
                    />
                    <p className="skills">{skill.skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
