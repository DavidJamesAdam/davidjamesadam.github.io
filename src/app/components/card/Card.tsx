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
    <div className="card">
      <div className="flex flex-1">
        <Image
          src={picture}
          alt={`Preview of ${title}`}
          width={800}
          height={450}
          className="relative w-full min-h-[220px]"
        />
      </div>
      <div className="border-t-2">
        <div>{title}</div>
        <div>{description}</div>
        <div className="weathered-effect flex flex-row text-[#52f83c] justify-between">
          <Link href={link} target="_blank">
            Repo
          </Link>
          {/* <p>--&gt;</p> */}
        </div>
      </div>
    </div>
  );
}
