import type { ComponentProps } from "react";

/** Centred content column: 1280px max content width with responsive page padding. */
export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-[88rem] px-5 md:px-8 lg:px-16 ${className}`}
      {...props}
    />
  );
}
