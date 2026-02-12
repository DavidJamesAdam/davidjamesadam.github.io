"use client";

import Card from "@mui/material/Card";
import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center w-full justify-items-center">
      <h1>Projects</h1>
      <div className="projects flex flex-col justify-items-center">
        <Card className="p-5 m-5" variant="outlined">
          <Link
            href="https://github.com/DavidJamesAdam/cpsc513-term-project-puppli"
            target="_blank"
          >
            Puppli - Dog picture voting webapp
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
            href="https://github.com/DavidJamesAdam/CalgaryHacks-24"
            target="_blank"
          >
            CSUS Calgary Hacks 2024 Hackathon
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

        <Card className="p-5 m-5" variant="outlined">
          <Link
            href="https://github.com/DavidJamesAdam/family-history"
            target="_blank"
          >
            Family History website
          </Link>
        </Card>
      </div>
    </div>
  );
}
