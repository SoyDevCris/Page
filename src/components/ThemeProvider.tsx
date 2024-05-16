'use client';

import { ThemeProvider as NexThemesProvider } from "next-themes";
import React, { ReactNode } from "react";

// Definir el componente sin tipos adicionales
export function ThemeProvider({ children, ...props }: { children: ReactNode; [key: string]: any }) {
  return <NexThemesProvider {...props}>{children}</NexThemesProvider>;
}
