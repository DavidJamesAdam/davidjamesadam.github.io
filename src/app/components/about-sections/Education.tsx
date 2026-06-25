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
    { category: "Cloud", list: [{ skill: "AWS" }] },
  ];

  return (
    <div className="flex flex-1 min-h-0 h-full flex-col">
      <div className="mb-5">
        <div className="flex-1 mb-5">
          <h2 className="weathered-effect">{"// Education"}</h2>
        </div>
        <div className="text-lg mx-5">
          <div className="flex mb-3 group">
            <Image
              src="/Balance.svg"
              alt="Bullet point"
              width={20}
              height={20}
              className="purple mr-2 group-hover:rotate-90 transition-transform"
            />
            <p>BSc in Computer Science</p>
          </div>
          <div className="flex mb-3 group">
            <Image
              src="/Balance.svg"
              alt="Bullet point"
              width={20}
              height={20}
              className="purple mr-2 group-hover:rotate-90 transition-transform"
            />
            <p>BMus in Digital Audio Arts</p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex-1 mb-5">
          <h2 className="weathered-effect">{"// Skills"}</h2>
        </div>
        <div className="flex md:flex-row flex-col text-lg">
          {categoryList.map((category, index) => (
            <div className="flex flex-col mx-5" key={index}>
              <div className="flex mb-3 group">
                {/* <Image
                  src="/Balance.svg"
                  alt="Bullet point"
                  width={20}
                  height={20}
                  className="purple mr-2 group-hover:rotate-90 transition-transform"
                /> */}
                <h3>{category.category}</h3>
              </div>
              <div className="flex flex-wrap">
                {category.list.map((skill, index) => (
                  <div className="flex flex-row group" key={index}>
                    {/* <Image
                      src="/Balance.svg"
                      alt="Bullet point"
                      width={20}
                      height={20}
                      className="purple mr-2 group-hover:rotate-90 transition-transform"
                    />
                    <p className="skills">{skill.skill}</p> */}
                    <span className="rounded-full border border-purple-800 bg-[var(--secondary-text)] px-3 py-1 m-1 transition-transform duration-200 ease-in-out hover:scale-110">
                      {skill.skill}
                    </span>
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
