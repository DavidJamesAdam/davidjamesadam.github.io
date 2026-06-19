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
      <div>{title}</div>
      <div>
        <Image
          src={picture}
          alt={`Preview of ${title}`}
          width={800}
          height={450}
          className="rounded-xl object-contain shrink-0 w-auto h-full md:max-h-[36vh] max-h-[24vh] float-left"
        />

        <div className="flex flex-col">
          <div>{description}</div>
          <div className="flex flex-row text-[#52f83c] justify-between">
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
