/* eslint-disable react/jsx-no-comment-textnodes */

import Image from "next/image";
import "./styles.css";

export default function AboutMe() {
  return (
    <div className="flex flex-1 min-h-0 flex-col">
      <div className="shrink-0 text-center mb-5">
        <h2 className="weathered-effect text-3xl">// About Me</h2>
      </div>
      <div className="flex-1 min-h-0">
        <div className="pr-4">
          <Image
            src="/profilePicture2.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="rounded-xl object-contain shrink-0 w-auto h-auto md:max-h-[36vh] max-h-[24vh] float-right ml-5 mb-5"
            priority
          />
          <p>
            I recently completed my BSc in Computer Science from the University
            of Calgary, building on a previous BA in Digital Audio Arts from the
            University of Lethbridge. My background is somewhat unconventional,
            combining creative and technical disciplines, but a consistent theme
            throughout has been problem solving, systems thinking, and working
            in fast-paced environments.
          </p>
          <p>
            After graduating from my first degree in 2015, I spent time
            traveling before moving into the corporate audio/visual industry,
            where I worked on large-scale events such as conferences and
            conventions. This experience was foundational in developing strong
            technical troubleshooting skills, adaptability under pressure, and
            the ability to communicate effectively with both technical teams and
            non-technical clients. Working in live environments meant quickly
            diagnosing issues and implementing solutions in real time to ensure
            seamless execution.
          </p>
          <p>
            Over time, I realized I wanted to pursue a more deeply technical and
            growth-oriented career path. Through self-directed learning, I
            became increasingly interested in programming and software
            development, drawn by the complexity of the problems and the breadth
            of possibilities in the field. In 2020, I returned to school to
            study computer science.
          </p>
          <p>
            During my degree, I completed an internship with Gigadat Solutions,
            where I gained experience in both quality assurance and software
            development. I began in QA, working across multiple products, which
            gave me valuable insight into testing workflows and production
            environments. I later transitioned into a development role,
            contributing to backend work as the team migrated from a monolithic
            architecture to microservices. I developed an email notification
            microservice using TypeScript and AWS, and also worked on bug fixes
            and system improvements until the end of my internship, at which
            point I had to ruefully say farewell to everyone at Gigadat.
          </p>
          <p>
            Through my academic and personal projects, I’ve built full-stack
            applications using technologies such as React, FastAPI, PostgreSQL,
            and Docker. I’m particularly interested in backend and full-stack
            development, with a focus on building reliable, maintainable
            systems.
          </p>
          <p>
            Outside of tech, I’m a fitness enthusiast who enjoys obstacle course
            racing, hiking, strength training, reading, movies, videogames, and
            hobbyist electronics.
          </p>
        </div>
      </div>
    </div>
  );
}
