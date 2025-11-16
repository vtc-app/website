export function TextBackgroundShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
      {/* Very Subtle Gold Highlight - Behind Title Area */}
      <div className="absolute top-8 left-0 w-[80%] md:w-[75%] h-24 md:h-32 bg-gradient-to-r from-secondary/2 via-secondary/3 to-transparent blur-2xl rounded-r-full"></div>

      {/* Subtle Gold Accent - Behind Description Text */}
      <div className="absolute top-[45%] left-0 w-[60%] md:w-[55%] h-32 md:h-40 bg-secondary/2 blur-3xl rounded-r-full"></div>

      {/* Very Light Gold Glow - Behind Button Area */}
      <div className="absolute bottom-16 left-0 w-[50%] md:w-[45%] h-20 md:h-24 bg-secondary/2 blur-2xl rounded-r-full"></div>
    </div>
  );
}
