import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center">Welcome!</h1>
      <div id="secure-site-badge"></div>
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
        <div id="verified-business-badge"></div>
        <div id="truly-legit-badge"></div>
      </footer>
    </div>
  );
}
