'use client';

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

interface ThemeTogglerProps {
  attribute: string;
  defaultTheme: string;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ attribute, defaultTheme }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Este efecto asegura que el componente solo se renderiza en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Button
        variant='outline'
        size='icon'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
        <MoonIcon className='absolute h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      </Button>
    </div>
  );
}

export default ThemeToggler;
