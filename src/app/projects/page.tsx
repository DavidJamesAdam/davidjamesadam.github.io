"use client";

import Card from "@mui/material/Card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-screen overflow-hidden justify-around">
      <h1 className="weathered-effect text-8xl">Recent<br/>Conjurations</h1>
      <div className="projects flex flex-row justify-items-center ">
        <Card className="p-5 m-5 h-full" variant="outlined">
          <Link
            href="https://github.com/DavidJamesAdam/cpsc513-project-puppli"
            target="_blank"
          >
            Puppli - Dog picture voting webapp
          </Link>
        </Card>

        <Card className="p-5 m-5" variant="outlined">
          <Link
            href="https://github.com/DavidJamesAdam/cpsc471-project-SmartPantry"
            target="_blank"
          >
            SmartPantry - Recipe, home inventory, and grocery tracker
          </Link>
        </Card>

        <Card className="p-5 m-5" variant="outlined">
          <Link
            href="https://github.com/DavidJamesAdam/RED-Retro-Entertainment-Device-"
            target="_blank"
          >
            RED - Retro Entertainment Device
          </Link>
        </Card>

        <Card className="p-5 m-5" variant="outlined">
          <Link
            href="https://github.com/DavidJamesAdam/HIC---The-Hiker-s-Information-Companion"
            target="_blank"
          >
            HIC - Hikers Information Companion
          </Link>
        </Card>

        <Card className="p-5 m-5" variant="outlined">
          <Link
            href="https://github.com/DavidJamesAdam/myFirstServer"
            target="_blank"
          >
            Personal Backend Server (CRUD) project
          </Link>
        </Card>

        {/* <Card className="p-5 m-5" variant="outlined">
          <Link
            href="https://github.com/DavidJamesAdam/family-history"
            target="_blank"
          >
            Family History website
          </Link>
        </Card> */}
      </div>
      <div className="text-[#894fad] weathered-effect">
        <a href="https://github.com/DavidJamesAdam">&gt; VIEW ALL PROJECTS</a>
      </div>
    </div>
  );
}
