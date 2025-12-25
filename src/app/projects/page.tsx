import Link from "next/link";
export default function Page() {
  return (
    <div className="text-center">
      <h1>Projects</h1>
      <div className="projects">
        <Link href="https://github.com/DavidJamesAdam/cpsc513-term-project-puppli">Puppli - Dog picture voting webapp</Link><br/>
        <Link href="https://github.com/DavidJamesAdam/RED-Retro-Entertainment-Device-">RED - Retro Entertainment Device</Link><br/>
        <Link href="https://github.com/DavidJamesAdam/HIC---The-Hiker-s-Information-Companion">HIC - Hikers Information Companion</Link><br/>
        <Link href="https://github.com/DavidJamesAdam/CalgaryHacks-24">CSUS Calgary Hacks 2024 Hackathon</Link><br/>
        <Link href="https://github.com/DavidJamesAdam/myFirstServer">Personal Backend Server (CRUD) project</Link>
        <Link href="https://github.com/DavidJamesAdam/family-history">Family History website</Link>
      </div>
    </div>
  );
}