import Card from "@mui/material/Card";
import { Link } from "@mui/material";

const cardStyle = {
  width: "50%",
  height: "50%",
};

export default function Page() {
  return (
    <div className="text-center">
      <h1>Projects</h1>
      <div
        className="projects"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        <Card variant="outlined" sx={cardStyle}>
          <Link href="https://github.com/DavidJamesAdam/cpsc513-term-project-puppli">
            Puppli - Dog picture voting webapp
          </Link>
        </Card>

        <Card variant="outlined" sx={cardStyle}>
          <Link href="https://github.com/DavidJamesAdam/RED-Retro-Entertainment-Device-">
            RED - Retro Entertainment Device
          </Link>
        </Card>

        <Card variant="outlined" sx={cardStyle}>
          <Link href="https://github.com/DavidJamesAdam/HIC---The-Hiker-s-Information-Companion">
            HIC - Hikers Information Companion
          </Link>
        </Card>

        <Card variant="outlined" sx={cardStyle}>
          <Link href="https://github.com/DavidJamesAdam/CalgaryHacks-24">
            CSUS Calgary Hacks 2024 Hackathon
          </Link>
        </Card>
        <Card variant="outlined" sx={cardStyle}>
          <Link href="https://github.com/DavidJamesAdam/myFirstServer">
            Personal Backend Server (CRUD) project
          </Link>
        </Card>
        <Card variant="outlined" sx={cardStyle}>
          <Link href="https://github.com/DavidJamesAdam/family-history">
            Family History website
          </Link>
        </Card>
      </div>
    </div>
  );
}
