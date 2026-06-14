import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col h-screen overflow-hidden justify-around">
      <h1 className="text-center">Welcome!</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/profilePicture.jpg"
          alt="Profile Picture"
          style={{
            objectFit: "cover",
            borderRadius: "100px",
          }}
          width={500}
          height={38}
          priority
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}