import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import "./styles.css"

type CardProps = {
  picture?: string;
  video?: string;
  title: string;
  description: ReactNode;
  learnt: ReactNode;
  techStack: string[];
  link: string;
};

export default function Card({
  picture,
  video,
  title,
  description,
  learnt,
  techStack,
  link,
}: CardProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="weathered-effect">{title}</h2>
      <div className="flex md:flex-row flex-col py-5 flex-1 min-h-0">
        {video ? (
          <video className="md:w-[30%]" controls>
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          picture && (
            <Image
              src={picture}
              alt={`Preview of ${title}`}
              width={800}
              height={450}
              className="rounded-xl object-contain shrink-0 w-auto h-full md:max-h-[36vh] max-h-[24vh] float-left py"
            />
          )
        )}
        <div className="flex flex-col md:px-5 justify-between overflow-y-auto min-h-0">
          <div className="card-section">
            <h3 className="text-3xl">Description</h3>
            <div>{description}</div>
          </div>
          <div className="card-section">
            <h3 className="text-3xl">What I learnt</h3>
            <div>{learnt}</div>
          </div>
          <div className="card-section">
            <h3 className="text-3xl">Tech Stack</h3>
            <div className="flex flex-wrap">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-full border border-purple-800 bg-[var(--secondary-text)] px-3 py-1 m-1 transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="card-section">
            <h3 className="text-3xl">Link to Repo</h3>
            <div className="flex flex-row text-[#52f83c] justify-between weathered-effect">
              <Link href={link} target="_blank">
                Repo
              </Link>
              {/* <p>--&gt;</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
