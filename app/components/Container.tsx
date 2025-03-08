import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col min-h-screen pt-[72px]">
      <main className="flex-grow flex flex-col gap-8 items-center">
        {children}
      </main>
    </div>
  );
} 