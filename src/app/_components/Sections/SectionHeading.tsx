import React, { ReactNode } from "react";
import Heading from "../Typography/Heading";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <Heading
      variant="h2"
      className="text-center font-black tracking-wider uppercase select-none"
    >
      {children}
    </Heading>
  );
}
