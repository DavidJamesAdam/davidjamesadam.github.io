type ForbiddenTextProps = {
  orientation?: "vertical" | "horizontal";
  text?: string;
};

export default function ForbiddenText({
  orientation = "vertical",
  text = "ACTIVATE",
}: ForbiddenTextProps) {
  if (orientation === "horizontal") {
    return (
      <div className="eldritch-font text-3xl tracking-[0.35em] md:text-4xl">
        {text}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {text.split("").map((letter, i) => (
        <div className="eldritch-font text-6xl" key={i}>
          {letter}
        </div>
      ))}
    </div>
  );
}
