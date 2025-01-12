import clsx from "clsx";
import React from "react";

type Props = {
  buttonText: string;
  className: string;
  // buttonLink: string;
};

const Button = ({className, buttonText }: Props) => {
  return (
    <div
      className={clsx(
        "duration-150 rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors hover:bg-orange-700 md:text-2xl",
        className,
      )}
    >
      {buttonText}
    </div>
  );
};

export default Button;
