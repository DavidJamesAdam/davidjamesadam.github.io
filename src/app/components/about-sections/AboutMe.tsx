import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
      <div className="text-center flex-1">
        <h2 className="weathered-effect text-3xl">// About Me</h2>
      </div>
      <div>
        {/* <Image
          src="/profilePicture.jpg"
          alt="Profile Picture"
          style={{
            objectFit: "cover",
            borderRadius: "100px",
          }}
          width={500}
          height={38}
          priority
        /> */}
      </div>
    </div>
  );
}
