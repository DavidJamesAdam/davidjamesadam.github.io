import Image from "next/image";

export default function CatPage() {
  const imageDim = 60;
  
  return (
    <Image
      src="/cat_path1.svg"
      alt="Cat symbol"
      width={imageDim}
      height={imageDim}
      className="orange"
    />
  );
}
