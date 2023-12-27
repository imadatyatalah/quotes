"use client";

import { Toaster } from "@/ui/toaster";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      {children}

      <Toaster />
    </ThemeProvider>
  );
};

export default Providers;
