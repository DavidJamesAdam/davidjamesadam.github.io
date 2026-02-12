import Image from "next/image";
import DavidButton from "../components/cpsc581-button/david-button";
import "./styles.css";

export default function Page() {
  return (
    <div className="bg-[#8DA779] w-full h-auto">
      <div className="justify-items-center mb-[10]">
        <Image
          className="object-cover rounded-xl"
          src="/welcome.svg"
          alt="Welcome image"
          width={500}
          height={38}
        />
      </div>
      <div className="mb-[100] relative w-full h-auto p-5">
        <div className="flex-1">
          <p className="splash-regular text-5xl mb-[20] flex-1">
            Initial Portfolio page design
          </p>
        </div>
        <div className="flex flex-row w-full h-auto p-3">
          <div className="relative w-1/3 h-auto">
            <Image
              className="rounded-xl object-cover w-full h-auto"
              src="/font_activity.jpg"
              alt="Results of the font activity"
              width={800}
              height={400}
            />
          </div>
          <div className="p-3">
            <p>Paragraph for a short descirption</p>
          </div>
        </div>
        <div className="flex flex-row w-auto h-auto p-3">
          <div className="relative w-1/3 h-auto">
            <Image
              className="rounded-xl object-cover w-full h-auto"
              src="/portfolio_activity.jpg"
              alt="Results of portfolio design activity"
              width={800}
              height={200}
            />
          </div>
          <div className="p-3">
            <p>Paragraph for a short descirption</p>
          </div>
        </div>
      </div>

      <div className="justify-items-end relative w-auto h-auto p-5">
        <div className="flex-1">
          <p className="splash-regular text-5xl mb-[20]">
            Group Project 1
          </p>
        </div>
        <div className="flex flex-row w-auto h-auto flex-1">
          <div className="p-3">
            <p>Paragraph for a short descirption</p>
          </div>
          <div className="relative w-1/3 h-auto flex-1">
            <Image
              className="rounded-xl object-cover w-full h-auto"
              src="/Group_project_1.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={400}
            />
          </div>
        </div>
        <div className="flex flex-row w-auto h-auto flex-1 p-3">
          <div className="p-3">
            <p>Paragraph for a short descirption</p>
          </div>
          <div>
            <DavidButton />
          </div>
        </div>
      </div>
    </div>
  );
}
