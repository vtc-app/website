export function TopRightDotsPattern() {
  return (
    <div className="absolute top-0 right-0 w-[35%] h-[35%] opacity-20 pointer-events-none">
      <div className="grid grid-cols-6 grid-rows-6 h-full w-full gap-2 p-3">
        {Array.from({ length: 36 }).map((_, i) => {
          const shouldShow = Math.random() > 0.3;
          return shouldShow ? (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gray-600"
              style={{
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}

export function BottomLeftDotsPattern() {
  return (
    <div className="absolute bottom-0 left-0 w-[30%] h-[30%] opacity-20 pointer-events-none">
      <div className="grid grid-cols-5 grid-rows-5 h-full w-full gap-2 p-3">
        {Array.from({ length: 25 }).map((_, i) => {
          const shouldShow = Math.random() > 0.3;
          return shouldShow ? (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gray-600"
              style={{
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}

export function ScatteredDotsPattern() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-3 p-4">
        {Array.from({ length: 144 }).map((_, i) => {
          const shouldShow = Math.random() > 0.7;
          return shouldShow ? (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-gray-500"
              style={{
                opacity: Math.random() * 0.4 + 0.2,
              }}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
