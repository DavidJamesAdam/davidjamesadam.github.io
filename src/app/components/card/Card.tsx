import Link from "next/link";
import Image from "next/image";

interface CardProps {
  picture: string;
  title: string;
  link: string;
  description: string;
}

export default function Card({ picture, title, link, description }: CardProps) {
  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="text-5xl weathered-effect">{title}</h2>
      <div className="py-5">
        <Image
          src={picture}
          alt={`Preview of ${title}`}
          width={800}
          height={450}
          className="rounded-xl object-contain shrink-0 w-auto h-full md:max-h-[36vh] max-h-[24vh] float-left py"
        />
        <div className="flex flex-col px-5">
          <h3 className="text-3xl">Description</h3>
          <div className="weathered-effect">{description}</div>
          <h3 className="text-3xl">What I learnt</h3>
          <div className="weathered-effect">What I learnt</div>
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
  );
}
