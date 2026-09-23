type Blob = {
  position: string;
  color: string;
  duration: string;
  delay?: string;
};

const BLOBS: Blob[] = [
  {
    position: "-left-24 -top-10 h-96 w-96",
    color: "bg-blue-500/25",
    duration: "10s",
  },
  {
    position: "-right-16 top-1/4 h-[28rem] w-[28rem]",
    color: "bg-slate-400/20",
    duration: "12s",
    delay: "-2s",
  },
  {
    position: "-bottom-24 left-1/4 h-96 w-96",
    color: "bg-blue-400/20",
    duration: "11s",
    delay: "-4s",
  },
  {
    position: "-right-24 -bottom-16 h-96 w-96",
    color: "bg-slate-400/25",
    duration: "13s",
    delay: "-6s",
  },
];

export function SiteBackground() {
  return (
    <div className="hero-mesh fixed inset-0 z-0 overflow-hidden">
      {BLOBS.map((blob) => (
        <div
          key={blob.position}
          className={`animate-float will-change-transform absolute rounded-full blur-3xl ${blob.position} ${blob.color}`}
          style={{ animationDuration: blob.duration, animationDelay: blob.delay }}
        />
      ))}
    </div>
  );
}
