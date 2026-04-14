import Image from "next/image";
// import { Card } from "@mui/material";
import DavidButton from "../components/cpsc581-button/david-button";
import ThreeScene from "../components/threejs-cube";
import "./styles.css";

export default function Page() {
  return (
    <div className="bg-[var(--background)] w-full h-auto px-3 pb-3">
      <div id="Top" className="justify-items-center mb-2">
        <Image
          className="object-cover rounded-xl"
          src="/welcome.svg"
          alt="Welcome image"
          width={500}
          height={38}
        />
        <div className="w-2/3 flex justify-between">
          <a href="#InitialPortfolioPageDesign" className="nav-link">
            Initial Portfolio Page Design
          </a>
          <a href="#GroupProject1" className="nav-link">
            Group Project 1
          </a>
          <a href="#GroupProject2" className="nav-link">
            Group Project 2
          </a>
          <a href="#GroupProject3" className="nav-link">
            Group Project 3
          </a>
        </div>
      </div>
      <div id="InitialPortfolioPageDesign" className="card">
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
        <div className="card-section">
          <div className="image-wrapper">
            <Image
              className="img"
              src="/font_activity.jpg"
              alt="Results of the font activity"
              width={800}
              height={400}
            />
          </div>
          <div className="paragraph">
            <p>
              &emsp;Our very first activity was to pick a font that I felt
              resembled me. I totally understood the idea behind it, but I was
              also completely baffled. How on earth does a <i>font</i> represent
              a person. I started to think of what I was interested in, and I
              figured that was the best place to start. At the time, I had just
              seen Guillermo del Toro&apos;s <i>Frankenstein</i>, so I was in a
              bit of a classic horror headspace. So after some searching, I came
              across the Splash font. Not only did it remind me of a mad
              scientist&apos;s writing, but it also reminded me of how fantasy
              character&apos;s would write, in say, something like The Lord of
              the Rings. Due to the time constraint of the activity, I figured
              this was the best, (and my most favourite style-wise) font to
              choose.
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="paragraph">
            <p>
              &emsp;I found this next activity to be quite a bit easier. I have
              a decent amount of experience with front-end webpage design, and
              have developed simple landing pages in the past. For the palette,
              I searched for a palette that would comple my love of pine forests
              and mountains, and lucky for me, there were plenty to choose from,
              so I chose one that had a good mix of earty colours. For the
              layouts, since these were just sketches, I thought back to landing
              pages I&apos;ve done before, and created variations of some.
            </p>
          </div>
          <div className="image-wrapper">
            <Image
              className="img"
              src="/portfolio_activity.jpg"
              alt="Results of portfolio design activity"
              width={800}
              height={200}
            />
          </div>
        </div>
        <div className="w-auto flex justify-end">
          <a href="#Top" className="nav-link">
            Back to top
          </a>
        </div>
        {/* </Card> */}
      </div>

      <div id="GroupProject1" className="card">
        {/* <Card
          variant="outlined"
          className="p-5 justify-items-end"
          sx={{ backgroundColor: "var(--foreground)" }}
        > */}
        <div className="flex-1 text-right">
          <p className="splash-regular text-5xl mb-5">Group Project 1</p>
        </div>
        <div className="card-section">
          <div className="paragraph ">
            <p>
              &emsp;For our first group project, we were tasked with designing a
              button that respresented us, and later, how our buttons would
              interact with each group member&apos;s buttons. We learnt a
              technique in class called the &quot;10+10&quot; method. This
              method would involve sketching 10 ideas, picking one (or more) and
              creating 10 iteration sketches based on what you picked. This
              really helped to give me a good starting point and allowed me to
              implement some actual design processes that I&apos;ve never used
              before.
            </p>
            <p>
              &emsp;When ever I&apos;ve made something, I&apos;ve always had a
              vision of what I wanted and then I just implemented that vision.
              There was no foresight so to speak before hand. Through this
              implementation, I would discover what I would need to change
              (which later on, we learnt even this was a design process).
            </p>
            <p>
              &emsp;I was inspired by a classmate who was designing their button
              around a paint palette. I thought it was a pretty clever design,
              taking an object that represents a big part of you and design a
              button around it. Thanks to this inspiration, I gravitated towards
              a record idea. Music has always been a part of my life and it
              seemed like an appropriate object to choose to create a button out
              of.
            </p>
          </div>
          <div className="image-wrapper">
            <Image
              className="img"
              src="/Project_1_brainstorming.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="image-wrapper">
            <Image
              className="img"
              src="/Project_1_brainstorming_webpage_design.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
          <div className="paragraph">
            <p>
              &emsp;When deciding on how we wanted to display our buttons, we
              figured using a bedroom as our background made sense. This idea
              sort of naturally came from each of our buttons depicted as
              objects that represented specific interests of ours (records,
              video games, snowboarding
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
          <div className="image-wrapper">
            <Image
              className="img"
              src="/Group_project_1.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div>
            <DavidButton />
          </div>
          <div className="paragraph flex-1">
            <p>
              This is my button for Project 1. Click it to see it animate and
              hear a (midi) version of The Bard Song by Blind Guardian play.
            </p>
          </div>
        </div>
        <div className="w-auto flex justify-end">
          <a href="#Top" className="nav-link">
            Back to top
          </a>
        </div>
        {/* </Card> */}
      </div>

      <div id="GroupProject2" className="card">
        {/* <Card
          variant="outlined"
          className="p-5"
          sx={{ backgroundColor: "var(--foreground)" }}
        > */}
        <div className="flex-1">
          <p className="splash-regular text-5xl mb-5 flex-1">Group Project 2</p>
        </div>
        <div className="card-section">
          <div>
            <div className="image-wrapper">
              <Image
                className="img"
                src="/Project_2_brainstorming_hand_landmarks_detection.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
          </div>
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
          <div>
            <div className="image-wrapper mb-3">
              <Image
                className="img"
                src="/Project_2_brainstorming_recording_steps.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
            <div className="image-wrapper">
              <Image
                className="img"
                src="/Project_2_brainstorming_step_recording_implementation.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div>
            <div className="image-wrapper mb-3">
              <Image
                className="img"
                src="/P2_Select.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
            <div className="image-wrapper mb-3">
              <Image
                className="img"
                src="/P2_Translate.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
            <div className="image-wrapper">
              <Image
                className="img"
                src="/P2_X_Axis.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
          </div>
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="paragraph">
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
          <div className="relative w-1/3 h-auto shadow-lg rounded-xl">
            <ThreeScene />
          </div>
        </div>
        <div className="w-auto flex justify-end">
          <a href="#Top" className="nav-link">
            Back to top
          </a>
        </div>
        {/* </Card> */}
      </div>

      <div id="GroupProject3" className="card">
        {/* <Card
          variant="outlined"
          className="p-5 justify-items-end"
          sx={{ backgroundColor: "var(--foreground)" }}
        > */}
        <div className="flex-1 text-right">
          <p className="splash-regular text-5xl mb-5">Group Project 3</p>
        </div>
        <div className="card-section">
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
          <div className="image-wrapper">
            <Image
              className="img"
              src="/Group_Project_3_initial_concepts.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="image-wrapper">
            <Image
              className="img"
              src="/Group_Project_3_prompt_cup_sketch.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
          <div className="image-wrapper">
            <Image
              className="img"
              src="/Group_Project_3_initial_concepts.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="image-wrapper">
            <Image
              className="img"
              src="/Group_Project_3_prompt_cup_sketch.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
          <div className="image-wrapper">
            <Image
              className="img"
              src="/Group_Project_3_initial_concepts.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="image-wrapper">
            <Image
              className="img"
              src="/CAD_design.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
          <div className="image-wrapper">
            <Image
              className="img"
              src="/OLED.png"
              alt="Screenshot of Group Project 1"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="border-black" />
        <div className="card-section">
          <div>
            <div className="image-wrapper mb-3">
              <Image
                className="img"
                src="/LED.png"
                alt="Screenshot of Group Project 1"
                width={800}
                height={200}
              />
            </div>
            <div className="flex-1 image-wrapper mb-3">
              <Image
                className="img"
                src="/LED_BLUE.png"
                alt="Screenshot of Group Project 1"
                width={800}
                height={200}
              />
            </div>
            <div className="flex-1 image-wrapper mb-3">
              <Image
                className="img"
                src="/LED_GREEN.png"
                alt="Screenshot of Group Project 1"
                width={800}
                height={200}
              />
            </div>
            <div className="flex-1 image-wrapper mb-3">
              <Image
                className="img"
                src="/LED_RED.png"
                alt="Screenshot of Group Project 1"
                width={800}
                height={200}
              />
            </div>
          </div>
          <div className="paragraph">
            <p>Paragraph for a short descirption</p>
          </div>
        </div>
        <div className="w-auto flex justify-end">
          <a href="#Top" className="nav-link">
            Back to top
          </a>
        </div>
        {/* </Card> */}
      </div>
    </div>
  );
}
