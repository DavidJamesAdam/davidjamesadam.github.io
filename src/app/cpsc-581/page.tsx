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
        <div className="flex-1 rounded-xl bg-gradient-to-r from-[#4D744A] to-transparent">
          <p className="splash-regular">Initial Portfolio page design</p>
        </div>
        <div>
          <p className="splash-sub-header">Font Activity</p>
        </div>
        <div className="card-section">
          <div className="image-wrapper-fixed">
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
        <div className="text-right">
          <p className="splash-sub-header">Portfolio Page Design</p>
        </div>
        <div className="card-section">
          <div className="paragraph">
            <p>
              &emsp;I found this next activity to be quite a bit easier. I have
              a decent amount of experience with front-end webpage design, and
              have developed simple landing pages in the past. For the palette,
              I searched for a palette that would complement my love of forests
              and mountains, and lucky for me, there were plenty to choose from,
              so I chose one that had a good mix of earthy colours. For the
              layouts, since these were just sketches, I thought back to landing
              pages I&apos;ve done before, and created variations of some.
            </p>
          </div>
          <div className="image-wrapper-fixed">
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
        <div className="flex-1 rounded-xl text-right bg-gradient-to-l from-[#4D744A] to-transparent">
          <p className="splash-regular">Group Project 1</p>
        </div>
        <div className="text-right">
          <p className="splash-sub-header">Portfolio Page Design</p>
        </div>
        <div className="card-section">
          <div className="paragraph ">
            <p>
              &emsp;For our first group project, we were tasked with designing a
              button that respresented ourselves, and later, how our buttons
              would interact with each group member&apos;s buttons based on hor
              the group interacted. We learnt a technique in class called the
              &quot;10+10&quot; method. This method would involve sketching 10
              ideas, picking one (or more) and creating 10 iteration sketches
              based on what you picked. This really helped to give me a good
              starting point and allowed me to implement some actual design
              processes that I&apos;ve never used before.
            </p>
            <p>
              &emsp;When ever I&apos;ve made something, I&apos;ve always had a
              vision of what I wanted and then I just implemented that vision.
              There was no sketching or writing down ideas before hand. And
              through this implementation, I would discover what I would need to
              change (which later on, we learnt even this was a design process).
            </p>
            <p>
              &emsp;I was inspired by a classmate who was designing their button
              around a paint palette. I thought it was a pretty clever design,
              taking an object that represents a big part of you and designing a
              button around it. Thanks to this inspiration, I gravitated towards
              a record idea. Music has always been a part of my life and it
              seemed like an appropriate object to choose to create a button out
              of.
            </p>
          </div>
          <div className="image-wrapper-fixed">
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
        <div>
          <p className="splash-sub-header">Webpage Design</p>
        </div>
        <div className="card-section">
          <div className="image-wrapper-fixed">
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
              were partially inspired by another groups design where they used a
              house as their background, and figured using a bedroom as our
              background naturally fit with our button concepts. This idea came
              from each of our buttons depicted as objects that represented
              specific interests of ours (records, video games, snowboarding,
              etc) and most of these objects would naturally be found in
              someone&apos;s bedroom.
            </p>
            <p>
              &emsp;Instead of drawing the bedrorom ourselves, we searched for
              some (royalty free) images we coule use. We eventually came across
              an image of a bedroom with the perspective looking directly into
              the bedroom, which made positioning and figuring out what
              interactions to include pretty easy. I did a sketch of the image
              we found and started jotting down some ideas with how our buttons
              could interact. Continuing with the &quot;interest/object&quot;
              idea, we thought of some interests that we had in common. These
              interests would be depicted as objects in the bedroom, and
              whenever someone&apos;s button was clicked, the shared interest
              would do a little animation.
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="text-right">
          <p className="splash-sub-header">Webpage Implementation</p>
        </div>
        <div className="card-section">
          <div className="paragraph">
            <p>
              &emsp;This is a screenshot of our completed webpage. Since we had
              3 group members, there are 3 buttons that were clickable; the
              record (my button, as seen below), a closet that would reveal one
              group member&apos;s interests, and a TV that would turn on to
              represent another group member&apos;s interest in technology and
              videogames.
            </p>
          </div>
          <div className="image-wrapper-fixed">
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
        <div>
          <p className="splash-sub-header">My Button</p>
        </div>
        <div className="card-section">
          <div>
            <DavidButton />
          </div>
          <div className="paragraph flex-1">
            <p>
              &emsp;This is my button. As mentioned earlier, I chose a record
              based on inspiration from another classmate. To distinguish which
              objects were clickable, we decided to add emojis that represented
              an aspect of us that would &quot;sparkle&quot;. In addition, since
              my button was represented by a record, having the button play
              music and animate when clicked felt very appropriate. When
              clicked, the record spins, plays a song, and little music notes
              float up from the record. One small detail I really liked was the
              image included on the record. The song I chose was The Bard&apos;s
              Song by Blind Guardian (a midi version to avoid any copywrite
              issues). This song means a lot to me for many reasons, including
              the fact that it draws from The Lord of the Rings. The detail I
              added to the record was a cropped version of the album The
              Bard&apos;s Song comes from. Unfortuantely, it&apos;s a little
              small to see, but I thought it was a cute addition. Click the
              record to see it animate and listen to The Bard&apos;s Song by
              Blind Guardian.
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
        <div className="flex-1 rounded-xl bg-gradient-to-r from-[#4D744A] to-transparent">
          <p className="splash-regular">Group Project 2</p>
        </div>
        <div>
          <p className="splash-sub-header">Initial Design</p>
        </div>
        <div className="card-section">
          <div className="image-wrapper-fixed">
            <Image
              className="img"
              src="/Project_2_brainstorming_hand_landmarks_detection.png"
              alt="Project 2 inital concepts"
              width={800}
              height={200}
            />
          </div>
          <div className="paragraph">
            <p>
              &emsp;Group Project 2 involved coming up with a creative solution
              using using embodied input and output that would help an expert in
              CAD software remotely convey expertise to a novice. Personally, I
              wanted the expert to be able to navigate CAD software easily,
              since they would already know how it worked, and I wanted the
              novice to use keyboard and mouse because they are the ones who
              need to know how to navigate the menus, understand what different
              functions are, etc., but I needed a way that would give positive
              feedback to the novice when they were correct.
            </p>
            <p>
              &emsp;Our group somewhat arbitrarily had decided on using hand
              landmarks detection. There were plenty of interesting embodied
              input routes to take, but hand landmarks detection served as an
              interesting and interactive solution to explore. For my main
              design, the Expert would use gestures as a sort of shortcut to
              quickly change functions and manipulate objects on the screen. As
              mentioned earlier, I wanted the Expert to quickly navigate the CAD
              software so they can properly convey their expertise, so instead
              of navigating through menus, the expert could create a gesture
              with their left hand that would select a common function to use.
              Then, when manipulating an object, a ghost outline would appear
              for the novice to then manipulate.
            </p>
            <p>
              &emsp;For the novice, receiving proper feedback was very important
              to indicate they were correctly following the experts
              instructions. Using keyboard and mouse, the novice would use the
              ghost object left over from the Experts instruction, preform an
              action, and if the novice correctly accomplished the action, a
              &quot;ding&quot; would sound.
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="text-right">
          <p className="splash-sub-header">Conveying Expertese</p>
        </div>
        <div className="card-section">
          <div className="paragraph">
            <p>
              &emsp;Having the Expert navigate the CAD software in an
              interesting way and having the Novice receive feedback was only
              part of the project. The core of it was how the expert would
              convey their expertise. During an in-class activity, a group
              member came up with recording actions for the activity, and this
              felt like a clever way to help the Expert show which steps to take
              while teaching a novice.
            </p>
            <p>
              &emsp;The images included on the right show our design for
              allowing the expert to record steps, and how the novice would
              interact with those steps (in the Expert sketch, we initially had
              them using a keyboard and mouse, but we later changed that to a
              gesture to start and stop the recording). The decision behind this
              partially stemmed from my own experience with CAD. Most tutorials
              I watched went pretty quickly, and I found I had to constantly
              rewind the video to see what step was taken. With giving the
              Expert the functionality to record steps, this would allow the
              Novice the ability to replay that specific step as much as they
              wanted and would help them go at their own pace.
            </p>
          </div>
          <div className="flex flex-col w-2/5 flex-shrink-0">
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
        <div>
          <p className="splash-sub-header">Implementation</p>
        </div>
        <div className="card-section">
          <div className="flex flex-col w-2/5 flex-shrink-0">
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
          </div>
          <div>
            <div className="paragraph mb-5">
              <p>
                &emsp;The images on the left and below show our implementation. While the
                group was creating the implementation, we discovered using
                simple had gestures worked best with the hand gesture software.
                We had the idea of using ASL for specific gestures, but the
                software had a hard time reading some of the gestures. We had a
                specific gesture to select/deselct the object, gestures to
                select which operation to perform, and gestures to select which
                axis to perform the operation on.
              </p>
              <p>
                &emsp;Unfortunately, due to some technical issues, we were not
                able to implement the recording feature, although we did include
                gestures for startings and stopping the recording.
              </p>
            </div>
            <div className="image-wrapper mx-5">
              <Image
                className="img"
                src="/P2_X_Axis.png"
                alt="Results of portfolio design activity"
                width={800}
                height={200}
              />
            </div>
          </div>
        </div>
        <hr className="border-black" />
        <div className="text-right">
          <p className="splash-sub-header">Interactive example</p>
        </div>
        <div className="card-section">
          <div className="paragraph">
            <p>
              &emsp;I&apos;ve included a basic interactive example.
              Unfortunately I wasn&apos;t quite able to get the webcam/gesture
              tracking working at the time of writing this, but you can still
              interact with the cube on the right. Click the cube to select.
              Click outside the cube to deselect. Click and drag outside the
              cube to rotate the cube. Once cube is selected, press W on the
              keyboard to select the translate option, E to select the rotate
              option, and R to select the scale option. There is a small bug
              that if you select one of the handles to manipulate the cube where
              the selection happens off the cube, the cube will be deselected.
            </p>
          </div>
          <div className="relative w-1/3 h-auto shadow-lg rounded-xl">
            <ThreeScene/>
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
        <div className="flex-1 rounded-xl text-right bg-gradient-to-l from-[#4D744A] to-transparent">
          <p className="splash-regular">Group Project 3</p>
        </div>
        <div className="text-right">
          <p className="splash-sub-header">Initial Concepts</p>
        </div>
        <div className="card-section">
          <div className="paragraph">
            <p>
              &emsp;Our third and final group project had us augmenting everyday
              objects using physical computing to help improve the experience of
              eating together. Before thinking of concepts, I really wanted to
              explore what &quot;improving&quot; and &quot;eating together&quot;
              meant. For me, eating together has a very strong social component,
              so I wanted my designs to focus on and improve the sociability of
              eating together. And as for &quot;eating together&quot;, I had
              realized eating together doesn&apos;t necessarily mean sitting
              down, say for instance being at a party, potluck, work function,
              etc. This really helped to expand what my designs could do.
            </p>
            <p>
              &emsp;For my concepts, I chose an object at random (an object
              specifically related to eating), then 1 to 3 inputs and outputs
              per object and tried to think of ways to use those constraints to
              satisfy some aspects of the project. I really wanted to push
              myself to explore different objects, sensors, and outputs and try
              my best to practice convergence and divergence of ideas to really
              explore the full spectrum of what was possible given my selection.
              The image on the right shows 4 concepts I came up with, of which I
              sketched and explored 3 of them.
            </p>
          </div>
          <div className="image-wrapper-fixed">
            <Image
              className="img"
              src="/Group_Project_3_initial_concepts.png"
              alt="Screenshot of Group Project 3 initial concepts"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="border-black" />
        <div>
          <p className="splash-sub-header">Prompt Cup Sketch</p>
        </div>
        <div className="card-section">
          <div className="image-wrapper-fixed">
            <Image
              className="img"
              src="/Group_Project_3_Prompt_cup_sketch.png"
              alt="Screenshot of Group Project 3 Prompt Cup sketch"
              width={800}
              height={200}
            />
          </div>
          <div className="paragraph">
            <p>
              &emsp;To the left shows my inital sketch for what was initially
              the Prompt Plate. Since I wanted to really explore divergence and
              convergence, I wanted to take that idea and see if I could apply
              it to other objects, and if it would make sense to do so. I
              settled on a cup for many reasons, but the most obvious one in my
              mind is that plates get messy, which could cause visibility issues
              for the OLED screen that displayed the prompts. I also had the
              idea where each prompt was associated with a specific LED colour,
              and if two people had the same prompt, their cups would have the
              same colour, indicating they could strike up a conversation based
              on their shared prompt. This wouldn&apos;t have worked with a plate
              if someone was sitting down. It would have been very awkward to
              get up with a plate of food and try and squeeze in beside someone
              to talk to them. This design we ultimately went with due to how it
              fit multiple criteria we were looking for with sociability.
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="text-right">
          <p className="splash-sub-header">Popular Dish Indicator Sketch</p>
        </div>
        <div className="card-section">
          <div className="paragraph">
            <p>
              &emsp;My next sketch involved determining popular dishes at some
              sort of gathering, such as a potluck. As I iterated on this idea,
              since the colours of the LEDs would change based on interaction,
              this would imply the dish is keeping track of the number of
              interactions, so I included the idea of adding a small screen to
              the table the dishes are on to display the top X dishes. When
              thinking of this design, my goal was to get people curious about
              the dishes at these events and hopefully build connections by
              exchanging recipes. However, after presenting this to the group,
              we discovered that this design could create bias towards the
              popular dishes, leaving the less popular dishes untouched and
              possibly upset dinner guests. So we did not pursue this further.
            </p>
          </div>
          <div className="image-wrapper-fixed">
            <Image
              className="img"
              src="/Group_Project_3_pop_dish_sketch.png"
              alt="Screenshot of Group Project 3 Popular Dish sketch"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="border-black" />
        <div>
          <p className="splash-sub-header">Cheers Indicator Sketch</p>
        </div>
        <div className="card-section">
          <div className="image-wrapper-fixed">
            <Image
              className="img"
              src="/Group_Project_3_cheers_indicator_sketch.png"
              alt="Screenshot of Group Project 3 Cheers Indicator Sketch"
              width={800}
              height={200}
            />
          </div>
          <div className="paragraph">
            <p>
              &emsp;To the left shows my sketch for the cheers indicator.
              Cheersing (or toasting) is a common event when eating
              together, so I wanted to try and improve that action. When
              toasting, there&apos;s usually a heightened level of excitment and
              noise, so I wanted to capitalize on that using LEDs and sounds.
            </p>
            <p>
              &emsp;Toasting typically involves a kind of celebration, so to
              improve this, when a cheers was made, LEDs on the cups would
              either sync up, or play some crazy pattern, in addtion to some
              fanfair or additional cheering noises being played. When thinking
              about this design further, I wanted something that was ubiquitous
              throughout the eating experience, and not something that just
              happened every once in a while. So we ultimately did not decide on
              this design due to only a chance a cheers would happen at a get
              together (or if at all).
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="text-right">
          <p className="splash-sub-header">Prompt Cup Iterations</p>
        </div>
        <div className="card-section">
          <div className="paragraph">
            <p>
              &emsp;With wanting to explore convergence and divergence, and
              focusing on many iterations, the screenshot on the right shows a
              few iterations I wanted to implement. I had a couple criteria in
              mind; keep improving on the sociablity aspect, and see if I could
              work in other sensors/outputs if possible. Despite some technical
              limitations of some of the iterations, we chose to try and
              implement iteration A into our design. This would give the user
              more functionality to help strike up conversations. Unfortunately,
              this was very hard to implement, so it did not appear in our final
              implementation.
            </p>
          </div>
          <div className="image-wrapper-fixed">
            <Image
              className="img"
              src="/Group_Project_3_prompt_cup_iterations.png"
              alt="Screenshot of Group Project 3 Prompt Cup Iterations"
              width={800}
              height={200}
            />
          </div>
        </div>
        <hr className="border-black" />
        <div>
          <p className="splash-sub-header">CAD Design</p>
        </div>
        <div className="card-section">
          <div className="image-wrapper-fixed">
            <Image
              className="img"
              src="/CAD_design.png"
              alt="Screenshot of Group Project 3 CAD Design"
              width={800}
              height={200}
            />
          </div>
          <div className="paragraph">
            <p>
              &emsp;Our design came from referencing different beer glass images
              online. There wasn&apos;t a specific type of glass we went with,
              but we wanted to design the cup such that it would be easy to
              hold. We could only do one 3D print of this due to the print being
              more than 15 hours total, so unfortunately we couldn&apos;t
              iterate on the actual design of our cup, but the image on the left
              shows what our model looked like.
            </p>
          </div>
        </div>
        <hr className="border-black" />
        <div className="text-right">
          <p className="splash-sub-header">Prompt Cup Implementation</p>
        </div>
        <div className="card-section">
          <div>
            <div className="paragraph mb-5">
              <p>
                &emsp;The series of photos on the right and below shows our
                implementation of the Prompt Cup. The two photos on the right
                show the &quot;guts&quot; of the cup, while the photos below are
                screenshots of a video. Unfortunately, due to not knowing how
                bright the RGB LED would be in the print, and the actual base of
                the cup not being as translucent as I wanted it to be, the video
                needed to be recorded in the dark to properly show the LED
                functionality. But I hope the screenshots properly convey what
                is going on.
              </p>
            </div>
            <div className="mx-5">
              <div className="image-wrapper mb-3">
                <Image
                  className="img"
                  src="/OLED.png"
                  alt="Screenshot of Group Project 3 OLED screen"
                  width={800}
                  height={200}
                />
              </div>
              <div className="image-wrapper mb-3">
                <Image
                  className="img"
                  src="/LED.png"
                  alt="Screenshot of Group Project 3 LED at the bottom of the cup"
                  width={800}
                  height={200}
                />
              </div>
              <div className="image-wrapper mb-3">
                <Image
                  className="img"
                  src="/LED_BLUE.png"
                  alt="Screenshot of Group Project 3 Blue LED"
                  width={800}
                  height={200}
                />
              </div>
              <div className="image-wrapper mb-3">
                <Image
                  className="img"
                  src="/LED_GREEN.png"
                  alt="Screenshot of Group Project 3 Green LED"
                  width={800}
                  height={200}
                />
              </div>
              <div className="image-wrapper mb-3">
                <Image
                  className="img"
                  src="/LED_RED.png"
                  alt="Screenshot of Group Project 3 Red LED"
                  width={800}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/5 flex-shrink-0">
            <div className="image-wrapper mb-3">
              <Image
                className="img"
                src="/OLED_prompt.jpg"
                alt="Screenshot of Group Project 3 OLED screen"
                width={800}
                height={200}
              />
            </div>
            <div className="image-wrapper mb-3">
              <Image
                className="img"
                src="/guts_of_hardware.jpg"
                alt="Screenshot of Group Project 3 OLED screen"
                width={800}
                height={200}
              />
            </div>
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
