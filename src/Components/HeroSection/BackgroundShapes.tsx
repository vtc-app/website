export function MainPrimaryShape() {
  return (
    <svg
      className="absolute top-0 right-0 w-[75%] h-[70%]"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M400 0C480 40 550 100 600 180C650 260 680 350 690 440C700 530 680 620 630 700C580 780 520 800 460 760C400 720 340 650 290 570C240 490 200 400 170 300C140 200 120 100 120 0C120 -50 140 -80 180 -80C220 -80 260 -50 300 -20C320 -10 360 0 400 0Z"
        fill="url(#primaryGradient)"
        opacity="0.9"
      />
      <defs>
        <linearGradient
          id="primaryGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#000000" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#333333" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#666666" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#999999" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SecondaryBlackShape() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-[50%] h-[45%]"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 400C40 380 90 360 140 350C190 340 240 350 290 380C340 410 380 450 400 500C420 500 450 480 480 450C500 420 500 380 480 340C460 300 420 260 370 230C320 200 260 180 200 170C140 160 80 160 40 180C0 200 -20 240 0 280C20 320 0 360 0 400Z"
        fill="#1a1a1a"
        opacity="0.5"
      />
    </svg>
  );
}

export function TopRightAccentShape() {
  return (
    <svg
      className="absolute top-6 right-6 w-[28%] h-[24%]"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M150 0C180 20 210 50 230 90C250 130 260 180 250 230C240 280 210 300 170 300C130 300 100 270 80 230C60 190 50 140 60 90C70 40 100 0 150 0Z"
        fill="#333333"
        opacity="0.4"
      />
    </svg>
  );
}

export function MiddleRightAccentShape() {
  return (
    <svg
      className="absolute top-1/2 right-8 w-[20%] h-[16%] transform -translate-y-1/2"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 0C120 15 135 40 140 70C145 100 140 130 120 150C100 170 70 175 50 160C30 145 20 120 25 90C30 60 50 30 80 15C90 10 95 0 100 0Z"
        fill="#666666"
        opacity="0.35"
      />
    </svg>
  );
}
