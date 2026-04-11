import Image from "next/image";
// import { Card } from "@mui/material";
import DavidButton from "../components/cpsc581-button/david-button";
import ThreeScene from "../components/threejs-cube";
import "./styles.css";

export default function Page() {
  return (
    <div className="bg-[var(--background)] w-full h-auto">
      <div className="justify-items-center mb-2">
        <Image
          className="object-cover rounded-xl"
          src="/welcome.svg"
          alt="Welcome image"
          width={500}
          height={38}
        />
      </div>
      <div className="mb-24 relative w-full h-auto p-5 bg-[var(--foreground)] rounded-3xl">
        {/* <Card
          variant="outlined"
          className="p-5"
          sx={{ backgroundColor: "var(--foreground)" }}
        > */}
        <div className="flex-1">
          <p className="splash-regular text-5xl mb-5 flex-1">
            Initial Portfolio page design
          </p>
        </div>
        <div className="flex flex-row w-full h-auto p-3">
          <div className="relative w-1/3 h-auto flex-shrink-0">
            <Image
              className="rounded-xl object-cover w-full h-auto"
              src="/font_activity.jpg"
              alt="Results of the font activity"
              width={800}
              height={400}
            />
          </div>
          <div className="p-3">
            <p>
              Our very first activity was to pick a font that I felt resembled
              me. I totally understood the idea behind it, but I was also
              completely baffled. How on earth does a <i>font</i> represent a
              person. I started to think of what I was interested in, and I
              figured that was the best place to start. At the time, I had just
              seen Guillermo del Toro&apos;s <i>Frankenstein</i>, so I was in a
              bit of a classic horror headspace. So after some searching, I came
              across the SPlash font. Not only did it remind me of a mad
              scientist&apos;s writing, but it also reminded me of how fantasy
              character&apos;s would write, in say, something like THe Lord of
              the Rings. Due to the time constraint of the activity, I figured
              this was the best, (and my most favourite style-wise) font to
              choose.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-auto h-auto p-3">
          <div className="relative w-1/3 h-auto flex-shrink-0">
            <Image
              className="rounded-xl object-cover w-full h-auto"
              src="/portfolio_activity.jpg"
              alt="Results of portfolio design activity"
              width={800}
              height={200}
            />
          </div>
          <div className="p-3">
            <p>
              I foudn this next activity to be quite a bit easier. I have a
              decent amount of experience with front-end webpage design, and
              have developed simple landing pages in the past. For the palette,
              I searched for a palette that would comple my love of pine forests
              and mountains, and lucky for me, there were plenty to choose from,
              so I chose one that had a good mix of earty colours. For the
              layouts, since these were just sketches, I thought back to landing
              pages I&apos;ve done before, and created variations of some.
            </p>
          </div>
        </div>
        {/* </Card> */}
      </div>
      <div className="relative w-full h-auto p-5 mb-24 bg-[var(--foreground)] justify-items-end rounded-3xl">
        {/* <Card
          variant="outlined"
          className="p-5 justify-items-end"
          sx={{ backgroundColor: "var(--foreground)" }}
        > */}
        <div className="flex-1">
          <p className="splash-regular text-5xl mb-5">Group Project 1</p>
        </div>
        <div className="flex flex-row w-auto h-auto p-3">
          <div className="p-3">
            <p>Paragraph for a short descirption</p>
          </div>
          <div className="flex-1 relative">
            <Image
              className="rounded-xl object-cover"
              src="/Group_project_1.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-row w-auto h-auto p-3">
          <div className="p-3 flex-1">
            <p>
              This is my button for Project 1. Click it to see it animate and
              hear a (midi) version of The Bard Song by Blind Guardian play.
            </p>
          </div>
          <div>
            <DavidButton />
          </div>
        </div>
        {/* </Card> */}
      </div>

      <div className="relative w-full h-auto p-5 mb-24 bg-[var(--foreground)] rounded-3xl">
        {/* <Card
          variant="outlined"
          className="p-5"
          sx={{ backgroundColor: "var(--foreground)" }}
        > */}
        <div className="flex-1">
          <p className="splash-regular text-5xl mb-5 flex-1">Group Project 2</p>
        </div>
        <div className="flex flex-row w-full h-auto p-3">
          <div>
            <div className="relative w-[800px] h-auto">
              <Image
                className="rounded-xl object-cover w-full h-auto"
                src="/P2_Select.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
            <div className="relative w-[800px] h-auto">
              <Image
                className="rounded-xl object-cover w-full h-auto"
                src="/P2_Translate.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
            <div className="relative w-[800px] h-auto">
              <Image
                className="rounded-xl object-cover w-full h-auto"
                src="/P2_X_Axis.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
          </div>
          <div className="p-3">
            <p>Paragraph for a short descirption</p>
          </div>
        </div>
        <div className="flex flex-row w-full h-auto p-3">
          <div className="relative w-1/3 h-auto">
            <ThreeScene />
          </div>
          <div className="p-3">
            <p>
              Click the cube to select. Click outside the cube to deselect.
              Click and drag outside the cube to rotate the cube. Once cube is
              selected, press W on the keyboard to select the translate option,
              E to select the rotate option, and R to select the scale option.
              There is a small bug that if you select one of the handles to
              manipulate the cube where the selection happens off the cube, the
              cube will be deselected.
            </p>
          </div>
        </div>
        {/* </Card> */}
      </div>

      <div className="relative w-full h-auto p-5 bg-[var(--foreground)] justify-items-end rounded-3xl">
        {/* <Card
          variant="outlined"
          className="p-5 justify-items-end"
          sx={{ backgroundColor: "var(--foreground)" }}
        > */}
        <div className="flex-1">
          <p className="splash-regular text-5xl mb-5">Group Project 3</p>
        </div>
        <div className="flex flex-row w-auto h-auto p-3">
          <div className="p-3">
            <p>Paragraph for a short descirption</p>
          </div>
          <div className="flex-1 relative">
            <Image
              className="rounded-xl object-cover"
              src="/CAD_design.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-row w-auto h-auto p-3">
          <div className="p-3">
            <p>Paragraph for a short descirption</p>
          </div>
          <div className="flex-1 relative">
            <Image
              className="rounded-xl object-cover"
              src="/OLED.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-row w-auto h-auto p-3">
          <div className="p-3">
            <p>Paragraph for a short descirption</p>
          </div>
          <div>
            <div className="flex-1 relative">
              <Image
                className="rounded-xl object-cover"
                src="/LED.png"
                alt="Screenshot of Group Project 1"
                width={800}
                height={200}
              />
            </div>
            <div className="flex-1 relative">
              <Image
                className="rounded-xl object-cover"
                src="/LED_BLUE.png"
                alt="Screenshot of Group Project 1"
                width={800}
                height={200}
              />
            </div>
            <div className="flex-1 relative">
              <Image
                className="rounded-xl object-cover"
                src="/LED_GREEN.png"
                alt="Screenshot of Group Project 1"
                width={800}
                height={200}
              />
            </div>
            <div className="flex-1 relative">
              <Image
                className="rounded-xl object-cover"
                src="/LED_RED.png"
                alt="Screenshot of Group Project 1"
                width={800}
                height={200}
              />
            </div>
          </div>
        </div>
        {/* </Card> */}
      </div>
    </div>
  );
}
