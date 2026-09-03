import React from "react";

export type TextElementVariant =
  | "heading-xxl"
  | "heading-xl"
  | "heading-lg"
  | "heading-md"
  | "text";

const VariantTextElement: Record<TextElementVariant, string> = {
  "heading-xxl":
    "text-5xl lg:text-8xl font-crimsonText font-semibold leading-[0.98]",
  "heading-xl":
    "text-5xl  lg:text-7xl font-crimsonText font-semibold leading-[0.98]",
  "heading-lg":
    "font-semibold font-crimsonText text-[34px] md:text-4xl lg:text-[52px] leading-[1.03]",
  "heading-md":
    "font-crimsonText text-2xl lg:text-3xl font-semibold leading-[1.1]",
  text: "font-catamaran  text-[16px] leading-[1.75] ",
};

export type TextElementProps = {
  children?: React.ReactNode;
  variant: TextElementVariant;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  center?: boolean;
  dark?: boolean;
  className?: string;
};

const TextElement = ({
  children,
  variant,
  as: Component = "p",
  center,
  dark,
  className
}: TextElementProps) => {
  return (
    <Component
      className={` ${VariantTextElement[variant]}  ${center ? "text-center" : ""} ${dark ? "text-text-secondary" : " text-text "} ${className} `}
    >
      {children}
    </Component>
  );
};

export default TextElement;
