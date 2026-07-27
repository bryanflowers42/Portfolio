/* Image slot with a built-in placeholder.
   Pass `src={null}` (the default in the content files) and you get a labelled
   placeholder. Drop a real path in and it renders the image instead. */

export default function Media({
  src,
  alt = "",
  label = "Image placeholder",
  ratio = "16 / 10",
  tone = "light",
  className = "",
  rounded = "rounded-panel",
}: {
  src?: string | null;
  alt?: string;
  label?: string;
  ratio?: string;
  tone?: "light" | "dark";
  className?: string;
  rounded?: string;
}) {
  const shellCls =
    tone === "dark"
      ? "bg-forest-card/60 border-canvas/10"
      : "bg-canvas-muted border-ink/[0.08]";

  return (
    <div
      className={`relative overflow-hidden border ${shellCls} ${rounded} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <div
            className={`absolute inset-0 ${
              tone === "dark" ? "bg-grid-paper-dark" : "bg-grid-paper"
            } opacity-70`}
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-[11px] ${
                tone === "dark"
                  ? "border-canvas/20 text-canvas/60"
                  : "border-ink/15 text-ink/40"
              }`}
              aria-hidden
            >
              IMG
            </span>
            <span
              className={`text-xs tracking-[-0.01em] ${
                tone === "dark" ? "text-canvas/60" : "text-ink/40"
              }`}
            >
              {label}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
