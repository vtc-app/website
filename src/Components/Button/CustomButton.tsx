import { type ReactNode } from "react";
import Link from "next/link";

interface CustomButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isWhite?: boolean;
  href?: string;
}

export function CustomButton({
  children,
  isWhite,
  onClick,
  href,
}: CustomButtonProps) {
  const buttonClassName = isWhite
    ? "md:px-5 px-3 py-2 md:text-md rounded-md shadow-md font-semibold hover:cursor-pointer transition duration-300 w-fit border-2 bg-white hover:bg-faint border-secondary text-secondary"
    : "md:px-5 px-3 py-2 md:text-md rounded-md shadow-md font-semibold hover:cursor-pointer transition duration-300 w-fit bg-primary text-white";

  return (
    <div className="pt-2">
      {href ? (
        <Link href={href} className={buttonClassName} onClick={onClick}>
          {children}
        </Link>
      ) : (
        <button type="button" className={buttonClassName} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
}
