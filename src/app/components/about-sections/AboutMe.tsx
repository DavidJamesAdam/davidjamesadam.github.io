import Image from "next/image";
import "./styles.css";

export default function AboutMe() {
  return (
    <div className="flex flex-1 min-h-0 flex-col">
      <div className="shrink-0 mb-5">
        <h2 className="weathered-effect">{'// About Me'}</h2>
      </div>
      <div className="flex-1 min-h-0">
        <div className="pr-4 md:text-lg">
          <Image
            src="/profilePicture2.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="rounded-xl object-contain shrink-0 w-auto h-auto md:max-h-[36vh] max-h-[24vh] float-right ml-5 mb-5"
            priority
          />
          <p className="indent-[2em]">
            Hi, I&apos;m David. I recently completed my BSc in Computer Science
            from the University of Calgary, building on a previous BA in Digital
            Audio Arts from the University of Lethbridge. After graduating from
            the U of L, I started a career in the corporate audio/visual
            industry, where I worked on large-scale events such as conferences
            and conventions. However, I discovered the A/V industry wasn&apos;t
            for me and I needed a change. So, after discovering a passion for
            programming and taking the steps I needed to to allow myself to
            enroll in the Computer Science program at the University of Calgary,
            I started my first semester in September of 2021.
          </p>
          <p className="indent-[2em]">
            During my degree, I completed an internship with Gigadat Solutions,
            where I gained experience in both quality assurance and software
            development. While at Gigadat, I found myself working on a project
            called <a href="https://unify.health/">unify.health</a>, a health
            data management system for athletes. I developed an email
            notification microservice using TypeScript and AWS, and also worked
            on bug fixes and system improvements until the end of my internship,
            at which point I had to ruefully say farewell to everyone at
            Gigadat.
          </p>
          <p className="indent-[2em]">
            Through my academic and personal projects, I’ve built full-stack
            applications using technologies such as React, FastAPI, PostgreSQL,
            and Docker. I’m particularly interested in backend and full-stack
            development, with a focus on building reliable, maintainable
            systems.
          </p>
        </div>
      </div>
    </div>
  );
}
