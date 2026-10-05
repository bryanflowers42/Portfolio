/* Renders copy where *words in asterisks* get the accent highlighter.
   On dark backgrounds the highlight becomes accent colored text instead. */
export default function Marked({
  text,
  invert = false,
}: {
  text: string;
  invert?: boolean;
}) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className={invert ? "text-accent" : "marker"}>
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

/** Plain text version (asterisks removed), for titles and alt text. */
export const unmark = (text: string) => text.replace(/\*/g, "");
